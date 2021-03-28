function handleBusy(state = false, action) {
  switch (action.type) {
    case "FETCHING":
      return true

    case "DONE_FETCHING":
      return false

    default:
      return state
  }
}

export default handleBusy