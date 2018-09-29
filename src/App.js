import React, { Component } from 'react';
import Fila from "./fila";
import './App.css';
import shuffle from './arrayUtils';

class App extends Component {
  render() {
    let universo = shuffle(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'u', 'j', 'k']);
    let letras = universo.slice(0, 9);
    let ganadora = letras[0];

    return (
      <div className="App">
        <div> 10:00 </div>
        <div className="matriz">
            <Fila letra1={letras.pop()} letra2={letras.pop()} letra3={letras.pop()} ganadora={ganadora}/>
            <Fila letra1={letras.pop()} letra2={letras.pop()} letra3={letras.pop()} ganadora={ganadora}/>
            <Fila letra1={letras.pop()} letra2={letras.pop()} letra3={letras.pop()} ganadora={ganadora}/>
        </div>
      </div>
    );
  }
}

export default App;
