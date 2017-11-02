import React, { Component } from 'react'
import MovieList from './components/MovieList'
import MovieButtons from './components/MovieButtons'
import Header from './components/Header'
import Pagination from './components/Pagination'
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
        <Pagination />
        <MovieList />

        <div style={{ position: 'fixed', bottom: '10px', right: '0px' }}>
          <a href='https://www.themoviedb.org' target='_blank'>
            <img src={logo} width={92} height={64} />
          </a>
        </div>
      </Grid>
    );
  }

}

export default App;
