import React from 'react';
import { useSelector } from 'react-redux';


const Content = () => {
    const list = useSelector(state => { 
        return state.list1.board;
    });

    return(
        <>
            <h2>게시물 목록</h2>
            <br/>
            <ul className='boardHeader'>
                <li>번호</li>
                <li>제목</li>
                <li>날짜</li>
            </ul>

            <ul className='boardlist'>
            {
                list.map((list, i) => {
                    return <li key={list.id} data-id={(i+1)}>
                            <p>{list.id}</p>
                            <p>{list.subject}</p>
                            {/* <p>{list.content}</p> */}
                            <p>{list.date}</p>
                           </li>
                })
            }
            </ul>
        </>
    );
};

export default Content;