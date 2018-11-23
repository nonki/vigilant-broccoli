import React, { Component } from 'react';
import { getGame } from './Api.js';
import './Game.css';
import Button from '@material-ui/core/Button';

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
        <div className="title">{g.title}</div>
        <div className="key">
          {g.key}
        </div>
        <div className="redeem">
          <Button variant="contained" onClick={this._releaseLink.bind(this, g.key)}>Redeem</Button>
        </div>
      </div>
    )
  }
}

export default Game;
