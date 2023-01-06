import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Article from './components/Article';
import NowLoading from './components/NowLoading';
import './App.css';

function App() {
    const [article1, setArticle1] = useState(
      {title: 'Welcome', desc: 'Hello, React & Ajax'}
      );
    //json을 담을 state변수 생성(Nav props로 넘길 예정)
    const [json1, setJson1] = useState([]);

    //json파일 fetch로 호출하기
    useEffect(() => {
        fetch('./list.json')
        .then(response => 
            response.json())
        .then(data => 
            setJson1(data));
    }, []);

  return (
    <div className="App">
      <NowLoading />
      <h1>WEB</h1>
      <Nav list={json1} onClick={function(id){
                    fetch(id + '.json')
                    .then(response => 
                      response.json())
                    .then(data => 
                      setArticle1(
                        {title: data.title, desc: data.desc}
                      ));
                  }} />
      <Article article={article1} />
    </div>
  );
}

export default App;
