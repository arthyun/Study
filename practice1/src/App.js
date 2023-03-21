import React, { useState } from 'react';
import SignIn from './components/SignIn';
// import AppRouter from './components/Router';
import Dashboard from './components/Dashboard';


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
