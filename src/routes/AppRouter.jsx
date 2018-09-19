import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../components/HomePage';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" render={() => <HomePage />} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
