import React from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";

import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Resources from "../Resources/Resources";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import SideDrawer from "../Navbar/SideDrawer";
import Backdrop from "../Navbar/Backdrop";
import Meta from "./Meta";

import "./Main.css";

export class Main extends React.Component {
  
  render() {
    if (this.props.sideDrawerOpen) {
      return (
        <div className="page-container">
          {/* <Meta /> */}
          <div className="app">
            <Navbar />
            <SideDrawer show={this.props.sideDrawerOpen} />
            <Backdrop />
            <main className="mainSection">
              <Route exact path="/" component={AboutMe} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/resources" component={Resources} />
            </main>
            <Footer />
          </div>
        </div>
      );
    } else {
      return (
        <div className="page-container">
          {/* <Meta /> */}
          <div className="app">
            <Navbar />
            <SideDrawer show={this.props.sideDrawerOpen} />
            <main className="mainSection">
              <Route exact path="/" component={AboutMe} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/resources" component={Resources} />
            </main>
            <Footer />
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  sideDrawerOpen: state.sideDrawerOpen
});

export default withRouter(connect(mapStateToProps)(Main));