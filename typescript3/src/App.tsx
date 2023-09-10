import './styles/App.css';
import React, { Fragment, useEffect, useState } from 'react';
import AppRouter from './Router';
import Login from './components/Login';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { AllTypes } from './types';

const App : React.FC<AllTypes> = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [openNav, setOpenNav] = useState<boolean>(false);
  const [count, setCount] = useState(0);

  const openNavToggle = () => {
    setOpenNav(!openNav);
  }

  useEffect(() => {
    localStorage.getItem('user') ? setIsLogin(true) : console.log('No User Data');
  }, [])


  return (
    <div className="App">
      {isLogin ?
        <Fragment>
          <Header openNav={openNavToggle} />
          <div className='contentArea'>
            {openNav ? <Navbar /> : null}
            <AppRouter />
          </div>
        </Fragment>
        :
        <Login isLogin={setIsLogin}/>
      }
    </div>
  );
}

export default App;
