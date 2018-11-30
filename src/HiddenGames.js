import React, { Component } from 'react';
import Games from './Games.js';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: theme.palette.primary.main,
    justifyContent: 'center',
    alignContent: 'center',
  },
  button: {
    marginBottom: theme.spacing.unit * 5,
  },
});

class HiddenGames extends Component {
  state = {
    hidden: true,
  };

  constructor(props) {
    super(props);

    this.childRefs = {
      games: React.createRef(),
    };
  }

  toggleHidden = () => {
    const hidden = !this.state.hidden
    this.setState({ hidden });
    if (!hidden) {
      setTimeout(() => {
        window.scrollTo({
          top: this.childRefs.games.current.offsetTop,
          behavior: 'smooth',
        })
      }, 400);
    }
  }

  handleClick = e => {
    e.preventDefault();
    this.toggleHidden();
  }

  render = () => {
    const { hidden } = this.state;
    const { classes } = this.props;
    const buttonMessage = hidden ? 'Show me the goodies' : 'Hide that shit';

    return (
      <div className={classes.container}>
        <Button variant="outlined" size="large" className={classes.button} onClick={this.handleClick}>
          {buttonMessage}
        </Button>
        <Collapse in={!hidden} >
          <Games childRef={this.childRefs.games} />
        </Collapse>
      </div>
    );
  }
}

export default withStyles(styles)(HiddenGames);
