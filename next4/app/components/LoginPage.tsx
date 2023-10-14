import React from "react";

const LoginPage = () => {
   return (
      <div>
         <form>
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
         </form>
      </div>
   );
};

export default LoginPage;
