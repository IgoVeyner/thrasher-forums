function handleBoards(state = [], action) {
  switch (action.type) {
    case "ADD_BOARDS":
      return [...state, action.payload]

    default:
      return state
  }
}

export default handleBoards