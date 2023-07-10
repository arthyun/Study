import React from 'react';
import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './NotFound';
// import TokenTest from './components/TokenTest';


const AppRouter : React.FC = () => {
    return (
        <div className='routingZone'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='*' element={<NotFound />} />
                {/* <Route path='/tokentest' element={<TokenTest />} /> */}
            </Routes>
        </div>
    )
}

export default AppRouter;