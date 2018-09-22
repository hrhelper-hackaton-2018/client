import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import VoiceChat from '@material-ui/icons/VoiceChat';
import { FormControl } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
  actionBox: {
    flexBasis: '20rem',
    padding: '1rem',
    paddingLeft: '3rem',
    paddingRight: '3rem'
  },
  actions: {
    marginTop: '1rem'
  },
  form: {
    flexBasis: '30rem'
  },
  actions__text: {
    marginRight: '2rem'
  },
  iconLeft: {
    marginRight: '.5rem'
  },
  formControl: {
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'center'
  }
};

class ClientDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      callName: ''
    };
  }

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState(() => ({ [name]: value }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push('/getvideo');
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.actionBox} square>
          <form className={classes.form} onSubmit={this.handleSubmit}>
            <Typography variant="headline" align="center">
              Create a call
            </Typography>
            <div className={classes.actions}>
              <TextField
                color="inherit"
                helperText="Name of the call"
                className={classes.actions__text}
                onChange={this.handleChange}
                fullWidth
              >
                {this.state.callName}
              </TextField>
              <FormControl className={classes.formControl}>
                <Button variant="contained" color="inherit" type="submit">
                  Create
                </Button>
              </FormControl>
            </div>
          </form>
        </Paper>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(ClientDashboard));
