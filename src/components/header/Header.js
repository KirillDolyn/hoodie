import React from "react";
import "./Header.scss";
import { MenuOutlined } from "@ant-design/icons";
import basketSvg from "../../assets/img/basket.svg";
import Content from "../content/Content";

function Header() {
  return (
    <>
      <div className="header">
        <div className="accordion">
          <MenuOutlined />
        </div>
        <div className="logo">KOOZIN</div>
        <div className="basket">
          <img src={basketSvg} alt="basket"></img>
        </div>
      </div>
    </>
  );
}

export default Header;
