import { Link } from 'react-router-dom' 

export default function Unauthorized({ resetDropDown = null, classArgs }) {
  
  const [navClassName, linkClassName] = classArgs

  return (

    <nav className="nav" >
      <Link to="/login" className="nav-link" onClick={resetDropDown} >
        <span className="thrasher" >
          LOGIN
        </span>
      </Link>
    
      <Link to="/signup" className="nav-link" onClick={resetDropDown} >
        <span className="thrasher" >
          SIGNUP
        </span>
      </Link>
    </nav>
    
  )
}