import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Visual from './components/Visual';
import Home from './components/Home';
import Share from './components/Share';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Header/>
      <Visual/>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/share' element={<Share />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
