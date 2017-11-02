const CurrentPageReducer = (state = 1, action) => {

  switch (action.type) {
    case 'SET_PAGE':
      return action.payload
    default:
      return state
  }

}

export default CurrentPageReducer