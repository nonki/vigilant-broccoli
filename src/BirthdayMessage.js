import React from 'react';
import YoutubeList from './YoutubeList.js';
import { withStyles  } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  container: {
    textAlign: 'center',
    backgroundColor: theme.palette.primary.main,
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
    backgroundColor: theme.palette.secondary.main,
    boxShadow: theme.shadows[10],
  }
});

const BirthdayMessage = (props) => {
  const { classes } = props;

  return (
    <Paper className={classes.container}>
      <Typography variant="h2" className={classes.title}>
        Happy Birthday!
      </Typography>
      <Paper className={classes.blurb}>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis pharetra elit. Vestibulum pharetra quam in lectus lobortis sollicitudin vitae eget purus. Praesent vitae ipsum eu elit pharetra aliquam eu vel est. Nullam eget sapien neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur vel gravida velit. Morbi volutpat, lectus quis egestas dapibus, libero diam ultrices quam, quis sagittis quam libero sit amet erat. Aenean convallis viverra nisl sed aliquet. In hac habitasse platea dictumst. Praesent ultrices ante bibendum ante suscipit, sed rutrum velit aliquam.
          <br />
          Pellentesque suscipit sem a quam auctor venenatis. Phasellus velit arcu, tristique et eros eget, euismod blandit ipsum. Donec sapien felis, fringilla in auctor non, faucibus eget massa. Duis consectetur, massa id fringilla tincidunt, sapien est condimentum dui, et vestibulum dui mauris id lectus. In mattis laoreet mauris, vestibulum vulputate erat rhoncus nec. Etiam nisi est, vulputate nec sapien ac, efficitur ultrices risus. Maecenas elementum fermentum hendrerit. Fusce id dui eget est aliquet elementum. Integer vel ultrices justo.
        </Typography>
        <YoutubeList />
        <Typography variant="body1">
          Morbi malesuada erat vel efficitur iaculis. Nunc in felis aliquet, ornare nunc id, sollicitudin mi. Suspendisse laoreet a enim eget pretium. Aenean laoreet volutpat erat, in fermentum ex eleifend scelerisque. Cras varius nisl vitae tincidunt viverra. Cras eu ligula ut ipsum rutrum mollis sit amet ac leo. Nam scelerisque, turpis a consectetur blandit, quam felis commodo ante, ac placerat massa augue et ipsum. Integer a tempus risus, in ultrices odio. Phasellus nunc mauris, scelerisque eget tristique vel, facilisis sit amet ex.
          <br />
          Integer maximus vitae dui vel sagittis. Nam vitae elementum mauris, eu dignissim nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec id consequat nisi. Pellentesque elementum sit amet mi id ultricies. Etiam ac feugiat est. In posuere, ex ac molestie hendrerit, magna mi euismod magna, ut varius nunc lacus sed ipsum. Duis non vehicula ante. Vivamus mi nulla, facilisis fringilla urna nec, condimentum semper quam. Curabitur in neque tellus. Praesent sed erat orci. Maecenas cursus metus cursus nunc ullamcorper, vitae porttitor urna elementum. Pellentesque nibh mi, faucibus ut nisi et, rhoncus congue purus.
          <br />
    Praesent euismod ligula leo, id laoreet augue ultrices sed. Vivamus efficitur pellentesque leo ac posuere. Aliquam eu lorem at nulla iaculis luctus. Nulla vulputate ligula nibh, vitae congue mauris pellentesque nec. Aenean venenatis, sapien id faucibus malesuada, ipsum enim egestas mauris, eu consectetur erat velit sed nisi. Vivamus semper sed dolor id blandit. Sed eget leo at metus laoreet elementum vestibulum eleifend orci. Pellentesque viverra venenatis ipsum id tincidunt. Curabitur sed massa sit amet mi condimentum pretium. Curabitur nec dolor massa. Sed lacinia lacus vel hendrerit gravida. Morbi tristique, nunc vel iaculis dapibus, turpis nibh tincidunt lorem, sed bibendum tellus dui id erat. Quisque posuere velit at tellus dapibus, eget luctus ex tincidunt. Nulla sed turpis vel quam iaculis sodales vitae in dolor. Nullam vel auctor velit. Cras varius viverra est sit amet accumsan.
        </Typography>
      </Paper>
    </Paper>
  )
}


export default withStyles(styles)(BirthdayMessage);
