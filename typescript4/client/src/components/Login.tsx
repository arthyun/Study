import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { isloginStore } from "../store";
import { loginStore } from "../store";

// interface IProps {
//   setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
// }

const Login: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  // 로그인 관련
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLogin, setIsLogin] = useRecoilState(isloginStore);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userInfo, setUserInfo] = useRecoilState(loginStore);

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
              if (data.message === "Login failed") {
                alert("로그인에 실패했습니다.");
              } else {
                // console.log(data);
                // sessionStorage.setItem("userInfo", JSON.stringify(data));
                setUserInfo(data); // 전역 상태에 추가
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
