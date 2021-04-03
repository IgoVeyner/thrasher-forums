import { Link } from 'react-router-dom'

export default function Post({ post, currentUser, deletePost }) {

  const user = post.user.username
  const title = post.title
  const id = post.id
  const createdAt = post.created_at

  const renderCreatedAt = () => {
    const split = createdAt.split('T')
    const time = split[1].split('.')[0]
    return <p className="post-description time">c: {split[0]} | at: {time}</p>
  }

  const handleOnClick = event => {
    event.preventDefault() // since the whole component is a link clicking on the button will redirect
    deletePost(id)
  }

  const renderDeleteButton = () => {
    return (
      <button onClick={handleOnClick} className="delete button">
        <span className="delete-text">
          delete
        </span>
      </button>
    )
  }

  return (
    <Link to={`/posts/${id}`} className="post-link" >
      <div className="post-text">
        <h2 className="post-title">{title}</h2>
        {currentUser === user ? renderDeleteButton() : <p></p>}
        <p className="post-description">u: {user}</p>
        {renderCreatedAt()}
      </div>
    </Link>
  )
}