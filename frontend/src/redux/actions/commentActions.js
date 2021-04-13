import { postComment, destroyComment } from '../services/api'

export const submitComment = setComments => {
  return dispatch => {
    dispatch({ type: "FETCHING" })
      postComment(comment)
      .then(data => {
        if (data.error) {
          alert(data.messages)
        }
  
        if (data.comment) {
          setComments([...comments, data.comment])
          dispatch({ type: "ADD_COMMENT" })
        }
      })
  }
}