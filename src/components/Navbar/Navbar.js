import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

export default class Navbar extends React.Component {

  render() {
    return (
      <div className="nav">
        <div className="logo-container">
          <label className="logo-text-top"><Link to="/">Kevin Murphy</Link></label>
        </div>

        <label htmlFor="toggle" className="hamburger">&#9776;</label>
        <input type="checkbox" id="toggle" />

        <div className="menu">
          {/* <Link to="/">About Me</Link> */}
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/resources">Resources</Link>
          <a href="//blog.kevinmurphywebdev.com">Blog</a>
        </div>
      </div>
    );
  }
}
