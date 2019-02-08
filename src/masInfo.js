import React, { Component } from 'react';
import './masInfo.css';
import { Link } from 'react-router-dom';


class MasInfo extends Component {
  constructor(props){
    super(props);
    this.state = {
      primerTitulo: undefined,
      segundoTitulo: undefined,
      primerTexto: undefined,
      segundoTexto: undefined,
      urlVideo: 'https://www.youtube-nocookie.com/embed/sys8XcTbnw8',
    }
  }

  componentWillMount() {
    const readmePath = require("./MasInfo.md");

    fetch(readmePath)
      .then(response => response.text())
      .then(text => {
        const json = JSON.parse(text);
        this.setState({
          primerTitulo: json.primerTitulo,
          segundoTitulo: json.segundoTitulo,
          primerTexto: json.primerTexto,
          segundoTexto: json.segundoTexto
        })
      })
  }

  render() {
    return (
      <div className="pagina">
        <div className="titulo">
        { this.state.primerTitulo }
        </div>
        <div className="descripcion">
        { this.state.primerTexto }
        </div>
        <div className="video">
          <iframe width="300" height="200" src={this.state.urlVideo} frameBorder="0" title="videoDislexia"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen />
        </div>
        <div className="titulo">
          { this.state.segundoTitulo }
        </div>
        <div className="descripcion">
          { this.state.segundoTexto }
        </div>
        <div className="botones">
          <Link to="/test">Test</Link>
          <br/>
          <Link to="">Conocenos</Link>
        </div>
      </div>
    );
  }
}

export default MasInfo;