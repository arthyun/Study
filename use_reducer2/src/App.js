import logo from './logo.svg';
import './App.css';
import React, {useState, useReducer} from 'react';
import List from './components/List.jsx';


const initialState = {
  count: 0,
  content: [
              {
                id: Date.now(),
                para: '초기 배열 문장입니다.'
              },
            ],
};

const reducer = (state, action) => {
  switch(action.type){
    case 'insert':
      return 
    case 'delete':
      return
    default:
      return state;
  }
};

function App() {
  const [text, setText] = useState('');
  const [arr1, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />

      <h2>오늘의 할일 : {arr1.count}가지</h2>
      <form>
        <div className='formZone'>
          <input type='text' value={text} onChange={(e) => {
            setText(e.target.value);
          }} placeholder='입력란' required />
          <button onClick={() => {dispatch({type:'insert', payload: arr1})}}>작성</button>
        </div>

          {
            arr1.content.map((list) => {
              return <List key={list.id} para={list.para} />;
            })
          }
      </form>
    </div>
  );
}

export default App;
