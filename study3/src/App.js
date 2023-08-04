import './App.css';
import React, { useState } from 'react';
import Home from './components/Home';
import Topics from './components/Topics';
import Contact from './components/Contact';
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import InputTest from './components/InputTest';
//Link와 NavLink의 차이는 active 클래스를 생성해주냐 마냐의 차이


function App() {
  const [sendState, setSendState] = useState({
    name: 'hyun',
    age: 31,
    gender: 'male'
  })

  const navigate = useNavigate();

  return (
      <div className="App">
        <h1>React Router DOM</h1>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/Topics'>Topics</NavLink></li>
          <li><NavLink to='/Contact'>Contact</NavLink></li>
          <li><NavLink to='/InputTest'>InputTest</NavLink></li>
        </ul>

        <button onClick={() => navigate('/InputTest', {state: sendState})}>useNavigate</button>

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Topics/*' element={<Topics />}>
              {/* <Route path='1' element={<p>HTML is ...</p>} /> */}
            </Route>
            <Route path='/Contact' element={<Contact />} />
            <Route path='/InputTest' element={<InputTest />} />
        </Routes>
      </div>
  );
}

export default App;
