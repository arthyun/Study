import React, { useState } from 'react';
import { db } from '../firebase';
import { doc, deleteDoc, updateDoc } from 'firebase/firestore';

const Nweet = ({ userObj, isOwner }) => {
    //update를 위한 state 2가지 생성
    const [editing, setEditing] = useState(false);
    const [newNweet, setNewNweet] = useState(userObj.text);

    const onDeleteClick = async () => {
        const ok = window.confirm('Are you sure you want to delete this nweet?');
        const nweetRef = doc(db, "nweets", `${userObj.id}`);
        if(ok){
            await deleteDoc(nweetRef);
        }
    };
    // 상황마다 보여지는 컴포넌트를 다르게하기 위해 토글 생성
    const toggleEditing = () => {
        setEditing(word => !word)
    }

    const onChange = (e) => {
        const { target: {value} } = e;
        setNewNweet(value);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const nweetRef = doc(db, "nweets", `${userObj.id}`);
        await updateDoc(nweetRef, {
            text: newNweet,
        });
        setEditing(false);
    }

    return (
        <div>
            {editing ? (
                <>
                    <form onSubmit={onSubmit}>
                        <input onChange={onChange} type='text' value={newNweet} placeholder='Edit your nweet' required />
                        <input type='submit' value='Update Nweet' />
                    </form>
                    <button onClick={toggleEditing}>Cancel</button>
                </>
                ) : (
                <>
                <h4>{userObj.text}</h4>
                    {isOwner && (
                    <>
                        <button onClick={onDeleteClick}>Delete</button>
                        <button onClick={toggleEditing}>Edit</button>
                    </>
                    )}
                </>
                )}
        </div>
    );
}

export default Nweet;