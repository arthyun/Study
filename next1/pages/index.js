import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
// 파일명.module.css 파일 형태를 제외한 모든 나머지 css파일들은 _app.js에서만 import해와서 사용해야 한다. (글로벌 css간의 충돌을 피하기 위해서이다.)
import Seo from '../components/Seo';
import { useEffect, useState } from "react";

const API_KEY = 'dbfc0f1988710cd09310a32ce02c086c';

export default function Home() {
  //API를 담을 state변수
  const [movies, setMovies] = useState();

  //API 호출문
  useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(result => setMovies(result.results));
  }, []);
  //API를 정상적으로 불러왔다. -> 이제는 API_KEY를 암호화 해야한다!
  console.log(movies);

  return (
    <>
      <Seo title='Home' />
      {!movies && <h4>Loading...</h4>}
      {/* movies 뒤에 물음표(?)를 붙이는 이유는 movies가 undefined일때 map 함수가 작동되지 않도록 하기 위함이다. */}
      {
        movies?.map(list => {
          return (
            <div key={list.id}>
              <h4>{list.original_title}</h4>
            </div>
          )
        })
      }
    </>
  )
}
