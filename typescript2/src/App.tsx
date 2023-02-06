import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Content from './components/Content';
import Answer from './components/Answer';


function App() {
  window.addEventListener('scroll', ():void => {
    let winY:number = window.scrollY;
    let scT = document.querySelector('.headerArea') as HTMLHeadingElement;
    let innerFT = document.querySelector('.headerArea nav a') as HTMLAnchorElement;

    if(winY > 0){
        scT.style.background = '#eee';
        scT.style.borderBottom = 'none';
        innerFT.style.color = '#333';
    } else {
        scT.style.background = 'none';
        scT.style.borderBottom = '';
        innerFT.style.color = '';
    }
  })

  return (
    <BrowserRouter>
    <div className="App">
      <header className='headerArea'>
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
          <NavLink to='/interview/'>시험장</NavLink>
          <NavLink to='/interview/Answer'>해설</NavLink>
        </nav>
      </header>

      <Routes>
        <Route path='/interview/' element={<Content />} />
        <Route path='/interview/Answer' element={<Answer />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
