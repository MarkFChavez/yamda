import React, { Component } from 'react'
import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button'
import { connect } from 'react-redux'
import {
  fetchPopularMovies,
  fetchTopRatedMovies
} from '../actions'

class MovieButtons extends Component {

  constructor (props) {
    super(props)

    this._getPopular = this._getPopular.bind(this)
    this._getTopRated = this._getTopRated.bind(this)
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
          <Button raised color='primary'> upcoming </Button>
        </Grid>
    </Grid>
    )
  }

  _getPopular () {
    this.props.fetchPopularMovies()
  }

  _getTopRated () {
    this.props.fetchTopRatedMovies()
  }

}

export default connect(
  null,
  { fetchPopularMovies, fetchTopRatedMovies }
)(MovieButtons)