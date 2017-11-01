import React, { Component } from 'react'
import MovieList from './components/MovieList'
import MovieButtons from './components/MovieButtons'
import Header from './components/Header'
import Grid from 'material-ui/Grid'
import logo from './assets/primary-blue.svg'

class App extends Component {

  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>

        <MovieButtons />
        <MovieList />

        <div style={{ position: 'fixed', bottom: '10px', right: '10px' }}>
          <a href='https://www.themoviedb.org' target='_blank'>
            <img src={logo} width={128} height={64} />
          </a>
        </div>
      </Grid>
    );
  }

}

export default App;
