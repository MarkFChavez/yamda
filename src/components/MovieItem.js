import React, { Component } from 'react'
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import genres from "../helpers/genres";
import Chip from "material-ui/Chip";

const styles = {
  movie: { margin: "10px 5px 0px 5px", padding: "5px" },
  movieTitle: {
    textTransform: "uppercase",
    fontWeight: "bold",
    textDecoration: "underline"
  },
  row: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: { margin: "2px" }
}

class MovieItem extends Component {

  render () {
    const { movie } = this.props

    return (
      <Paper key={movie.id} style={styles.movie} elevation={6}>
        {this._renderContent(movie)}
      </Paper>
    )
  }

  _renderContent (movie) {
    return (
      <div>
        <div>
          <Typography type="subheading">
            <span style={styles.movieTitle}> {movie.title} </span>
          </Typography>
        </div>

        <div style={styles.row}>{this._renderGenres(movie)}</div>

        <div>
          <span style={{ textAlign: "justify" }}>
            {movie.overview}
          </span>
        </div>
      </div>
    )
  }

  _renderGenres(movie) {
    return movie.genre_ids.map(id => {
      let genre = genres.find(genre => id === genre.id);

      return <Chip key={id} label={genre.name} style={styles.chip} />;
    });
  }

}



export default MovieItem