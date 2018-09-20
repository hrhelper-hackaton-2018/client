import React from 'react';
import LoginForm from './LoginForm';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center'
  }
};

const SignUpPage = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <LoginForm />
    </div>
  );
};

export default withStyles(styles)(SignUpPage);
