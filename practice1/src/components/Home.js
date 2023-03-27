import React from 'react';
import { Link } from 'react-router-dom';
import PostList from '../안쓰는거 모음/Pagination';

const Home = () => {
    return (
        <div className='homeWrap'>
            <div className='topContent'>
                <h1>Dashboard</h1>
                <h4>{`${new Date().getFullYear()}.${new Date().getDay()}.${new Date().getDate()}`}</h4>
                <ul>
                    <li><Link to='/upload'>icon</Link>Upload</li>
                    <li><Link to='/content'>icon</Link>Contents</li>
                    <li><Link to='/board'>icon</Link>Board</li>
                    <li><Link to='/user'>icon</Link>Setting</li>
                </ul>
            </div>

            <div className='bottomContent'>
                <PostList />
            </div>
            
        
        <style jsx='true'>
        {`
            .homeWrap {
                margin-top: 64px;
                width: 100%;
                overflow: hidden;
            }
            .homeWrap > div {
                padding: 2rem;
                box-sizing: border-box;
            }
            .topContent {
                width: 100%;
                border: 5px solid red;
            }
            h1 {
                margin: 0;
            }
            h4 {
                text-align: end;
                font-size: 24px;
                font-weight: normal;
                color: #999;
                margin: 0;
                margin-bottom: .5rem;
            }
            .topContent ul {
                margin: 0;
                box-sizing: border-box;
                border: 1px solid #333;
                border-radius: 15px;
                padding: 2rem 0;
                list-style: none;
                display: flex;
                justify-content: center;
                background: #ddd;
            }
            .topContent ul li {
                width: 20%;
                overflow: hidden;
                text-align: center;
            }
            .topContent ul li a {
                display: block;
                text-align: center;
                text-decoration: none;
                color: #333;
                font-weight: bold;
                width: 80px;
                height: 80px;
                border-radius: 80px;
                border: 1px solid #333;
                margin: 0 auto;
                margin-bottom: .75rem;
                line-height: 5rem;
            }
            .topContent ul li a:hover {
                background-color: red;
                color: #fff;
            }
            .topContent ul li:nth-child(3) {
                grid-column: 1/3;
            }

            .bottomContent {
                width: 100%;
                height: 600px;
                border: 5px solid red;
            }
        `}

        </style>
        </div>
    )
}

export default Home;