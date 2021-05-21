import Authorized from './authorized'
import Unauthorized from './unauthorized'
import Logo from './logo'
import Dummy from './dummy'
import { useSelector } from 'react-redux'

export default function NavBar({ handleLogout }) {

  const user = useSelector(state => state.user)
  const classArgs = ["nav", "nav-link", "logout", "logout-text"]
  const unAuthClassArgs = ["nav", "nav-link"]

  return (
    <header id="nav">
      <Logo />
      
      <div className="sub-header">
          <Dummy />

        { user !== "" ? 
          <Authorized handleLogout={handleLogout} classArgs={classArgs}/> 
          : 
          <Unauthorized classArgs={unAuthClassArgs} /> 
        }
      </div>
    </header>
  )
}