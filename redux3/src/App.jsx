import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import { changeState } from './store';


function App() {
  const dispatch = useDispatch();

  //데이터 가져다 쓸때
  // const firstData = useSelector(state => state);
  // console.log(selector);

  const clickHandle = () => {
    dispatch(changeState());
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
        <button type='button' onClick={clickHandle} >REDUX 2</button>
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
