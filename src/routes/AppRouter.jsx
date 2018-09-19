import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../components/HomePage';
import NavBar from '../components/NavBar';
import SignUpPage from '../components/SignUpPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <NavBar />
      <Switch>
        <Route path="/" render={() => <HomePage />} exact />
        <Route path="/signup" component={SignUpPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
