import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink
} from './SideBarElement'

const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to='/'>Profile</SidebarLink>
                <SidebarLink to='/'>Home</SidebarLink>
                <SidebarLink to='/'>Contact me</SidebarLink>
            </SidebarMenu>
        </SidebarContainer>
    )
}

export default Sidebar
