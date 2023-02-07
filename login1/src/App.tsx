import React,{ useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  //Redux 초기 데이터를 담아두기
  let userD:{id :string, pass :string} = {id:'', pass:''};

  interface Login {
    Login : {
      user : {
          id: string;
          pass: string;
      }
    }
  }
  //dispatch를 사용할 수 있으니 만들어 놓기
  const dispatch = useDispatch();
  //getState 대신 store에 있는 state불러옴
  useSelector((state:Login) => {
    userD = state.Login.user;
  });

  // console.log(userD);

  const [userId, setId] = useState('');
  const [userPs, setPs] = useState('');

  // console.log(`${userId} / ${userPs}`);

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <div className='firstInp'>
          <label htmlFor='ids'>아이디</label>
          <input id='ids' type='text' value={userId}
          onChange={(e) => { setId(e.target.value) }} 
          onKeyUp={() => {
            const zone = document.getElementById('confirmZone') as HTMLSpanElement;
            //삼항 연산자의 다중조건을 걸었더니 eslint 오류가 발생해서 그냥 if문으로 돌림
            if(userId.includes('@')){
                zone.style.color = 'red';
                zone.innerText = 'ID가 잘못 입력되었습니다.';
            } else {
                zone.style.color = 'green'; 
                zone.innerText = '올바른 ID값 입니다.';
            }
            }} />
        </div>
        <div className='secondInp'>
          <label htmlFor='ps'>비밀번호</label>
          <input id='ps' type='password' value={userPs}
          onChange={(e) => { setPs(e.target.value) }} maxLength={8} />
        </div>
        <span id='confirmZone'></span>

        <div className='btnZone'>
          <button onClick={() => {
              const userId1 = (document.getElementById('ids') as HTMLInputElement).value;
              const userPs1 = (document.getElementById('ps') as HTMLInputElement).value;
              if(userId1 == userD.id && userPs1 == userD.pass){
                window.location.href = 'http://naver.com';
              } else {
                alert('아이디나 패스워드에 오류가 있습니다. 다시 확인해 주세요.');
              }
          }}>로그인</button>
          <button onClick={() => {
            const inpList = document.querySelectorAll('.App-header input') as NodeListOf<Element>;
            inpList.forEach((el) => {
              (el as HTMLInputElement).value = '';
            });
          }}>초기화</button>
        </div>
      </div>
    </div>
  );
}

export default App;
