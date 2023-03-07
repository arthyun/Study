import React from 'react';
import Auth from '../routes/Auth';
import Home from '../routes/Home';
import { Routes, Route } from 'react-router-dom';

const AppRouter = (props) => {
    
    return (
        <>
            <Routes>
                {props.isLoggedIn ? 
                <Route path='/' element={<Home/>} />
                : 
                <Route path='/' element={<Auth/>} />}
            </Routes>
        </>
    );
}

export default AppRouter;