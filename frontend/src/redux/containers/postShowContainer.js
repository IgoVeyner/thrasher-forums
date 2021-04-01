import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { fetchPost } from '../../services/api'
import { setComments } from '../actions/commentActions'
import PostShow from '../components/postShow'
import CommentsContainer from '../containers/commentsContainer'

export default function PostShowContainer() {

  const { id } = useParams()
  const [post, setPost] = useState('')
  const comments = useSelector(state => state.comments)
  const dispatch = useDispatch()

  const getPost = () => {
    dispatch({ type: "FETCHING" })
    fetchPost(id)
    .then(data => {
      if (data.error) {
        alert(data.error)
      }

      if (data.post) {
        setPost(data.post)
        if (data.comments) {
          dispatch(setComments(data.comments))
        }
        dispatch({ type: "SET_POST" })
      }
    })
  }

  return (
    <>
      {post === '' ? getPost() : <PostShow post={post} /> }
      {comments && comments.length > 0 ? <CommentsContainer comments={comments} postId={post.id} /> : null }
    </>
  )
}