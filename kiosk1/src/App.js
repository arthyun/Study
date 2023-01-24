import './App.css';
import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './components/Header.jsx';
import Router from './config/Router.jsx';


function App() {
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Router />

        <div className='totalZone'>
          <ul>
            <li>이곳에 추가될 예정</li>
          </ul>
          <button onClick={() => {
            var zone = document.querySelector('.totalZone ul');
            var li = document.createElement('li');
            li.innerText = '나는 바보천재!!!';
            zone.appendChild(li);
          }}>주문</button>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
