import React, { Fragment, useEffect, useState } from 'react';
import './styles/App.css';
import Login from './components/Login';
import AppRouter from './Router';
import Header from './components/Header';
import Navbar from './components/Navbar';


const App : React.FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [openNav, setOpenNav] = useState<boolean>(false);

  const openNavToggle = ():void => {
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
