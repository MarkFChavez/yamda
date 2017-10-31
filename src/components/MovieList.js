import React, { Component } from 'react'
import { connect } from 'react-redux'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import Chip from 'material-ui/Chip'

import genres from '../helpers/genres'

const IMAGE_PATH = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2'

const styles = {
  container: { flexGrow: 1 },
  moviesContainer: { marginTop: '10px' },
  movie: { marginTop: '10px', padding: '5px' },
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
      <Grid container style={styles.container} justify='center'>
        <Grid item xs={5}>
          <div style={styles.moviesContainer}>
            {this._renderMovies()}
          </div>
        </Grid>
      </Grid>
    )
  }

  _renderMovies () {
    return this.props.movies.map(movie => {
      return (
        <Paper key={movie.id} style={styles.movie} elevation={6}>
          <Grid container spacing={8}>
            <Grid item xs>
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
            </Grid>
          </Grid>
        </Paper>
      )
    })
  }

  _renderGenres (movie) {
    return movie.genre_ids.map(id => {
      let genre = genres.find(genre => id === genre.id)

      return (
        <Chip label={genre.name} style={styles.chip} />
      )
    })
  }

}

function stateToProps ({ movies }) {
  return { movies }
}

export default connect(stateToProps)(MovieList)