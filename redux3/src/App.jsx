import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { useDispatch } from 'react-redux';
import { changeName, changeStatus } from './store';


function App() {
  const dispatch = useDispatch();

  //데이터 가져다 쓸때
  // const firstData = useSelector(state => state);
  // console.log(selector);

  const clickHandle1 = (text) => {
    dispatch(changeName(text));
    console.log('클릭 완료1');
  }
  const clickHandle2 = () => {
    dispatch(changeStatus());
    console.log('클릭 완료2');
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button type='button' onClick={() => clickHandle1({ name: 'Kim' })} >REDUX_1</button>
        <button type='button' onClick={() => clickHandle2()} >REDUX_2</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
