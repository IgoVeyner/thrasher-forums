import Comment from "./comment"
import uuid from 'react-uuid'

export default function Comments({ comments }) {

  const renderComments = () => {
    return comments.map(comment => {
      return <Comment key={uuid()} comment={comment} />
    })
  }
  
  return (
    <div>
      {renderComments()}
    </div>
  )
}