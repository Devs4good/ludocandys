import React from "react";
import "./styles.css";

import ImagenFondo from "./fondo.png";

function Menu() {
  return (
    <div className="body-container">
      <div className="image-container">
        <img src={ImagenFondo} alt="" />
      </div>
      <div className="banner-container">
        <div className="banner-text1">Aprender superar barreras</div>
        <div className="banner-text2">Dislexia</div>
      </div>
      <div className="footer-container">footer</div>
    </div>
  );
}

export default Menu;
