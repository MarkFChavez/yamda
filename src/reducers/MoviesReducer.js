const MoviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SUCCESS_MOVIES_FETCHED':
      return action.payload
    default:
      return state
  }
  return state
}

export default MoviesReducer