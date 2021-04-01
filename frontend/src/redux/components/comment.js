export default function Comment({ comment, deleteComment, currentUser }) {

  const username = comment.user.username
  const text = comment.text
  const createdAt = comment.created_at

  const renderCreatedAt = () => {
    const split = createdAt.split('T')
    const time = split[1].split('.')[0]
    return <p>Created on: {split[0]} at: {time}</p>
  }
  
  console.log(currentUser)

  return (
    <div>
      <p>User: {username}</p>
      <p>{text}</p>
      {renderCreatedAt()}
    </div>
  )
}