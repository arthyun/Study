import React, { useState } from 'react';
import store from '../store';

const Home = () => {
    const [title, setTitle] = useState('');
    const [made, setMade] = useState('');

    return (
        <div className='home'>
            <h2>영화 정보 공유하기</h2>
            <p>공유하고 싶은 영화 정보를 입력해 주세요.</p>

            <div className='formZone'>
                <label htmlFor='title'>영화제목</label> &nbsp;
                <input id='title' type='text' value={title} 
                onChange={(e) => {
                    setTitle(e.target.value);
                }} required /> <br/>
                <label htmlFor='made'>제작사</label> &nbsp;
                <input id='made' type='text' value={made} 
                onChange={(e) => {
                    setMade(e.target.value);
                }} required />
                <button onClick={() => {
                    store.dispatch({type: 'increment', payload: {title, made}});
                    alert('제출완료!!!');
                }}>제출</button>
            </div>
            <p>:: 제출한 영화 정보는 상단 Share탭에서 확인 가능합니다.</p>
            <p>:: 페이지를 새로고침하면 모든 데이터가 초기화 됩니다.</p>
        </div>
    );
};

export default Home;