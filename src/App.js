import React from 'react';
import { Route, Switch } from 'react-router';

import './App.css';
import CustomNavBar from './components/CustomNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

import Games from './screens/Games';
import Game1 from './screens/Games/Game-1';
import Game3 from './screens/Games/Game-3';
import { DictationPage } from './screens/Games/Game-2/DictationPage';
import Menu from './screens/Menu';

function App() {
  return (
    <div className='App'>
      <CustomNavBar />
      <Switch>
        <Route path='/juegos' exact component={Games} />
        <Route path='/juegos/game-1' component={Game1} />
        <Route path='/juegos/dictado' component={DictationPage} />
        <Route exact path='/juegos/selecciona-lo-que-ves' component={Game3} />
        <Route exact path='/juegos/selecciona-lo-que-ves/:id' component={Game3} />
        <Route path='*' component={Menu} />
      </Switch>
    </div>
  );
}

export default App;
