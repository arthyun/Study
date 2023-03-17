import React, { useEffect, useState } from 'react';

const Home = () => {
    //localstorage에서 데이터 가져오기
    const localInspect = localStorage.getItem("user");
    const [result, setResult] = useState(JSON.parse(localInspect));
    
    // const onDelete = (person) => {
    //     const met1 = result.filter(el => !el.아이디.includes(person));
    //     setResult(met1);
    // }
    const onDelete = (person) => {
        const met1 = result.filter(el => el.id !== person);
        setResult(met1);
    }

    return (
        <>
            <div>
                <ul>
                {
                    result.map((list, i) => {
                        return(
                            <li key={i} data-id={list.id} style={{display: 'flex'}}>
                                <dl>
                                    <dt>계정명: {list.아이디}</dt>
                                    <dd>암호: {list.비밀번호}</dd>
                                </dl>
                                <button onClick={()=>onDelete(list.id)}>❌</button>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        </>
    )
}

export default Home;