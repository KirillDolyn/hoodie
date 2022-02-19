import { useEffect, useState } from "react";

import BarBottom from "./components/BarBottom/BarBottom";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import Header from "./components/header/Header";

import "./style/Index.scss";

function App() {
  const [collections, setCollections] = useState([]);

  const [collectionSelectedId, setCollectionSelectedId] = useState();
  const [optionsSelected, setOptionsSelected] = useState(undefined);

  const [isLoading, setIsLoading] = useState(true);

  const collectionSelected = collections.find(
    (collection) => collection.id === collectionSelectedId
  );

  const hoodVariantsCompatible =
    collectionSelected && optionsSelected
      ? collectionSelected.hoodVariants.filter((hoodVariant) => {
          if (optionsSelected.elementVariant === "hood-only") {
            return hoodVariant !== "none";
          } else {
            return true;
          }
        })
      : [];

  const elementVariantCompatible =
    collectionSelected && optionsSelected
      ? collectionSelected.elementVariants.filter((elementVariant) => {
          if (optionsSelected.elementVariant === "all") {
            return elementVariant !== "pocket-only";
          } else {
            return true;
          }
        })
      : [];

  const bodyColorsCompatible =
    collectionSelected && optionsSelected
      ? collectionSelected.bodyColors.filter((bodyColor) => {
          if (optionsSelected.elementVariant === "hood-only") {
            return bodyColor !== "none";
          } else {
            return true;
          }
        })
      : [];

  useEffect(() => {
    (async () => {
      const response = await fetch(`./db/db.json`);
      const collections = await response.json();
      setCollections(collections);

      const collectionSelected = collections[0];

      setCollectionSelectedId(collectionSelected.id);

      setOptionsSelected({
        bodyColor: collectionSelected.bodyColors[0],
        elementVariant: collectionSelected.elementVariants[0],
        hoodVariant: collectionSelected.hoodVariants[0],
      });

      setIsLoading(false);
    })();
  }, []);

  useEffect(() => {
    if (!collectionSelectedId) return;

    const collectionSelected = collections.find(
      (collection) => collection.id === collectionSelectedId
    );

    setOptionsSelected({
      bodyColor: collectionSelected.bodyColors[0],
      elementVariant: collectionSelected.elementVariants[0],
      hoodVariant: collectionSelected.hoodVariants[0],
    });
  }, [collections, collectionSelectedId]);

  const handleCollectionSelect = (id) => {
    setCollectionSelectedId(id);
  };

  const handleHoodVariantPreviousSelect = () => {
    if (!collectionSelected || !optionsSelected) {
      return;
    }

    setOptionsSelected((options) => {
      const idxCurrent = hoodVariantsCompatible.findIndex(
        (hoodVariant) => hoodVariant === options.hoodVariant
      );

      const hoodVariantPrevious =
        hoodVariantsCompatible[idxCurrent - 1] || hoodVariantsCompatible[1];

      return {
        ...options,
        hoodVariant: hoodVariantPrevious,
      };
    });
  };

  const handleHoodVariantNextSelect = () => {
    if (!collectionSelected || !optionsSelected) {
      return;
    }

    setOptionsSelected((options) => {
      const idxCurrent = hoodVariantsCompatible.findIndex(
        (hoodVariant) => hoodVariant === options.hoodVariant
      );

      const hoodVariantNext =
        hoodVariantsCompatible[idxCurrent + 1] || hoodVariantsCompatible[0];

      return {
        ...options,
        hoodVariant: hoodVariantNext,
      };
    });
  };

  const handleBodyColorsPreviousSelect = () => {
    if (!collectionSelected || !optionsSelected) {
      return;
    }
    setOptionsSelected((options) => {
      const idxCurrent = bodyColorsCompatible.findIndex(
        (bodyColor) => bodyColor === options.bodyColor
      );

      const colorsPrevious =
        bodyColorsCompatible[idxCurrent - 1] || bodyColorsCompatible[1];

      return {
        ...options,
        bodyColor: colorsPrevious,
      };
    });
  };

  const handleBodyColorsNextSelect = () => {
    if (!collectionSelected || !optionsSelected) {
      return;
    }
    setOptionsSelected((options) => {
      const idxCurrent = bodyColorsCompatible.findIndex(
        (bodyColor) => bodyColor === options.bodyColor
      );

      const colorsNext =
        bodyColorsCompatible[idxCurrent + 1] || bodyColorsCompatible[0];

      return {
        ...options,
        bodyColor: colorsNext,
      };
    });
  };

  const handleelementVariantNextSelec = () => {
    if (!collectionSelected || !optionsSelected) {
      return;
    }

    setOptionsSelected((options) => {
      const idxCurrent = elementVariantCompatible.findIndex(
        (elementVariant) => elementVariant === options.elementVariant
      );

      const elementVariantNext =
        elementVariantCompatible[idxCurrent + 1] || elementVariantCompatible[0];

      return {
        ...options,
        elementVariant: elementVariantNext,
      };
    });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="wrapper">
      <Header />
      <ImageSlider
        collectionSelected={collectionSelected}
        onHoodNextSelect={handleHoodVariantNextSelect}
        onHoodPreviousSelect={handleHoodVariantPreviousSelect}
        onHoodCarman={handleelementVariantNextSelec}
        optionsSelected={optionsSelected}
      />
      <BarBottom
        collections={collections}
        collectionSelectedId={collectionSelectedId}
        onCollectionSelect={handleCollectionSelect}
        onHoodColorNext={handleBodyColorsNextSelect}
        onBodyColorPrevios={handleBodyColorsPreviousSelect}
      />
    </div>
  );
}

export default App;
