import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import styled from 'styled-components';

const Inputs = styled.input.attrs({ type: 'text', required: true })`
  background: #61dafb;
  color: #333;
  font-size: 18px;
  outline: 0;
  border: 0;
  display: block;
  box-sizing: border-box;
  width: 80%;
  height: 40px;
  margin: 0 auto;
  padding-left: 10px;
`;

const SubmitBtn = styled.button.attrs({ type: 'button' })`
  background: #eee;
  font-size: 16px;
  font-weight: bold;
  display: block;
  box-sizing: border-box;
  width: 80%;
  height: 40px;
  margin: 0 auto;
`;

function App() {
  const [text, setText] = useState('');
  const [arr, setArr] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div className='keyZone'>
        <Inputs value={text} placeholder='작성하세요.' 
        onChange={(e) => {
          setText(e.target.value);
          console.log(text);
        }} />
        <SubmitBtn onClick={() => {
          if(window.confirm('등록하시겠습니까?')){
            alert('등록이 완료되었습니다.');
            setArr(list => [...list, text]);
            console.log(arr);
          } else {
            alert('다시 확인해 주세요.');
          }
        }}>등록</SubmitBtn>
      </div>
    </div>
  );
}

export default App;
