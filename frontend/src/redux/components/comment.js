export default function Comment({ comment }) {

  const username = comment.user.username
  const text = comment.text
  
  return (
    <div>
      <p>u: {username}</p>
      <p>{text}</p>
      {console.log(comment)}
    </div>
  )
}