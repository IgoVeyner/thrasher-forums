import Logo from '../logo'
import { useSelector } from 'react-redux'
import MenuButton from './menuButton'

export default function MobileNavBar({ handleLogout }) {

  const user = useSelector(state => state.user)

  return (
    <>
      <header id="mobile-nav">
        <Logo />
        <MenuButton /> 
      </header>

    </>
  )
}