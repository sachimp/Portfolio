import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavBarElements'
import {animateScroll as scroll} from 'react-scroll'

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
    <IconContext.Provider value={{ color: '#FFD1D1' }}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}> TranquilFolds </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
          <NavItem>
              <NavLinks to ="summary"
              smooth={true} duration={500} spy={true} exact='true' activeClass="active"
              >Quick Look
              </NavLinks>
            </NavItem>
          <NavItem>
              <NavLinks to ="aboutme"
              smooth={true} duration={500} spy={true} exact='true' activeClass="active"
              >The Service</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to ="service"
              smooth={true} duration={500} spy={true} exact='true' activeClass="active"
              >The Theory</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to ="why"
              smooth={true} duration={500} spy={true} exact='true' activeClass="active"
              >Hybridity</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Members Area</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar;
