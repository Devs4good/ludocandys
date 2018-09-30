import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import Menu from './menu.js';
import Test from './Test.js';
import MasInfo from './masInfo.js';
import Resultado from "./Resultado";


class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
              <Route exact path="/test" component={Test}/>
              <Route exact path="/masInfo" component={MasInfo}/>
              <Route exact path="/resultado" render={(props) => <Resultado respuestasCorrectas={props.location.state.respuestasCorrectas} tiempoRecord={props.location.state.tiempoRecord}/>}/>
              <Route path="*" component={Menu}/>
          </Switch>
      </div>
    );
  }
}

export default App;
