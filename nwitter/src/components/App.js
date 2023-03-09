import React, { useState } from 'react';
import AppRouter from './Router';
import { BrowserRouter } from 'react-router-dom';
import { auth } from '../firebase.js';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(auth.currentUser);
  console.log(auth.currentUser);

  return (
    <BrowserRouter>
      <div className="App">
          <AppRouter isLoggedIn={isLoggedIn} />
          <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
