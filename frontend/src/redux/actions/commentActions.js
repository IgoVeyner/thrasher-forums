import { postComment, destroyComment } from '../../services/api'

export const submitCommentAction = (comments, comment, setComments) => {
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

export const removeComment = (id, comments, setComments) => {
  return dispatch => {
    destroyComment(id)
    .then(() => {
      setComments(comments.filter(comment => comment.id !== id))
      dispatch({ type: "REMOVE_COMMENT" })
    })
  }
}