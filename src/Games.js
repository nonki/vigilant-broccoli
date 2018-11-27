import React, { Component } from 'react'
import Game from './Game.js';
import { getGames } from './Api.js'

import { withStyles  } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: theme.spacing.unit * 5,
    padding: theme.spacing.unit,
    backgroundColor: theme.palette.primary.light,
    justifyContent: 'space-evenly',
  },
});

class Games extends Component {
  state = {
    games: [],
  };

  componentDidMount = () => {
    getGames()
      .then(games => this.setState({ games }))
      .catch(err => console.log(err))
  }

  render = () => {
    const { games }   = this.state
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        {games.length ? (
          games.map(el => <Game key={el.id} {...el} />)
        ): ''}
      </div>
    )
  }
}

export default withStyles(styles)(Games);
