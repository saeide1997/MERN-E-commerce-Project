import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/" className={({isActive})=>isActive ? "active-item" : "pending-item"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({isActive})=>isActive ? "active-item" : "pending-item"}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({isActive})=>isActive ? "active-item" : "pending-item"}>Contact</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Menu;