import React from 'react';

import NavItems from '../NavItems/NavItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
import "./Toolbar.css"

const toolbar = (props) => (
    <header className="Toolbar">
        <DrawerToggle clicked={props.drawerToggle} />
        <nav className="DesktopOnly">
            <NavItems />
        </nav>
    </header>
)

export default toolbar;