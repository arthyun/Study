import React,{ useState } from 'react';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const auth = firebase.auth();

const Auth = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = async () => {
        //doc과 then을 사용해야함
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch(err) {
            console.error(err);
        }
    }

    return (
        <div>
            <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type='text' placeholder='Email...' />
            <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type='password' placeholder='Password...' />
            <button onClick={signIn}>Sign In</button>
        </div>
    )
}

export default Auth;