import React, { Component } from 'react';
import PresentacionDeEjercicio from "./PresentacionDeEjercicio";

class ListadoDeEjercicios extends Component {

    constructor(props) {
       super(props);
       this.state = {
           ejercicios: this.props.ejercicios.todos()
       }
    }

    render() {
        return (
            <div className="listado-de-ejercicios">
                {
                    this.state.ejercicios.map((ejercicio) => {
                        return (
                            <PresentacionDeEjercicio
                                key={`presentacion-de-ejercicio-${ejercicio.props.id}`}
                                ejercicio={ ejercicio }
                                history={this.props.history}
                            />
                        );
                    })
                }
            </div>
        );
    }
}

export default ListadoDeEjercicios;