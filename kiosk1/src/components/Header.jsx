import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => {

    return (
        <div className='headerArea'>
            <h1>Kiosk 제작</h1>
            
            <nav>
                <ul>
                    <li>
                        <NavLink to='/'>분식</NavLink>
                    </li>
                    <li>
                        <NavLink to='/US'>양식</NavLink>
                    </li>
                    <li>
                        <NavLink to='/CN'>중식</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;