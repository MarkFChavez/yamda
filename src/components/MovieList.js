import React, { Component } from 'react'
import { connect } from 'react-redux'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'

const IMAGE_PATH = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2'

class MovieList extends Component {

  render () {
    return (
      <Grid container style={{ flexGrow: 1 }} justify='center'>
        <Grid item xs={5}>
          <div style={{ marginTop: '10px' }}>
            {this._renderMovies()}
          </div>
        </Grid>
      </Grid>
    )
  }

  _renderMovies () {
    return this.props.movies.map(movie => {
      return (
        <Paper key={movie.id} style={{ textAlign: 'center', padding: '5px', marginTop: '10px' }}>
          <Typography type='subheading'>
            <span style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
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