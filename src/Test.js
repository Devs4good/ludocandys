import React, { Component } from 'react';
import Ejercicio from "./Ejercicio";

class Test extends Component {
    constructor(props){
      super(props);
      this.state={
        examen:1,
        size:3,
        respuestaBien: 0,
        respuestaMal:0,
        timer: 0,
      };
    }
      handleClick(ver){
        console.log("ping");
        this.forceUpdate();
        this.setState({examen: ++this.state.examen});
        this.setterTamanio();
        if (this.state.examen>10) {
          this.resultado();
        }
        if (ver) {
          this.setState({respuestaBien:++this.state.respuestaBien})
        }else {
          this.setState({respuestaMal:++this.state.respuestaMal})
        }

      }
      setterTamanio(){
        if (this.state.examen>5) {
          this.setState({size: 4});
        }
      }
    render() {
      //TODO: ejecutar 5 ejercicios consecutivamente. Guardar el estado de cada ejercicio
      return (
          <Ejercicio tamanio={this.state.size} alTerminar={(acierto) => this.handleClick(acierto)}/>
      );
    }
}

export default Test;
