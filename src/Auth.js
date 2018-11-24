import React, { Component } from 'react';
import { checkAuth } from './Api.js';

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
    justifyContent: 'center',
    textAlign: 'center',
    padding: theme.spacing.unit,
    width: '100%',
  },
  textArea: {
    margin: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class Auth extends Component { state = {
    password: '',
    open: false,
  };

  handleChange = (e) => {
    const password = e.target.value;
    this.setState({ password });
  }

  handleKeyPress = (e) => {
    const keyCode = e.charCode;
    if (keyCode === 13) {
      this.handleAuth(e);
    }
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
      <div className={classes.container} >
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
        <TextField
          id="outlined-password-input"
          label="Password"
          className={classes.textArea}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          value={password}
          type="password"
          color="primary"
          variant="outlined"
        />
        <Button
          color="primary"
          variant="outlined"
          size="medium"
          className={classes.button}
          onClick={this.handleAuth} >
          SUBMIT
        </Button>
      </div>
    )
  }
}

export default withStyles(styles)(Auth);
