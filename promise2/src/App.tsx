import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const promise1 = new Promise<string>((resolve, reject) => {
      if(true){
        resolve('추가하였다');
      } else {
        reject('오답');
      }
  });
  promise1
  .then(res => {
    setText(res)
  })
  .catch((err) => 
  console.log(err));

  const [text, setText] = useState<string>('');

  // console.log(text);
  const para = document.querySelector<HTMLElement>('p');
  if(para){
    para.innerText = text;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
