import logo from './logo.svg';
import './App.css';
import React, {useState, useReducer} from 'react';
import List from './components/List.jsx';


const initialState = {
  count: 0,
  content: [{id: Date.now(), text: '금쪽이보면슬퍼'}],
};

const reducer = (state, action) => {
  switch(action.type){
    case 'insert':
      const text = action.payload.text;
      const newContent = {id: Date.now(), text};
      return {
        count: state.count + 1,
        content: [...state.content, newContent],
      };
    case 'delete':
      return {
        count: state.count - 1,
        content: state.content.filter(list => list.id !== action.payload.id),
      };
    default:
      return state;
  }
};

function App() {
  const [text, setText] = useState('');
  const [arr1, dispatch] = useReducer(reducer, initialState);
  // useReducer -> reducer, state, action, dispatch, payload를 사용

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />

      <h2>오늘의 할일 : {arr1.count}가지</h2>
        <div className='formZone'>
          <input type='text' value={text} onChange={(e) => {
            setText(e.target.value);
          }} placeholder='입력란' />
          <button onClick={() => {
            dispatch({ type:'insert', payload: {text} })
            }}>작성</button>
        </div>

          {
            arr1.content.map((list) => {
              return <List key={list.id} para={list.text}
              dispatch={dispatch} id={list.id} />;
            })
          }
    </div>
  );
}

export default App;
