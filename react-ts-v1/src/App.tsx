import './styles/App.css';
import { useEffect, useState } from 'react';
import BoardList from './components/BoardList';
import Login from './components/Login';


const App = () => {
  //States
  const [isLogin, setIsLogin] = useState<boolean>(false);
  
  type LoginFunc = () => void;
  
  const loginHandler : LoginFunc = () => {
    setIsLogin(!isLogin);
  };

  useEffect(() => {
    const bringUserData = localStorage.getItem('User');
    if(bringUserData){
      loginHandler();
    }
  }, []);


  return (
    <>
      {isLogin ?
        <BoardList />
        :
        <Login loginState={loginHandler} />
      }
    </>
  )
}

export default App;