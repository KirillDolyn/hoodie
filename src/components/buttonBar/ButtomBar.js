import React from "react";
import "./ButtomBar.scss";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

function ButtomBar() {
  return (
    <div className="bar">
      <div className="bar-bottom">
        <div className="bar-left">
          <ArrowLeftOutlined
            style={{ fontSize: "20px", color: "rgb(243, 241, 237)" }}
          />
        </div>
        <div className="bar-content">Цвет элементов</div>
        <div className="bar-right">
          <ArrowRightOutlined
            style={{ fontSize: "20px", color: "rgb(243, 241, 237)" }}
          />
        </div>
      </div>
      <div className="circle">
        <div className="bar-slider1"></div>
        <div className="bar-slider2"></div>
      </div>
    </div>
  );
}

export default ButtomBar;
