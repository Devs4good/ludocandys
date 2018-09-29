import React, { Component } from 'react';
import './menu.css';
import { Link } from 'react-router-dom'

class Menu extends Component {
  constructor(props){
    super(props);
    this.state = {
      markdown: undefined
    }
  }

  componentWillMount() {
    const readmePath = require("./Menu.md");
  
    fetch(readmePath)
      .then(response => {
        return response.text()
      })
      .then(text => {
        this.setState({
          markdown: text
        })
      })
  }

  render() {

    return (
      <div className="pagina">   
        <div className="titulo">
          Dislexia
        </div>
        <div className="descripcion">
          { this.state.markdown }
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