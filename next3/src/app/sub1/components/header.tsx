import '../../../styles/globals.css';
import Link from 'next/link';


export default function Header() {
    return (
        <header>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/sub1'>Sub1</Link>
                </li>
                <li>
                    <Link href='/sub2'>Sub2</Link>
                </li>
            </ul>
        </header>
    )
}