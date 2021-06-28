import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './home';

export const App = () => {
  ;

  return (
    <Router>
    <Switch className="h-100">
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
  );
}