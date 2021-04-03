import Post from "./post"
import uuid from 'react-uuid'

export default function Posts({ posts, user, deletePost }) {
  
  const renderPosts = () => {
    return posts.map(post => { 
      return <Post key={uuid()} post={post} currentUser={user} deletePost={deletePost} /> 
    })
  }
  
  return (
    <div id="posts-list-container">
      {renderPosts()}
    </div>
  )
}