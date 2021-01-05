import React from 'react';

import "./NavItems.css";
import NavItem from './NavItem/NavItem';


const navItems = () => {
    return (
        <ul className="NavigationItems">
            <NavItem link="/">
                Начало
            </NavItem>
            <NavItem
                link="/create-recepy">
                Създай рецепта
            </NavItem>
            <NavItem
                link="/collection">
                Колекция
            </NavItem>
        </ul>
    )
}

export default navItems;