import React, { Component } from 'react';
import './App.css';
import Auth from './Auth.js';
import BirthdayMessage from './BirthdayMessage.js';
import Games from './Games.js';
import { createMuiTheme, MuiThemeProvider  } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: pink[50],
    },
    secondary: {
      main: red[50],
    },
  },
});

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

    if (!authed) {
      return (
        <MuiThemeProvider theme={theme}>
          <div className="App">
            <Auth handler={this.setAuthed} />
          </div>
        </MuiThemeProvider>
      )
    }

    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <BirthdayMessage />
          <Games />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
