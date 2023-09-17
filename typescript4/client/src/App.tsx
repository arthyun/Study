import "./style/App.css";
import React, { useState } from "react";
import AppRouter from "./Router";
import Login from "./components/Login";

const App = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return <div className="App">{isLogin ? <AppRouter /> : <Login setIsLogin={setIsLogin} />}</div>;
};

export default App;
