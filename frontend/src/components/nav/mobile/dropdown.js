import Authorized from './authorized'
import Unauthorized from './unauthorized'

export default function DropDown({ user, handleLogout }) {

  return (
    <div id="mobile-dropdown">
      { user !== "" ? 
        <Authorized handleLogout={handleLogout} /> 
        : 
        <Unauthorized /> 
      }
    </div>
  )
}