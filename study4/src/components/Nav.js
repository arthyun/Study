import React, { useEffect } from 'react';

const Nav = () => {
    useEffect(() => {
        fetch('./list.json')
        .then(response => 
            response.json())
        .then(data => 
            console.log(data));
    });

    return (
        <nav>
            <ul>
                <li><a href='1'>HTML5</a></li>
                <li><a href='2'>CSS3</a></li>
                <li><a href='3'>Javascript</a></li>
            </ul>
        </nav>
    );
}

export default Nav;