function handleBusy(state = false, action) {
  switch (action.type) {
    case "FETCHING":
      return true

    case "DONE_FETCHING":
    case "SET_USER":
    case "SET_BOARDS":
    case "SET_POSTS":
    case "SET_POST":
    case "ADD_POST":
    case "REMOVE_POST":
    case "SET_COMMENTS":
    case "ADD_COMMENT":
    case "REMOVE_COMMENT":
      return false

    default:
      return state
  }
}

export default handleBusy