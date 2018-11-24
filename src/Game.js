import React, { Component } from 'react';
import { getGame } from './Api.js';
import './Game.css';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class Game extends Component {
  constructor(props) {
    super(props);

    const redeemed = localStorage.getItem(`game-${props.id}`);
    this.state = {
      id: props.id,
      game: null,
      redeemed: redeemed,
      revealed: redeemed
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

  reveal() {
    this.setState({ revealed: true });
  }

  render() {
    const r = this.state.redeemed
    const v = this.state.revealed
    const g = this.state.game

    if (!g || !v) {
      return (
        <Paper className={"Game unrevealed"} game={this.props.id} onClick={this.reveal.bind(this)} >
          <Typography variant="button">
            Click to reveal
          </Typography>
        </Paper>
      )
    }

    return(
      <Paper className={"Game revealed " + (r ? 'redeemed' : '')} game={this.props.id}>
        <Typography color="pink" variant="body1" className="key">
          {g.key}
        </Typography>
        <div className="redeem">
          <Button variant="outlined" onClick={this._releaseLink.bind(this, g.key)}>Redeem</Button>
        </div>
      </Paper>
    )
  }
}

export default Game;
