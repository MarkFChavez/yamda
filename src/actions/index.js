import { popular, topRated, upcoming } from '../helpers/api'

export function fetchPopularMovies () {
  return (dispatch) => _handlePromise(dispatch, popular())
}

export function fetchTopRatedMovies () {
  return (dispatch) => _handlePromise(dispatch, topRated())
}

export function fetchUpcomingMovies () {
  return (dispatch) => _handlePromise(dispatch, upcoming())
}

function _onSuccess (dispatch, data) {
  dispatch({
    type: 'SUCCESS_MOVIES_FETCHED',
    payload: data.results
  })
}

function _onError (dispatch) {
  dispatch({
    type: 'FAIL_MOVIES_FETCHED',
    payload: 'Something went wrong'
  })
}

function _handlePromise(dispatch, promise) {
  promise
    .then(data => _onSuccess(dispatch, data))
    .catch(error => _onError(dispatch))
}
