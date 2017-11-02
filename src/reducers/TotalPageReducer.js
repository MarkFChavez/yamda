const TotalPageReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_TOTAL_PAGE':
      return action.payload
    default:
      return state
  }
}

export default TotalPageReducer