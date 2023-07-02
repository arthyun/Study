import Image from 'next/image';
import styles from '../styles/page.module.css';
import Link from 'next/link';


export default function Home() {


  return (
    <div className='wrap'>
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
      <main className={styles.main}>
        <Image
          src="/next.svg"
          alt="Next Logo"
          className={styles.logo}
          width={300}
          height={48}
          priority
        />
      </main>
    </div>
  )
}
