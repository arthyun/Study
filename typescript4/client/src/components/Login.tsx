import React, { useState } from "react";

interface IProps {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<IProps> = ({ setIsLogin }) => {
  const [name, setName] = useState<string>("");
  const [pass, setPass] = useState<string>("");

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
        type="button"
        onClick={async () => {
          await fetch("http://localhost:5000/api/login", {
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
                console.log(data.message);
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
