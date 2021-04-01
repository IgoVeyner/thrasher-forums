import { Link } from 'react-router-dom' 

export default function Authorized({ handleLogout }) {
  return (
    <nav className="nav" >
      <Link to="/">Home</Link>
      <Link to="/events">Events</Link>
      <Link to="/videos">Videos</Link>
      <Link to="/photos">Photos</Link>
      <button onClick={handleLogout}>LOGOUT</button>
    </nav>
  )
}