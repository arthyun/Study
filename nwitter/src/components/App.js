import React, { useEffect, useState } from 'react';
import AppRouter from './Router';
import { BrowserRouter } from 'react-router-dom';
import { auth } from '../firebase.js';


function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  //onAuthStateChanged 함수로 auth의 상태를 체크할 수 있다.
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user){
        //user가 있을때
        setIsLoggedIn(true);
      } else {
        //user가 없을때
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
          {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializing..."}
          <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
