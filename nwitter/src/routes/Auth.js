import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");

    //구 방식
    // const onChange = (e) => {
    //     const tg = e.target.name;
    //     if(tg === "email"){
    //         setEmail(e.target.value);
    //     } else if(tg === "password"){
    //         setPassword(e.target.value);
    //     }
    // }
    //새로운 방식
    const onChange = (e) => {
        const { target: {name, value} } = e;
        if(name === "email"){
            setEmail(value);
        } else if(name === "password"){
            setPassword(value);
        }
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        //auth를 불러온 후 newAccount 여부에 따라 기능 변경
        const auth = getAuth();
        let data;
        try {
            if(newAccount){
                //create account
                data = await createUserWithEmailAndPassword(auth, email, password);
                console.log('계정이 생성 되었습니다.');
            } else {
                //log in
                data = await signInWithEmailAndPassword(auth, email, password);
                console.log('로그인 되었습니다.');
            }
        } catch(err) {
            setError(err.message);
        }
    }
    //Log In 버튼 수정
    const toggleAccount = () => {
        //클릭 시 newAccount 값이 반대되게
        setNewAccount(prev => !prev);
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input name='email' type='email' placeholder='Email' required 
                value={email} onChange={onChange} />
                <input name='password' type='password' placeholder='Password' 
                required value={password} onChange={onChange} />
                <input type='submit' value={ newAccount ? "Create Account" : "Sign In" } />
            </form>

            <span onClick={toggleAccount}>
                { newAccount ? "Sign In" : "Create Account" }
            </span>

            <div>
                <button name='google'>continue with Google</button>
                <button name='github'>continue with Github</button>
                {error}
            </div>
        </div>
    );
}

export default Auth;