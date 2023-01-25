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
            let price = document.querySelectorAll('.totalZone .pc');
            let total = 0;
            price.forEach(el => {
              total += Number(el.innerText);
            })
            console.log(total);
          }}>주문</button>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
