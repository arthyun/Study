import React from 'react';
import Auth from '../routes/Auth';
import Home from '../routes/Home';
import Profile from '../routes/Profile';
import EditProfile from '../routes/EditProfile';
import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';

const AppRouter = (props) => {
    
    return (
        <>
        {props.isLoggedIn && <Nav />}
            <Routes>
                {props.isLoggedIn ? 
                <>
                    <Route path='/' element={<Home />} />
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