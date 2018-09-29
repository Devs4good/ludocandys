import React, { Component } from 'react';

class Fila extends Component {
    render() {
        return (
            <div className="fila">
                <div className="letra">
                    <button onClick={() => this.seleccionarLetra(this.props.letra1)}>{this.props.letra1}</button>
                </div>
                <div className="letra">
                    <button onClick={() => this.seleccionarLetra(this.props.letra2)}>{this.props.letra2}</button>
                </div>
                <div className="letra">
                    <button onClick={() => this.seleccionarLetra(this.props.letra3)}>{this.props.letra3}</button>
                </div>
            </div>
        )
    }

    seleccionarLetra(letra) {
        if (letra=== this.props.ganadora) {
            console.log("OK")
        } else {
            console.log("Pifiaste");
        }
    }
}

export default Fila;