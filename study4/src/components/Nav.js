import React, { useEffect, useState } from 'react';

const Nav = (props) => {
    //출력할 태그 만들기
    const lists = props.list.map((el, i) =>
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