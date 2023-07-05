import React, { useState } from 'react';
import '../styles/App.css'
import { AllTypes } from '../types';

const appId = process.env.REACT_APP_ID;
const appPs = process.env.REACT_APP_PASS;


const Login : React.FC<AllTypes> = ({isLogin}) => {
    const [id, setId] = useState<string>('');
    const [pass, setPass] = useState<string>('');

    const changeHandle : AllTypes['changeHandle'] = (e) => {
        const { name, value } = e.target;
        if(name === 'id'){
            setId(value);
        } else if(name === 'pass') {
            setPass(value);
        }
    }

    const submitHandle : AllTypes['submitHandle'] = (e) => {
        e.preventDefault();
        if(id === appId && pass === appPs){
            if(isLogin){
                isLogin(true);
            }
            localStorage.setItem('user', JSON.stringify({id: id, pass: pass}));
        } else {
            alert('입력값 일치하지 않음!');
        }
    };

    return (
        <div className='loginDiv'>
            <h1>로그인</h1>
            <form onSubmit={submitHandle}>
                <input onChange={changeHandle} value={id} name='id' type='text' placeholder='아이디' required />
                <input onChange={changeHandle} value={pass} name='pass' type='password' placeholder='비밀번호' required />
                <button type='submit'>Log In</button>
            </form>
        </div>
    )
}

export default Login;