import './style/App.css';
import React, { useEffect } from 'react';
import AppRouter from './Router';
import Login from './components/Login';
import { useRecoilState } from 'recoil';
import { isloginStore } from './store';

const App = () => {
  // 새로고침 할때 마다 로그인 여부 확인용
  const [isLogin, setIsLogin] = useRecoilState(isloginStore);

  useEffect(() => {
    if (sessionStorage.getItem('recoilPersist')) {
      setIsLogin(true);
    }
  }, [setIsLogin]);

  return <div className="App">{isLogin ? <AppRouter /> : <Login />}</div>;
};

export default App;
