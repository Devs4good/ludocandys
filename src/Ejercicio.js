import React, { Component } from 'react';
import shuffle from "./arrayUtils";

class Ejercicio extends Component {
    constructor(props){
        super(props);
        let universo = shuffle(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'u', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r']);
        let letras = universo.slice(0, props.tamanio * props.tamanio);
        let ganadora = letras[0];
        console.log(ganadora);

        this.state = {
            letras: shuffle(letras),
            ganadora: ganadora,
            tamanio: props.tamanio
        };
    }

    render() {
        return (
            <div className="matriz">
                { [...Array(this.state.tamanio)].map(() => this.dibujarFila(this.state.tamanio)) }
            </div>
        );
    }

    dibujarFila(tamanio) {
        return (
            <div className="fila">
                { [...Array(tamanio)].map(() => this.dibujarLetra()) }
            </div>
        );
    }

    dibujarLetra() {
        let letra = this.state.letras.pop();
        return (
            <div className="letra">
                <button onClick={() => this.seleccionarLetra(letra)}>{letra}</button>
            </div>
        );
    }

    seleccionarLetra(letra) {
        if (letra === this.state.ganadora) {
            console.log("OK")
        } else {
            console.log("Pifiaste");
        }
    }
}

export default Ejercicio;