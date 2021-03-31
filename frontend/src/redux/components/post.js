import { Link } from 'react-router-dom'

export default function Post({ post, currentUser, deletePost }) {

  const renderCreatedAt = () => {
    const split = post.created_at.split('T')
    const time = split[1].split('.')[0]
    return <p>Created on: {split[0]} at: {time}</p>
  }

  const handleOnClick = () => {
    deletePost(post.id)
  }

  const renderDeleteButton = () => {
    return (
      <button onClick={handleOnClick}>Delete</button>
    )
  }

  return (
    // add link to post show page
    // <Link to={"/"} >
      <div>
        <h2>{post.title}</h2>
        {renderCreatedAt()}
        <p>By: {post.user.username}</p>
        {currentUser === post.user.username ? renderDeleteButton() : null}
      </div>
    // </Link>
  )
}