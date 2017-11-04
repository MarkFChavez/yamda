import React, { Component } from "react"
import { connect } from "react-redux"
import Grid from "material-ui/Grid"
import Spinner from "react-spinkit"
import MovieItem from "./MovieItem"

const styles = {
  container: { flexGrow: 1 },
  moviesContainer: { paddingLeft: '5px', paddingRight: '5px' },
  spinnerContainer: { display: "flex", justifyContent: "center", marginTop: "50px" }
}

class MovieList extends Component {
  render() {
    return (
      <Grid container spacing={0} justify="center">
        <Grid item lg={8} md={8} sm={8} xs={12}>
          <div style={styles.moviesContainer}>
            {this._renderMovies()}
          </div>
        </Grid>
      </Grid>
    )
  }

  _renderMovies() {
    if (this.props.fetchingMovies) {
      return (
        <div style={styles.spinnerContainer}>
          <Spinner name="folding-cube" />
        </div>
      )
    }

    return this.props.movies.map(movie => {
      return (
        <MovieItem key={movie.id} movie={movie} />
      )
    })
  }
}

function stateToProps({ movies, fetchingMovies }) {
  return { movies, fetchingMovies }
}

export default connect(stateToProps)(MovieList)

