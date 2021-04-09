import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts, addPost, removePost } from '../redux/actions/postActions'
import { postPost } from '../services/api'
import Posts from '../components/posts';
import Post from '../components/forms/post'
import { useParams } from 'react-router'
import NoMatch from '../components/noMatch'

export default function PostContainer() {

  const route = useParams()
  const posts = useSelector(state => state.posts)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const submitPost = post => {
    dispatch({ type: "FETCHING" })
    postPost(post)
    .then(data => {
      if (data.error) {
        alert(data.messages)
      }

      if (data.post) {
        dispatch(addPost(data.post))
      }
    })
  }

  const deletePost = id => {
    dispatch(removePost(id))
  }

  const renderHeader = () => {
    return (
      <div id="posts-header-container">
        <h1 id="posts-header">Posts</h1>
      </div>
    )
  }

  useEffect(() => {
    dispatch(getPosts(route))
  }, [route])

  return (
    <main>
      <div id="posts-container">
        <div id="posts-sub-container">
          
          {renderHeader()}

          {posts.length > 0 ? <Posts posts={posts} user={user} deletePost={deletePost} /> : null }
          {posts.length > 0 ? <Post submitPost={submitPost} user={user} board={route} /> : <NoMatch />}

        </div>
      </div>
    </main>
  )

}