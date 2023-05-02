import React, { useState } from 'react';

const About = () => {
    const [datas, setDatas] = useState([]);
    const onEjsHandle = () => {
        fetch('http://localhost:5000/api/member', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
            // body: JSON.stringify(),
        }).then(res => res.json()).then(list => {
            const data = list.data;
            // const newArr = [];
            // data.map(el => {
            //     newArr.push(el);
            // });
            // const result = newArr.concat(data);
            setDatas(data);
        });
    }
    // console.log(datas);

    return (
        <>
            <h1 style={{ padding: '1rem 2rem', boxSizing: 'border-box' }}>About Page.</h1>
            <button onClick={onEjsHandle} style={{ marginLeft: '2rem', boxSizing: 'border-box' }}>Bring ejs data</button>
            {
                datas.map(el => {
                    return (
                        <div key={el.id} style={{ marginLeft: '2rem', marginTop: '1rem', boxSizing: 'border-box' }}>
                            <h4>{el.name}</h4>
                            <p>{el.phone}</p>
                            <p>{el.gender}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default About;