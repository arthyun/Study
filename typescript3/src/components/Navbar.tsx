import '../styles/App.css';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AllTypes } from '../types';

const Navbar : React.FC = () => {
    const [open1, setOpen1] = useState<boolean>(false);
    const [open2, setOpen2] = useState<boolean>(false);
    const [open3, setOpen3] = useState<boolean>(false);

    const depthHandle : AllTypes['depthHandle'] = (e) => {
        const $target = e.currentTarget;
        if(Number($target.className) === 1){
            setOpen1(!open1);
        } else if(Number($target.className) === 2){
            setOpen2(!open2);
        } else if(Number($target.className) === 3){
            setOpen3(!open3);
        }
    };


    return (
        <nav>
            <ul>
                <li>
                    <a onClick={depthHandle} className='1' href='/#'>첫번째</a>
                    {open1 && 
                    <ul>
                        <li>
                            <NavLink to='/'>첫번째</NavLink>
                        </li>
                        <li>
                            <NavLink to='/'>두번째</NavLink>
                        </li>
                        <li>
                            <NavLink to='/'>세번째</NavLink>
                        </li>
                    </ul>
                    }
                </li>
                <li>
                    <a onClick={depthHandle} className='2' href='/#'>두번째</a>
                    {open2 && 
                    <ul>
                        <li>
                            <NavLink to='/'>첫번째</NavLink>
                        </li>
                        <li>
                            <NavLink to='/'>두번째</NavLink>
                        </li>
                        <li>
                            <NavLink to='/'>세번째</NavLink>
                        </li>
                    </ul>
                    }
                </li>
                <li>
                    <a onClick={depthHandle} className='3' href='/#'>세번째</a>
                    {open3 && 
                    <ul>
                        <li>
                            <NavLink to='/'>첫번째</NavLink>
                        </li>
                        <li>
                            <NavLink to='/'>두번째</NavLink>
                        </li>
                        <li>
                            <NavLink to='/'>세번째</NavLink>
                        </li>
                    </ul>
                    }
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;