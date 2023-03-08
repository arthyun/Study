import React, { useState } from 'react';
import Auth from '../routes/Auth';
import Home from '../routes/Home';
import Profile from '../routes/Profile';
import EditProfile from '../routes/EditProfile';
import { Routes, Route } from 'react-router-dom';

const AppRouter = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    console.log(isLoggedIn);
    
    return (
        <>
            <Routes>
                {isLoggedIn ? 
                <Route path='/' element={<Home />} />
                : 
                <Route path='/' element={<Auth />} />}

                <Route path='/Profile' element={<Profile />} />
                <Route path='/EditProfile' element={<EditProfile />} />
            </Routes>
        </>
    );
}

export default AppRouter;