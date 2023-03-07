import React from 'react';
import AppRouter from './Router';
import { BrowserRouter } from 'react-router-dom';


function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <AppRouter/>
      </div>
    </BrowserRouter>
  );
}

export default App;
