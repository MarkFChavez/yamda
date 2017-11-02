import { popular, topRated, upcoming } from '../helpers/api'

/* SET CURRENT PAGE */
export function setCurrentPage (page) {
  return {
    type: 'SET_PAGE',
    payload: page
  }
}

/* SELECTED CATEGORY */
export function setSelectedCategory (category) {
  return {
    type: 'SET_CATEGORY',
    payload: category
  }
}

/* MOVIES */

export function fetchPopularMovies (page = 1) {
  return (dispatch) => _handlePromise(dispatch, popular(page))
}

export function fetchTopRatedMovies (page = 1) {
  return (dispatch) => _handlePromise(dispatch, topRated(page))
}

export function fetchUpcomingMovies (page = 1) {
  return (dispatch) => _handlePromise(dispatch, upcoming(page))
}

function _onSuccess (dispatch, data) {
  dispatch({
    type: 'SUCCESS_MOVIES_FETCHED',
    payload: data.results
  })

  dispatch({
    type: 'STORE_CURRENT_PAGE',
    payload: data.page
  })

  dispatch({ type: 'FETCHING_ENDED' })
}

function _onError (dispatch) {
  dispatch({
    type: 'FAIL_MOVIES_FETCHED',
    payload: 'Something went wrong'
  })

  dispatch({ type: 'FETCHING_ENDED' })
}

function _handlePromise(dispatch, promise) {
  dispatch({ type: 'FETCHING_STARTED' }) // start loading

  promise
    .then(data => {
      console.log(data)
      _onSuccess(dispatch, data)
    })
    .catch(error => _onError(dispatch))
}
