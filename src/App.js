import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router';
import Menu from './menu.js';
import MasInfo from './masInfo.js';
import Resultado from "./Resultado";
import Ejercicios from "./ejercicios";
import ListadoDeEjercicios from "./ListadoDeEjercicios";

class App extends Component {
  render() {
    const ejercicios = new Ejercicios(this.props.history);

    return (
      <div className="App">
          <Switch>
              <Route exact path="/masInfo" component={MasInfo}/>

              <Route exact path="/listado-de-ejercicios" render={
                  () => <ListadoDeEjercicios ejercicios={ ejercicios } history={this.props.history}/>
              }/>

              <Route exact path="/ejercicio/:id" render={
                  (params) => ejercicios.conId(parseInt(params.match.params.id))
              }/>

              <Route exact path="/resultado" render={
                  (props) => {
                      return (
                          <Resultado
                            respuestasCorrectas={props.location.state.respuestasCorrectas}
                            tiempoRecord={props.location.state.tiempoRecord}
                          />
                      );
                  }
              }/>

              <Route path="*" component={Menu}/>
          </Switch>
      </div>
    );
  }
}

export default withRouter(App);
