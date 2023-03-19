import React, { useState, useEffect, useRef } from 'react';
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

    //useRef 사용법
    const [count, setCount] = useState(0);

    const btnRef1 = useRef(true);
    const btnRef2 = useRef(null);
    const btnRef3 = useRef("");

    const onClick1 = () => {
      btnRef1.current = !btnRef1.current;
      console.log(typeof btnRef1.current);
    }
    const onClick2 = () => {
      setCount(count => count + 1);
      btnRef2.current += 1;
      console.log(`시작... : ${count}`);
      console.log(`시작... : ${btnRef2.current}`);
    }
    const onClick3 = () => {
      btnRef3.current = '멍청이';
      console.log(typeof btnRef3.current);
    }

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

      <button ref={btnRef1} onClick={onClick1} className='ref1'>Ref사용해보자1</button>
      <button onClick={onClick2} className='ref2'>Ref사용해보자2</button>
      <button ref={btnRef3} onClick={onClick3} className='ref3'>Ref사용해보자3</button>
    </div>
  );
}

export default App;
