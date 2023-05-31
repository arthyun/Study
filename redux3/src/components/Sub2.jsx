import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userPost } from '../store';


export default function Sub1(){
    const dispatch = useDispatch();
    const getUserData = useSelector(state => state.userData);

    //id값을 가진 새로운 배열로...
    let indexNum = 0;
    const newUserData = [];
    getUserData.map(item => {
        indexNum++;
        newUserData.push({
            id: indexNum,
            ...item
        });
    });

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

    const submitHandle = (e) => {
        e.preventDefault();
        //배열이 아닌 객체이기 때문에 기본 for문으로는 안됌
        for (let id in values) {
            if(values[id] === '') {
                alert(`'${id}' 입력란이 공백입니다.`);
            } else if(values[id]) {
                console.log(values);
                return dispatch(userPost(values));
            }
        }
    };

    //Persist를 사용하지 않고 데이터를 유지시키려면?? -> 로컬/세션/쿠키에 reduxState를 저장해야하남
    localStorage.setItem('User', JSON.stringify(getUserData));
    const onLocalStorage = () => {
        const result = localStorage.getItem('User');
        console.log(JSON.parse(result));
    };


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

            <button type="button" onClick={onLocalStorage}>로컬스토리지 확인용 버튼</button>

            <ul className="userUl">
            {
                newUserData.map((item, i) => {
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