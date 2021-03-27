import handleUsers from '../../reducers/userReducer'
import Authorized from './authorized'
import Unauthorized from './unauthorized'

export default function NavBar({ checkAuthorization, handleLogout }) {

  return (
    <>
      { checkAuthorization() === true ? 
        <Authorized handleLogout={handleLogout} /> 
        : 
        <Unauthorized /> 
      }
    </>
  )
}