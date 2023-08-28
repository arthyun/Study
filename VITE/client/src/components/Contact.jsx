import React, { useEffect, useRef, useState } from 'react';

const Contact = () => {
    const count = useRef(10);
    const increCnt = () => {
        count.current++;
        // console.log(count.current);
    }

    const [newArr, setNewArr] = useState([]);
    const changeArr = () => {
        const editArr = Array.from({length: count.current}, (_, index) => {
            let id = index + 1;
            let down = _;
            return {id, down};
        });
        // return setNewArr(prev => [...prev, ...editArr]);
        return setNewArr(prev => [...editArr]);
    }
    // console.log(newArr);

    useEffect(() => {
        changeArr();
    }, [])

    return (
        <div style={{ padding: '1rem 2rem', boxSizing: 'border-box' }}>
            <h1>Contact Page.</h1>
            <h3>{count.current}</h3>
            <button type='button' onClick={increCnt}>Increase</button>
            <button type='button' onClick={changeArr}>배열생성</button>

            {
                newArr.map((item, i) => {
                    return <p key={i}>당신의 순서는 {item.id}번 입니다.</p>
                })
            }
        </div>
    )
}

export default Contact;