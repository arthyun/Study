import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/Profile">Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/EditProfile">EditProfile</NavLink>
                </li>
            </ul>

            <style jsx="true">
            {`
                * { margin:0; padding:0; }
                nav { 
                    width: 100%;
                    border-bottom: 1px solid #333;
                }
                ul {
                    list-style: none;
                    display: flex;
                }
                ul li {
                    width: 33.33%;
                    text-align: center;

                }
                ul li a {
                    display: block;
                    text-decoration: none;
                    color: #333;
                    font-size: 20px;
                    padding: 10px 0;
                }
                .active {
                    color: red;
                    font-weight: bold;
                    background: #bad;
                }
            `}
            </style>
        </nav>
    )
}

export default Navbar;