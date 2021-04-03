import Authorized from './authorized'
import Unauthorized from './unauthorized'
import Logo from './logo'
import Dummy from './dummy'
import { useSelector } from 'react-redux'

export default function NavBar({ handleLogout }) {

  const user = useSelector(state => state.user)

  return (
    <header>
      <Logo />
      
      <div className="sub-header">
          <Dummy />

        { user !== "" ? 
          <Authorized handleLogout={handleLogout} /> 
          : 
          <Unauthorized /> 
        }
      </div>
    </header>
  )
}