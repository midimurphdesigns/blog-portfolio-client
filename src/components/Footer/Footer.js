import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

export default function Footer(props) {
  return (
    <div className="footer-container">
      <div className="footer-navigation">
        <Link to="/" className="footer-navigation-text">
          About Me
        </Link>
        <Link to="/portfolio" className="footer-navigation-text">
          Portfolio
        </Link>
      </div>

      <div className="text-container">
        <span className="footer-text-top">Kevin Murphy</span>
        <label className="footer-text">Full stack web developer</label>
      </div>

      <div className="footer-navigation">
        <Link to="/resources" className="footer-navigation-text">
          Resources
        </Link>
        <Link to="/blog" className="footer-navigation-text">
          Blog
        </Link>
      </div>
    </div>
  );
}
