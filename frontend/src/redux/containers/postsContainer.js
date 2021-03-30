import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts, addPost } from '../actions/postActions'
import { postPost } from '../../services/api'
import Posts from '../components/posts';
import Post from '../components/forms/post'

export default function PostContainer({ route }) {

  const posts = useSelector(state => state.posts)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const submitPost = post => {
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

  useEffect(() => {
    dispatch(getPosts(route))
  }, [route])

  return (
    <div>
      <h1>Posts</h1>
      {posts.length > 0 ? <Posts posts={posts} /> : null }
      <Post submitPost={submitPost} user={user} board={route} />
    </div>
  )

}