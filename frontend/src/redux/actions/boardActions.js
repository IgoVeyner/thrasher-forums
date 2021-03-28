import { fetchBoards } from '../../services/api'

export const getBoards = () => {
  return (dispatch) => {
    dispatch({ type: "FETCHING" })
    fetchBoards().then(response => {
      dispatch({type: "SET_BOARDS", payload: response.boards})
    })
  }
}