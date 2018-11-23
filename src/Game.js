import React, { Component } from 'react';
import { getGame } from './Api.js';
import './Game.css';

class Game extends Component {
  constructor(props) {
    super(props);

    const redeemed = localStorage.getItem(`game-${props.id}`);
    this.state = {
      id: props.id,
      game: null,
      redeemed: redeemed
    }
  }

  _releaseLink(key, e) {
    e.preventDefault();
    window.open(`https://store.steampowered.com/account/registerkey?key=${key}`, "_blank");
    this.setState({ redeemed: true })
    localStorage.setItem(`game-${this.state.id}`, '1');
  }

  componentDidMount() {
    getGame(this.state.id)
      .then(game => this.setState({ game }))
      .catch(err => console.debug(err));
  }

  render() {
    if (this.state.game == null) {
      return null
    }

    const r = this.state.redeemed
    const g = this.state.game
    return(
      <div className={"Game " + (r ? 'redeemed' : 'not-redeemed')} game={this.props.gameId}>
        <span className="title">{g.title}</span>
        <div className="key">
          {g.key}
          <div className="redeem">
            <button onClick={this._releaseLink.bind(this, g.key)}>Redeem</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Game;
