import React from 'react';

interface SessionStorageTypes {
  loginStore: {
    data: {
      accessToken: string;
      refreshToken: string;
    };
    status: string;
  };
}

const Main: React.FC = () => {
  return (
    <>
      <br />
      <button
        type="button"
        onClick={async () => {
          // 저장되어있는 accessToken 가져오기
          const storedData: string | null = await sessionStorage.getItem('recoilPersist');
          const loginStore: SessionStorageTypes = storedData && JSON.parse(storedData);
          const accessToken = loginStore && loginStore.loginStore.data.accessToken;
          //   console.log(accessToken);

          await fetch('/api/tokenVerify', {
            method: 'GET',
            headers: {
              authorization: `Bearer ${accessToken}`,
              'Content-Type': 'application/json'
            }
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
            })
            .catch((error) => {
              console.error(error);
            });
        }}
      >
        토큰 검증
      </button>
    </>
  );
};

export default Main;
