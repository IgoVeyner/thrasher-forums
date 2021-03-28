import { fetchPosts } from '../../services/api'

export const getPosts = boardName => {
  return dispatch => {
    dispatch({ type: "FETCHING" })
    fetchPosts(boardName).then(response => {
      // todo: 
      // after adding posts to backend and updating serializer, send posts in dispatch below
      console.log(response)
      // dispatch({type: "SET_POSTS", payload: response})
    })
  }
}

// todo: addPost, removePost