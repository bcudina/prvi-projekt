import React from "react";

import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "white"
  };

  return (
    <div className="App">
      <nav>
        <h3>Logo</h3>
        <ul className="nav-links">
          <Link to="/druga" style={navStyle}>
            <li>druga</li>
          </Link>

          <Link to="/treca" style={navStyle}>
            <li>treca</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
