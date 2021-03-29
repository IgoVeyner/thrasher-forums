function handleBusy(state = false, action) {
  switch (action.type) {
    case "FETCHING":
      return true

    case "DONE_FETCHING":
    case "SET_USER":
    case "SET_BOARDS":
    case "SET_POSTS":
    case "ADD_POST":
    case "REMOVE_POST":
      return false

    default:
      return state
  }
}

export default handleBusy