import Post from "./post"
import uuid from 'react-uuid'

export default function Posts({ posts, user }) {
  
  const renderPosts = () => {
    return posts.map(post => { 
      return <Post key={uuid()} post={post} currentUser={user} /> 
    })
  }
  
  return (
    <div>
      {renderPosts()}
    </div>
  )
}