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

const api = process.env.REACT_APP_API_URL
const getGame = (id) =>
  fetch(`${api}/keys/${id}`)
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
