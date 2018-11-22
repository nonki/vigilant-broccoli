import React, { Component } from 'react';
import { getGame } from './Api.js';
import './Game.css';

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
    if (this.state.game == null) {
      return null
    }

    const g = this.state.game
    return(
      <div className="Game" game={this.props.gameId}>
        <span className="title">{g.title}</span>
        <div className="key">
          {g.key}
        </div>
      </div>
    )
  }
}

export default Game;
