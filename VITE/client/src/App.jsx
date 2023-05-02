// import './App.css';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import { useState } from 'react';
import AppRouter from './components/Router';
import Loader from './components/Loader';

function App() {
  const [islogin, setIslogin] = useState(true);
  const [account, setAccount] = useState(true);

  return (
    <div className="App">
    { 
    islogin ? 
      <AppRouter account={account} /> 
      : 
      <Loader /> 
    }
    </div>
  )
}

export default App;