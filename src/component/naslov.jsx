import React, { Component } from "react";
import "./MojStil.css";
import "./mojSASS.scss";

class Na extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>neko ime</h1>

        <h3 className={"pod"}>podnaslov</h3>

        <p className={"novo"}>SASS upotreba</p>

        <div className="panel panel-default">
          <div className="panel-heading">Panel heading without title</div>
          <div className="panel-body">Panel content</div>
        </div>
      </div>
    );
  }
}

export default Na;
