import React from 'react';
import Ejercicio from "./Ejercicio";
import Test from "./Test";

export default class Ejercicios {
    constructor(history) {
        this.history = history;
        this.ejercicios = this.crearEjercicios();
    }

    conId(id) {
        let ejercicio = this.buscarEjercicio(id);

        if (ejercicio === undefined) {
            const ejercicioDefault = this.buscarEjercicio(1);
            return <ejercicioDefault.component {...ejercicioDefault.props} />
        } else
            return <ejercicio.component {...ejercicio.props} />;
    }

    buscarEjercicio(id) {
      return this.ejercicios.find((unEjercicio) => unEjercicio.props.id === id)
    }

    todos() {
        return this.ejercicios;
    }

    crearEjercicios() {
        return [
            {
                component: Ejercicio,
                props: {
                    tamanio: 3,
                    id: 1,
                    test: new Test(this.history, 5),
                },
                titulo: 'Letra escondida',
                descripcion: 'Encontra la letra correcta entre un conjunto de letras similares',
            },
            {
                component: Ejercicio,
                props: {
                    tamanio: 4,
                    id: 2,
                    test: new Test(this.history, 5),
                },
                titulo: 'Letra super escondida',
                descripcion: 'Encontra la letra correcta entre un conjunto muy grande de letras similares',
            },
        ]
    }
}