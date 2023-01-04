import React from 'react';
import { Routes, Route, NavLink, useParams, useLocation, Outlet } from 'react-router-dom';

//for문에 사용될 변수 생성
var contents = [
    {id: 1, title: 'HTML', description: 'HTML is ...'},
    {id: 2, title: 'JS', description: 'JS is ...'},
    {id: 3, title: 'React', description: 'React is ...'}
];

function Topics() {
    var list = [];
    for(let i = 0; i < contents.length; i++){
        list.push(
            <li key={contents[i].id}>
                <NavLink to={String(i + 1)}>
                    {contents[i].title}
                </NavLink>
            </li>
        );
    }

    console.log(useLocation());
    console.log(useParams());

    return (
        <div>
            <h2>Topics</h2>

            <ul>
                {/* <li><NavLink to='1'>HTML</NavLink></li>
                <li><NavLink to='2'>JS</NavLink></li>
                <li><NavLink to='3'>React</NavLink></li> */}
                {list}
            </ul>

            {/* <Outlet /> */}
            
            <Routes>
                <Route path='1' element={contents[0].description} />
                <Route path='2' element={<p>JS is ...</p>} />
                <Route path='3' element={<p>React is ...</p>} />
            </Routes>
        </div>
    );
}

export default Topics;