import './App.css';
import React from 'react';
import Home from './components/Home';
import Topics from './components/Topics';
import Contact from './components/Contact';
import { Routes, Route, Link } from 'react-router-dom';


function App() {
  return (

      <div className="App">
        <h1>Hello React Router DOM</h1>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/topics'>Topics</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>

        <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path='/topics' element={<Topics/>} />
            <Route path='/contact' element={<Contact/>} />
        </Routes>
      </div>

  );
}

export default App;
