import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from '../components/Home';
import About from './About';
import NotFound from './NotFound';



const Router : React.FC = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export default Router;