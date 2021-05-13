import { getToken } from './localstorage'

const URL = 'http://localhost:3000/api/v1/'

const headers = { 'Content-Type': 'application/json', 'Accepts': 'application/json' }
const fullHeaders = {
  'Content-Type': 'application/json', 
  'Accepts': 'application/json',
  'Authorization': `Bearer ${getToken()}`
}

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

export const postPost = post => {
  return fetch(URL + "posts", {
    method: 'POST',
    headers: fullHeaders,
    body: JSON.stringify(post)
  })
  .then(parseJSON)
}

export const postComment = comment => {
  return fetch(URL + "comments", {
    method: `POST`,
    headers: fullHeaders,
    body: JSON.stringify(comment)
  })
  .then(parseJSON)
}

export const destroyPost = id => {
  return fetch(URL + `posts/${id}`, {
    method: "DELETE",
    headers: fullHeaders
  })
  .then(parseJSON)
}

export const destroyComment = id => {
  return fetch(URL + `comments/${id}`, {
    method: "DELETE",
    headers: fullHeaders
  })
  .then(parseJSON)
}

const authFetch = path => {
  return fetch(URL + path, {
    headers:  {Authorization: `Bearer ${getToken()}` }
  })
  .then(parseJSON)
}


export const fetchProfile = () => authFetch("profile")
export const fetchBoards = () => authFetch("boards")
export const fetchPosts = boardName => authFetch(`posts/${boardName}`)
export const fetchUser = id => authFetch(`users/${id}`)
export const fetchPost = id => authFetch(`posts/${id}`)