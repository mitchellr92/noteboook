import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <div className="menu-buttons">
          <Link to="/" className="link">
            <button className="button">View Your Notes</button>
          </Link>
          <Link to="/notes/form" className="link">
            <button className="button">Create Note</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Menu;
