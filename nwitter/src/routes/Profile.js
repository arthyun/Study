import React from 'react';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    //로그아웃 시 리다이렉트를 이용하여 Home으로 돌아가도 되고 간단하게는 useNavigate를 이용하여 돌아가라
    const navigate = useNavigate();
    const onLogOutClick = () => {
        const auth = getAuth();
        auth.signOut();
        navigate(-1);
    }

    return(
        <>
            <button onClick={onLogOutClick}>Log Out</button>
        </>
    );
}

export default Profile;