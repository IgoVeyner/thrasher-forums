import Comments from '../components/comments'
import Comment from '../components/forms/comment'
import { postComment } from '../../services/api'
import { addComment, removeComment } from '../actions/commentActions'
import { useDispatch, useSelector } from 'react-redux'

export default function CommentContainer({ comments, postId }) {

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  const submitComment = comment => {
    dispatch({ type: "FETCHING" })
    postComment(comment)
    .then(data => {
      console.log(data)
      if (data.error) {
        alert(data.messages)
      }

      if (data.comment) {
        dispatch(addComment(data.comment))
      }
    })
  }

  const deleteComment = id => {
    dispatch(removeComment(id))
  }

  return (
    <>
      <Comments comments={comments} currentUser={user} deleteComment={deleteComment} />
      <Comment user={user} submitComment={submitComment} postId={postId} />
    </>
  )
}