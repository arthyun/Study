import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';


function App() {
  // useSelector는 리덕스 스토어의 상태를 조회하는 Hook입니다.
  // state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일합니다.
  // console.log(useSelector(state => state.test1));

  //React Hook은 호출 시 무조건 컴포넌트 내에서 호출해야한다.
  const dispatch = useDispatch();

  //입력란에 사용될 state변수
  const [count, setCount] = useState(1);
  const [text, setText] = useState('');

  return (
    <div className="App">
      <Header />
      <br/>
      <Content />
      <br/>
      <label htmlFor='text'>글작성</label> &nbsp;
      <input id='text' type='text' value={text} onChange={(e) => {
        setText(e.target.value);
      }} /> &nbsp;
      <button onClick={() => {
        setCount(cnt + 1);
        dispatch(
          {type:'increment', payload: {id: count, subject: text, content: `내용:${text}`, date: `${new Date().toLocaleDateString()}`}});
      }}>&nbsp;등록&nbsp;</button>
    </div>
  );
}

export default App;
