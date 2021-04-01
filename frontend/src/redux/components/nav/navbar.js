import Authorized from './authorized'
import Unauthorized from './unauthorized'
import Logo from './logo'
import { useSelector } from 'react-redux'

export default function NavBar({ handleLogout }) {

  const user = useSelector(state => state.user)

  return (
    <>
      <Logo />
      { user !== "" ? 
        <Authorized handleLogout={handleLogout} /> 
        : 
        <Unauthorized /> 
      }
    </>
  )
}