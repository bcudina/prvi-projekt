import React from "react";
import "./App.css";
//import Nav from "./nav";
import Druga from "./component/druga";
import Treca from "./component/treca";

function App() {
  return (
    <div className="App">
      <h1>Prva strana</h1>
      <Druga />
      <Treca />
    </div>
  );
}

export default App;
