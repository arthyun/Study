import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userPost } from '../store';


export default function Sub1(){
    const dispatch = useDispatch();
    const getUserData = useSelector(state => state.userData);

    //id값을 가진 새로운 배열로...
    // let indexNum = 0;
    // let sendData = [];
    // getUserData.map(item => {
    //     indexNum++;
    //     sendData.push({
    //         id: indexNum,
    //         ...item
    //     });
    // });

    const [values, setValues] = useState({
        name: '',
        phone: '',
        email: '',
        gender: ''
    });

    const changeHandle = (e) => {
        const { id, value } = e.target;
        setValues((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    //수정 필요!
    const submitHandle = (e) => {
        e.preventDefault();
        //배열이 아닌 객체이기 때문에 기본 for문으로는 안됌
        for (let id in values) {
            if(values[id] === '') {
                alert(`'${id}' 입력란이 공백입니다.`);
            // } else if(values[id]) {
            // console.log(values);
            //     sendData.push(values);
            //     localStorage.setItem('User', JSON.stringify(sendData));
            //     return dispatch(userPost(values));
            }
        }
        const newUserData = [...getUserData, values];
        localStorage.setItem('User', JSON.stringify(newUserData));
        dispatch(userPost(values));
    };

    //Persist를 사용하지 않고 데이터를 유지시키려면?? -> lifecycle이란 넘 어렵군
    const [sendData, setSendData] = useState([]);

    useEffect(() => {
        const newBringData = localStorage.getItem('User');
        setSendData(JSON.parse(newBringData) || []);
    }, []);

    useEffect(() => {
        const newBringData = localStorage.getItem('User');
        setSendData(JSON.parse(newBringData) || []);
    }, [getUserData]);



    return (
        <div style={{ background: '#555' }}>
            <h3>Sub2 Pages</h3>

            <form onSubmit={submitHandle} className="formBox">
                <input id='name' value={values.name} onChange={changeHandle} type="text" placeholder="이름" />
                <input id='phone' value={values.phone} onChange={changeHandle} type="text" placeholder="폰 번호" />
                <input id='email' value={values.email} onChange={changeHandle} type="text" placeholder="이메일" />
                <select id='gender' value={values.gender} onChange={changeHandle}>
                    <option value=''>성별</option>
                    <option value='male'>남자</option>
                    <option value='female'>여자</option>
                </select>
                <button>제출</button>
            </form>

            <ul className="userUl">
            {
                sendData.map((item, i) => {
                    return(
                        <li key={i}>
                            <dl>
                                <dt>{item.name}</dt>
                                <dd>{item.phone}</dd>
                                <dd>{item.email}</dd>
                                <dd>{item.gender}</dd>
                            </dl>
                        </li>
                    )
                })
            }
            </ul>
            <style>
            {`
                h3 {
                    font-size: 2rem;
                }
                .formBox {
                    display: flex;
                    flex-wrap: wrap;
                }
                .formBox input,
                .formBox select {
                    width: 50%;
                    padding: .75rem 0;
                    padding-left: .25rem;
                    box-sizing: border-box;
                    font-size: 1rem;
                }
                .formBox button {
                    width: 100%;
                    margin-top: .3rem;
                }
                .userUl {
                    display: flex;
                    gap: 1rem;
                    justify-content: space-between;
                    margin: 1rem 0;
                }
                .userUl li {
                    width: 47.5%;
                    padding: 1rem 0;
                    box-sizing: border-box;
                    background: #55b2fe;
                    border-radius: 15px;
                }
                .userUl li dl dt {
                    font-size: 1.5rem;
                    font-weight: bold;
                }
                .userUl li dl dd {
                    font-size: 1.25rem;
                }
            `}
            </style>
        </div>
    )
}