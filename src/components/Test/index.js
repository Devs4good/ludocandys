import React, { Component } from 'react';
import Ejercicio from "./Ejercicio";
import Speak from "../SpeakComponent/Speak";

class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      examen: 1,
      size: 3,
      respuestaBien: 0,
      respuestaMal: 0,
      timer: 0,
    };
  }

  handleClick() {
    setTimeout(() => {
      this.setState({ examen: this.state.examen + 1 });
      this.setterTamanio();

      if (this.state.examen > 10) {
        this.irAResultados();
      }
    }, 1000);
  }

  setterTamanio() {
    if (this.state.examen > 5) {
      this.setState({ size: 4 });
    }
  }

  render() {
    return (
      <div style={{ backgroundColor: "#FFCA01" }}>
        <Ejercicio key={`ejercicio-${this.state.examen}`} tamanio={this.state.size} alTerminar={(acierto) => {
          this.handleClick();
          if (acierto) {
            Speak('Acertaste');
            this.setState({ respuestaBien: this.state.respuestaBien + 1 })
          } else {
            Speak('Pifiaste');
            this.setState({ respuestaMal: this.state.respuestaMal + 1 })
          }
        }} />
      </div>
    );
  }

  irAResultados() {
    let rutaResultados = {
      pathname: '/juegos',
      state: {
        respuestasCorrectas: this.state.respuestaBien,
        tiempoRecord: '10:00'
      }
    };
    this.props.history.push(rutaResultados);
  }
}

export default Test;