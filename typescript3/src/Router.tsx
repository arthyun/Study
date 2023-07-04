import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';



const AppRouter : React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    )
}

export default AppRouter;