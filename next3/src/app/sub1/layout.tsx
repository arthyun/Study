import { Suspense } from 'react';
import Header from './components/header';
import Loading from './loading';
// import Modal from './components/modal';

export default function Layout({children} : {children: React.ReactNode}){
    return (
        <>
            {/* <Modal /> */}


            <Header />

            <Suspense fallback={<Loading />}>
                {children}
            </Suspense>
        </>
    )
}