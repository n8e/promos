import React from 'react';
import { Route, Switch } from 'react-router';
import { hot } from 'react-hot-loader';
import { App as PromoApp } from 'app/containers/App';

export const App = hot(module)(() => (
  <Switch>
    <Route path="/" component={PromoApp} />
  </Switch>
));
