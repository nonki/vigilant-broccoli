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
    flexGrow: '1',
    flexShrink: '1',
    display: 'flex',
    width: '250px',
    height: '40px',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    overflow: 'hidden',
    flexBasis: 'auto',
  },
  key: {
    flexGrow: '2',
    flexShrink: '1',
    flexBasis: 'auto',
    fontSize: '0.8rem',
    fontWeight: '500',
  },
  button: {
    flexGrow: '1',
  },
  revealed: {
    backgroundColor: theme.palette.secondary.light,
    transition: '0.8s all',
  },
  unrevealed: {
    backgroundColor: theme.palette.secondary.main,
    transition: '0.4s all',
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
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
    const { game, revealed } = this.state;
    const { classes } = this.props;

    if (!game || !revealed) {
      return (
        <Paper className={classNames([classes.container, classes.unrevealed])} onClick={this.reveal} >
          <Typography variant="button">
            Click to reveal
          </Typography>
        </Paper>
      )
    }

    const { title } = game;

    return(
      <Paper className={classNames([classes.container, classes.revealed])}>
        <Typography variant="body1" className={classes.key}>
          {title}
        </Typography>
        <div className={classes.redeem}>
          <Button variant="outlined" onClick={this.releaseLink}>Redeem</Button>
        </div>
      </Paper>
    )
  }
}

export default withStyles(styles)(Game);
