import React from "react";
import { useCookies } from "react-cookie";

interface SessionStorageTypes {
  accessToken: string;
}

const Main: React.FC = () => {
  // 쿠키 함수
  const [cookies] = useCookies(["refreshToken"]);

  return (
    <>
      <br />
      <button
        type="button"
        onClick={async () => {
          // 저장되어있는 accessToken 가져오기
          const storedData: string | null = await sessionStorage.getItem("JWT");
          const loginStore: SessionStorageTypes = storedData && JSON.parse(storedData);
          const accessToken = loginStore && loginStore.accessToken;
          // console.log(accessToken);

          // 검증 시 accessToken, refreshToken 두개다 보내서 검증함.
          await fetch("/api/tokenVerify", {
            method: "GET",
            headers: {
              authorization: `Bearer ${accessToken}`,
              refresh: cookies.refreshToken,
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((data) => {
              // 반환받은 상태값으로 분기처리
              if (data.data.ok) {
                alert(data.message);
              } else {
                alert(data.message);
                sessionStorage.removeItem("JWT");
                window.location.reload();
              }
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
