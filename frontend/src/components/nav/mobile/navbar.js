import Logo from '../logo'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import MenuButton from './menuButton'

export default function MobileNavBar({ handleLogout }) {

  const user = useSelector(state => state.user)
  const [menuState, setMenuState] = useState(false)

  const updateMenuState = () => {
    setMenuState(!menuState)
  }

  return (
    <>
      <header id="mobile-nav">
        <Logo />
        <MenuButton updateMenuState={updateMenuState} /> 
      </header>

    </>
  )
}