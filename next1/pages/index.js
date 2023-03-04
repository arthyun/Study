import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
// 파일명.module.css 파일 형태를 제외한 모든 나머지 css파일들은 _app.js에서만 import해와서 사용해야 한다. (글로벌 css간의 충돌을 피하기 위해서이다.)
import Seo from '../components/Seo';
import { useEffect, useState } from "react";

// const API_KEY = 'dbfc0f1988710cd09310a32ce02c086c';

export default function Home(props) {

  //API를 담을 state변수
  // const [movies, setMovies] = useState();

  //API 호출문(rewrites의 source값이 fetch에 매개변수로 들어감)
  // useEffect(() => {
  //     fetch(`/api/movies`)
  //     .then(res => res.json())
  //     .then(result => setMovies(result.results));
  // }, []);
  //API를 정상적으로 불러왔다. -> 이제는 API_KEY를 암호화 해야한다!
  // console.log(movies);

  return (
    <>
    <div className='container'>
      <Seo title='Home' />
      {/* SSR로 렌더하게 되면 Loading가 필요없음 */}
      {/* {!movies && <h4>Loading...</h4>} */}
      {/* movies 뒤에 물음표(?)를 붙이는 이유는 movies가 undefined일때 map 함수가 작동되지 않도록 하기 위함이다. */}
      {
        props.results?.map(list => {
          return (
            <div key={list.id}>
              <div className='movie' key={list.id}>
                <img src={`https://image.tmdb.org/t/p/w500${list.poster_path}`} />
                <h4>{list.original_title}</h4>
              </div>
            </div>
          )
        })
      }
      </div>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </>
  )
}

//SSR로 렌더하게 만들어 준다 -> getServerSideProps 함수 사용*
export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/movies`);
  const data = await res.json();
  const results = await data.results;
  //불러온 API(results)를 props로 사용하게 끔 return해준다.
  return {
    props: {
      results,
    },
  };
}
