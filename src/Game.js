import React, { Component } from 'react';
import { getGame } from './Api.js';
import classNames from 'classnames';
import { withStyles  } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  container: {
    padding: theme.spacing.unit,
    margin: theme.spacing.unit,
    textAlign: 'center',
    borderRadiues: '10px',
    flexGrow: '1',
    display: 'flex',
    minWidth: '300px',
    minHeight: '40px',
    maxHeight: '80px',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    overflow: 'hidden',
  },
  key: {
    flexGrow: '3',
    fontSize: '0.975rem',
    fontWeight: '500',
  },
  button: {
    flexGrow: '1',
  },
  revealed: {
    backgroundColor: theme.palette.primary.light,
    transition: '0.7s all',
  },
  unrevealed: {
    backgroundColor: theme.palette.primary.main,
    transition: '0.3s all',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
})

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
    const { id, game, revealed } = this.state;
    const { classes } = this.props;

    if (!game || !revealed) {
      return (
        <Paper className={classNames([classes.container, classes.unrevealed])} game={id} onClick={this.reveal} >
          <Typography variant="button">
            Click to reveal
          </Typography>
        </Paper>
      )
    }

    const { key } = game;

    return(
      <Paper className={classNames([classes.container, classes.revealed])} game={id}>
        <Typography variant="body1" className={classes.key}>
          {key}
        </Typography>
        <div className={classes.redeem}>
          <Button variant="outlined" onClick={this.releaseLink}>Redeem</Button>
        </div>
      </Paper>
    )
  }
}

export default withStyles(styles)(Game);
