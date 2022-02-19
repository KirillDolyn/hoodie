import React from "react";
import "./ImageSlider.scss";
import {
  QuestionCircleOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";

function ImageSlider({
  collectionSelected,
  onHoodNextSelect,
  onHoodPreviousSelect,
  optionsSelected,
  onHoodCarman,
}) {
  const textCapitalize = (text) => `${text[0].toUpperCase()}${text.slice(1)}`;

  const collectionName = collectionSelected.id
    .split("-")
    .map((word) => textCapitalize(word))
    .join("-");

  const collectionColor = collectionSelected.color;

  const imageSrc = (() => {
    const { color, id } = collectionSelected;
    const { bodyColor, hoodVariant, elementVariant } = optionsSelected;

    const fileName = `${
      color ? color + "__" : ""
    }${id}/b__${bodyColor}_${hoodVariant}_${id}_${elementVariant}.png`;

    const src = `./images/${fileName}`;

    return src;
  })();

  return (
    <div className="content">
      <div className="info">
        <QuestionCircleOutlined style={{ fontSize: "20px", color: "#fff" }} />
      </div>
      <div className="slider">
        <div className="slider-left">
          <CaretLeftOutlined
            onClick={onHoodPreviousSelect}
            style={{ fontSize: "20px", color: "#fff" }}
          />
        </div>

        <div className="product">
          {imageSrc && <img src={imageSrc} alt="none" />}
        </div>

        <div className="slider-right">
          <CaretRightOutlined
            onClick={onHoodNextSelect}
            style={{ fontSize: "20px", color: "#fff" }}
          />
          <div className="slider-right_pocket">
            <CaretRightOutlined
              onClick={onHoodCarman}
              style={{ fontSize: "20px", color: "#fff" }}
            />
          </div>
        </div>
      </div>

      <div className="title">
        <span>{collectionName}</span>
        <p>soulmate</p>
      </div>

      <div className="bar-border"></div>
    </div>
  );
}

export default ImageSlider;
