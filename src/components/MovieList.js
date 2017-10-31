import React, { Component } from 'react'
import { connect } from 'react-redux'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'

const IMAGE_PATH = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2'

const styles = {
  container: { flexGrow: 1 },
  moviesContainer: { marginTop: '10px' },
  movie: { padding: '5px', marginTop: '10px' },
  movieTitle: { textTransform: 'uppercase', fontWeight: 'bold' }
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
        <Paper key={movie.id} style={styles.movie}>
          <Typography type='subheading'>
            <span style={styles.movieTitle}>
              {movie.title}
            </span>
          </Typography>
        </Paper>
      )
    })
  }

}

function stateToProps ({ movies }) {
  return { movies }
}

export default connect(stateToProps)(MovieList)