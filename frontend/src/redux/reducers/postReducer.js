function handlePosts(state = [], action) {
  switch (action.type) {
    case "SET_POSTS":
      return action.payload

    case "ADD_POST":
      if (action.payload) {
        return [...state, action.payload]
      } else {
        return state
      }

    case "REMOVE_POST":
      return state.filter(post => post.id !== action.payload)

    default:
      return state
  }
}

export default handlePosts