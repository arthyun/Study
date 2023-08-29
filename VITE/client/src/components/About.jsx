import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { testStore } from '../store';

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

    // 테스트용 상태
    const [cnt, setCnt] = useRecoilState(testStore);

    // 윈도우 팝업
    const onPopup = (url, name, width, height) => {
        const popupWidth = width;
        const popupHeight = height;
        const popupX = (window.screen.width / 2) - (popupWidth / 2);
        const popupY = (window.screen.height / 2) - (popupHeight / 2);
        window.open(url, name, 'status=no, height=' + popupHeight + ', width=' + popupWidth + ', left=' + popupX + ', top=' + popupY);
    }

    return (
        <>
            <h1 style={{ padding: '1rem 2rem', boxSizing: 'border-box' }}>About Page.</h1>
            {/* <button onClick={onEjsHandle} style={{ marginLeft: '2rem', boxSizing: 'border-box' }}>Bring ejs data</button> */}
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


            <button onClick={() => setCnt(cnt + 1)}>Count {cnt}</button>
            <button onClick={() => {
                localStorage.setItem('recoilValue', cnt);
                onPopup('/popup', 'portalTest', '600', '400');
            }}>팝업</button>
        </>
    )
}

export default About;