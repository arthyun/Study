import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Log from './components/Log';
import Insert from './components/Insert';


function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Log/>} />
        <Route path='/Insert' element={<Insert/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
