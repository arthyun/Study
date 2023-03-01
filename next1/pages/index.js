import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Seo from '../components/Seo';
// 파일명.module.css 파일 형태를 제외한 모든 나머지 css파일들은 _app.js에서만 import해와서 사용해야 한다. (글로벌 css간의 충돌을 피하기 위해서이다.)


export default function Home() {

  return (
    <>
      <Seo title='Home' />
      <h1>Home Page!</h1>
    </>
  )
}
