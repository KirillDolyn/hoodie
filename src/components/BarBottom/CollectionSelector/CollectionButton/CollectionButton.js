import React from "react";
import "./CollectionButton.scss";

function CollectionButton({ collection, onSelect }) {
  const colors = collection.iconColors;

  const circleOptions = colors
    .map((color, idx) => ({
      color,
      dasharray: `${31.4 * (1 / colors.length) * (idx + 1)}, 31.4`,
    }))
    .reverse();

  const handleClick = () => {
    onSelect(collection.id);
  };

  return (
    <svg
      className="collection_button"
      height={40}
      onClick={handleClick}
      width={40}
      viewBox="0 0 20 20"
    >
      {circleOptions.map((circleOption) => (
        <circle
          key={circleOption.color}
          r="5"
          cx="10"
          cy="10"
          fill="transparent"
          stroke={circleOption.color}
          strokeWidth="10"
          strokeDasharray={circleOption.dasharray}
        />
      ))}
    </svg>
  );
}

export default CollectionButton;
