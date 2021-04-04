export default function PostShow({ post, deletePost, currentUser }) {

  const title = post.title
  const text = post.text
  const username = post.user.username
  const createdAt = post.created_at
  
  const renderCreatedAt = () => {
    const split = createdAt.split('T')
    const time = split[1].split('.')[0]
    return <p className="post-text">c: {split[0]} | at: {time}</p>
  }

  const renderDeleteButton = () => {
    return (
      <button onClick={() => deletePost(post.id)}>Delete</button>
    )
  }

  return (
    <div>
      <h1 className="post-show-title thrasher">{title}</h1>
      <p className="post-text">u: {username}</p>
      <p className="post-show-description">{text}</p>
      {currentUser === username ? renderDeleteButton() : null}
      {renderCreatedAt()}
    </div>
  )
}