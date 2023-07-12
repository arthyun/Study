import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import About from './About';
import NotFound from './NotFound';



const Router : React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='/about' element={ <About />} />
            <Route path='*' element={ <NotFound />} />
        </Routes>
    )
}

export default Router;