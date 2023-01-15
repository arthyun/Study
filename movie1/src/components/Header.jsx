import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>
                <a href='/'>Logo</a>
            </h1>

            <nav>
                <ul className='navList'>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;