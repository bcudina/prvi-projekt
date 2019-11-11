import React from "react";
import "./App.css";
import "./component/myScss.scss";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Druga from "./component/druga";
import Treca from "./component/treca";
import Nav from "./component/navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/druga" component={Druga} />
        <Route path="/treca" component={Treca} />
      </div>
    </Router>
  );
}

export default App;
