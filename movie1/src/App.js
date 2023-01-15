import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header>
        <h1>
          <a href='/'>Logo</a>
        </h1>
        <nav>
          <ul className='navList'>
            <li><NavLink to='/home'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
          </ul>
        </nav>
      </header>
      <div className='visual'>
        <ul>
          <li><img src='./images/avatar01.webp' alt='AVATAR' /></li>
          <li><img src='./images/thor01.jpg' alt='THOR' /></li>
          <li><img src='./images/slamdunk01.webp' alt='SLAMDUNK' /></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
