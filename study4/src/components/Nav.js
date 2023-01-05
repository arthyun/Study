import React, { useEffect, useState } from 'react';

const Nav = (props) => {
    //json을 담을 state변수 생성
    const [json1, setJson1] = useState([]);

    //json파일 fetch로 호출하기
    useEffect(() => {
        fetch('./list.json')
        .then(response => 
            response.json())
        .then(data => 
            setJson1(data));
    }, []);

    //출력할 태그 만들기
    const lists = json1.map((el, i) =>
        <li key={i}>
            <a href={el.id} data-id={el.id} onClick={function(e){
                e.preventDefault();
                console.log('trigger ' + el.id);
                props.onClick(e.target.dataset.id);
            }}>
                {el.title}
            </a>
        </li>
        );

    return (
        <nav>
            <ul>
                {lists}
            </ul>
        </nav>
    );
}

export default Nav;