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
          <CaretLeftOutlined style={{ fontSize: "20px", color: "#fff" }} />
        </div>
        <div className="product">
          <img src={svg} alt="svg"></img>
        </div>
        <div className="slider-right">
          <CaretRightOutlined style={{ fontSize: "20px", color: "#fff" }} />
          <div className="slider-right2">
            <CaretRightOutlined style={{ fontSize: "20px", color: "#fff" }} />
          </div>
        </div>
      </div>
      <div className="title">
        <span>Terragone-Popoy</span>
        <p>soulmate</p>
      </div>
      <div className="bar-border"></div>
    </div>
  );
}

export default Content;
