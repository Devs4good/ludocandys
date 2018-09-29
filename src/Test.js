import React, { Component } from 'react';
import Ejercicio from "./Ejercicio";

class Test extends Component {
    render() {
      //TODO: ejecutar 5 ejercicios consecutivamente. Guardar el estado de cada ejercicio
      return (
          <Ejercicio tamanio={3} alTerminar={(acierto) => console.log(acierto)}/>
      );
    }
}

export default Test;