import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.css";


const Navbar = () => {
    const router = useRouter();
    console.log(router);
    //react router와는 다르게 Link태그는 경로만 지정가능하며 추가 속성을 이용하려면 Link안에 a태그를 지정해야한다.
    return (
        <nav>
        {/* Link 구버전 */}
        {/* <Link href='/'>
            <a style={{color: 'red'}}>Home</a>
        </Link>
        <Link href='/about'>
            <a style={{color: 'blue'}}>About</a>
        </Link> */}

        {/* Link 신버전 */}
        {/* <Link href='/' style={{color: router.pathname === "/" ? "yellow" : "#fff"}}>Home</Link>
        <Link href='/about' style={{color: router.pathname === "/about" ? "yellow" : "#fff"}}>About</Link> */}

        {/* 클래스 2개 이상 추가 시 콤마 사용하지 않기 */}
        {/* <Link href='/' className={`${styles.link1} ${router.pathname === "/" ? styles.active : ""}`}>Home</Link>
        <Link href='/about' className={`${styles.link2} ${router.pathname === "/about" ? styles.active : ""}`}>About</Link> */}
        
        {/* 또다른 style 입히는 방법(추천) */}
        {/* Next 신버전에서의 문제는 legacyBehavior를 추가하거나 a태그 대신 span태그를 이용할 것 */}
        <Link href='/' legacyBehavior>
            <span className={router.pathname === "/" ? "active" : ""}>Home</span>
        </Link>
        <Link href='/about' legacyBehavior>
            <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
        <style jsx>
            {`
                nav {
                    background-color: tomato;
                }
                .active {
                    color: yellow;
                    font-weight: bold;
                }
            `}
        </style>
        </nav>
    )
}
export default Navbar;