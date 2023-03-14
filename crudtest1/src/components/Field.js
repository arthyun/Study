import React, { useEffect, useState } from 'react';

const Field = () => {
    const [identity, setIdentity] = useState("");
    const [pass, setPass] = useState("");
    const [userDB, setUserDB] = useState([]);
    const [count, setCount] = useState(0);

    const onChange = (e) => {
        const { target: { name, value }} = e;
        if(name === 'id'){
            setIdentity(value);
        } else if(name === 'pass'){
            setPass(value);
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setCount(count + 1);

        const userObj = {
            id: count,
            아이디: identity,
            비밀번호: pass,
        }
        setUserDB([...userDB, userObj]);
        localStorage.setItem('user', JSON.stringify(userDB));
        setIdentity('');
        setPass('');
    }

    useEffect(() => {
        
    }, [])

    return (
        <>
            <form onSubmit={onSubmit}>
                <input name='id' type='text' value={identity}
                onChange={onChange} required /> <br/>
                <input name='pass' type='password' value={pass}
                onChange={onChange} required />
                <input type='submit' onSubmit={onSubmit} value='생성' />
            </form>
        </>
    )
}

export default Field;