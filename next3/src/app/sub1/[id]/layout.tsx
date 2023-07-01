import React from 'react';

export default function Layout({children} : {children: React.ReactNode}){
    return (
        <div>
            <h2>Sub - Layout2</h2>

            {children}
        </div>
    )
}