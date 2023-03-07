import React, { useState } from 'react';
import AppRouter from './Router';
import { BrowserRouter } from 'react-router-dom';
import { auth } from '../fbase';

//값이 있으면 user라고 출력되고 없으면 null 출력
console.log(auth.currentUser)


function App() {

  //state값에 user의 상태를 줌으로서 변화를 감지한다.
  const [isLoggedIn, setIsLoggedIn] = useState(auth.currentUser);
  
  return (
    <BrowserRouter>
      <div className="App">
        <AppRouter isLoggedIn={isLoggedIn} />
        <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
        <style jsx="true">
          {`
            body {
              font-family: "Roboto", sans-serif;
              font-weight: bold;
            }
          `}
        </style>
      </div>
    </BrowserRouter>
  );
}

export default App;
