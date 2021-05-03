import Logo from '../logo'
import { useSelector } from 'react-redux'

// TODO:
// center Logo
// create dropdown button
// import dropdown button
// render dropdown button

export default function MobileNavBar({ handleLogout }) {

  const user = useSelector(state => state.user)

  return (
    <header id="mobile-nav">
      <Logo />
      
      {/* Render a dropdown button */}
    </header>
  )
}