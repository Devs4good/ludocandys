import React from "react";
import "./styles.css";

import ImagenFondo from "./fondo.png";

function Menu() {
  return (
    <div className="body-container">
      <div className="image-container">
        <img src={ImagenFondo} alt="" />
      </div>
      <div className="link">
        <a href="https://www.freepik.es/fotos-vectores-gratis/fondo">
          Vector de Fondo creado por freepik - www.freepik.es
        </a>
      </div>
      <div className="banner-container">
        <div className="banner-text1">
          <p>
            A menudo la dislexia se confunde con otras dificultades de
            aprendizajes y de atención que causan problemas similares.
          </p>
          <p>
            La dislexia causa dificultad con la lectura. También puede afectar
            la comprensión lectora, las matemáticas y la escritura.
          </p>
          <p>
            La dislexia no es un problema de la visión, en realidad es un
            problema con el lenguaje.
          </p>
          <p>
            Nodix fue creado para poder ayudar a los niños con dislexia a
            estudiar e informarse sobre esta dificultad.
          </p>
        </div>
      </div>
      <div className="footer-container">
        Proyecto creado por chicos del Colegio Mano Amiga | Pilar 2019
      </div>
    </div>
  );
}

export default Menu;
