import React, { Component } from 'react'
import './Games.css'
import Game from './Game.js';
import { getGames } from './Api.js'

class Games extends Component {
  constructor(props) {
    super(props)

    this.state = {
      games: []
    }
  }

  componentDidMount() {
    getGames()
      .then(games => this.setState({ games }))
      .catch(err => console.log(err))
  }

  render() {
    const games = this.state.games
    return (
      <div className="Games">
        {games.length ? (
          games.map(el => <Game key={el.id} {...el} />)
        ): ''}
      </div>
    )
  }
}

export default Games;
