import React, { Component } from 'react';
import './App.css';
import Game from './Game.js';
import Auth from './Auth.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Auth />
        <h1>Games</h1>
        {[...Array(22).keys()].map(el => <Game game={el} />)}
      </div>
    );
  }
}

export default App;
