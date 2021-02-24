import React from 'react';
import DividerOne from './Sidebar/DividerOne'
import DividerTwo from './Sidebar/DividerTwo'
import DividerThree from './Sidebar/DividerTwo'
import Heading from './Sidebar/Heading'
import NavItemCharts from './Sidebar/NavItemCharts'
import NavItemPages from './Sidebar/NavItemPages'
import NavItemTables from './Sidebar/NavItemTables'
import SidebarBrand from './Sidebar/SidebarBrand'
import NavItemDashboard from './Sidebar/NavItemDashboard'

function SideBar() {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <SidebarBrand/>
            <DividerOne/>
            <NavItemDashboard/>
            <DividerTwo/>
            <Heading/>
            <NavItemPages/>
            <NavItemCharts/>
            <NavItemTables/>
            <DividerThree/>
        </ul>
    );
}

export default SideBar;