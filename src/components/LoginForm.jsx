import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import ApiAdapter from '../ApiAdapter';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import roles from '../constants/roles';
import { userActions } from '../redux/user';
import { Redirect } from 'react-router-dom';

const styles = {
  root: {
    flexBasis: '300px'
  },
  formControl: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '15px'
  }
};

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: ''
    };
  }

  handleChange = event => {
    const { name, value } = event.target || event.currentTarget;
    this.setState(() => ({
      [name]: value
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
    ApiAdapter.submitSignup(this.state)
      .then(r => r.body)
      .then(response => {
        props.dispatch(
          userActions.setUser({ role: response.role, loggedIn: true })
        );
        return <Redirect to="/" />;
      })
      .catch(e => console.log(e));
  };

  render() {
    const { userName, password } = this.state;
    const { classes } = this.props;
    return (
      <form className={classes.root} onSubmit={this.handleSubmit}>
        <TextField
          label="UserName"
          value={userName}
          name="userName"
          onChange={this.handleChange}
          fullWidth
        />
        <TextField
          label="Password"
          name="password"
          value={password}
          onChange={this.handleChange}
          fullWidth
        />
        <FormControl className={classes.formControl}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </FormControl>
      </form>
    );
  }
}

export default withStyles(styles)(LoginForm);
