import React, { useState } from 'react';
import Auth from '../routes/Auth';
import Home from '../routes/Home';
import { Routes, Route } from 'react-router-dom';

const AppRouter = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    console.log(isLoggedIn);
    
    return (
        <>
            <Routes>
                {isLoggedIn ? 
                <Route path='/' element={<Home/>} />
                : 
                <Route path='/' element={<Auth/>} />}
            </Routes>
        </>
    );
}

export default AppRouter;