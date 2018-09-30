import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Resultado.css';

class Resultado extends Component {
    render() {
        return (
            <div className='resultado'>
                <h2>Resultados</h2>
                <h4>Ejercicios correctos</h4>
                {this.props.respuestasCorrectas}

                <h4>Tiempo Record</h4>
                {this.props.tiempoRecord}

                <Link to='/test'> Jugar </Link>
                <Link to="/masInfo">Más Info</Link>
            </div>
        );
    }
}

export default Resultado;