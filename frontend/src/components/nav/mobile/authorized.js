import { Link } from 'react-router-dom' 

export default function Authorized({ handleLogout, resetDropDown }) {
  return (

    <nav className="mobile-nav-link-container" >
      <Link to="/" className="mobile-nav-link" onClick={resetDropDown}>
        <span className="thrasher" >
          HOME
        </span>
      </Link>

      <Link to="/boards/events" className="mobile-nav-link" onClick={resetDropDown} >
        <span className="thrasher" >
          EVENTS
        </span>
      </Link>

      <Link to="/boards/videos" className="mobile-nav-link" onClick={resetDropDown} >
        <span className="thrasher" >
          VIDEOS
        </span>
      </Link>

      <Link to="/boards/photos" className="mobile-nav-link" onClick={resetDropDown} >
        <span className="thrasher" >
          PHOTOS
        </span>
      </Link>

      <button onClick={handleLogout} id="mobile-logout">
        <span id="mobile-logout-text" className="thrasher" onClick={resetDropDown}>
          LOGOUT
        </span>
      </button>
    </nav>
  )
}