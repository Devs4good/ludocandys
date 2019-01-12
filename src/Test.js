class Test {
    constructor(history, limiteDeRespuestas) {
      this.estado = {
        limiteDeRespuestas: limiteDeRespuestas,
        respuestas: 0,
        resultadoDelTest: {
            respuestasCorrectas: 0,
            respuestasIncorrectas: 0,
        },
        timer: '10:00',
      };
      this.history = history;
    }

    haFinalizado() {
        return this.estado.respuestas === this.estado.limiteDeRespuestas
    }

    registrarRespuesta(esAcierto) {
        this.estado.respuestas++;

        if(esAcierto){
            this.estado.resultadoDelTest.respuestasCorrectas++;
        } else {
            this.estado.resultadoDelTest.respuestasIncorrectas++;
        }

        if (this.haFinalizado()) {
            this.irAResultados()
        }
    }

    irAResultados(){
        let rutaResultados = {
            pathname: '/resultado',
            state: {
                respuestasCorrectas: this.estado.resultadoDelTest.respuestasCorrectas,
                tiempoRecord: this.estado.timer
            }
        };
        this.history.push(rutaResultados);
    }
}

export default Test;
