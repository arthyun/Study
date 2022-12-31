import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Content from './components/Content.js';
import Content2 from './components/Content2.js';
import Control from './components/Control.js';
import ReadContent from './components/ReadContent.js';
import CreateContent from './components/CreateContent.js';
import UpdateContent from './components/UpdateContent.js';

function App() {
  // const [mode, setMode] = useState('welcome');
  // const [subject, setSubject] = useState(
  //   {title:'WEB', sub:'World Wide Web!'}
  //   );

  const [mode, setMode] = useState('read');
  const [presume, setPresume] = useState(false);
  const [inpState1, setInpState1] = useState('');

  const changeVal = (e) => {
    setInpState1(e.target.value);
  }

  const changeMode = () => {
    if(presume === false){
      setMode('welcome');
      setPresume(true);
    } else {
      setMode('read');
      setPresume(false);
    }
  };

  var _article = null;
  if(mode === 'read'){
    _article = <ReadContent />
  } else if(mode === 'welcome' || mode === 'create'){
    _article = <CreateContent onSubmit={(el) => {
      console.log(el);
    }} />
  } else if(mode === 'update'){
    _article = <UpdateContent str1={inpState1} str2={changeVal} onSubmit={(el) => {
      console.log(el); 
    }} />
  }

  if(mode === 'delete'){
    if(window.confirm('삭제하시겠습니까?')){
      _article = '';
    }
  }

  //정렬해보자
  var arr1 = [2, 1, 4, 3, 5];
  // arr1.sort((a, b) => {
  //   return a - b;
  // });
  // console.log(arr1);
  var temp;
  for(let i = 0; i < arr1.length; i++){
    for(let j = i + 1; j < arr1.length; j++){
      if(arr1[i] > arr1[j]){
        temp = arr1[i];
        arr1[i] = arr1[j];
        arr1[j] = temp;
      }
    }
  }
  console.log(arr1);

  //구구단
  for(let a = 2; a < 10; a++){
    for(let b = 1; b < 10; b++){
      var result =  a + '*' + b + '=' + (a * b);
      console.log(result);
    }
  }

  return (
    <Router>
      <div className="App">
        <Content />
        <Content2 state1={mode} func1={changeMode} />

        <Control onChangeMode={function(_mode){
          setMode(_mode);
        }} state1={mode} />

        {_article}
      </div>
    </Router>
  );
}

export default App;
