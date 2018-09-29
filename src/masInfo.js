import React, { Component } from 'react';
import './masInfo.css';


class MasInfo extends Component {
  constructor(props){
    super(props);
    this.state = {
      titulo: undefined,
      texto: undefined
    }
  }

  componentWillMount() {
    const readmePath = require("./Menu.md");
  
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
          <button onClick={() => null}>Test</button>
          <br/>
          <button onClick={() => null}>Conocenos</button>
        </div>
      </div>  
    );
  }
}

export default MasInfo;