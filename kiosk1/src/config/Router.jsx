import { Routes, Route } from 'react-router-dom';
// import { redirect } from 'react-router-dom';

const Router = () => {
    const router = [
        {
            path: '/',
            element: <h1>분식이다!</h1>
        },
        {
            path: '/US',
            element: <h1>양식이다!</h1>
        },
        {
            path: '/CN',
            element: <h1>중식이다!</h1>
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