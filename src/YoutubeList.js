import React from 'react';
import YoutubeVideo from './YoutubeVideo.js';
import { withStyles  } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit * 5,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
});

const gridWidthMap = {
  xs: 1.4,
  sm: 2.4,
  md: 3.4,
  lg: 3.4,
  xl: 4.4,
}

const tileData = [
  {
    title: 'Kailee Morgue - Discovery',
    id: '4XZYws3wV-g',
  },
  {
    title: 'Ashe - Someone to Lose',
    id: 'InBP_pOp4bs',
  },
  {
    title: 'Catey Shaw - Night Go Slow',
    id: 'acYpxd17eIc',
  },
  {
    title: 'LÉON - Think About You',
    id: 'O43JnJUybmY',
  },
  {
    title: 'Vashti Bunyan - Train Song',
    id: '0AGD78mWcss',
  },
  {
    title: 'Ride - Dreams Burn Down',
    id: 'tsmHP3ce010',
  },
  {
    title: 'girl in red - i wanna be your girlfriend',
    id: 'COOBN-cdJbo',
  },
  {
    title: 'EXES - Taxi',
    id: 'mcjAf9USlNU',
  },
  {
    title: 'Chelsea Cutler - The Reason',
    id: 'YUjEJwfa8wk',
  },
];

const YoutubeList = props => {
  const { classes, width } = props;

  const cols = gridWidthMap[width]
  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={cols}>
        {tileData.map(tile => (
          <GridListTile key={tile.id}>
            <YoutubeVideo {...tile} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default withWidth()(withStyles(styles)(YoutubeList));
