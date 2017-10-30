import React, { Component } from 'react'
import MovieList from './components/MovieList'
import { popular, topRated, upcoming } from './helpers/api'

import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  large: {
    fontSize: '40px',
    fontWeight: 'bolder',
  },
  center: { textAlign: 'center' },
  uppercase: { textTransform: 'uppercase' }
})

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
    const { large, center, uppercase } = this.props.classes

    return (
      <Grid container>
        <Grid item xs={12}>
          <div className={center}>
            <span className={large}> YAMDA. </span>

            <div>
              <span className={uppercase}> Yet Another Movie Database App </span>
            </div>
          </div>
        </Grid>

        <Grid container spacing={8} justify='center'>
          <Grid item>
            <Button raised color='primary' onClick={this._getPopular}> popular </Button>
          </Grid>

          <Grid item>
            <Button raised color='primary' onClick={this._getTopRated}> top rated </Button>
          </Grid>

          <Grid item>
            <Button raised color='primary' onClick={this._getUpcoming}> upcoming </Button>
          </Grid>
        </Grid>

        {/* list of movies here */}
        <MovieList movies={this.state.movies} />
      </Grid>
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

export default withStyles(styles)(App);
