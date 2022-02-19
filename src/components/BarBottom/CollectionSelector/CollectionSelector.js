import React from "react";
import CollectionButton from "./CollectionButton/CollectionButton";
import "./CollectionSelector.scss";

function CollectionSelector({
  collections,
  collectionSelectedId,
  onCollectionSelect,
}) {
  const collectionSelected = collections.find(
    (collection) => collection.id === collectionSelectedId
  );

  const collectionSelectedIdx = collections.findIndex(
    (collection) => collection.id === collectionSelectedId
  );

  const collectionsPrevious = [...collections].slice(0, collectionSelectedIdx);

  const collectionsNext = [...collections].slice(collectionSelectedIdx + 1);

  return (
    <div className="collection-selector">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexGrow: 1,
          justifyContent: "flex-end",
          width: 0,
        }}
      >
        {collectionsPrevious.map((collection) => (
          <CollectionButton
            collection={collection}
            key={collection.id}
            onSelect={onCollectionSelect}
          />
        ))}
      </div>

      <div style={{ flexGrow: 0 }}>
        <CollectionButton
          collection={collectionSelected}
          onSelect={onCollectionSelect}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexGrow: 1,
          justifyContent: "flex-start",
          width: 0,
        }}
      >
        {collectionsNext.map((collection) => (
          <CollectionButton
            collection={collection}
            key={collection.id}
            onSelect={onCollectionSelect}
          />
        ))}
      </div>
    </div>
  );
}

export default CollectionSelector;
