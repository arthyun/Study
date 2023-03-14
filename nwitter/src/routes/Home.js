import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { addDoc, getDocs, collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import Nweet from '../components/Nweet';


const Home = ({ userObj }) => {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);
    const [attachment, setAttachment] = useState('');

    //구 방식(새로고침을 해야하는 불편함이 있음)
    //DB 데이터를 출력하려면 forEach문과 data()를 사용해야함
    // const getNweets = async () => {
    //     const getDB = await getDocs(collection(db, "nweets"));
    //     getDB.forEach(document => {
    //         const nweetObj = {
    //             ...document.data(),
    //             id: document.id,
    //         };
    //         setNweets((current) => [nweetObj, ...current]);
    //     })
    // };

    //신 방식(실시간으로 전달가능) -> onSnapshot() 내부에는 docs라는 객체가 있다.
    useEffect(() => {
        const que = query(collection(db,"nweets"), orderBy("createdAt","desc"));
            onSnapshot(que, (snapshot) => {
                const nweetArr = snapshot.docs.map((document) => ({
                    id: document.id,
                    ...document.data(),
                }));
            setNweets(nweetArr);
        });
        // getNweets();
    }, []);

    const onChange = (e) => {
        const { target: {value} } = e;
        setNweet(value);
    }

    //DB에 메소드를 이용해 추가하는 방법(addDoc, collection)
    const onSubmit = async (e) => {
        e.preventDefault();
        //promise를 반환하기 때문에 async, await를 사용(에러를 확인하려면 try/catch문 사용할 것)
        await addDoc(collection(db, "nweets"), {
            text: nweet,
            createdAt: Date.now(),
            creatorId: userObj.uid,
        });
        setNweet("");
    }

    //이미지 보이게
    const onFileChange = (e) => {
        const { target: { files } } = e;
        const theFile = files[0];
        //FileReader API를 사용해서 이미지 파일을 읽게 할 것**
        //FileReader 생성
        const reader = new FileReader();
        //읽어오기
        reader.readAsDataURL(theFile);
        //읽어온 것을 로드하기
        reader.onloadend = (e) => {
            //currentTarget의 result에서 이미지 주소를 가져와야함.
            const { currentTarget: { result } } = e;
            setAttachment(result);
        }
    }
    //이미지 삭제 시
    const onClearClick = () => setAttachment(null);
    

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input value={nweet} onChange={onChange} type='text' placeholder="What's on your mind?" maxLength={120} />
                <input type='file' accept='image/*' onChange={onFileChange} />
                <input type='submit' value='Nweet' />
                { attachment && 
                <div>
                    <img src={attachment} width='50px' height='50px' />
                    <button onClick={onClearClick}>Clear</button>
                </div> }
            </form>

            <div>
                {nweets.map(el => {
                    return (
                        <Nweet key={el.id} 
                        userObj={el} 
                        isOwner={el.creatorId === userObj.uid} />
                    )
                })}
            </div>
        </div>
    );
}

export default Home;