import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "material-ui/Grid";
import Spinner from "react-spinkit";
import MovieItem from "./MovieItem";

const IMAGE_PATH = "https://image.tmdb.org/t/p/w185_and_h278_bestv2";

const styles = {
  container: { flexGrow: 1 },
  moviesContainer: { marginTop: "10px" }
};

class MovieList extends Component {
  render() {
    return (
      <Grid container spacing={0} justify="center">
        <Grid item lg={8} md={8} sm={8} xs={12}>
          {this._renderMovies()}
        </Grid>
      </Grid>
    );
  }

  _renderMovies() {
    if (this.props.fetchingMovies) {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px"
          }}
        >
          <Spinner name="folding-cube" />
        </div>
      );
    }

    return this.props.movies.map(movie => {
      return (
        <div style={{ flexGrow: 1 }}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <MovieItem movie={movie} />
            </Grid>
          </Grid>
        </div>
      );
    });
  }
}

function stateToProps({ movies, fetchingMovies }) {
  return { movies, fetchingMovies };
}

export default connect(stateToProps)(MovieList);
