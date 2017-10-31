import React, { Component } from 'react'
import MovieList from './components/MovieList'
import MovieButtons from './components/MovieButtons'

import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'
import logo from './assets/powered-by-rectangle-blue.svg'

const styles = theme => ({
  large: {
    fontSize: '40px',
    fontWeight: 'bolder',
  },
  center: { textAlign: 'center' },
  uppercase: { textTransform: 'uppercase' }
})

class App extends Component {

  constructor (props) {
    super(props)
  }

  render() {
    const { large, center, uppercase } = this.props.classes

    return (
      <Grid container>
        <Grid item xs={12}>
          <div className={center}>
            <span className={large}> YAMDA. </span>

            <div>
              <span className={uppercase}>
                Yet Another Movie Database App
              </span>
            </div>
          </div>
        </Grid>

        {/* buttons for showing movie listings */}
        <MovieButtons />

        {/* list of movies here */}
        <MovieList />

        <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
          <a href='https://www.themoviedb.org'>
            <img src={logo} width={128} height={64} />
          </a>
        </div>
      </Grid>
    );
  }

}

export default withStyles(styles)(App);
