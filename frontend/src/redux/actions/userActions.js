import { fetchProfile } from './services/api'

export const getUser = () => {
  return (dispatch) => {
    fetchProfile().then(response => {
      dispatch({type: 'SET_USER', payload: response})
    })
  }
}