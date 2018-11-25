import React, { Component } from 'react';
import './App.css';
import Auth from './Auth.js';
import BirthdayMessage from './BirthdayMessage.js';
import Games from './Games.js';
import { withStyles  } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: theme.palette.primary.light,
  },
})

class App extends Component {
  constructor(props) {
    super(props);

    const isAuthed = localStorage.getItem('authed-new');
    this.state = {
      authed: isAuthed
    }
  }

  setAuthed = (isAuthed) => {
    localStorage.setItem('authed-new', isAuthed ? '1' : '');
    this.setState({authed: isAuthed});
  }

  render = () => {
    const { authed } = this.state;
    const { classes } = this.props;

    if (!authed) {
      return (
        <div className={classes.container}>
          <Auth handler={this.setAuthed} />
        </div>
      )
    }

    return (
      <div className={classes.container}>
        <BirthdayMessage />
        <Games />
      </div>
    );
  }
}

export default withStyles(styles)(App);
