import React, { Component } from 'react';
import './menu.css';


class MasInfo extends Component {
  render() {
    return (
      <div className="pagina">   
        <div className="titulo">
          Más Info
        </div>
        <div className="descripcion">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
        </div>
        <div className="botones">
          <button onClick={() => null}>Test</button>
          <br/>
          <button onClick={() => null}>Conocenos</button>
        </div>
      </div>  
    );
  }
}

export default MasInfo;