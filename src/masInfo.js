import React, { Component } from 'react';
import './masInfo.css';
import { Link } from 'react-router-dom';


class MasInfo extends Component {
  constructor(props){
    super(props);
    this.state = {
      titulo: undefined,
      texto: undefined,
      url_video: "https://www.youtube.com/embed?v=qLNY5hl0w8I",
    }
  }

  componentWillMount() {
    const readmePath = require("./MasInfo.md");
  
    fetch(readmePath)
      .then(response => {
        return response.text()
      })
      .then(text => {
        let json = JSON.parse(text);
        this.setState({
          titulo: json.titulo,
          texto: json.texto
        })
      })
  }

  render() {
    return (
      <div className="pagina">
        <div className="titulo">
        { this.state.titulo }
        </div>
        <div className="descripcion">
        { this.state.texto }
        </div>
        <div className="video">
          <iframe width="300" height="200" src={this.state.urlVideo} frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen />
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