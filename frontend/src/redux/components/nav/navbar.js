import Authorized from './authorized'
import Unauthorized from './unauthorized'
import { useSelector } from 'react-redux'

export default function NavBar({ handleLogout }) {

  const user = useSelector(state => state.user)

  return (
    <>
      { user !== "" ? 
        <Authorized handleLogout={handleLogout} /> 
        : 
        <Unauthorized /> 
      }
    </>
  )
}