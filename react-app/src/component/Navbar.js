import React, { Component } from 'react';
import './Navbar.css'; // import the CSS file

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <span className="navbar-item">My Store</span>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item" href="#">Home</a>
            <a className="navbar-item" href="#">Products</a>
            <a className="navbar-item" href="#">About</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
