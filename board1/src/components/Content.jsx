import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


const Content = () => {
    const dispatch = useDispatch();

    const list = useSelector(state => { 
        return state.list1.board;
    });
    // console.log(list)

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
                // list.map((list, i) => {
                //     return <li key={i} data-id={(i+1)}>
                //             <p>{list.id}</p>
                //             <p>{list.subject} &nbsp;
                //                 <span onClick={() => {
                //                     dispatch({ type:'delete', payload: {id: list.id} })
                //                 }}>❌</span>
                //             </p>
                //             {/* <p>{list.content}</p> */}
                //             <p>{list.date}</p>
                //         </li>
                // })
            }
            </ul>
        </>
    );
};

export default Content;