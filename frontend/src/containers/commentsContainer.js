import Comments from '../components/comments'
import Comment from '../components/forms/comment'
import { useDispatch, useSelector } from 'react-redux'
import { submitCommentAction, removeComment } from '../redux/actions/commentActions'

export default function CommentContainer({ comments, postId, setComments }) {

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const submitComment = comment => dispatch(submitCommentAction(comments, comment, setComments))
  const deleteComment = id => dispatch(removeComment(id, comments, setComments))

  return (
    <>
      <Comments comments={comments} currentUser={user} deleteComment={deleteComment} />
      <Comment user={user} submitComment={submitComment} postId={postId} />
    </>
  )
}