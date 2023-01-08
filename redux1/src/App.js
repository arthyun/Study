import './App.css';
import React from 'react';
import AddNumberRoot from './components/AddNumberRoot';
import DisplayNumberRoot from './components/DisplayNumberRoot';
import { useState } from 'react';


function App(){
  const [number, setNumber] = useState(10);

  return (
    <div className="App">
      <h1 style={ {width:'60%', margin:'30px auto', color:'#764ABC', fontSize: '50px', border: '5px solid #764ABC'} }>
        Redux1
      </h1>
      <AddNumberRoot />
      <br/>
      <hr/>
      <DisplayNumberRoot />
    </div>
  );
}

export default App;
