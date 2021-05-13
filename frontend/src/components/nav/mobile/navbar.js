import Logo from '../logo'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import MenuButton from './menuButton'
import DropDown from './dropdown'

export default function MobileNavBar({ handleLogout }) {

  const user = useSelector(state => state.user)
  const [menuState, setMenuState] = useState(false)

  const updateMenuState = e => {
    setMenuState(!menuState)
    updateDropDownHeight(e)
  }

  const updateDropDownHeight = e => {
    const dropdown = document.querySelector("#mobile-dropdown")
    const mobileNav = document.querySelector(".mobile-nav-link-container")

    if (menuState) {
      e.target.style.backgroundPosition = "-245px -194px"
      dropdown.style.height = "0px" 
      mobileNav.style.display = "none"
    } else {
      e.target.style.backgroundPosition = "-201px -194px"
      dropdown.style.height = "inherit"
      mobileNav.style.display = "flex"
    }
  }

  return (
    <>
      <header>
        <div id="mobile-nav">
          <Logo />
          <MenuButton updateMenuState={updateMenuState} /> 
        </div>

        <DropDown user={user} handleLogout={handleLogout} />
      </header>
    </>
  )
}