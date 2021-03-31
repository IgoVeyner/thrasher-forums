import Comments from '../components/comments'
import Comment from '../components/forms/comment'

export default function CommentContainer({ comments }) {
  return (
    <>
      <Comments comments={comments} />
      <Comment />
    </>
  )
}