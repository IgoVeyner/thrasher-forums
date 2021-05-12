import Logo from '../logo'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import MenuButton from './menuButton'
import DropDown from './dropdown'

export default function MobileNavBar({ handleLogout }) {

  const user = useSelector(state => state.user)
  const [menuState, setMenuState] = useState(false)

  const updateMenuState = () => {
    setMenuState(!menuState)
  }

  return (
    <>
      <header>
        <div id="mobile-nav">
          <Logo />
          <MenuButton updateMenuState={updateMenuState} /> 
        </div>

        <DropDown />
      </header>
    </>
  )
}