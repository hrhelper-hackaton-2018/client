import React from 'react';
import { connect } from 'react-redux';
import roles from '../constants/roles';
import CandidateDashboard from './CandidateDashboard';
import HRDashboard from './HRDashboard';

const Dashboard = props => {
  const { user } = props;
  return user.role === roles.CANDIDATE ? (
    <CandidateDashboard />
  ) : (
    <HRDashboard />
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Dashboard);
