import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  //Firebase DB 연결하기
  const databaseURL = 'https://test1-de2cb-default-rtdb.firebaseio.com';
  const [words, setWords] = useState([]);

  async function connectDB(){
    const res = await fetch(`${databaseURL}/words.json`);
    const data = await res.json();
    if(res.status !== 200){
      throw new Error(res.statusText);
    }
    setWords(data);
  }

  useEffect(() => {
    connectDB();
  }, []);

  console.log(words);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          words.map((el, i) => {
            return(
              <p key={i}><strong>{el.weight}: </strong>{el.word}</p>
            )
          })
        }
      </header>
    </div>
  );
}

export default App;
