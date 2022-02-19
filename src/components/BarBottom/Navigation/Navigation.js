import React from "react";
import "./Navigation.scss";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

function Navigation({ onBodyColorPrevios, onHoodColorNext }) {
  return (
    <div className="navigation">
      <div className="navigation-left">
        <ArrowLeftOutlined
          onClick={onBodyColorPrevios}
          style={{ fontSize: "20px", color: "rgb(243, 241, 237)" }}
        />
      </div>
      <div className="navigation-title">Цвет элементов</div>
      <div className="navigation-right">
        <ArrowRightOutlined
          onClick={onHoodColorNext}
          style={{ fontSize: "20px", color: "rgb(243, 241, 237)" }}
        />
      </div>
    </div>
  );
}

export default Navigation;
