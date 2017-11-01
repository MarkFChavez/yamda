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
      selected: 'popular'
    }
  }

  render () {
    return (
      <Grid container spacing={8} justify='center'>
        <Grid item>
          <Button raised color={this.state.selected === 'popular' ? 'primary' : 'none'} onClick={this._getPopular}>
            popular
          </Button>
        </Grid>

        <Grid item>
          <Button raised color={this.state.selected === 'top_rated' ? 'primary' : 'none'} onClick={this._getTopRated}>
            top rated
          </Button>
        </Grid>

        <Grid item>
          <Button raised color={this.state.selected === 'upcoming' ? 'primary' : 'none'} onClick={this._getUpcoming}>
            upcoming
          </Button>
        </Grid>
    </Grid>
    )
  }

  /* lifecycle methods */
  componentDidMount () {
    this.props.fetchPopularMovies()
  }

  /* private functions */
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