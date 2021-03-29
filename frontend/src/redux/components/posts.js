import Post from "./post"
import uuid from 'react-uuid'

export default function Posts({ posts }) {
  
  const renderPosts = () => {
    return posts.map(post => { 
      return <Post key={uuid()} post={post} /> 
    })
  }
  
  return (
    <div>
      {renderPosts()}
    </div>
  )
}