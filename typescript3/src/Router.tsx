import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { Example } from './types';

interface Ex2 extends Example {
    power: number;
}

const a : Ex2 = {
    age: 1,
    gender: 'male',
    power: 220,
}


const AppRouter : React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    )
}

export default AppRouter;