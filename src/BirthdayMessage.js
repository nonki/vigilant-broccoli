import React from 'react';
import { withStyles  } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  container: {
    textAlign: 'center',
    backgroundColor: theme.palette.primary.light,
    boxShadow: '0px 6px 24px -1px rgba(30,30,30,0.4)',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
  },
  title: {
    width: '100%',
    paddingBottom: theme.spacing.unit * 5,
    paddingTop: theme.spacing.unit * 10,
  },
  blurb: {
    paddingLeft: theme.spacing.unit * 5,
    paddingRight: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit * 5,
    paddingTop: theme.spacing.unit * 5,
    backgroundColor: theme.palette.secondary.light,
  }
});

const BirthdayMessage = (props) => {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <Typography variant="h2" className={classes.title}>
        Happy Birthday!
      </Typography>
      <div className={classes.blurb}>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis pharetra elit. Vestibulum pharetra quam in lectus lobortis sollicitudin vitae eget purus. Praesent vitae ipsum eu elit pharetra aliquam eu vel est. Nullam eget sapien neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur vel gravida velit. Morbi volutpat, lectus quis egestas dapibus, libero diam ultrices quam, quis sagittis quam libero sit amet erat. Aenean convallis viverra nisl sed aliquet. In hac habitasse platea dictumst. Praesent ultrices ante bibendum ante suscipit, sed rutrum velit aliquam.
          <br />
          Pellentesque suscipit sem a quam auctor venenatis. Phasellus velit arcu, tristique et eros eget, euismod blandit ipsum. Donec sapien felis, fringilla in auctor non, faucibus eget massa. Duis consectetur, massa id fringilla tincidunt, sapien est condimentum dui, et vestibulum dui mauris id lectus. In mattis laoreet mauris, vestibulum vulputate erat rhoncus nec. Etiam nisi est, vulputate nec sapien ac, efficitur ultrices risus. Maecenas elementum fermentum hendrerit. Fusce id dui eget est aliquet elementum. Integer vel ultrices justo.
        </Typography>
      </div>
    </div>
  )
}

export default withStyles(styles)(BirthdayMessage);
