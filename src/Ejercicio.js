import React, { Component } from 'react';
import shuffle from "./arrayUtils";
import "./Ejercicio.css";

class Ejercicio extends Component {
    constructor(props){
        super(props);
        //TODO: reemplazar por diccionario de letras
        let universo = shuffle(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'u', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r']);
        let letras = universo.slice(0, props.tamanio * props.tamanio);
        let ganadora = letras[0];
        console.log(ganadora);

        this.state = {
            letras: shuffle(letras),
            ganadora: ganadora,
            tamanio: props.tamanio,
            resultado: ''
        };
    }

    render() {
        return (
            <div className="matriz">
                <div>{ this.state.resultado }</div>
                { [...Array(this.state.tamanio).keys()].map((i) => this.dibujarFila(this.state.tamanio, i)) }
            </div>
        );
    }

    dibujarFila(tamanio, i) {
        return (
            <div className="fila" key={'fila-' + i}>
                { [...Array(tamanio).keys()].map((x) => this.dibujarLetra(i * tamanio + x)) }
            </div>
        );
    }

    dibujarLetra(i) {
        let letra = this.state.letras[i];
        //TODO: colorear las letras con rojo o verde si son correctas o incorrectas.
        return (
            <div className="letra" key={letra} onClick={() => this.seleccionarLetra(letra)}>
                {letra}
            </div>
        );
    }

    seleccionarLetra(letra) {
        let esAcierto = letra === this.state.ganadora;

        if (esAcierto) {
            this.setState({resultado: 'Acertaste!'})
        } else {
            this.setState({resultado: `Pifiaste! La letra era: ${this.state.ganadora}`})
        }
        this.props.alTerminar(esAcierto)
    }
}

export default Ejercicio;