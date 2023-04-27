import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const Home = () => {

    return (
        <div style={{ padding: '1rem 2rem', boxSizing: 'border-box' }}>
            <h1>Home Page.</h1>

            <nav className='homeNav'>
                <ul>
                    <li>
                        <Link to='/1'>Home1_1</Link>
                    </li>
                    <li>
                        <Link to='/2'>Home1_2</Link>
                    </li>
                    <li>
                        <Link to='/3'>Home1_3</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />

            <style jsx='true'>
            {`
                .homeNav {
                    margin-top: 3rem;
                    width: 100%;
                }
                .homeNav ul {
                    list-style: none;
                    border: 1px solid #fff;
                    display: flex;
                }
                .homeNav ul li {
                    width: 33.33%;
                    text-align: center;
                    border-right: 1px solid #fff;
                }
                .homeNav ul li:nth-of-type(3){
                    border-right: none;
                }
                .homeNav ul li a {
                    display: block;
                    padding: .5rem 0;
                    color: pink;
                }
                .homeNav ul li a:hover {
                    color: red;
                    background: #fff
                }
            `}
            </style>
        </div>
    )
}

export default Home;