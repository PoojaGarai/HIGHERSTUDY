// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../Assets/logo.png'; // Assuming the logo file path

const NavBar = () => (
  <nav className="navbar">
    <div className="logo-container">
      <img src={logo} alt="Logo" className="logo" />
      <div className="logo-text"><b><h3>Higher Study</h3></b></div>
    </div>
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/faqs">FAQs</Link></li>
      <li><Link to="/seminars">Past Seminars</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default NavBar;
