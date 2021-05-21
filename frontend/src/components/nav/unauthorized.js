import { Link } from 'react-router-dom' 

export default function Unauthorized({ resetDropDown = null, styles }) {
  
  const [navClassName, linkClassName] = styles

  return (

    <nav className={navClassName} >
      <Link to="/login" className={linkClassName} onClick={resetDropDown} >
        <span className="thrasher" >
          LOGIN
        </span>
      </Link>
    
      <Link to="/signup" className={linkClassName} onClick={resetDropDown} >
        <span className="thrasher" >
          SIGNUP
        </span>
      </Link>
    </nav>
    
  )
}