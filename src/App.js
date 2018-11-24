import React, { Component } from 'react';
import './App.css';
import Auth from './Auth.js';
import Games from './Games.js';
import { createMuiTheme, MuiThemeProvider  } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import purple from '@material-ui/core/colors/purple';
import Typography from '@material-ui/core/Typography';

const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: purple,
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


const BirthdayMessage = (props) => {
  return (
    <div className="BirthdayMessage">
      <Typography color="primary" variant="h2" className="Title">
        Happy Birthday!
      </Typography>
      <div className="Blurb">
        <Typography color="primary" variant="body1" className="part1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis pharetra elit. Vestibulum pharetra quam in lectus lobortis sollicitudin vitae eget purus. Praesent vitae ipsum eu elit pharetra aliquam eu vel est. Nullam eget sapien neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur vel gravida velit. Morbi volutpat, lectus quis egestas dapibus, libero diam ultrices quam, quis sagittis quam libero sit amet erat. Aenean convallis viverra nisl sed aliquet. In hac habitasse platea dictumst. Praesent ultrices ante bibendum ante suscipit, sed rutrum velit aliquam.
          <br />
          Pellentesque suscipit sem a quam auctor venenatis. Phasellus velit arcu, tristique et eros eget, euismod blandit ipsum. Donec sapien felis, fringilla in auctor non, faucibus eget massa. Duis consectetur, massa id fringilla tincidunt, sapien est condimentum dui, et vestibulum dui mauris id lectus. In mattis laoreet mauris, vestibulum vulputate erat rhoncus nec. Etiam nisi est, vulputate nec sapien ac, efficitur ultrices risus. Maecenas elementum fermentum hendrerit. Fusce id dui eget est aliquet elementum. Integer vel ultrices justo.
        </Typography>
      </div>
    </div>
  )
}

export default App;
