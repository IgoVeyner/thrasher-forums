import { fetchProfile } from '../../services/api'

export const getUser = () => {
  return (dispatch) => {
    dispatch({ type: "FETCHING" })
    fetchProfile().then(response => {
      dispatch({ type: 'SET_USER', payload: response.username })
    })
  }
}

export const setFetchedUser = (username) => {
  return (dispatch) => {
    dispatch({ type: 'SET_USER', payload: username })
  }
}

export const clearUser = () => {
  return (dispatch) => {
    dispatch({ type: 'CLEAR_USER' })
  }
}