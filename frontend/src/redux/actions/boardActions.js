import { fetchBoards } from '../../services/api'

export const getBoards = () => {
  return (dispatch) => {
    fetchBoards().then(response => {
      dispatch({type: "SET_BOARDS", payload: response.boards})
    })
  }
}