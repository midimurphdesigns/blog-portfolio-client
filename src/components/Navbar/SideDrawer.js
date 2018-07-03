import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./SideDrawer.css";

export class SideDrawer extends React.Component {
  render() {
    let drawerClasses = "side-drawer";
    if (this.props.show) {
      drawerClasses = "side-drawer open";
    }

    console.log(this.props.show)

    return (
      <nav className={drawerClasses}>
        <ul className="mobile-navigation-items">
          <li>
            <Link to="/portfolio">portfolio</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default connect()(SideDrawer);
