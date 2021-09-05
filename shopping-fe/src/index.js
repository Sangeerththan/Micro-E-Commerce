import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

import store from './store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from './pages/user/SignIn';
import LogIn from './pages/user/LogIn';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={LogIn} />
      <Route path="/signIn" component={SignIn} />
      <Route path="/logIn" component={LogIn} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
