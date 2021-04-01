function handleComments(state = [], action) {
  switch (action.type) {
    case "SET_COMMENTS":
      return action.payload
      
    case "ADD_COMMENT":
      return [...state, action.payload]

    case "REMOVE_COMMENT":
      return state.filter(comment => comment.id !== action.payload)
  
    default:
      break
  }
}