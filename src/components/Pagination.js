import React, { Component } from 'react'
import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button'
import { connect } from 'react-redux'
import { setCurrentPage, fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies } from '../actions'

class Pagination extends Component {

  constructor (props) {
    super(props)

    this._nextPage = this._nextPage.bind(this)
  }

  render () {
    return (
      <Grid style={{ marginTop: '10px' }} container spacing={0} justify='center'>
        <Grid item>
          <Button raised dense color='default'>
            prev
          </Button>
        </Grid>

        <Grid item>
          <Button raised dense color='default' onClick={this._nextPage}>
            next
          </Button>
        </Grid>
      </Grid>
    )
  }

  _nextPage () {
    const next = this.props.currentPage + 1

    this.props.setCurrentPage(next)

    switch (this.props.selectedCategory) {
      case 'popular':
        this.props.fetchPopularMovies(next)
        break
      case 'top_rated':
        this.props.fetchTopRatedMovies(next)
        break
      case 'upcoming':
        this.props.fetchUpcomingMovies(next)
        break
      default:
        this.props.fetchPopularMovies(next)
    }
  }

}

function stateToProps (state) {
  return { currentPage: state.currentPage, selectedCategory: state.selectedCategory }
}

export default connect(
  stateToProps,
  { setCurrentPage, fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies }
)(Pagination)