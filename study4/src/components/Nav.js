import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Nav_A = styled.nav`
    background: red;
`;

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
        <Nav_A>
            <ul>
                {lists}
            </ul>

            <style jsx='true'>
                {`
                    nav ul li {
                        padding: 5px 0;
                        padding-left: 15px;
                    }
                    nav ul li a {
                        text-decoration: none;
                        color: #fff;
                        font-weight: bold;
                    }
                `}
            </style>
        </Nav_A>

        
    );
}

export default Nav;