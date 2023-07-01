import React from 'react';

export default function Layout({children} : {children: React.ReactNode}){
    return (
        <div>
            <h1>Sub - Layout1</h1>

            {children}
        </div>
    )
}