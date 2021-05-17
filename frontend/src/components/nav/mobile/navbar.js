import Logo from '../logo'
import { useState, useEffect } from 'react'
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
    const dummyIconNav = document.querySelector("#dummy-mobile-nav")

    if (menuState) {
      e.target.style.backgroundPosition = "-245px -194px"
      dropdown.style.height = "0px" 
      mobileNav.style.display = "none"
      dummyIconNav.style.display = "none"
    } else {
      e.target.style.backgroundPosition = "-201px -194px"
      dropdown.style.height = "inherit"
      mobileNav.style.display = "flex"
      dummyIconNav.style.display = "flex"
    }
  }

  const resetDropDown = () => {
    const dropdown = document.querySelector("#mobile-dropdown")
    const mobileNav = document.querySelector(".mobile-nav-link-container")
    const menuButton = document.querySelector("#menu-button")
    const dummyIconNav = document.querySelector("#dummy-mobile-nav")

    setMenuState(false)

    menuButton.style.backgroundPosition = "-245px -194px"
    dropdown.style.height = "0px" 
    mobileNav.style.display = "none"
    dummyIconNav.style.display = "none"
  }

  useEffect(() => {
    resetDropDown()
  }, [user])

  return (
    <>
      <header>
        <div id="mobile-nav">
          <Logo />
          <MenuButton updateMenuState={updateMenuState} /> 
        </div>

        <DropDown user={user} handleLogout={handleLogout} resetDropDown={resetDropDown} />
      </header>
    </>
  )
}