import { popular, topRated, upcoming } from '../helpers/api'

export function fetchPopularMovies () {
  return (dispatch) => {
    popular()
    .then(data => _onSuccess(dispatch, data))
    .catch(error => _onError(dispatch))
  }
}

export function fetchTopRatedMovies () {
  return (dispatch) => {
    topRated()
    .then(data => _onSuccess(dispatch, data))
    .catch(error => _onError(dispatch))
  }
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