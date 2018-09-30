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
      };
    }
      handleClick(){
        this.setState({examen: ++this.state.examen});
        this.setterTamanio();
        if (this.state.examen>10) {
          this.resultado();
        }
      }
      setterTamanio(){
        if (this.state.examen>5) {
          this.setState({size: 4});
        }

      }
    }=
    render() {
      //TODO: ejecutar 5 ejercicios consecutivamente. Guardar el estado de cada ejercicio
      return (
          <Ejercicio tamanio={3} alTerminar={(acierto) => if(acierto){this.setState({respuestaBien:++this.state.respuestaBien})}else {
            this.setState({respuestaMal:++this.state.respuestaMal})
          }}/>
      );
    }
}

export default Test;
