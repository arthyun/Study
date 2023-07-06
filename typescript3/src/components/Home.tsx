import React, { useState } from 'react';
import { AllTypes } from '../types';

const Home : React.FC = () => {
    const [date, setDate] = useState<string>('');
    const [hour, setHour] = useState<number | string>(0);
    const [minute, setMinute] = useState<number | string>(0);

    const onChangeHandle : AllTypes['changeHandle'] = (e) => {
        const { id, value } = e.target;
        if(id === 'date'){
            setDate(value);
        } else if(id === 'hour'){
            setHour(value);
        } else if(id === 'minute'){
            setMinute(value);
        }
    };

    const onSubmitHandle : AllTypes['submitHandle'] = (e) => {
        e.preventDefault();
        if(date === ''){
            alert('공란이 없게 해주세요.');
        } else {
            console.log(`날짜: ${date}`);
            console.log(`${hour}시`);
            console.log(`${minute}분`);
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
                                <th>헤더1</th>
                                <td>바디1</td>
                                <th>헤더2</th>
                                <td>바디2</td>
                            </tr>
                            <tr>
                                <th>헤더3</th>
                                <td>바디3</td>
                                <th>헤더4</th>
                                <td>바디4</td>
                            </tr>
                            <tr>
                                <th>날짜</th>
                                <td>
                                    <input type='date' id='date' value={date} onChange={onChangeHandle} />
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