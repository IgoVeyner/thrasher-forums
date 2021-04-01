export default function Comment({ comment, deleteComment, currentUser }) {

  const username = comment.user.username
  const text = comment.text
  const createdAt = comment.created_at

  const renderCreatedAt = () => {
    const split = createdAt.split('T')
    const time = split[1].split('.')[0]
    return <p>Created on: {split[0]} at: {time}</p>
  }

  const renderDeleteButton = () => {
    return (
      <button onClick={() => deleteComment(comment.id)} >Delete</button>
    )
  }
  
  return (
    <div>
      <p>User: {username}</p>
      <p>{text}</p>
      {renderCreatedAt()}
      {currentUser === username ? renderDeleteButton() : null}
    </div>
  )
}