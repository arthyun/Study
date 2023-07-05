import React from 'react';
import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';


const AppRouter : React.FC = () => {
    return (
        <div className='routingZone'>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </div>
    )
}

export default AppRouter;