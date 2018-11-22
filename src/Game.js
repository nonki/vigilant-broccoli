import React, { Component } from 'react';
import { getGame } from './Api.js';

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

export default Game;
