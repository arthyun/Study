import React from 'react';


const Home = () => {
    function test(){
        console.log('text!');
    }
    return (
        <div className='home'>
            <h2>영화 정보 공유하기</h2>
            <p>공유하고 싶은 영화 정보를 입력해 주세요.</p>

            <div className='formZone'>
                <label htmlFor='title'>영화제목</label> &nbsp;
                <input id='title' type='text' required /> <br/>
                <label htmlFor='made'>제작사</label> &nbsp;
                <input id='made' type='text' required />
                <button onClick={test}>제출</button>
            </div>
        </div>
    );
};

export default Home;