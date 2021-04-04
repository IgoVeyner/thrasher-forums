export default function Comment({ comment, deleteComment, currentUser }) {

  const username = comment.user.username
  const text = comment.text
  const createdAt = comment.created_at

  const renderCreatedAt = () => {
    const split = createdAt.split('T')
    const time = split[1].split('.')[0]
    return <p className="comment-created">c: {split[0]} | at: {time}</p>
  }

  const renderDeleteButton = () => {
    return (
      <button onClick={() => deleteComment(comment.id)} className="comment-delete button">
        <span className="delete-text">
          Delete 
        </span>
      </button>
    )
  }
  
  return (
    <div className="comment-container">
      <p className="comment-user">{username}: </p>
      <p className="comment-text">{text}</p>

      <div className="comment-footer">
        {renderCreatedAt()}
        {currentUser === username ? renderDeleteButton() : null}
      </div>
    </div>
  )
}