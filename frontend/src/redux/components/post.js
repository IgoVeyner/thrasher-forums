import { Link } from 'react-router-dom'

export default function Post({ post }) {

  return (
    // add link to post show page
    // <Link to={"/"} >
      <div>
        <h2>{post.title}</h2>
      </div>
    // </Link>
  )
}