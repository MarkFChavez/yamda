import { combineReducers } from 'redux'
import MoviesReducer from './MoviesReducer'
import FetchingReducer from './FetchingReducer'
import CurrentPageReducer from './CurrentPageReducer'
import SelectedCategoryReducer from './SelectedCategoryReducer'

export default combineReducers({
  movies: MoviesReducer,
  fetchingMovies: FetchingReducer,
  currentPage: CurrentPageReducer,
  selectedCategory: SelectedCategoryReducer
})