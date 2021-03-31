export default function PostShow({ post }) {

  const title = post.title
  const text = post.text
  const username = post.user.username
  const createdAt = post.created_at
  
  const renderCreatedAt = () => {
    const split = createdAt.split('T')
    const time = split[1].split('.')[0]
    return <p>Created on: {split[0]} at: {time}</p>
  }

  return (
    <div>
      {console.log(post)}
      <h1>{title}</h1>
      <p>{text}</p>
      <p>By: {username}</p>
      {renderCreatedAt()}
    </div>
  )
}