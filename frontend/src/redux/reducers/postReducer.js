function handlePosts(state = [], action) {
  switch (action.type) {
    case "SET_POSTS":
      return action.payload

    case "ADD_POST":
      return [...state, action.payload] 

    case "REMOVE_POST":
      return state.filter(post => post.id !== action.payload)

    default:
      return state
  }
}

export default handlePosts