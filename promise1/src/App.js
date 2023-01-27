import logo from './logo.svg';
import './App.scss';

function App() {
  // //첫번째 Promise 생성자 작성
  // //Promise를 생성하면 기본적으로 pending(대기)상태이다. -> fulfilled(이행) -> rejected(거부)
  // const promise1 = new Promise((resolve, reject) => {
  //   const a = 1 + 1;
  //   if(a === 2){
  //     resolve('success');
  //   } else {
  //     reject('failed');
  //   }
  // });
  // //결과 출력해보기
  // promise1.then((msg) => {
  //   console.log('결과: ' + msg);
  // }).catch((error) => {
  //   console.log('결과: ' + error);
  // })


  //async, await (ES8부터 등장)
  function delay(){
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(), 1000);
    })
  }
  async function getApple() {
    await delay();
    return "apple";
  }
  async function getBanana() {
    await delay();
    return "banana";
  }
  async function getFruites() {
    let a = await getApple(); // 리턴값이 promise의 resolve()이므로 대입 가능
    let b = await getBanana(); // getApple()이 처리되고 getBanana()가 처리됩니다.
    console.log(`${a} and ${b}`);
  }
  getFruites();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p><strong>Sass(Scss)</strong> 먼저 연결하자...</p>
        <p><strong>Promise, then, catch</strong>를 공부해보자...</p>
        <p><strong>async, await, try, catch</strong>를 공부해보자...</p>
      </header>
    </div>
  );
}

export default App;