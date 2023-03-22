import React from 'react';
import { Link } from 'react-router-dom';
import PostList from '../안쓰는거 모음/Pagenation';

const Home = () => {
    return (
        <div className='homeWrap'>
            <div className='leftContent'>
                <h1>Dashboard</h1>
                <PostList />
            </div>
            <div className='rightContent'>
                <h4>{`${new Date().getFullYear()}.${new Date().getDay()}.${new Date().getDate()}`}</h4>
                <ul>
                    <li><Link to='/user'>Setting</Link></li>
                    <li><Link to='/content'>Contents</Link></li>
                    <li><Link to='/board'>Board</Link></li>
                </ul>
            </div>
        
        <style jsx='true'>
        {`
            .homeWrap {
                margin-top: 64px;
                width: 100%;
                display: flex;
            }
            .homeWrap > div {
                padding: 2rem;
                box-sizing: border-box;
            }
            .leftContent {
                width: 50%;
                height: 200px;
            }
            .rightContent {
                width: 50%;
            }
            .rightContent h4 {
                text-align: end;
                color: #999;
            }
            .rightContent ul {
                box-sizing: border-box;
                list-style: none;
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-gap: 1rem;
            }
            .rightContent ul li {
                border: 1px solid #333;
                border-radius: 15px;
                box-sizing: border-box;
                width: 100%;
                overflow: hidden;
            }
            .rightContent ul li a {
                display: block;
                text-align: center;
                text-decoration: none;
                color: #333;
                font-weight: bold;
                padding: 3rem;
            }
            .rightContent ul li a:hover {
                background-color: red;
                color: #fff;
            }
            .rightContent ul li:nth-child(3) {
                grid-column: 1/3;
            }
        `}

        </style>
        </div>
    )
}

export default Home;