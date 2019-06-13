import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar is-light"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <h1 className="title is-5 navbar-item">Simple React Demo</h1>
        </div>
      </nav>
    );
  }
}

export default Navbar;
