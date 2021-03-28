function handleBusy(state = false, action) {
  switch (action.type) {
    case "FETCHING":
      return true

    case "DONE_FETCHING":
      return false

    case "SET_USER":
      return false

    case "SET_BOARDS":
      return false

    default:
      return state
  }
}

export default handleBusy