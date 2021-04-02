import { Link } from 'react-router-dom' 

export default function Authorized({ handleLogout }) {
  return (

    <nav className="nav" >
      <Link to="/" className="nav-link" >
        <span className="thrasher" >
          HOME
        </span>
      </Link>

      <Link to="/events" className="nav-link" >
        <span className="thrasher" >
          EVENTS
        </span>
      </Link>

      <Link to="/videos" className="nav-link" >
        <span className="thrasher" >
          VIDEOS
        </span>
      </Link>

      <Link to="/photos" className="nav-link" >
        <span className="thrasher" >
          PHOTOS
        </span>
      </Link>

      <button onClick={handleLogout}>LOGOUT</button>
    </nav>
  )
}