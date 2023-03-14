import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { addDoc, getDocs, collection } from 'firebase/firestore';

const Home = () => {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);

    //DB 데이터를 출력하려면 forEach문과 data()를 사용해야함
    const getNweets = async () => {
        const getDB = await getDocs(collection(db, "nweets"));
        getDB.forEach(document => {
            const nweetObj = {
                ...document.data(),
                id: document.id,
            };
            setNweets((current) => [nweetObj, ...current]);
        })
    };
    useEffect(() => {
        getNweets();
    }, []);
    console.log(nweets);

    const onChange = (e) => {
        const { target: {value} } = e;
        setNweet(value);
    }

    //DB에 메소드를 이용해 추가하는 방법(addDoc, collection)
    const onSubmit = async (e) => {
        e.preventDefault();
        //promise를 반환하기 때문에 async, await를 사용(에러를 확인하려면 try/catch문 사용할 것)
        await addDoc(collection(db, "nweets"), {
            nweet,
            createdAt: Date.now(),
        });
        setNweet("");
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input value={nweet} onChange={onChange} type='text' placeholder="What's on your mind?" maxLength={120} />
                <input type='submit' value='Nweet' />
            </form>

            <div>
                {[...nweets].reverse().map(el => {
                    return(
                        <div key={el.id}>
                            <h4>{el.nweet}</h4>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Home;