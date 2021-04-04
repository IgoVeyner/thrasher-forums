import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { fetchPost } from '../services/api'
import PostShow from '../components/postShow'
import NoMatch from '../components/noMatch'
import CommentsContainer from '../containers/commentsContainer'
import { setComments } from '../redux/actions/commentActions'
import { removePost } from '../redux/actions/postActions'

export default function PostShowContainer() {

  const { id } = useParams()
  const [post, setPost] = useState('')
  const comments = useSelector(state => state.comments)
  const currentUser = useSelector(state => state.user)
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

  const deletePost = id => {
    dispatch(removePost(id))
    setPost('')
  }

  useEffect(() => {
    getPost()
  }, [])

  return (
    <div id="post-show-container">
      <div id="post-show-sub-container">

        {post === '' ? null : <PostShow post={post} deletePost={deletePost} currentUser={currentUser} /> }
        
      </div>
      {post === '' ? <NoMatch /> : <CommentsContainer comments={comments} postId={post.id} /> }
    </div>
  )
}