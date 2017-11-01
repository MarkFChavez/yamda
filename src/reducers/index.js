import { combineReducers } from 'redux'
import MoviesReducer from './MoviesReducer'
import FetchingReducer from './FetchingReducer'

export default combineReducers({
  movies: MoviesReducer,
  fetchingMovies: FetchingReducer
})