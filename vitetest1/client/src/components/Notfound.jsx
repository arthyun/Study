import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function Notfound(){
    const navigate = useNavigate();
    const goBack = () => {
        navigate('/', {replace: true });
    }
    return (
        <div style={{ padding: '1rem 2rem', boxSizing: 'border-box' }}>
            <h1>404 ERROR</h1>
            <h2>찾을 수 없는 페이지입니다.</h2>
            <br/>
            <button onClick={goBack}>돌아가기</button>
        </div>
    )
}