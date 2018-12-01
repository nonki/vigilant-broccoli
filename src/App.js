import React, { Component } from 'react';
import './App.css';
import Auth from './Auth.js';
import BirthdayMessage from './BirthdayMessage.js';
import HiddenGames from './HiddenGames.js';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: theme.palette.primary.main,
  },
})

class App extends Component {
  constructor(props) {
    super(props);

    const isAuthed = localStorage.getItem(process.env.REACT_APP_TOKEN_KEY);
    this.state = {
      authed: isAuthed,
    };
  }

  setAuthed = secret => {
    secret && localStorage.setItem(process.env.REACT_APP_TOKEN_KEY, secret);
    this.setState({authed: true});
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
        <HiddenGames />
      </div>
    );
  }
}

export default withStyles(styles)(App);
