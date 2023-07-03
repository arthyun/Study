import Sub1Page from '../page';

export default function Layout({children} : {children: React.ReactNode}){
    return (
        <>
            <Sub1Page />
            {children}
        </>
    )
}