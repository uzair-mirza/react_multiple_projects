import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="/images/brand_logo.png"
          alt="Nike Logo"
        />
      </div>
      <ul className="navbar-links">
        <li><NavLink to='home'>Menu</NavLink></li>
        <li><NavLink to='location'>Location</NavLink></li>
        <li><NavLink to='about'>About</NavLink></li>
        <li><NavLink to='contact'>Contact</NavLink></li>
      </ul>
      <button className="navbar-login">Login</button>
    </nav>
  )
}

export default Header
