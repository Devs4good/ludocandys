import React from "react";
import { Route, Switch } from "react-router";

import "./App.css";
import CustomNavBar from "./components/CustomNavBar";
import "bootstrap/dist/css/bootstrap.min.css";

import Games from "./screens/Games";
import Game1 from "./screens/Games/Game-1";
import Game2 from "./screens/Games/Game-2";
import Game3 from "./screens/Games/Game-3";
import Menu from "./screens/Menu";

function App() {
  return (
    <div className="App">
      <CustomNavBar />
      <Switch>
        <Route path="/games" exact component={Games} />
        <Route path="/games/game-1" component={Game1} />
        <Route path="/games/game-2" component={Game2} />
        <Route path="/games/game-3" component={Game3} />
        <Route path="*" component={Menu} />
      </Switch>
    </div>
  );
}

export default App;
