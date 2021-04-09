import { Link } from 'react-router-dom' 

export default function Authorized({ handleLogout }) {
  return (

    <nav className="nav" >
      <Link to="/" className="nav-link" >
        <span className="thrasher" >
          HOME
        </span>
      </Link>

      <Link to="/boards/events" className="nav-link" >
        <span className="thrasher" >
          EVENTS
        </span>
      </Link>

      <Link to="/boards/videos" className="nav-link" >
        <span className="thrasher" >
          VIDEOS
        </span>
      </Link>

      <Link to="/boards/photos" className="nav-link" >
        <span className="thrasher" >
          PHOTOS
        </span>
      </Link>

      <button onClick={handleLogout} id="logout">
        <span className="thrasher" >
          LOGOUT
        </span>
      </button>
    </nav>
  )
}