import React, { Component } from "react"
import Grid from "material-ui/Grid"
import Button from "material-ui/Button"
import { connect } from "react-redux"
import {
  setCurrentPage,
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies
} from "../actions"

class Pagination extends Component {
  constructor(props) {
    super(props)

    this._prevPage = this._prevPage.bind(this)
    this._nextPage = this._nextPage.bind(this)
  }

  render() {
    return (
      <Grid
        style={{ marginTop: "10px" }}
        container
        spacing={0}
        justify="center"
      >
        <Grid item>
          <Button raised dense disabled={this.props.currentPage === 1} onClick={this._prevPage}>  prev </Button>
        </Grid>

        <Grid item>
          <Button raised dense disabled={this.props.currentPage === this.props.totalPages} onClick={this._nextPage}> next </Button>
        </Grid>
      </Grid>
    )
  }

  _nextPage() {
    const next = this.props.currentPage + 1

    this.props.setCurrentPage(next)

    switch (this.props.selectedCategory) {
      case "popular":
        this.props.fetchPopularMovies(next)
        break
      case "top_rated":
        this.props.fetchTopRatedMovies(next)
        break
      case "upcoming":
        this.props.fetchUpcomingMovies(next)
        break
      default:
        this.props.fetchPopularMovies(next)
    }
  }

  _prevPage() {
    const prev = this.props.currentPage - 1

    this.props.setCurrentPage(prev)

    switch (this.props.selectedCategory) {
      case "popular":
        this.props.fetchPopularMovies(prev)
        break
      case "top_rated":
        this.props.fetchTopRatedMovies(prev)
        break
      case "upcoming":
        this.props.fetchUpcomingMovies(prev)
        break
      default:
        this.props.fetchPopularMovies(prev)
    }
  }
}

function stateToProps(state) {
  const { currentPage, totalPages, selectedCategory } = state
  return { currentPage, totalPages, selectedCategory }
}

export default connect(stateToProps, {
  setCurrentPage,
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies
})(Pagination)
