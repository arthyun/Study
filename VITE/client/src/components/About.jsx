import React, { useRef, useState } from 'react';
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
        const openWindow = window.open(url, name, 'status=no, height=' + popupHeight + ', width=' + popupWidth + ', left=' + popupX + ', top=' + popupY);
        openWindow.cnt = cnt;
    }

    // 체크박스 테스트
    const data = [
        {
          id: 'id-1',
          name: 'Row 1',
        },
        {
          id: 'id-2',
          name: 'Row 2',
        },
        {
          id: 'id-3',
          name: 'Row 3',
        },
        {
          id: 'id-4',
          name: 'Row 4',
        },
        {
          id: 'id-5',
          name: 'Row 5',
        },
        {
          id: 'id-6',
          name: 'Row 6',
        },
      ];

    const [checkedArr, setCheckedArr] = useState([]);
    const numChecked = checkedArr.length;

    const handleOnChange = (id) => {
        const isChecked = checkedArr.includes(id);

        if (isChecked) {
            setCheckedArr((prev) => prev.filter((el) => el !== id));
        } else {
            setCheckedArr((prev) => [...prev, id]);
        }
    };

    const AllChecked = ({ target: { checked } }) => {
        if (checked) {
            setCheckedArr(data.map((row) => row));
        } else {
            setCheckedArr([]);
        }
    };
      

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
                // localStorage.setItem('recoilValue', cnt);
                onPopup('/popup', 'portalTest', '600', '400');
            }}>팝업</button>

            <div>
            <table>
                <thead>
                    <tr>
                    <th>
                        <input
                        type='checkbox'
                        onChange={AllChecked}
                        checked={numChecked === data.length}
                        />
                    </th>
                    <th style={{ minWidth: '8rem' }}>
                        {numChecked ? `Selected ${numChecked}` : 'None selected'}
                    </th>
                    </tr>
                    <tr>
                    <th />
                    <th>ID</th>
                    <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map(({ id, name }, i) => (
                    <tr key={id}>
                        <td>
                        <input
                            type='checkbox'
                            onChange={() => handleOnChange(id)}
                            checked={checkedArr && checkedArr[i] ? checkedArr[i].id.includes(id) : false}
                        />
                        </td>
                        <td>{id}</td>
                        <td>{name}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
                <button onClick={() => console.log(checkedArr)}>
                    Extract Selected Data
                </button>
            </div>
        </>
    )
}

export default About;