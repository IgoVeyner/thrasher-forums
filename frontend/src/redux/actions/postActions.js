import { fetchPosts, postPost } from '../../services/api'

export const getPosts = boardName => {
  return dispatch => {
    dispatch({ type: "FETCHING" })
    fetchPosts(boardName).then(response => {
      dispatch({ type: "SET_POSTS", payload: response.board.posts })
    })
  }
}

export const addPost = post => {
  return dispatch => {
    dispatch({type: "FETCHING" })
    postPost(post).then(response => {
      console.log(response)
      // dispatch({ type: "ADD_POST", payload: response.post })
    })
  }
}

// todo: removePost