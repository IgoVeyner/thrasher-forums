import Authorized from './authorized'
import Unauthorized from './unauthorized'
import Logo from './logo'
import Dummy from './dummy'
import { useSelector } from 'react-redux'

export default function NavBar({ handleLogout }) {

  const user = useSelector(state => state.user)
  const authStyles = ["nav", "nav-link", "logout", "logout-text"]
  const unAuthStyles = ["nav", "nav-link"]
  const dummyStyles = ["dummy-nav"]

  return (
    <header id="nav">
      <Logo />
      
      <div className="sub-header">
          <Dummy renderForm={true} styles={dummyStyles} />

        { user !== "" ? 
          <Authorized handleLogout={handleLogout} styles={authStyles} /> 
          : 
          <Unauthorized styles={unAuthStyles} /> 
        }
      </div>
    </header>
  )
}