import React from 'react';
import '../styles/App.css';
import { AllTypes } from '../types';

const Header : React.FC<AllTypes> = ({openNav}) => {
    const navOpenClose = () => {
        if(openNav){
            openNav();
        }
    }
    
    return (
        <header className='headerArea'>
            <img src='./logo.svg' alt='logo' />
            <button onClick={navOpenClose} type='button'>열기</button>
        </header>
    )
}

export default Header;