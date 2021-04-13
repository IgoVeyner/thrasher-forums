import Comments from '../components/comments'
import Comment from '../components/forms/comment'
import { postComment, destroyComment } from '../services/api'
import { useDispatch, useSelector } from 'react-redux'
import { submitCommentAction } from '../redux/actions/commentActions'

export default function CommentContainer({ comments, postId, setComments }) {

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const submitComment = comment => dispatch(submitCommentAction(comments, comment, setComments))

  const deleteComment = id => {
    destroyComment(id)
    .then(() => {
      setComments(comments.filter(comment => comment.id !== id))
    })
  }

  return (
    <>
      <Comments comments={comments} currentUser={user} deleteComment={deleteComment} />
      <Comment user={user} submitComment={submitComment} postId={postId} />
    </>
  )
}