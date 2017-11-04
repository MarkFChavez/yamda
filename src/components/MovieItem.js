import React, { Component } from "react"
import Paper from "material-ui/Paper"
import Card, { CardMedia, CardContent } from "material-ui/Card"
import Typography from "material-ui/Typography"
import genres from "../helpers/genres"
import Hidden from "material-ui/Hidden"

const IMAGE_PATH = "https://image.tmdb.org/t/p/w185_and_h278_bestv2"

const styles = {
  card: { display: 'flex' },
  content: { flex: '1 0 auto' },
  details: { display: 'flex', flexDirection: 'column' },
  cover: { minWidth: 151, minHeight: 151 },
  uppercase: { textTransform: 'uppercase' }
}

class MovieItem extends Component {

  render () {
    const movie = this.props.movie

    return (
      <div style={{ marginTop: '10px' }}>

        <Card style={styles.card}>

          <Hidden xsDown>
            <CardMedia
              image={`${IMAGE_PATH}/${movie.poster_path}`}
              title={movie.title}
              style={styles.cover} />
          </Hidden>

          <div style={styles.details}>
            {/* CARD CONTENT */}
            <CardContent style={styles.content}>
              <Typography type='headline'>
                <strong> {movie.title.toUpperCase()} </strong>
              </Typography>


              <div>
                <small> 
                  <u>RATING</u> {movie.vote_average}
                </small>

                <Typography type='caption'>
                  <span style={styles.uppercase}> {this._getGenres(movie)} </span>
                </Typography>
              </div>

              <div style={{ marginTop: '10px' }}>
                <p>
                  <span> {movie.overview} </span>
                </p>
              </div>
            </CardContent>
          </div>

        </Card>

      </div>
    )
  }

  _getGenres(movie) {
    return movie.genre_ids
      .map(id => genres[`${id}`])
      .filter(genre => genre !== undefined || genre !== null)
      .join(", ")
  }

}



export default MovieItem
