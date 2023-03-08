import React from 'react';
import AppRouter from './Router';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';


function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <AppRouter/>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
