import React, { Component } from 'react';
import './App.css';
import Game from './Game.js';
import Auth from './Auth.js';

class App extends Component {
  constructor(props) {
    super(props);

    const isAuthed = localStorage.getItem('authed');
    this.state = {
      authed: isAuthed
    }
  }

  setAuthed(isAuthed) {
    localStorage.setItem('authed', isAuthed ? '1' : '');
    this.setState({authed: isAuthed});
  }

  render() {
    if (!this.state.authed) {
      return (
        <div className="App">
          <Auth handler={this.setAuthed.bind(this)} />
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Games</h1>
        {[...Array(22).keys()].map(el => <Game game={el} />)}
      </div>
    );
  }
}

export default App;
