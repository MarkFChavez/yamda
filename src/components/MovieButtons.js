import React, { Component } from 'react'
import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button'
import { connect } from 'react-redux'
import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
  setSelectedCategory,
  setCurrentPage
} from '../actions'

class MovieButtons extends Component {

  constructor (props) {
    super(props)

    this._getPopular = this._getPopular.bind(this)
    this._getTopRated = this._getTopRated.bind(this)
    this._getUpcoming = this._getUpcoming.bind(this)
  }

  render () {
    return (
      <Grid container spacing={0} justify='center'>
        <Grid item>
          <Button raised color={this.props.selectedCategory === 'popular' ? 'primary' : 'default'} onClick={this._getPopular}>
            popular
          </Button>
        </Grid>

        <Grid item>
          <Button raised color={this.props.selectedCategory === 'top_rated' ? 'primary' : 'default'} onClick={this._getTopRated}>
            top rated
          </Button>
        </Grid>

        <Grid item>
          <Button raised color={this.props.selectedCategory === 'upcoming' ? 'primary' : 'default'} onClick={this._getUpcoming}>
            upcoming
          </Button>
        </Grid>
      </Grid>
    )
  }

  /* lifecycle methods */
  componentDidMount () {
    this.props.fetchPopularMovies(1)
  }

  /* private functions */
  _getPopular () {
    this.props.fetchPopularMovies(1)
    this.props.setCurrentPage(1)
    this.props.setSelectedCategory('popular')
  }

  _getTopRated () {
    this.props.fetchTopRatedMovies(1)
    this.props.setCurrentPage(1)
    this.props.setSelectedCategory('top_rated')
  }

  _getUpcoming () {
    this.props.fetchUpcomingMovies(1)
    this.props.setCurrentPage(1)
    this.props.setSelectedCategory('upcoming')
  }

}

function stateToProps (state) {
  return { selectedCategory: state.selectedCategory }
}

export default connect(
  stateToProps,
  { fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies, setSelectedCategory, setCurrentPage }
)(MovieButtons)