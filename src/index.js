import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store';
import "semantic-ui-css/semantic.min.css";

import Main from "./components/Main/Main";
import registerServiceWorker from "./registerServiceWorker";
console.log(Main);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
