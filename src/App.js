import React from 'react';
import { Route, Switch } from 'react-router';

import './App.css';
import CustomNavBar from './components/CustomNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './screens/Menu';
import Login from './components/Login';

function App() {
    return (
        <div className="App">
            <CustomNavBar />
            <Switch>
                <Route path="/login/" component={Login} />
                <Route path="*" component={Menu} />
            </Switch>
        </div>
    );
}

export default App;
