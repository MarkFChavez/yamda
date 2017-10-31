import React, { Component } from 'react'
import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button'
import { connect } from 'react-redux'
import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies
} from '../actions'

class MovieButtons extends Component {

  constructor (props) {
    super(props)

    this._getPopular = this._getPopular.bind(this)
    this._getTopRated = this._getTopRated.bind(this)
    this._getUpcoming = this._getUpcoming.bind(this)

    this.state = {
      selected: null
    }
  }

  render () {
    return (
      <Grid container spacing={8} justify='center'>
        <Grid item>
          <Button raised color='primary' onClick={this._getPopular}>
            <span style={{ textDecoration: this.state.selected === 'popular' ? 'underline' : 'none' }}>
              popular
            </span>
          </Button>
        </Grid>

        <Grid item>
          <Button raised color='primary' onClick={this._getTopRated}>
            <span style={{ textDecoration: this.state.selected === 'top_rated' ? 'underline' : 'none' }}>
              top rated
            </span>
          </Button>
        </Grid>

        <Grid item>
          <Button raised color='primary' onClick={this._getUpcoming}>
            <span style={{ textDecoration: this.state.selected === 'upcoming' ? 'underline' : 'none' }}>
              upcoming
            </span>
          </Button>
        </Grid>
    </Grid>
    )
  }

  _getPopular () {
    this.props.fetchPopularMovies()
    this.setState({ selected: 'popular' })
  }

  _getTopRated () {
    this.props.fetchTopRatedMovies()
    this.setState({ selected: 'top_rated' })
  }

  _getUpcoming () {
    this.props.fetchUpcomingMovies()
    this.setState({ selected: 'upcoming' })
  }

}

export default connect(
  null,
  { fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies }
)(MovieButtons)