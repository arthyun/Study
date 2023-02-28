import '@/styles/globals.css';
import Navbar from './navbar';

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* 전역으로 사용 할 컴포넌트는 이곳에서 배치 */}
      <Navbar />
      
      <Component {...pageProps} />
      <h1>Hello I&apos;m _app.js</h1>

      {/* 전역 설정법 -> global 추가 */}
      <style jsx global>
        {`
          span {
            color: white;
          }
          a {
            color: #fff;
          } 
        `}
      </style>
    </>
  );
};
