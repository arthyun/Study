import Image from 'next/image';
import styles from '../styles/page.module.css';

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  return res.json();
}

interface Data {
  id: number;
  // 다른 속성들의 타입 정의
}

export default async function Home() {
  const data : Data[] = await getData();

  return (
    <main className={styles.main}>
      {
        data.slice(0, 3).map((el:Data) => {
          return (
          <p key={el.id}>{el.id}</p>
          )
        })
      }
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
