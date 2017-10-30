import React, { Component } from 'react'
import MovieList from './components/MovieList'
import { popular, topRated, upcoming } from './helpers/api'

class App extends Component {

  constructor (props) {
    super(props)

    /* bind methods */
    this._getPopular = this._getPopular.bind(this)
    this._getTopRated = this._getTopRated.bind(this)
    this._getUpcoming = this._getUpcoming.bind(this)
    this._setMovies = this._setMovies.bind(this)

    /* state initialization */
    this.state = { movies: [] }
  }

  render() {
    return (
      <div>
        <h4> Yet Another Movie Database App </h4>

        {/* categories */}
        <a href='#' onClick={this._getPopular}> popular </a> &nbsp;
        <a href='#' onClick={this._getTopRated}> top rated </a> &nbsp;
        <a href='#' onClick={this._getUpcoming}> upcoming </a>

        {/* list of movies here */}
        <MovieList movies={this.state.movies} />
      </div>
    );
  }

  _getPopular () {
    popular().then(this._setMovies)
  }

  _getTopRated () {
    topRated().then(this._setMovies)
  }

  _getUpcoming () {
    upcoming().then(this._setMovies)
  }

  _setMovies ({ results }) {
    this.setState({ movies: results })
  }

}

export default App;
