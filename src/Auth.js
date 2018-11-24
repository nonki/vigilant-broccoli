import React, { Component } from 'react';
import { checkAuth } from './Api.js';
import './Auth.css';

import { withStyles  } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    textAlign: 'center',
    padding: theme.spacing.unit,
    maxWidth: '400px',
  },
});

class Auth extends Component {
  state = {
    password: '',
    open: false,
  };

  handleChange(e) {
    this.setState({password: e.target.value});
  }

  handleAuth = (e) => {
    e.preventDefault();
    checkAuth(this.state.password).then(res => {
      if (!res) {
        this.setState({ password: '', open: true })
      }

      this.props.handler(res);
    });
  }

  handleClose = (e) => {
    this.setState({ open: false })
  }

  render() {
    const { classes } = this.props;
    const { open, password } = this.state;
    return (
      <div className="Auth">
        <Dialog
          variant="outlined"
          open={open} >
          <DialogTitle>Oops!</DialogTitle>
          <DialogContent>
            <DialogContentText>Wrong Password :c</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleClose}>
              OK
            </Button>
          </DialogActions>
        </Dialog>
        <form className={classes.container}>
          <TextField
            id="outlined-password-input"
            label="Password"
            className={classes.textField}
            onChange={this.handleChange.bind(this)}
            value={password}
            type="password"
            color="primary"
            variant="outlined"
          />
          <Button
            color="primary"
            variant="outlined"
            onClick={this.handleAuth} >
            SUBMIT
          </Button>
        </form>
      </div>
    )
  }
}

export default withStyles(styles)(Auth);
