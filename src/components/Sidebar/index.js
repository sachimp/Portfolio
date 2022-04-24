import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
        <SidebarLink to='summary' onClick={toggle}>
            Quick Look
          </SidebarLink>
          <SidebarLink to='aboutme' onClick={toggle}>
            The Service
          </SidebarLink>
          <SidebarLink to='service' onClick={toggle}>
            The Theory
          </SidebarLink>
          <SidebarLink to='why' onClick={toggle}>
            Hybridity
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/signin'>Members Area</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
