import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { fetchPost } from '../services/api'
import PostShow from '../components/postShow'
import NoMatch from '../components/noMatch'
import CommentsContainer from '../containers/commentsContainer'
import { removePost } from '../redux/actions/postActions'

export default function PostShowContainer() {

  const { id } = useParams()
  const [post, setPost] = useState('')
  const [comments, setComments] = useState([])
  const currentUser = useSelector(state => state.user)
  const dispatch = useDispatch()

  const getPost = () => {
    dispatch({ type: "FETCHING" })
    fetchPost(id)
    .then(data => {

      if (data.post) {
        setPost(data.post)
        if (data.comments) {
          setComments(data.comments)
        }
        dispatch({ type: "SET_POST" })
      }
    })
  }

  const deletePost = id => {
    dispatch(removePost(id))
    setPost('')
  }

  const renderComponents = () => {
    return (
      <div id="post-show-container">
        <div id="post-show-sub-container">

          <PostShow post={post} deletePost={deletePost} currentUser={currentUser} />
          <CommentsContainer comments={comments} postId={post.id} setComments={setComments} />
          
        </div>
      </div>
    )
  }

  useEffect(() => {
    getPost()
  }, [])

  return (
    <main>
      
      {post === '' ? <NoMatch /> : renderComponents()}

    </main>
  )
}