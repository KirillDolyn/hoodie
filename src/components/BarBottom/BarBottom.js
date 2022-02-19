import React from "react";
import CollectionSelector from "./CollectionSelector/CollectionSelector.js";
import Navigation from "./Navigation/Navigation";

import "./BarBottom.scss";

function BarBottom({
  collections,
  collectionSelectedId,
  onCollectionSelect,
  onBodyColorPrevios,
  onHoodColorNext,
}) {
  return (
    <div className="bar-bottom">
      <Navigation
        onHoodColorNext={onHoodColorNext}
        onBodyColorPrevios={onBodyColorPrevios}
      />
      <CollectionSelector
        collectionSelectedId={collectionSelectedId}
        collections={collections}
        onCollectionSelect={onCollectionSelect}
      />
    </div>
  );
}

export default BarBottom;
