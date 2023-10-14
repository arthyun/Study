"use client";
import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

// Recoil
import { useRecoilState } from "recoil";
import { loginStore } from "../store/Recoil";

const LoginPage = () => {
   const [isLogin, setIsLogin] = useRecoilState<boolean>(loginStore);
   const router = useRouter();

   const onSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
      e.preventDefault();
      // setIsLogin(true);
      localStorage.setItem("userInfo", "Success");
      router.push("/");
   };

   return (
      <div>
         <form onSubmit={onSubmit}>
            <label htmlFor="idValue">아이디</label>
            <input
               type="text"
               id="idValue"
               placeholder="아이디를 입력하세요"
            />
            <label htmlFor="passValue">비밀번호</label>
            <input
               type="password"
               id="passValue"
               placeholder="비밀번호를 입력하세요"
            />
            <button type="submit">로그인</button>
         </form>
      </div>
   );
};

export default LoginPage;
