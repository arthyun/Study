import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/task">Task</NavLink>
          </li>
        </ul>
      </nav>
      <div className="content-section">
        <Outlet />
      </div>
    </>
  );
};

export default Header;
