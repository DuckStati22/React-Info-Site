import React from 'react';
import logo from '../images/react-icon-small.png'

function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <a href="https://reactjs.org/" target="_blank" className="logo">
          <img src={logo} alt="logo-image" />
          <p className="logo-title">ReactFacts</p>
        </a>
        <h2 className="project-title">React Course - Project 1</h2>
      </div>
    </nav>
  );
}

export default Navbar;
