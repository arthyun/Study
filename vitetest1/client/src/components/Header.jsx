import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/K2_Logo.png';


export default function Header() {
    //객체배열을 map으로 뿌려줄 예정
    const navlist = {
        list: [
            {to: '/about', title: 'ABOUT'},
            {to: '/contact', title: 'CONTACT'},
            {to: '/faq', title: 'FAQ'},
        ]
    };

    return(
        <header>
            <nav>
                <h1><NavLink to='/'>Logo</NavLink></h1>

                <ul>
                {
                    navlist.list.map((item, i) => {
                        return (
                        <li key={i}>
                            <NavLink to={item.to}>
                                {item.title}
                            </NavLink>
                        </li>
                        )
                    })
                }
                </ul>
            </nav>

            <style jsx='true'>
            {`
                .active {
                    color: orange;
                }
                header {
                    background: #fff;
                    padding: 1rem 2rem;
                    box-sizing: border-box;
                }
                header h1 a {
                    display: block;
                    background: url(${Logo}) 50% 50% no-repeat;
                    background-size: cover;
                    width: 35px;
                    height: 35px;
                    color: #fff;
                    text-indent: -999px;
                    overflow: hidden;
                }
                header nav {
                    display: flex;
                    gap: 1.5rem;
                }
                header nav ul {
                    display: flex;
                    gap: 1.5rem;
                }
                header nav ul li a {
                    font-size: 20px;
                    font-weight: 400;
                    line-height: 2.2rem;
                    transition: all .2s;
                }
            `}
            </style>
        </header>
    )
};