import React, { Component } from 'react';
import './App.css';

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

const api = 'http://localhost:8080/keys'
const getGame = (id) =>
  fetch(`${api}/${id}`)
    .then(res =>
      res.ok ? res.json() : Promise.reject("Failed to get something useful")
    )
    .then(apiData => {
      return apiData
    });


class Game extends Component {
  constructor(props) {
    super(props);

    this.state = { game: null }
  }

  _getGame(id) {
    console.log('something');
    getGame(id).then(game => this.setState({ game }));
  }

  componentDidMount() {
    this._getGame(this.props.game)
  }

  render() {
    return(
      <div className="Game" game={this.props.gameId}>
        {JSON.stringify(this.state.game)}
      </div>
    )
  }
}

export default App;
