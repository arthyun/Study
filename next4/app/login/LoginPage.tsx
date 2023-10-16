"use client";
import React, { useState } from "react";
import { loginStore } from "../store/Recoil";
import { useRecoilState } from "recoil";
import { useRouter } from "next/navigation";

const LoginPage = () => {
   const [userId, setUserId] = useState<string>("");
   const [userPass, setUserPass] = useState<string>("");
   const [isLogin, setIsLogin] = useRecoilState<boolean>(loginStore);
   const router = useRouter();

   const onChangeText = (e: React.ChangeEvent<HTMLInputElement>): void => {
      const { id, value } = e.target;
      if (id === "idValue") {
         setUserId(value);
      } else if (id === "passValue") {
         setUserPass(value);
      }
   };

   const onSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
      e.preventDefault();
      const testForm = {
         userId,
         userPass,
      };
      const response = await fetch("http://localhost:3000/api/loginVerify", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(testForm),
      });
      const result = await response.json();
      if (result?.status === "POST_SUCCESS") {
         setIsLogin(true);
         router.push("/");
      }
   };

   return (
      <div>
         <form onSubmit={onSubmit}>
            <label htmlFor="idValue">아이디</label>
            <input
               type="text"
               id="idValue"
               value={userId}
               onChange={onChangeText}
               placeholder="아이디를 입력하세요"
               required
            />
            <label htmlFor="passValue">비밀번호</label>
            <input
               type="password"
               id="passValue"
               value={userPass}
               onChange={onChangeText}
               placeholder="비밀번호를 입력하세요"
               required
            />
            <button type="submit">로그인</button>
         </form>
      </div>
   );
};

export default LoginPage;
