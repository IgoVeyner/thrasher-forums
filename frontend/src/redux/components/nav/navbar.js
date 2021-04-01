import Authorized from './authorized'
import Unauthorized from './unauthorized'
import Logo from './logo'
import { useSelector } from 'react-redux'

export default function NavBar({ handleLogout }) {

  const user = useSelector(state => state.user)

  return (
    <header>
      <Logo />
      <div className="sub-header">

        { user !== "" ? 
          <Authorized handleLogout={handleLogout} /> 
          : 
          <Unauthorized /> 
        }
      </div>
    </header>
  )
}