import { fetchPosts } from '../../services/api'

export const getPosts = boardName => {
  return (dispatch) => {
    console.log(boardName)
    dispatch({ type: "FETCHING" })
    fetchPosts(boardName).then(response => {
      console.log(response)
      // dispatch({type: "SET_POSTS", payload: response})
    })
  }
}

// todo: addPost, removePost