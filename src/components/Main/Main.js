import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import './Main.css';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Resources from '../Resources/Resources';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export class Main extends React.Component {

  render() {
    return (
      <div className="page-container">
        <Navbar />
        <div className="mainSection">
          <Route exact path="/" component={AboutMe} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/resources" component={Resources} />
          <Footer />
        </div>
      </div>
    );
  }
}

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(Main);
