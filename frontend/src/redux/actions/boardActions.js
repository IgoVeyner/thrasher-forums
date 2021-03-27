import { fetchBoards } from '../../services/api'

export const getBoards = () => {
  return (dispatch) => {
    fetchBoards().then(response => {
      dispatch({type: "ADD_BOARDS", payload: response})
    })
  }
}