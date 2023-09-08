import '../styles/App.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AllTypes } from '../types';

const Header : React.FC<AllTypes> = ({ openNav }) => {
    // const btnRef = useRef<HTMLButtonElement>(null);
    const [count, setCount] = useState(0);

    const navOpenClose = () => {
        if(openNav){
            openNav();
            setCount(count + 1);
        }
    };

    return (
        <header className='headerArea'>
            <Link to='/'>
                <img src='./logo.svg' alt='logo' />
            </Link>
            <button onClick={navOpenClose} type='button'>
            {count % 2 === 0 ? '열기' : '닫기'}
            </button>
        </header>
    )
}

export default Header;