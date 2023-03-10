import React, { useState } from 'react';

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
    const onSubmit = (e) => {
        e.preventDefault();
        
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input name='email' type='email' placeholder='Email' required 
                value={email} onChange={onChange} />
                <input name='password' type='password' placeholder='Password' 
                required value={password} onChange={onChange} />
                <input type='submit' value='Log In' />
            </form>

            <div>
                <button>continue with Google</button>
                <button>continue with Github</button>
            </div>
        </div>
    );
}

export default Auth;