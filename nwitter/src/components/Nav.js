import React from 'react';
import { NavLink } from 'react-router-dom';


const Nav = () => {

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/Profile'>Profile</NavLink>
                </li>
                <li>
                    <NavLink to='/EditProfile'>EditProfile</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;