import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Main from './components/Main/Main';
import registerServiceWorker from './registerServiceWorker';
console.log(Main);

ReactDOM.render(
    <Router>
      <Main />
    </Router>,
  document.getElementById('root'),
);
registerServiceWorker();