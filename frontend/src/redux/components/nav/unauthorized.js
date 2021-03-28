import { Link } from 'react-router-dom' 

export default function Unauthorized() {
  return (
    <nav>
      <Link to="/login">Login</Link>
      <Link to="/signup">signup</Link>
    </nav>
  )
}