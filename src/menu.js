import React, { Component } from 'react';
import './menu.css';
import { Link } from 'react-router-dom'

class Menu extends Component {
  render() {

    return (
      <div className="pagina">   
        <div className="titulo">
          Dislexia
        </div>
        <div className="descripcion">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
        </div>
        <div className="botones">
          <Link to="/test">Test</Link>
          <button onClick={() => null}>Más Info</button>
        </div>
        
      </div>  
    );
  }
}

export default Menu;