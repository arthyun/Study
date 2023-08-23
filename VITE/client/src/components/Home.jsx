import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';
import { useForm, Controller } from "react-hook-form";


const Home = () => {
    //States
    const [nick, setNick] = useState('');
    const [cellPhone, setCellPhone] = useState('');
    const [mail, setMail] = useState('');
    const [sexual, setSexual] = useState('');
    const [fetchArr, setFetchArr] = useState([]);

    //onChange function
    const onChangeHandle = (e) => {
        const { value, name } = e.target;
        if(name === 'nick'){
            setNick(value);
        } else if(name === 'cellPhone'){
            setCellPhone(value);
        } else if(name === 'mail'){
            setMail(value);
        } else if(name === 'sexual'){
            setSexual(value);
        };
    };

    //GET
    const onReceive = () => {
        fetch('http://localhost:5000/')
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            setFetchArr(data);
        })
        .catch(err => console.error(err));
    }

    useEffect(() => {
        onReceive();
    }, []);

    //POST
    const onFetch = async () => {
        //정규표현식
        const nameRegex = /^[a-zA-Z가-힣]{1,8}$/;
        const phoneRegex = /^\d{3}-\d{4}-\d{4}$/;
        const emailRegex = /^.{1,}@.{1,}\.com$/;
        const genderRegex = /^(male|female)$/i;

        if(nick === '' || cellPhone === '' || mail === '' || sexual === ''){
            alert('공백이 없게 해주세요.');
        } else if(!nameRegex.test(nick)){
            alert('이름 입력란에 오류가 있습니다.');
            var inputs = document.getElementsByName('nick');
            if (inputs.length > 0) {
                inputs[0].focus();
            };
        } else if(!phoneRegex.test(cellPhone)){
            alert('휴대폰 번호 입력란에 오류가 있습니다.');
            var inputs = document.getElementsByName('cellPhone');
            if (inputs.length > 0) {
                inputs[0].focus();
            };
        } else if(!emailRegex.test(mail)){
            alert('이메일 입력란에 오류가 있습니다.');
            var inputs = document.getElementsByName('mail');
            if (inputs.length > 0) {
                inputs[0].focus();
            };
        } else if(!genderRegex.test(sexual)){
            alert('성별 입력란에 오류가 있습니다.');
            var inputs = document.getElementsByName('sexual');
            if (inputs.length > 0) {
                inputs[0].focus();
            };
        } else {
            alert('등록이 완료되었습니다.');
            await axios.post('http://localhost:5000/create', {
                name: nick, 
                phone: cellPhone, 
                email: mail,
                gender: sexual,
            })
            .then(data => {
                console.log(data);
                onReceive();
            })
            .catch(err => console.log(err));
            setNick('');
            setCellPhone('');
            setMail('');
            setSexual('');
        };
    };

    //DELETE -> axios.delete로 객체 전달 시 꼭 data로 감싸서 보내야 인식한다!
    const onDelete = async () => {
        if(nick === ''){
            alert('공백이 없게 해주세요.');
        } else {
            if(window.confirm('삭제하시겠습니까?')){
                await axios.delete('http://localhost:5000/delete', {
                    data: {
                        name: nick
                    }
                })
                .then(data => {
                    console.log(data);
                    onReceive();
                })
                .catch(err => console.log(err));
            };
        };
    };

    //UPDATE - 이메일로 찾고 매칭되면 이름을 수정한다.
    const onUpdate = async () => {
        await axios.patch(`http://localhost:5000/patch/${mail}`, {
            name: nick,
            gender: sexual,
        })
        .then(data => {
            console.log(data);
            onReceive();
        })
        .catch(err => console.log(err));
    };

    //useform 테스트
    const { handleSubmit, register } = useForm();

    const saveData = (form_data) => {
        console.log(form_data);
    };


    return (
        <div style={{ padding: '1rem 2rem', boxSizing: 'border-box' }}>
            <h1>Profile Setting</h1>

            {/* <nav className='homeNav'>
                <ul>
                    <li>
                        <Link to='/1'>Home1_1</Link>
                    </li>
                    <li>
                        <Link to='/2'>Home1_2</Link>
                    </li>
                    <li>
                        <Link to='/3'>Home1_3</Link>
                    </li>
                </ul>
            </nav>

            <Outlet /> */}

            {/* Fetch Test */}
            <div style={{ margin: '1.5rem 0' }}>
                <input type='text' name='nick' value={nick} onChange={onChangeHandle} placeholder='이름' />
                <input type='text' name='cellPhone' value={cellPhone} onChange={onChangeHandle} placeholder='휴대폰' />
                <input type='text' name='mail' value={mail} onChange={onChangeHandle} placeholder='이메일' />
                <input type='text' name='sexual' value={sexual} onChange={onChangeHandle} placeholder='성별' />
                <button onClick={onFetch} type='button'>등록하기</button>
                <button onClick={onDelete} type='button'>삭제하기</button>
                <button onClick={onUpdate} type='button'>수정하기</button>
            </div>
            
            <h2>Profile list</h2>
            <div style={{marginTop: '1rem', display: 'flex', flexFlow: 'wrap', gap: '3rem'}}>
            {
                fetchArr.map(el => {
                    return(
                        <div key={el._id} style={{boxShadow: '0px 10px 15px -3px rgba(225,225,225,1)', width: '30%', background: '#555', padding: '1.5rem', boxSizing: 'border-box', borderRadius: '10px'}}>
                            <p>이름: {el.name}</p>
                            <p>휴대폰: {el.phone}</p>
                            <p>이메일: {el.email}</p>
                            <p>성별: {el.gender}</p>
                        </div>
                    )
                })
            }
            </div>

            <form onSubmit={handleSubmit(saveData)}>
                <input type="text" list="list1" {...register("list")} />
                <datalist id="list1">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                </datalist>

                <button type="submit">Save</button>
            </form>

            <style jsx='true'>
            {`
                input[type='text'] {
                    background: #fff;
                    color: #333;
                    font-size: 1rem;
                    width: 49.55%;
                    height: 40px;
                }
                button[type='button'] {
                    width: 100%;
                    margin-top: 5px;
                    background: #0081cc;
                    font-size: 1rem;
                }
                .homeNav {
                    margin-top: 3rem;
                    width: 100%;
                }
                .homeNav ul {
                    list-style: none;
                    border: 1px solid #fff;
                    display: flex;
                }
                .homeNav ul li {
                    width: 33.33%;
                    text-align: center;
                    border-right: 1px solid #fff;
                }
                .homeNav ul li:nth-of-type(3){
                    border-right: none;
                }
                .homeNav ul li a {
                    display: block;
                    padding: .5rem 0;
                    color: pink;
                }
                .homeNav ul li a:hover {
                    color: red;
                    background: #fff
                }
            `}
            </style>
        </div>
    )
}

export default Home;