import React from 'react';

export default function Page({children} : {children: React.ReactNode}){

    return (
        <>
            <h1>Sub2 페이지에 온걸 환영해!</h1>
            <p>{children}</p>
        </>
    )
};