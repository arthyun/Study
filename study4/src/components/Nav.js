import React, { useRef } from 'react';
import styled from 'styled-components';

const NavA = styled.nav`
    background: red;
`;

const Nav = (props) => {
    
    const colorArr = ['green', 'pink', 'yellow'];
    const navBar = useRef(null);
    const listRefs = useRef(null);
    
    const onClick1 = (e) => {
        listRefs.current = e.target;
        const eachParents = listRefs.current.parentElement;
        const colors = listRefs.current.dataset.id;
        eachParents.style.background = colors;
    };

    //출력할 태그 만들기
    const lists = props.list.map((el, i) =>
    <li key={i} ref={listRefs}>
        <a href={el.id} data-id={el.id} onClick={function(e){
            e.preventDefault();
            console.log('trigger ' + el.id);
            props.onClick(e.target.dataset.id);
        }}>
            {el.title}
        </a>
        &nbsp;<button className={`btn${i+1}`} data-id={colorArr[i]} onClick={onClick1}>click</button>
    </li>
    );

    return (
        <NavA ref={navBar}>
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
        </NavA>

        
    );
}

export default Nav;