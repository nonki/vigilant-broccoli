import React, { Component } from 'react';
import './App.css';
import Game from './Game.js';

class App extends Component {
  render() {
    console.log('here');
    return (
      <div className="App">
        <h1>Games</h1>
        {[...Array(22).keys()].map(el => <Game game={el} />)}
      </div>
    );
  }
}

export default App;
