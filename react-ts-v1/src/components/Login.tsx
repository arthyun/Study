import logo from '../assets/react.svg';
import styles from '../styles/list.module.css';
import { FormEvent, useRef, useState } from 'react';


//.env 경로 가져오기
const userId:string = import.meta.env.VITE_LOGIN_ID;
const userPassword:number = parseInt(import.meta.env.VITE_LOGIN_PASSWORD);


const Login = ({ loginState } : { loginState: () => void }) => {
    //States
    const [idValue, setIdValue] = useState<string>('');
    const [passValue, setPassValue] = useState<string|number>('');

    const inpRef = useRef<HTMLInputElement>(null);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(idValue === userId && passValue === userPassword){
            alert('로그인 성공!');
            localStorage.setItem('User', JSON.stringify({id: idValue, pass: passValue}));
            loginState();
        } else {
            alert('입력 정보를 다시 확인하세요.');
            setIdValue('');
            setPassValue('');
            if(inpRef.current){
                inpRef.current.focus();
            }
        }
    };

    const onChange = (e: FormEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        if(name === 'id'){
            setIdValue(value);
        } else if(name === 'password'){
            setPassValue(parseInt(value));
        }
    };


    return (
        <div className={styles.loginWrap}>
            <img className={styles.imgTag} src={logo} alt='logo' />
            <form onSubmit={onSubmit} className={styles.formTag}>
                <input ref={inpRef} name='id' value={idValue} onChange={onChange} type='text' placeholder='아이디 입력란'/>
                <input name='password' value={passValue} onChange={onChange} type='password' placeholder='비밀번호 입력란'/>
                <button className={styles.formBtnTag} type='submit'>로그인</button>
            </form>

            <p className={styles.paraTag}>Copyright ⓒ 2023 by arthyun All rights reserved.</p>
        </div>
    )
};

export default Login;