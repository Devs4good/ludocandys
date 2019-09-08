import React from "react";
import { Route, Switch } from "react-router";

import "./App.css";
import CustomNavBar from "./components/CustomNavBar";
import "bootstrap/dist/css/bootstrap.min.css";

import Games from "./screens/Games";
import Game1 from "./screens/Games/Game-1";
import Game3 from "./screens/Games/Game-3";
import { DictationPage } from "./screens/Games/Game-2/DictationPage";

import Menu from "./screens/Menu/index.jsx";

import Login from "./components/Login/index";
import Test from "./components/Test";

function App() {
    return (
        <div className="App">
            <CustomNavBar />
            <Switch>
                <Route exact path="/juegos" component={Games} />

                <Route exact path="/juegos/que-lees" component={Game1} />
                <Route exact path="/juegos/dictado" component={DictationPage} />

                <Route exact path="/juegos/que-ves" component={Game3} />
                <Route exact path="/juegos/que-ves/:id" component={Game3} />
                <Route exact path="/juegos/letra-correcta" component={Test} />

                <Route exact path="/login" component={Login} />

                <Route path="*" component={Menu} />
            </Switch>
        </div>
    );
}

export default App;
