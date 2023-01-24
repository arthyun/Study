import { Routes, Route } from 'react-router-dom';
// import { redirect } from 'react-router-dom';
import Boonsik from '../components/Boonsik.jsx';
import Yangsik from '../components/Yangsik.jsx';
import Chungsik from '../components/Chungsik.jsx';
import foods from '../foods.json';


const Router = () => {
    const router = [
        {
            path: '/',
            element: <Boonsik food={foods.KR} />
        },
        {
            path: '/US',
            element: <Yangsik food={foods.US} />
        },
        {
            path: '/CN',
            element: <Chungsik food={foods.CN} />
        },
    ]

    return (
        <Routes>
            {
                router.map((el, i) => {
                    return <Route key={i} path={el.path} element={el.element} />
                })
            }
            {/* <Route path='/' element={<h1>분식이다!</h1>} />
            <Route path='/US' element={<h1>양식이다!</h1>} />
            <Route path='/CN' element={<h1>중식이다!</h1>} /> */}
        </Routes>
    );
}

export default Router;