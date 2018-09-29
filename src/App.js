import React, { Component } from 'react';
import './App.css';
import Ejercicio from "./Ejercicio";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Ejercicio tamanio={4}/>
      </div>
    );
  }
}

export default App;
