import React from "react";
import "./Content.scss";
import {
  QuestionCircleOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";
import svg from "../../assets/img/b__black_i-o_banana-apricot_all.png";
function Content() {
  return (
    <div className="content">
      <div className="info">
        <QuestionCircleOutlined style={{ fontSize: "20px", color: "#fff" }} />
      </div>
      <div className="slider">
        <div className="slider-left">
          <CaretLeftOutlined />
        </div>
        <div className="product">
          <img src={svg} alt="svg"></img>
        </div>
        <div className="slider-right">
          <CaretRightOutlined />
        </div>
      </div>
    </div>
  );
}

export default Content;
