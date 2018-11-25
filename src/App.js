import React, { Component } from 'react';
import './App.css';
import Auth from './Auth.js';
import BirthdayMessage from './BirthdayMessage.js';
import Games from './Games.js';
import { withStyles  } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  container: {
    backgroundColor: theme.palette.primary.light,
    height: '100%',
    width: '100%',
  },
})

class App extends Component {
  constructor(props) {
    super(props);

    const isAuthed = localStorage.getItem('authed');
    this.state = {
      authed: isAuthed
    }
  }

  setAuthed = (isAuthed) => {
    localStorage.setItem('authed', isAuthed ? '1' : '');
    this.setState({authed: isAuthed});
  }

  render = () => {
    const { authed } = this.state;
    const { classes } = this.props;

    if (!authed) {
      return (
        <Paper className={classes.container}>
          <Auth handler={this.setAuthed} />
        </Paper>
      )
    }

    return (
      <Paper className={classes.container}>
        <BirthdayMessage />
        <Games />
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
