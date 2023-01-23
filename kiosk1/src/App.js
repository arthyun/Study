import './App.css';
import { BrowserRouter } from 'react-router-dom';
import React, { useDispatch } from 'react-redux';
import Header from './components/Header.jsx';
import Router from './config/Router.jsx';



function App() {
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
