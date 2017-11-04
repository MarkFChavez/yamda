import React, { Component } from 'react'
import Header from './components/Header'
import MovieList from './components/MovieList'
import MovieButtons from './components/MovieButtons'
import Pagination from './components/Pagination'
import PaginationStatus from './components/PaginationStatus'
import Attribution from './components/Attribution'
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
        <PaginationStatus />

        <MovieList />

        <Attribution logo={logo} />
      </Grid>
    );
  }

}

export default App;
