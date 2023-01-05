import React, { useState } from 'react';
import Nav from './components/Nav';
import Article from './components/Article';
import './App.css';

function App() {
    const [article1, setArticle1] = useState(
      {title: 'Welcome123123', desc: 'Hello, React & Ajax123123'}
      );

  return (
    <div className="App">
      <h1>WEB</h1>
      <Nav onClick={function(id){
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
