import { Link } from 'react-router-dom' 

export default function Unauthorized() {
  return (

    <nav className="mobile-nav-link-container" >
      <Link to="/login" className="mobile-nav-link" >
        <span className="thrasher" >
          LOGIN
        </span>
      </Link>
    
      <Link to="/signup" className="mobile-nav-link" >
        <span className="thrasher" >
          SIGNUP
        </span>
      </Link>
    </nav>
    
  )
}