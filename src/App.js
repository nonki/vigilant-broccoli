import React, { Component } from 'react';
import './App.css';
import Game from './Game.js';

class App extends Component {
  render() {
    console.log('here');
    return (
      <div className="App">
        <h1>Games</h1>
        <Game game="0" />
        <Game game="1" />
        <Game game="2" />
      </div>
    );
  }
}

export default App;
