import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Visual from './components/Visual';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Header/>
      <Visual/>

      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/about' element={} />
        <Route path='/contact' element={} /> */}
      </Routes>
    </div>
  );
}

export default App;
