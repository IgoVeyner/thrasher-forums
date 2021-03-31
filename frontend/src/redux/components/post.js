import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchUser } from '../../services/api'

export default function Post({ post, currentUser, deletePost }) {

  const [user, setUser] = useState('')

  const renderCreatedAt = () => {
    const split = post.created_at.split('T')
    const time = split[1].split('.')[0]
    return <p>Created on: {split[0]} at: {time}</p>
  }

  const getUserData = () => {
    fetchUser(post.user_id)
    .then(response => {
      setUser(response.user.username)
    })
  }

  const handleOnClick = () => {
    deletePost(post.id)
  }

  const renderDeleteButton = () => {
    return (
      <button onClick={handleOnClick}>Delete</button>
    )
  }

  useEffect(() => {
    getUserData()
  }, [])

  return (
    // add link to post show page
    // <Link to={"/"} >
      <div>
        <h2>{post.title}</h2>
        {renderCreatedAt()}
        <p>By: {user}</p>
        {currentUser === user ? renderDeleteButton() : null}
      </div>
    // </Link>
  )
}