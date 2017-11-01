const FetchingReducer = (state = false, action) => {
  switch (action.type) {
    case 'FETCHING_STARTED':
      return true
    case 'FETCHING_ENDED':
      return false
    default:
      return state
  }
}

export default FetchingReducer