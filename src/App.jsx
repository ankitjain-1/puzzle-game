import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GamePage from "./components/GamePage";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/play">
            <GamePage />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
