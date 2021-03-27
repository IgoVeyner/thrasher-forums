import { getToken } from './localstorage'

const URL = 'http://localhost:3000/api/v1/'
const headers = { 'Content-Type': 'application/json', 'Accepts': 'application/json' }

const authHeaders = () => ({
  Authorization: `Bearer ${getToken()}`
})

const parseJSON = res => res.json()

export const postUser = user => {
  return fetch(URL + "users", {
    method: "POST",
    headers,
    body: JSON.stringify(user)
  })
  .then(parseJSON)
}

export const fetchLogin = credentials => {
  return fetch(URL + 'auth', {
    method: 'POST',
    headers,
    body: JSON.stringify(credentials)
  })
  .then(parseJSON)
} 

export const fetchProfile = () => {
  return fetch(URL + 'profile', {
    headers: authHeaders()
  })
  .then(parseJSON)
}

export const fetchBoards = () => {
  return fetch(URL + 'boards', {
    headers: authHeaders()
  })
  .then(parseJSON)
}