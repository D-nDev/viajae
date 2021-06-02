import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login/index';
import Cities from './pages/Cities/index';
import Details from './pages/Details/index';
import Visit from './pages/Visit/index';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/cities" component={Cities} />
        <Route path="/visit" component={Visit} />
        <Route path="/details/:id" component={Details} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
