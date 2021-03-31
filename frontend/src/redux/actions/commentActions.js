import { postComment } from '../../services/api'

export const addComment = comment => {
  return dispatch => {
    dispatch({ type: "ADD_COMMENT", payload: comment })
  }
}