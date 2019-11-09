import React from "react";
import "./App.css";
import "./component/myScss.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./component/home";
import Druga from "./component/druga";
import Treca from "./component/treca";

import Nav from "./component/navbar";

const Pocetna = () => (
  <div>
    <Home />
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Pocetna} />

          <Route path="/druga" component={Druga} />
          <Route path="/treca" component={Treca} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
