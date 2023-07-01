import React from 'react';

export default function Layout({children} : {children: React.ReactNode}){
    return (
        <div>
            <h3>Sub - Layout3</h3>

            {children}
        </div>
    )
}