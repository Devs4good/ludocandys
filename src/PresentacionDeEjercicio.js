import React, { Component } from 'react';

class PresentacionDeEjercicio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            component: props.ejercicio.component,
            props: props.ejercicio.props,
            descripcion: props.ejercicio.descripcion,
            titulo: props.ejercicio.titulo,
            history: props.history
        };
    }

    render() {
        return (
            <div className="presentacion-ejercicio" onClick={() => this.irAlEjercicio() }>
                <strong className="titulo-ejercicio h1">{this.state.titulo}</strong>

                <strong className="descripcion-de-ejercicio">
                    {this.state.descripcion}
                </strong>
            </div>
        );
    }

    irAlEjercicio() {
        let rutaEjercicio = `/ejercicio/${this.state.props.id}`;
        this.state.history.push(rutaEjercicio);
    }
}

export default PresentacionDeEjercicio;