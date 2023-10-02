import React from 'react';
import { useCookies } from 'react-cookie';
import { useRecoilState } from 'recoil';
import { accessToken } from '../store';

interface SessionStorageTypes {
  accessToken: string;
}

const Main: React.FC = () => {
  // 쿠키 함수
  const [cookies] = useCookies(['refreshToken']);

  // 재발급 시 sessionStorage에 저장되게
  const [userInfo, setUserInfo] = useRecoilState(accessToken);

  return (
    <>
      <br />
      <button
        type="button"
        onClick={async () => {
          // 저장되어있는 accessToken 가져오기
          const storedData: string | null = await sessionStorage.getItem('JWT');
          const loginStore: SessionStorageTypes = storedData && JSON.parse(storedData);
          const accessToken = loginStore && loginStore.accessToken;
          // console.log(accessToken);

          // 검증 시 accessToken, refreshToken 두개다 보내서 검증함. -> httpOnly가 설정된 쿠키는 클라이언트에서 읽을 수 없으니 서버에서 처리
          await fetch('/api/tokenVerify', {
            method: 'GET',
            headers: {
              authorization: `Bearer ${accessToken}`,
              // refresh: cookies.refreshToken,
              'Content-Type': 'application/json'
            }
          })
            .then((res) => res.json())
            .then((data) => {
              // 반환받은 상태값으로 분기처리
              if (data.data.ok) {
                console.log(data.message);
              } else {
                console.log(data.message);
                // sessionStorage.removeItem('JWT');
                // window.location.reload();
              }
            })
            .catch((error) => {
              console.error(error);
            });
        }}
      >
        엑세스 토큰 검증
      </button>
      <button
        type="button"
        onClick={async () => {
          // 저장되어있는 accessToken 가져오기
          const storedData: string | null = await sessionStorage.getItem('JWT');
          const loginStore: SessionStorageTypes = storedData && JSON.parse(storedData);
          const accessToken = loginStore && loginStore.accessToken;
          // console.log(accessToken);

          // 검증 시 accessToken, refreshToken 두개다 보내서 검증함.
          await fetch('/api/refresh', {
            method: 'GET',
            headers: {
              authorization: `Bearer ${accessToken}`,
              refresh: cookies.refreshToken,
              'Content-Type': 'application/json'
            }
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.ok) {
                setUserInfo(data.data.accessToken); // 전역 상태에 추가 -> 세션스토리지에 accessToken 저장
              }
              // // 반환받은 상태값으로 분기처리
              // if (data.data.ok) {
              //   alert(data.message);
              // } else {
              //   alert(data.message);
              //   sessionStorage.removeItem('JWT');
              //   window.location.reload();
              // }
            })
            .catch((error) => {
              console.error(error);
            });
        }}
      >
        리프레시 토큰 검증
      </button>
    </>
  );
};

export default Main;
