import React, { Component } from 'react'
import { connect } from 'react-redux'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import Chip from 'material-ui/Chip'
import Spinner from 'react-spinkit'

import genres from '../helpers/genres'

const IMAGE_PATH = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2'

const styles = {
  container: { flexGrow: 1 },
  moviesContainer: { marginTop: '10px' },
  movie: { margin: '20px 5px 0px 5px', padding: '5px' },
  movieTitle: { textTransform: 'uppercase', fontWeight: 'bold', textDecoration: 'underline' },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: { margin: '2px' }
}

class MovieList extends Component {

  render () {
    return (
      <Grid container spacing={0} justify='center'>
        <Grid item lg={8} md={8} sm={8} xs={12}>
          {this._renderMovies()}
        </Grid>
      </Grid>
    )
  }

  _renderMovies () {
    if (this.props.fetchingMovies) {
      return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
          <Spinner name='folding-cube' />
        </div>
      )
    }

    return this.props.movies.map(movie => {
      return (
        <Paper key={movie.id} style={styles.movie} elevation={6}>
          <div style={styles.row}>
            <Typography type='subheading'>
              <span style={styles.movieTitle}> {movie.title} </span>
            </Typography>
          </div>

          <div style={styles.row}>
            {this._renderGenres(movie)}
          </div>

          <div>
            <span style={{ textAlign: 'justify' }}> {movie.overview} </span>
          </div>
        </Paper>
      )
    })
  }

  _renderGenres (movie) {
    return movie.genre_ids.map(id => {
      let genre = genres.find(genre => id === genre.id)

      return (
        <Chip key={id} label={genre.name} style={styles.chip} />
      )
    })
  }
}

function stateToProps ({ movies, fetchingMovies }) {
  return { movies, fetchingMovies }
}

export default connect(stateToProps)(MovieList)