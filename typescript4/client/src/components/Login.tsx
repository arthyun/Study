/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { isloginStore } from "../store";
import { accessToken } from "../store";
import { Cookies, useCookies } from "react-cookie";

const cookies = new Cookies();

// interface IProps {
//   setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
// }

const Login: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  // 로그인 관련
  const [isLogin, setIsLogin] = useRecoilState(isloginStore);
  const [userInfo, setUserInfo] = useRecoilState(accessToken);

  // 쿠키 함수
  const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);

  useEffect(() => {
    if (userInfo === "") {
      removeCookie("refreshToken");
    }
  }, []);

  return (
    <div className="App-div">
      <img
        src="./logo.svg"
        className="App-logo"
        alt="logo"
      />
      <label htmlFor="name">이름</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="password">비밀번호</label>
      <input
        type="password"
        id="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <button
        type="submit"
        onClick={async () => {
          await fetch("/api/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: name, password: pass }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.status === "failed") {
                alert("로그인에 실패했습니다.");
              } else {
                // console.log(data.status);
                // sessionStorage.setItem("userInfo", JSON.stringify(data));
                setUserInfo(data.data.accessToken); // 전역 상태에 추가 -> 세션스토리지에 accessToken 저장
                setIsLogin(true);
              }
            });
        }}
      >
        제출
      </button>
    </div>
  );
};

export default Login;
