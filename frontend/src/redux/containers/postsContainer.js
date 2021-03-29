import { useEffect } from 'react'
// create and import postActions
import { useSelector, useDispatch } from 'react-redux'
import { getPosts } from '../actions/postActions'

export default function PostContainer({ route }) {

  const posts = useSelector(state => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts(route))
  });

  return (
    <div>
      <h1>Posts</h1>
      {/* render Posts */}
    </div>
  )

}