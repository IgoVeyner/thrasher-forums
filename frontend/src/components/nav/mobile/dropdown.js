import Authorized from './authorized'
import Unauthorized from './unauthorized'
import DummyNav from './dummy'
import DummyForm from '../../forms/mobileDummyForm'

export default function DropDown({ user, handleLogout, resetDropDown }) {

  return (
    <div id="mobile-dropdown">
      { user !== "" ? 
        <Authorized handleLogout={handleLogout} resetDropDown={resetDropDown}/> 
        : 
        <Unauthorized resetDropDown={resetDropDown}/> 
      }
      <DummyNav />
      <DummyForm />
    </div>
  )
}