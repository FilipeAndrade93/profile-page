import React from 'react';
import * as FaIcons from 'react-icons/fa';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SideBtnWrap,
    SidebarLink,
    SidebarBtn,
    SidebarMenu
} from './SidebarElements';

function Sidebar( { isOpen, toggle } ) {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="experience" onClick={toggle}>
                        Experience
                    </SidebarLink>
                    <SidebarLink to="education" onClick={toggle}>
                        Education
                    </SidebarLink>
                    <SidebarLink to="skills" onClick={toggle}>
                        Skills
                    </SidebarLink>
                    <SidebarLink to="details" onClick={toggle}>
                        Details
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarBtn><FaIcons.FaDownload style={ {marginRight: '10px'}}/>Download CV</SidebarBtn>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
