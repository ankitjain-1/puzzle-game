import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GamePage from "./components/GamePage";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import "./scss/Global.scss";
import './scss/App.scss';

function App() {
  return (
    <Router>
      <Header />
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
