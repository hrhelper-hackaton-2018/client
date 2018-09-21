import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import VoiceChat from '@material-ui/icons/VoiceChat';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
  actionBox: {
    flexBasis: '25rem',
    padding: '1rem'
  },
  actions: {
    marginTop: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  actions__text: {
    marginRight: '2rem'
  },
  iconLeft: {
    marginRight: '.5rem'
  }
};

class ClientDashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.actionBox} square>
          <Typography variant="headline" align="center">
            Join a call
          </Typography>
          <div className={classes.actions}>
            <TextField
              color="inherit"
              helperText="url for a call"
              className={classes.actions__text}
            >
              123
            </TextField>
            <Button variant="contained" color="default">
              <VoiceChat className={classes.iconLeft} />
              Go
            </Button>
          </div>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(ClientDashboard);
