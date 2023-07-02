"use client"
import React from 'react';

const Login = ({isLogin} : {isLogin:boolean}) => {
    const onClick = () => {
        console.log(isLogin);
    }

    return(
        <>
            <h1>Login 페이지 입니다.</h1>
            <button onClick={onClick}>돌아가기</button>
        </>
    )
};

export default Login;