import React, { useState } from "react";
import { NavLink } from 'react-router-dom'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar bg-dark">
      <div className="navbar-logo">
        <img
          src="/images/new-show.png"
          alt="Nike Logo"
        />
      </div>
      <button
        className="hamburger-menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li><NavLink to='/'>Menu</NavLink></li>
        <li><NavLink to='location'>Location</NavLink></li>
        <li><NavLink to='about'>About</NavLink></li>
        <li><NavLink to='contact'>Contact</NavLink></li>
      </ul>
      <button className="navbar-login">Login</button>
    </nav>
  )
}

export default Header
