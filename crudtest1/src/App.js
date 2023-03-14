import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Field from './components/Field';
import Home from './components/Home';

function App() {
  //localstorage에서 데이터 가져오기
  const localInspect = localStorage.getItem("user");
  const result = JSON.parse(localInspect);

  //localstorage에 데이터가 있다면 isTrue는 True!
  const [isTrue, setIsTrue] = useState(result);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        { isTrue ? <Home /> : <Field /> }
      </header>
    </div>
  );
}

export default App;
