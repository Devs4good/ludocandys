import React, { Component } from 'react';
import './menu.css';
import { Link } from 'react-router-dom'

class Menu extends Component {
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
          <Link to="/ejercicio3">Test 3x3</Link>
          <Link to="/ejercicio4">Test 4x4</Link>
          <button onClick={() => null}>Más Info</button>
        </div>
        
      </div>  
    );
  }
}

export default Menu;