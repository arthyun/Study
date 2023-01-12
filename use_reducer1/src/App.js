import logo from './logo.svg';
import './App.css';
import React, { useReducer, useState } from 'react';


const reducer = (state, action) => {
  switch(action.type){
    case "deposit":
      return state + action.payload;
    case "withdraw":
      return state - action.payload;
    default:
      return state;
  }
};

function App() {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>React Bank</h1>
      <p>현재 잔고 : {money} 원</p>
      
      <div className='inputZone'>
        <input type='number' value={number} 
        onChange={ (e) => {setNumber(Number(e.target.value));} } step='1000' />
        <button onClick={() => {
          dispatch({type:'deposit', payload: number});
        }}>예금</button>
        <button onClick={() => {
          dispatch({type:'withdraw', payload: number});
        }}>출금</button>
      </div>
    </div>
  );
}

export default App;
