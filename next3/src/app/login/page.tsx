"use client"
import React, { MouseEventHandler } from 'react';

type btnEvent = MouseEventHandler<HTMLButtonElement>

const Page = () => {
    const onClick1 : btnEvent = (e) => {
        localStorage.setItem('key', 'hyun');
    }
    const onClick2 : btnEvent = (e) => {
        localStorage.removeItem('key');
    }

    return(
        <>
            <h1>Login 페이지 입니다.</h1>
            <button onClick={onClick1}>추가하기</button>
            <button onClick={onClick2}>삭제하기</button>
        </>
    )
};

export default Page;