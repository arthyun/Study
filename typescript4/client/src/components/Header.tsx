import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Main from './Main';

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
            <li>
              <NavLink to="/sub1/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/sub2/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/sub3/task">Task</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <div className="content-section">
        <Main />
        <Outlet />
      </div>
    </>
  );
};

export default Header;
