import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import CommonHeader from '../Common/CommonHeader';
import Home from '../Page/Home';
import Service from '../Page/Service';

function RouterAll() {
  return (
    <Router>
      <CommonHeader />
      <Switch>
        <Redirect from="/" to="/home" />
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/service">
          <Service />
        </Route>
      </Switch>
    </Router>
  );
}

export default RouterAll;
