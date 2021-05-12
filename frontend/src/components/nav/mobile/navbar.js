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
    updateDropDownHeight()
  }

  const updateDropDownHeight = () => {
    const dropdown = document.querySelector("#mobile-dropdown")
    dropdown.style.height = menuState ? "0px" : "5em"
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