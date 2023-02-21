import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  interface JsonType {
    body : string;
    email : string;
    id : number;
    name : string;
    postId : number;
  }

  const [json1, setJson1] = useState<[]>([]);

  const promise1 = new Promise<[]>((resolve, reject) => {
    if(true){
      fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(data => {
        resolve(data);
      });
    } else {
      reject(new Error('오답'));
    }
  });

  promise1
  .then(res => setJson1(res))
  .catch((err) => console.log(err));


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {
            json1.map((el:JsonType, i:number) => {
              return (
                <li key={i}>
                  
                  <p>
                    <span>{el.id}</span>. &nbsp;
                    {el.email}
                  </p>
                </li>
              );
            })
          }
        </ul>
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
