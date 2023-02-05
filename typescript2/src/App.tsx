import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Content from './components/Content';
import Answer from './components/Answer';

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <header className='headerArea'>
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
          <NavLink to='/'>시험장</NavLink>
          <NavLink to='/Answer'>해설</NavLink>
        </nav>
      </header>

      <Routes>
        <Route path='/' element={<Content />} />
        <Route path='/Answer' element={<Answer />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
