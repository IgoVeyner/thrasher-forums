import { fetchPosts, fetchPost, destroyPost, postPost } from '../../services/api'

export const getPosts = (boardName, setFetched) => {
  return dispatch => {
    dispatch({ type: "FETCHING" })
    fetchPosts(boardName.name).then(response => {
      if (response.posts) {
        dispatch({ type: "SET_POSTS", payload: response.posts })
      } else {
        dispatch({ type: "SET_POSTS" })
      }
      setFetched(true)
    })
  }
}

export const getPost = (id, setFetched, setPost, setComments) => {
  return dispatch => {
    dispatch({ type: "FETCHING" })
    fetchPost(id)
    .then(data => {

      if (data.post) {
        setPost(data.post)
        if (data.comments) {
          setComments(data.comments)
        }
        dispatch({ type: "SET_POST" })
      }

      setFetched(true)
    })
  }
}

export const sendPost = post => {
  return dispatch => {
    dispatch({ type: "FETCHING" })
    postPost(post)
    .then(data => {
      if (data.error) {
        alert(data.messages)
      }

      if (data.post) {
        dispatch({ type: "ADD_POST", payload: data.post })
      }

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