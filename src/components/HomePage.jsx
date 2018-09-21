import React from 'react';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import WelcomePage from './WelcomePage';

const HomePage = props => {
  const { loggedIn } = props.user;
  return loggedIn ? <Dashboard /> : <WelcomePage />;
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(HomePage);
