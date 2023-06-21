import styles from '../styles/list.module.css';
import { Fragment, useRef, useState } from 'react';
import { Link } from 'react-router-dom';


const BoardList = () => {
    //본문 TS
    const divRef = useRef<HTMLDivElement>(null);
    const [condition1, setCondition1] = useState<boolean>(true);

    const divHandler = () => {
        if(divRef.current){
        if(condition1){
            divRef.current.style.display = 'none';
            setCondition1(!condition1);
        } else {
            divRef.current.style.display = 'block';
            setCondition1(!condition1);
        }
        } else {
        throw new Error('No Search Element.');
        }
    };
    //test용 10의 값이 든 배열 생성
    const [testRow, setTestRow] = useState<number[]>(new Array(10).fill(0).map((_, i) => i + 1));


    return (
    <Fragment>
        <button onClick={divHandler}>
        {condition1 ? '창 닫기' : '창 열기'}
        </button>

        <div ref={divRef} className='wrap'>
            <h1>Vite + React + TS</h1>
        
            <div className={styles.listArea1}>
                <ul className={styles.listArea1_ul}>
                    <li className={styles.listArea1_ul_header}>번호</li>
                    <li className={styles.listArea1_ul_header}>제목</li>
                    <li className={styles.listArea1_ul_header}>작성자</li>
                    <li className={styles.listArea1_ul_header}>날짜</li>
                </ul>

                <ul className={styles.listArea2_ul}>
                {
                    testRow.sort((a, b) => b - a).map((item, i) => {
                    return (
                        <li className={styles.listArea2_li} key={i}>
                        <p>{item}</p>
                        <p>
                            <Link to='http://naver.com' target='_blank'>저는 테스트 제목입니다{item}</Link>
                        </p>
                        <p>Admin</p>
                        <p>{`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`}</p>
                        </li>
                    )
                    })
                }
                </ul>
            </div>
        </div>
    </Fragment>
    )
}

export default BoardList;