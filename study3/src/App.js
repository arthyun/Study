import './App.css';
import React from 'react';
import Home from './components/Home';
import Topics from './components/Topics';
import Contact from './components/Contact';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
//Link와 NavLink의 차이는 active 클래스를 생성해주냐 마냐의 차이


function App() {
  return (
      <div className="App">
        <h1>React Router DOM</h1>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/Topics'>Topics</NavLink></li>
          <li><NavLink to='/Contact'>Contact</NavLink></li>
        </ul>

        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Topics/*' element={<Topics/>}>
              {/* <Route path='1' element={<p>HTML is ...</p>} /> */}
            </Route>
            <Route path='/Contact' element={<Contact/>} />
        </Routes>
      </div>
  );
}

export default App;
