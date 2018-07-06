import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { sideDrawerToggle } from '../../actions/side-drawer-actions';
import "./SideDrawer.css";

// export class SideDrawer extends React.Component {
//   render() {
  export function SideDrawer(props) {
    let drawerClasses = "side-drawer";
    if (props.show) {
      drawerClasses = "side-drawer open";
    }

    return (
      <nav className={drawerClasses}>
        <ul className="mobile-navigation-items">
          <li>
            <Link
              onClick={() => {
                return props.dispatch(sideDrawerToggle());
              }}
              className="logo-sidedrawer"
              to="/"
            >
              Kevin Murphy
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                return props.dispatch(sideDrawerToggle());
              }}
              to="/"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                return props.dispatch(sideDrawerToggle());
              }}
              to="/portfolio"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                return props.dispatch(sideDrawerToggle());
              }}
              to="/resources"
            >
              Resources
            </Link>
          </li>
          <li>
            <a
              onClick={() => {
                return props.dispatch(sideDrawerToggle());
              }}
              href="blog.kevinmurphywebdev.com"
              target="_blank"
            >
              Blog
            </a>
          </li>
        </ul>
      </nav>
    );
  // }
}

export default connect()(SideDrawer);
