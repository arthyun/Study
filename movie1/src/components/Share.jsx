import React, { useState } from 'react';
import store from '../store';

const Share = () => {
    const [mains, setMains] = useState(store.getState().main);

    //subscribe로 담아주지 않으면 변경값으로 자동 렌더링이 되지 않는다.
    store.subscribe(() => {
        setMains(store.getState().main);
    })

    return (
        <div className='share'>
            <h2>Share 페이지입니다.</h2>
            <ul>
                {
                    mains.map((list, i) => {
                        return <li key={i}>
                            <p>영화제목 : {list.타이틀}</p>
                            <p>제작사 : {list.제작사}</p>
                        </li>
                    })
                }
            </ul>
        </div>
    );
};

export default Share;