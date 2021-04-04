import Comment from "./comment"
import uuid from 'react-uuid'

export default function Comments({ comments, deleteComment, currentUser }) {

  const renderComments = () => {
    return comments.map(comment => {
      return <Comment key={uuid()} comment={comment} deleteComment={deleteComment} currentUser={currentUser} />
    })
  }
  
  return (
    <div id="comments-container">

      <div id="comments-header-container">
        <h1 id="comments-header">Comments</h1>
      </div>

      {renderComments()}
    </div>
  )
}