import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavBarElements'

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/"> TranquilFolds </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
          <NavItem>
              <NavLinks to ="summary">Quick Look</NavLinks>
            </NavItem>
          <NavItem>
              <NavLinks to ="aboutme">The Service</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to ="service">The Theory</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to ="why">Hybridity</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Members Area</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;
