import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  iframe: {
    transition: 'opacity 4s',
  },
});

class YoutubeVideo extends Component {
  state = {
    style: {
      opacity: 0,
    },
  };

  makeVisible = () => {
    this.setState({ style: { opacity: 1 } });
  }

  render = () => {
    const { style } = this.state
    const { classes } = this.props

    return (
      <iframe
        className={classes.iframe}
        title={this.props.title}
        width='100%'
        height='100%'
        onLoad={this.makeVisible}
        style={style}
        src={`https://www.youtube.com/embed/${this.props.id}`}
        frameBorder="0"
        allow="encrypted-media;"
        allowFullScreen >
      </iframe>
    );
  }
}

export default withStyles(styles)(YoutubeVideo);
