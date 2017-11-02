const CurrentPageReducer = (state = 1, action) => {

  switch (action.type) {
    case 'STORE_CURRENT_PAGE':
      return action.payload
    default:
      return state
  }

}

export default CurrentPageReducer