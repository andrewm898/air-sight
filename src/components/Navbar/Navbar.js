import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section.
class Navbar extends React.Component {
  render() {
    return (
      <div className="container">
        <ul className="menu">
          <li className="menu-item">
            <Link to="/" className="homeBtn">
              Home
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/DroneInfo" className="DroneBtn">
              Drones
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
