import React, { Component } from 'react';
import './masInfo.css'

class TituloYDescripcion extends Component {
  render() {
      return (
        <React.Fragment>
          <div className="titulo">
            { this.props.titulo }
          </div>
          <div className="descripcion">
            { this.props.descripcion }
          </div>
        </React.Fragment>
      );
  }
}

export default TituloYDescripcion;