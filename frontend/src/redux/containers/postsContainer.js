import { useEffect } from 'react'
// create and import postActions
import { useSelector, useDispatch } from 'react-redux'
// create and import Posts

export default function PostContainer() {

  // Not set up yet
  // const posts = useSelector(state => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    // Not set up yet
    // dispatch(getPosts())
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {/* render Posts */}
    </div>
  )

}