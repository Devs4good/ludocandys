import React, { Component } from 'react';
import shuffle from "./arrayUtils";
import "./Ejercicio.css";
import Letra from "./Letra.js";

class Ejercicio extends Component {
    constructor(props){
        super(props);
        let {letras, ganadora} = this.recalcularLetrasYLetraGanadora();

        this.state = {
            letras: shuffle(letras),
            ganadora: ganadora,
            tamanio: props.tamanio,
            resultado: '',
            id: props.id,
            test: props.test
        };
    }

    render() {
        return (
            <div className="container">
                <p>Seleccioná la letra {this.state.ganadora}:</p>
                <div className="matriz">
                    <div className="resultado-ejercicio">{ this.state.resultado }</div>
                    { [...Array(this.state.tamanio).keys()].map((i) => this.dibujarFila(this.state.tamanio, i)) }
                </div>
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
        return (
            <Letra key={`letra-${i}-${this.state.letras[i]}`} letra={this.state.letras[i]} ganadora={this.state.ganadora} funcion={() => this.seleccionarLetra(this.state.letras[i]) }/>
        );
    }

    seleccionarLetra(letra) {
        let esAcierto = letra === this.state.ganadora;

        if (esAcierto) {
            this.setState({resultado: 'Acertaste!'})
        } else {
            this.setState({resultado: 'Pifiaste!'})
        }

        this.state.test.registrarRespuesta(esAcierto);

        setTimeout(() => {
            if (!this.state.test.haFinalizado()) {
                let {letras, ganadora} = this.recalcularLetrasYLetraGanadora();
                this.setState({resultado: '', letras: shuffle(letras), ganadora: ganadora})
            }
        }, 1000);
    }

    recalcularLetrasYLetraGanadora() {
        let diccionario = 'abcdefghijklmnñopqrstuvwxyz'.split('');
        let universo = shuffle(diccionario);
        let letras = universo.slice(0, this.props.tamanio * this.props.tamanio);
        let ganadora = letras[0];
        return {letras, ganadora};
    }
}

export default Ejercicio;