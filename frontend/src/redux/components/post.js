import { Link } from 'react-router-dom'

export default function Post({ post, currentUser, deletePost }) {

  const user = post.user.username
  const title = post.title
  const id = post.id
  const createdAt = post.created_at

  const renderCreatedAt = () => {
    const split = createdAt.split('T')
    const time = split[1].split('.')[0]
    return <p>Created on: {split[0]} at: {time}</p>
  }

  const handleOnClick = event => {
    event.preventDefault() // since the whole component is a link clicking on the button will redirect
    deletePost(id)
  }

  const renderDeleteButton = () => {
    return (
      <button onClick={handleOnClick}>Delete</button>
    )
  }

  return (
    <Link to={`/posts/${id}`} >
      <div>
        <h2>{title}</h2>
        {renderCreatedAt()}
        <p>By: {user}</p>
        {currentUser === user ? renderDeleteButton() : null}
      </div>
    </Link>
  )
}