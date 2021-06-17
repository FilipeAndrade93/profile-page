import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements.js';

function Navbar({ toggle }) {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <h3>Filipe Andrade</h3>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaIcons.FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='experience'>Experience</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='education'>Education</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='skills'>Skills</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='details'>Details</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='#'><FaIcons.FaDownload style={ {marginRight: '10px'}}/>Download CV</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
