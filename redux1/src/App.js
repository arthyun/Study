import './App.css';
import React from 'react';


function AddNumber(){
  return(
    <div>
      <h1>Add Number</h1>
      <input type='button' value='+' />
      <input type='text' value='0' />
    </div>
  );
}

function AddNumberRoot(){
  return(
    <div>
      <h1>Add Number Root</h1>
      <AddNumber />
    </div>
  );
}

function DisplayNumber(){
  return(
    <div>
      <h1>Display Number</h1>
      <input type='text' value='0' readOnly />
    </div>
  );
}

function DisplayNumberRoot(){
  return(
    <div>
      <h1>Display Number Root</h1>
      <DisplayNumber />
    </div>
  );
}

function App(){
  return (
    <div className="App">
      <h1 style={ {color:'red', fontSize: '50px'} }>Root</h1>
      <AddNumberRoot />
      <br/>
      <hr/>
      <DisplayNumberRoot />
    </div>
  );
}

export default App;
