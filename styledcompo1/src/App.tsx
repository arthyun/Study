import './App.css';
import React from 'react';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Button color='green' background='pink'>취준이란 힘든 삶인거 같다.</Button><br/>
      <Button color='blue' background='aqua'>방향을 바꾸는게 좋을까.</Button><br/>
      <Button color='black' background='yellow'>자괴감에 빠진다.</Button>
    </div>
  );
}

export default App;
