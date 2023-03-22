import React, { useState } from 'react';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
// 라우터를 어떻게 사용할 것이냐
// import AppRouter from './components/Router';


function App() {
  const [log, setLog] = useState(true);

  return (

    <div className="App">
      { log ? 
      <>
      <button onClick={() => setLog(!log)}>Page Change!</button>
        <SignIn />
      </> 
      : 
      <>
        <Dashboard />
        {/* <AppRouter /> */}
      </> }
      
    </div>

  );
}

export default App;
