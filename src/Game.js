import React, { Component } from 'react';
import { getGame } from './Api.js';
import './Game.css';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class Game extends Component {
  constructor(props) {
    super(props);

    const { id } = this.props

    const redeemed = localStorage.getItem(`game-${id}`);
    this.state = {
      id: id,
      game: null,
      redeemed: redeemed,
      revealed: redeemed
    }
  }

  releaseLink = () => {
    const { id, game: { key } } = this.state
    window.open(`https://store.steampowered.com/account/registerkey?key=${key}`, "_blank");

    this.setState({ redeemed: true })
    localStorage.setItem(`game-${id}`, '1');
  }

  componentDidMount = () => {
    const { id } = this.state;

    getGame(id)
      .then(game => this.setState({ game }))
      .catch(err => console.debug(err));
  }

  reveal = () => {
    this.setState({ revealed: true });
  }

  render = () => {
    const { id, game, redeemed, revealed } = this.state;

    if (!game || !revealed) {
      return (
        <Paper className={"Game unrevealed"} game={id} onClick={this.reveal} >
          <Typography color="primary" variant="button">
            Click to reveal
          </Typography>
        </Paper>
      )
    }

    const { key } = game;

    return(
      <Paper className={"Game revealed " + (redeemed ? 'redeemed' : '')} game={id}>
        <Typography color="primary" variant="body1" className="key">
          {key}
        </Typography>
        <div className="redeem">
          <Button color="primary" variant="outlined" onClick={this.releaseLink}>Redeem</Button>
        </div>
      </Paper>
    )
  }
}

export default Game;
