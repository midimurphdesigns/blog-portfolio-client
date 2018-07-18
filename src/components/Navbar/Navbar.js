import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import DrawerToggleButton from "./DrawerToggleButton";
import "./Navbar.css";

export class Navbar extends React.Component {
  // currentLocation = this.props.location.pathname;
  render() {
    // console.log('this is props', this.props);
    return (
      <header className="navbar">
        <nav className="navigation">
          <div className="spacer-half" />
          <div className="logo">
            <a className="logo" href="//kevinmurphywebdev.com">
              Kevin Murphy
            </a>
          </div>
          <div className="spacer" />
          <div className="toggle-button">
            <DrawerToggleButton />
          </div>
          <div className="spacer-half" />
          <div className="navigation-items">
            <ul>
              <li>
                <a href="//kevinmurphywebdev.com">About Me</a>
              </li>
              <li>
                <a href="//kevinmurphywebdev.com/portfolio">Portfolio</a>
              </li>
              <li>
                <a href="//kevinmurphywebdev.com/resources">Resources</a>
              </li>
              <li>
                <a href="//blog.kevinmurphywebdev.com">Blog</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

// export default (Navbar)
export default connect()(Navbar);
