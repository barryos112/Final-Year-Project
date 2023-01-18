import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/team"> Team</Link>
        </li>
        <li>
          <Link to="/create-account">Account</Link>
        </li>
        <li>
          <Link to="/select-sport">Sport Selection</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
