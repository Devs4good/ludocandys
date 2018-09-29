import React, { Component } from 'react';
import './App.css';
import Ejercicio from "./Ejercicio";
import { Route, Switch } from 'react-router';
import Menu from './menu.js';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
              <Route exact path="/ejercicio3" component={() => <Ejercicio tamanio={3}/>}/>
              <Route exact path="/ejercicio4" component={() => <Ejercicio tamanio={4}/>}/>
              <Route path="*" component={Menu}/>
          </Switch>
      </div>
    );
  }
}

export default App;
