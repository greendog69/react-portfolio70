import React from 'react';
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light">
    <Link to="/">
      <span className="navbar-brand">AVINOAM KELLNER</span>
    </Link>

    <div className=" navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="nav navbar-nav">
        <li className="nav-item">
          <Link to="/about">
            <span className="nav-link">ABOUT ME</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/portfolio">
            <span className="nav-link">PORTFOLIO</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact">
            <span className="nav-link">CONTACT</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/resume">
            <span className="nav-link">RESUME</span>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar; 
