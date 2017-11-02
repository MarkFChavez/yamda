import { popular, topRated, upcoming } from '../helpers/api'

export function setSelectedCategory (category) {
  return {
    type: 'SET_CATEGORY',
    payload: category
  }
}

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
