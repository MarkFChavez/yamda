import { combineReducers } from 'redux'
import MoviesReducer from './MoviesReducer'
import FetchingReducer from './FetchingReducer'
import CurrentPageReducer from './CurrentPageReducer'
import TotalPageReducer from './TotalPageReducer'
import SelectedCategoryReducer from './SelectedCategoryReducer'

export default combineReducers({
  movies: MoviesReducer,
  fetchingMovies: FetchingReducer,
  currentPage: CurrentPageReducer,
  totalPages: TotalPageReducer,
  selectedCategory: SelectedCategoryReducer
})