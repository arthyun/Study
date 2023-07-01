'use client';

import Image from 'next/image';
import styles from '../styles/page.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';


export default function Home() {
  const [id, setId] = useState<number>(0);

  const router = useRouter();

  const onClickRouter = () => {
      router.push(`/sub1/${String(id)}`);
  }


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
      <button onClick={onClickRouter}>라우팅!</button>

      <Link href='/sub1'>Sub1 이동</Link>
      <Link href='/sub2'>Sub2 이동</Link>
      
    </main>
  )
}
