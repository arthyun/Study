import Header from './components/header';
import Modal from './components/modal';

export default function Layout({children} : {children: React.ReactNode}){
    return (
        <>
            <Header />
            <Modal />
            {children}
        </>
    )
}