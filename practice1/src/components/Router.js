import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Dashboard from './Dashboard';
// import Player from './Player';

const AppRouter = () => {

    return (
        <>
            <Routes>
                <Route path='/' element={<Dashboard />} />
            </Routes>
        </>
    )
}

export default AppRouter;