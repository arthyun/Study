import React from 'react';
import Auth from '../routes/Auth';
import Home from '../routes/Home';
import Profile from '../routes/Profile';
import EditProfile from '../routes/EditProfile';
import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';

const AppRouter = ({isLoggedIn, userObj}) => {
    
    return (
        <>
        {isLoggedIn && <Nav />}
            <Routes>
                {isLoggedIn ? 
                <>
                    <Route path='/' element={<Home userObj={userObj} />} />
                    <Route path='/Profile' element={<Profile />} />
                    <Route path='/EditProfile' element={<EditProfile />} />
                </>
                : 
                <Route path='/' element={<Auth />} />}
            </Routes>
        </>
    );
}

export default AppRouter;