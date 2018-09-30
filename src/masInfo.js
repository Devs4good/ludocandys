import React, { Component } from 'react';
import './masInfo.css';
import { Link } from 'react-router-dom'


class MasInfo extends Component {
  constructor(props){
    super(props);
    this.state = {
      titulo: undefined,
      texto: undefined
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