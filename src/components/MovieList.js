import React, { Component } from 'react'

const IMAGE_PATH = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2'

class MovieList extends Component {

  render () {
    return (
      <div>
        <header> Movie list </header>

        <ul style={{ listStyle: 'none' }}>
          {this._renderMovies()}
        </ul>
      </div>
    )
  }

  _renderMovies () {
    return this.props.movies.map(movie => {
      return (
        <li key={movie.id}>
          <img src={`${IMAGE_PATH}/${movie.poster_path}`} />
          {movie.title}
        </li>
      )
    })
  }

}

export default MovieList