import React, { useState } from 'react';
import './styles/App.css';
import Login from './components/Login';
import AppRouter from './Router';


const App : React.FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);


  return (
    <div className="App">
      {isLogin ?
        <AppRouter />
      :
        <Login />
      }
    </div>
  );
}

export default App;
