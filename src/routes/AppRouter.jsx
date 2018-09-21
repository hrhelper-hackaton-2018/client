import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../components/HomePage/HomePage';
import NavBar from '../components/NavBar';
import SignUpPage from '../components/SignUpPage';
import LoginPage from '../components/LoginPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <NavBar />
      <Switch>
        <Route path="/" render={() => <HomePage />} exact />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
