import { Link } from 'react-router-dom' 

export default function Authorized({ handleLogout, resetDropDown = null, classArgs }) {
  const [navClassName, linkClassName, logoutId, logoutTextId] = classArgs

  return (

    <nav className={navClassName} >
      <Link to="/" className={linkClassName} onClick={resetDropDown} >
        <span className="thrasher" >
          HOME
        </span>
      </Link>

      <Link to="/boards/events" className={linkClassName} onClick={resetDropDown} >
        <span className="thrasher" >
          EVENTS
        </span>
      </Link>

      <Link to="/boards/videos" className={linkClassName} onClick={resetDropDown} >
        <span className="thrasher" >
          VIDEOS
        </span>
      </Link>

      <Link to="/boards/photos" className={linkClassName} onClick={resetDropDown} >
        <span className="thrasher" >
          PHOTOS
        </span>
      </Link>

      <button onClick={handleLogout} id={logoutId}>
        <span id={logoutTextId} className="thrasher" onClick={resetDropDown} >
          LOGOUT
        </span>
      </button>
    </nav>
  )
}