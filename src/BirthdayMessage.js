import React from 'react';
import YoutubeList from './YoutubeList.js';
import { withStyles  } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  container: {
    textAlign: 'center',
    backgroundColor: theme.palette.secondary.main,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
  },
  title: {
    width: '100%',
    paddingLeft: theme.spacing.unit * 5,
    paddingRight: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit * 5,
    paddingTop: theme.spacing.unit * 10,
  },
  blurb: {
    padding: theme.spacing.unit * 5,
    backgroundColor: theme.palette.primary.main,
  },
  blurbSection: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  blurbSong: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit * 2,
  },
  blurbSongSub: {
    paddingTop: theme.spacing.unit * 2,
  },
});

const blurbVariant = 'body1';

const BirthdayMessage = props => {
  const { classes } = props;

  return (
    <div className={classes.container}>
    </div>
  )
}

export default withStyles(styles)(BirthdayMessage);
