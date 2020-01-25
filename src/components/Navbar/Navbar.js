import React from "react";
import "./Navbar.css";

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section.
class Navbar extends React.Component {
  render() {
    return (
      <ul className="menu">
        <li className="menu-item">
          <a>Home</a>
        </li>
        <li className="menu-item">
          <a>Account</a>
        </li>
      </ul>
    );
  }
}

export default Navbar;
