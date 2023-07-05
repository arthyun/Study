import React from 'react';
import '../styles/App.css';
import { NavLink } from 'react-router-dom';

const Navbar : React.FC = () => {

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>첫번째</NavLink>
                </li>
                <li>
                    <NavLink to='/'>두번째</NavLink>
                </li>
                <li>
                    <NavLink to='/'>세번째</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;