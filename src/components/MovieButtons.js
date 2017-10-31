import React, { Component } from 'react'
import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button'
import { connect } from 'react-redux'
import { popular, topRated, upcoming } from '../helpers/api'

class MovieButtons extends Component {

  constructor (props) {
    super(props)

    /* bind methods */
    this._getPopular = this._getPopular.bind(this)
    this._getTopRated = this._getTopRated.bind(this)
    this._getUpcoming = this._getUpcoming.bind(this)
    this._setMovies = this._setMovies.bind(this)
  }

  render () {
    return (
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
    )
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

export default connect()(MovieButtons)