import React from 'react';
import RegisterForm from './RegisterForm';
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
      <RegisterForm />
    </div>
  );
};

export default withStyles(styles)(SignUpPage);
