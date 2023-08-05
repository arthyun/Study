import { Routes, Route } from 'react-router-dom';

//components
import Layout from './components/Layout';
import Home from './components/Home';


const AppRouter = () => {

    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </>
    )
}

export default AppRouter;