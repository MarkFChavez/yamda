import React, { Component } from "react"
import Paper from "material-ui/Paper"
import Card, { CardMedia, CardContent } from "material-ui/Card"
import Typography from "material-ui/Typography"
import genres from "../helpers/genres"

const IMAGE_PATH = "https://image.tmdb.org/t/p/w185_and_h278_bestv2"

const styles = {
  card: { display: 'flex' },
  content: { flex: '1 0 auto' },
  details: { display: 'flex', flexDirection: 'column' },
  cover: { "min-width": 151, "min-height": 151 }
}

class MovieItem extends Component {

  render () {
    const movie = this.props.movie

    return (
      <div style={{ marginTop: '10px' }}>

        <Card style={styles.card}>

          <CardMedia
            image={`${IMAGE_PATH}/${movie.poster_path}`}
            title={movie.title}
            style={styles.cover} />

          <div style={styles.details}>
            {/* CARD CONTENT */}
            <CardContent style={styles.content}>
              <Typography type='headline'>
                <strong> {movie.title.toUpperCase()} </strong>
              </Typography>

              {this._renderGenres(movie)}

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

  _renderGenres(movie) {
    const names = movie.genre_ids.map(id => {
      let genre = genres.find(genre => id === genre.id)
      return genre.name.toUpperCase()
    }).join(', ')

    return (
      <Typography type='caption'>
        <span> {names} </span>
      </Typography>
    )
  }

}



export default MovieItem
