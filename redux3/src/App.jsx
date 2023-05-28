import './style/App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { useDispatch } from 'react-redux';
import { changeName, changeStatus } from './store';
import { Routes, Route, NavLink } from 'react-router-dom';
import Sub1 from './components/Sub1';


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

      <nav className='navBar'>
        <ul>
          <li>
            <NavLink to='/sub1'>Sub1</NavLink>
          </li>
          <li>
            <NavLink to='/sub2'>Sub2</NavLink>
          </li>
          <li>
            <NavLink to='/sub3'>Sub3</NavLink>
          </li>
        </ul>
      </nav>


      <Routes>
        <Route path='/sub1' element={<Sub1 />}></Route>
      </Routes>

      <style>
        {`
        .navBar {
          width: 50%;
          margin: 1rem auto;
        }
        .navBar > ul {
          display: flex;
          justify-content: center;
        }
        .navBar > ul li {
          width: 33.33%;
          border: 1px solid #fff;
        }
        .navBar > ul li a {
          display: block;
          padding: .5rem;
        }
        .navBar > ul li a:hover {
          background: #fff;
          font-weight: bold;
        }
      `}
      </style>
    </>
  )
}

export default App
