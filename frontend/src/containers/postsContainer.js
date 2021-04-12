import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts, addPost, removePost } from '../redux/actions/postActions'
import { postPost } from '../services/api'
import Posts from '../components/posts';
import Post from '../components/forms/post'
import { useParams } from 'react-router'
import NoMatch from '../components/noMatch'
import { sendPost } from '../redux/actions/postActions'
 
export default function PostContainer() {

  const route = useParams()
  const [fetched, setFetched] = useState(false)
  const posts = useSelector(state => state.posts)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const submitPost = post => dispatch(sendPost(post))
  const deletePost = id => dispatch(removePost(id)) 

  const checkFetched = () => {
    if (fetched && posts.length === 0) {
      return <NoMatch />
    } else {
      return null
    }
  }

  const renderComponents = () => {
    return (
      <div id="posts-container">
        <div id="posts-sub-container">
          
          <div id="posts-header-container">
            <h1 id="posts-header">Posts</h1>
          </div>

          <Posts posts={posts} user={user} deletePost={deletePost} /> 
          <Post submitPost={submitPost} user={user} board={route.name} /> 

        </div>
      </div>
    )
  }

  useEffect(() => {
    dispatch(getPosts(route, setFetched))
  }, [route])

  return (
    <main>

      { posts.length > 0 ? renderComponents() : checkFetched() }

    </main>
  )

}