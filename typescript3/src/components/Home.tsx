import React, { useState } from 'react';
import { AllTypes, Userinfo } from '../types';

const Home : React.FC = () => {
    //States
    const [date, setDate] = useState<string>('');
    const [hour, setHour] = useState<number | string>(0);
    const [minute, setMinute] = useState<number | string>(0);
    const [checked1, setChecked1] = useState<boolean>(false);
    const [checked2, setChecked2] = useState<boolean>(false);

    //오늘 날짜 이전은 선택하지 못하게..
    const today:string = new Date().toISOString().split('T')[0];

    //사용자 아이디 받아오기
    const getUser1 = localStorage.getItem('user');
    const getUser2 = getUser1 ? JSON.parse(getUser1) : null;

    //전체 데이터를 객체로
    const [sendData, setSendData] = useState<Userinfo>({
        id: getUser2?.id || '',
        date: '',
        hour: '',
        minute: '',
        emergency: false,
        notice: false,
    });

    //EventHandle
    const onChangeHandle : AllTypes['changeHandle'] = (e) => {
        const { id, name, value, checked } = e.target;
        if(id === 'date'){
            setDate(value);
        } else if(id === 'hour'){
            setHour(value);
        } else if(id === 'minute'){
            setMinute(value);
        } else if(id === 'emergency'){
            setChecked1(checked);
        } else if(name === 'noticeY'){
            setChecked2(true);
            setSendData((prev) => ({
                ...prev,
                notice: true,
            }));
        } else if(name === 'noticeN'){
            setChecked2(false);
            setSendData((prev) => ({
                ...prev,
                notice: false,
            }));
        }

        setSendData(prev => ({
            ...prev,
            [id]: id === 'emergency' ? checked : value,
        }));
    };

    const onSubmitHandle : AllTypes['submitHandle'] = (e) => {
        e.preventDefault();
        if(date === ''){
            alert('공란이 없게 해주세요.');
        } else {
            console.log(sendData);
        }
    };

    
    return (
        <div className='homePage'>
            <h1>작업 등록(Home)</h1>
            <div className='main'>
                <form onSubmit={onSubmitHandle}>
                    <table className='tableMain'>
                        <tbody>
                            <tr>
                                <th>사용자</th>
                                <td>{getUser2.id}</td>
                                <th>검토자</th>
                                <td>선택(모달)</td>
                            </tr>
                            <tr>
                                <th>긴급 여부</th>
                                <td>
                                    <input id='emergency' checked={checked1} onChange={onChangeHandle} type='checkbox' />
                                </td>
                                <th>CAMS 공지여부</th>
                                <td>
                                    <label htmlFor='cams'>Y </label>
                                    <input id='notice' name='noticeY' value='true' checked={checked2} onChange={onChangeHandle} type='radio' />&nbsp;
                                    <label htmlFor='cams'>N </label>
                                    <input id='notice' name='noticeN' value='false' checked={!checked2} onChange={onChangeHandle} type='radio' />
                                </td>
                            </tr>
                            <tr>
                                <th>날짜</th>
                                <td>
                                    <input type='date' id='date' min={today} value={date} onChange={onChangeHandle} />
                                </td>
                                <th>시간</th>
                                <td>
                                    <input type='number' id='hour' value={hour} onChange={onChangeHandle} max={24} min={1} />
                                    <label htmlFor='hour'> 시</label>
                                </td>
                                <th>분 단위</th>
                                <td>
                                    <input type='number' id='minute' value={minute} onChange={onChangeHandle} max={60} min={0} />
                                    <label htmlFor='minute'> 분</label>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='btnZone'>
                        <button className='submitBtn' type='submit'>등록</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Home;