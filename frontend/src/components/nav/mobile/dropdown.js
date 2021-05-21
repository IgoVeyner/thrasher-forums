import Authorized from '../authorized'
import Unauthorized from '../unauthorized'
import DummyNav from './dummy'
import DummyForm from '../../forms/mobileDummyForm'

export default function DropDown({ user, handleLogout, resetDropDown }) {
  
  const authStyles = ["mobile-nav-link-container", "mobile-nav-link", "mobile-logout", "mobile-logout-text"]
  const unAuthStyles = ["mobile-nav-link-container", "mobile-nav-link"]

  return (
    <div id="mobile-dropdown">
      { user !== "" ? 
        <Authorized handleLogout={handleLogout} resetDropDown={resetDropDown} styles={authStyles} /> 
        : 
        <Unauthorized resetDropDown={resetDropDown} styles={unAuthStyles} /> 
      }
      <DummyNav />
      <DummyForm />
    </div>
  )
}