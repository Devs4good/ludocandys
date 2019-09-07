import React from 'react';
import { Route, Switch } from 'react-router';

import './App.css';
import CustomNavBar from './components/CustomNavBar';
import Menu from './screens/Menu';
import SpeechRecognition from './screens/Exercises/SpeechRecognition';

function App() {
  return (
    <div className="App">
      <CustomNavBar />
      <Switch>
        <Route path="/exercise1" component={() => <SpeechRecognition />}/>
        <Route path="*" component={Menu}/>
      </Switch>
    </div>
  );
}

export default App;
