import React from 'react'
import Link from 'gatsby-link'

import './Header.css'

const Header = () => (
  <div className="nav">
    <div className="logo-container">
      <label className="logo-text-top"><Link to="//kevinmurphywebdev.com">Kevin Murphy</Link></label>
    </div>

    <label htmlFor="toggle" className="hamburger">&#9776;</label>
    <input type="checkbox" id="toggle" />

    <div className="menu">
      <a href="//kevinmurphywebdev.com">About Me</a>
      <a href="//kevinmurphywebdev.com/portfolio">Portfolio</a>
      <a href="//kevinmurphywebdev.com/resources">Resources</a>
      <a href="/">Blog</a>
    </div>
  </div>
);

export default Header
