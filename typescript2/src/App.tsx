import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import Content from './components/Content';

function App() {
  //state에 타입을 지정할때는 useState<제네릭>으로 지정해줄 것!
  const [cnt, setCnt] = useState<number>(0);

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />

      <h2>FE 면접 랜덤 문제풀이</h2><br/>

      <button onClick={() => {
        setCnt(Math.floor(Math.random() * 81));
        let area1 = document.querySelector('.textArea');
        if(area1 instanceof HTMLTextAreaElement){
          area1.value = '';
        }
      }}>문제 주세요~!</button>

      <Content cnt={cnt} />
    </div>
  );
}

export default App;
