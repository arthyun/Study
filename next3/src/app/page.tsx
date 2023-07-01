import Image from 'next/image';
import styles from '../styles/page.module.css';


export default function Home() {

  return (
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
  )
}
