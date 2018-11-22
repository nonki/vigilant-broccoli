import React, { Component } from 'react';

const api = process.env.REACT_APP_API_URL
const getGame = (id) =>
  fetch(`${api}/keys/${id}`)
    .then(res =>
      res.ok ? res.json() : Promise.reject("Failed to get something useful")
    )
    .then(apiData => {
      return apiData
    });


class Game extends Component {
  constructor(props) {
    super(props);

    this.state = { game: null }
  }

  _getGame(id) {
    getGame(id).then(game => this.setState({ game }));
  }

  componentDidMount() {
    this._getGame(this.props.game)
  }

  render() {
    return(
      <div className="Game" game={this.props.gameId}>
        {JSON.stringify(this.state.game)}
      </div>
    )
  }
}

export default Game;
