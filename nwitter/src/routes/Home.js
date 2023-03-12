import React, { useState } from 'react';
import { db } from '../firebase';
console.log(db);

const Home = () => {
    const [nweet, setNweet] = useState("");

    const onChange = (e) => {
        const { target: {value} } = e;
        setNweet(value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input value={nweet} onChange={onChange} type='text' placeholder="What's on your mind?" maxLength={120} />
                <input type='submit' value='Nweet' />
            </form>
        </div>
    );
}

export default Home;