import React, { Component } from 'react';
import shuffle from "../../../utils/ArrayUtils";
import "./Ejercicio.css";
import Letra from "../Letra";

class Ejercicio extends Component {
  constructor(props) {
    super(props);
    let diccionario = 'abcdefghijklmnñopqrstuvwxyz'.split('');
    let universo = shuffle(diccionario);
    let letras = universo.slice(0, props.tamanio * props.tamanio);
    let ganadora = letras[0];
    console.log(ganadora);

    this.state = {
      letras: shuffle(letras),
      ganadora: ganadora,
      tamanio: props.tamanio,
      resultado: '',
      yaJugo: false
    };
  }

  render() {
    return (
      <div className="container">
        <p>Seleccioná la letra {this.state.ganadora}:</p>
        <div className="matriz">
          <div className="resultado-ejercicio">{this.state.resultado}</div>
          {[...Array(this.state.tamanio).keys()].map((i) => this.dibujarFila(this.state.tamanio, i))}
        </div>
      </div>
    );
  }

  dibujarFila(tamanio, i) {
    return (
      <div className="fila" key={'fila-' + i}>
        {[...Array(tamanio).keys()].map((x) => this.dibujarLetra(i * tamanio + x))}
      </div>
    );
  }

  dibujarLetra(i) {
    return (
      <Letra letra={this.state.letras[i]} ganadora={this.state.ganadora} funcion={() => this.seleccionarLetra(this.state.letras[i])} />
    );
  }

  seleccionarLetra(letra) {
    let esAcierto = letra === this.state.ganadora;

    if (esAcierto) {
      this.setState({ resultado: 'Acertaste!' })
    } else {
      this.setState({ resultado: 'Pifiaste!' })
    }
    this.props.alTerminar(esAcierto)
  }
}

export default Ejercicio;
