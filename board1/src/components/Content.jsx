import React from 'react';
import { useSelector } from 'react-redux';


const Content = () => {
    const list = useSelector(state => { 
        return state.list1.board;
    });

    return(
        <>
            <h2>게시물이 보일 자리</h2>

            <ul className='boardlist'>
            {
                list.map((list) => {
                    return <li key={list.id}>
                            <p>{list.id}번째 게시물</p>
                            <p>{list.subject}</p>
                            <p>{list.content}</p>
                            <p>{list.date}</p>
                           </li>
                })
            }
            </ul>
        </>
    );
};

export default Content;