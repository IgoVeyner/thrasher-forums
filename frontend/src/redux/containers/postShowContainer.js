import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { fetchPost } from '../../services/api'
import PostShow from '../components/postShow'
import CommentsContainer from '../containers/commentsContainer'

export default function PostShowContainer(props) {

  const { id } = useParams()
  const [post, setPost] = useState('')
  const [comments, setComments] = useState([])
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
          setComments(data.comments)
        }
        dispatch({ type: "SET_POST" })
      }
    })
  }

  return (
    <>
      {post === '' ? getPost() : <PostShow post={post} /> }
      {comments.length > 0 ? <CommentsContainer comments={comments} /> : null }
    </>
  )
}