import { fetchPosts, destroyPost } from '../../services/api'

export const getPosts = boardName => {
  return dispatch => {
    dispatch({ type: "FETCHING" })
    fetchPosts(boardName).then(response => {
      dispatch({ type: "SET_POSTS", payload: response.posts })
    })
  }
}

export const addPost = post => {
  return dispatch => {
   dispatch({ type: "ADD_POST", payload: post })
  }
}

export const removePost = id => {
  return dispatch => {
    dispatch({ type: "FETCHING" })
    destroyPost(id)
    .then(response => {
      dispatch({ type: "REMOVE_POST", payload: id})
    })
  }
}