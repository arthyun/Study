import Link from "next/link";
import { useRouter } from "next/router";


const Navbar = () => {
    const router = useRouter();
    console.log(router);
    //react router와는 다르게 Link태그는 경로만 지정가능하며 추가 속성을 이용하려면 Link안에 a태그를 지정해야한다.
    return (
        <>
        {/* Link 구버전 */}
        {/* <Link href='/'>
            <a style={{color: 'red'}}>Home</a>
        </Link>
        <Link href='/about'>
            <a style={{color: 'blue'}}>About</a>
        </Link> */}

        {/* Link 신버전 */}
        <Link href='/' style={{color: router.pathname === "/" ? "yellow" : "#fff"}}>Home</Link>
        <Link href='/about' style={{color: router.pathname === "/about" ? "yellow" : "#fff"}}>About</Link>
        </>
    )
}
export default Navbar;