import React, { useEffect } from 'react';
import { countState, countWithUnitState, selectedCountState, getList, getChangeList } from '../store';
import { useRecoilState, useRecoilValue } from 'recoil';


const Home : React.FC = () => {
    const [cnt, setCnt] = useRecoilState<number>(countState);
    const [count, setCount] = useRecoilState<number>(countWithUnitState);
    const selectedCount = useRecoilValue<number>(selectedCountState(100));
    const [rowdata, SetRowData] = useRecoilState(getChangeList);

    // useEffect(() => {
    //     count === 0 ? setCount(33) : console.log('not 0');
    // }, [count]);
    // console.log(count);

    const onIncrease = () : void => {
        setCnt(cnt + 1);
    };
    const onDecrease = () : void => {
        setCnt(cnt - 1);
    };

    const getListData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/');
        const result = await response.json();
        SetRowData(result);
    };

    useEffect(() : void => {
        getListData();
    }, []);

    const onChangeList = () : void => {
        SetRowData([{
            id: 777,
            name: 'hyunho',
            username: 'arthyun',
            email: 'heun3316@naver.com',
            address: {
                street: 'Byeolyangro',
                suite: 'Xi apt',
                city: 'Gwacheon',
                zipcode: '13588',
                geo: {
                    lat: '123123123.123123123',
                    lng: '123123123.123123123',
                }
            },
            phone: '010-0000-0000',
            website: 'heun3316@cafe24.com',
            company: {
            name: 'K2',
            catchPhrase: 'CSR',
            bs: 'test',
            }
        }]);
    };

    return (
        <div className='homeWrap'>
            <h1>{cnt}</h1>
            <button onClick={onIncrease}>Increase</button>
            <button onClick={onDecrease}>decrease</button>

            <ul>
            {rowdata.map(list => {
                return (
                    <li key={list.id}>
                        <dl>
                            <dt>{list.name}</dt>
                            <dd>{list.username}</dd>
                            <dd>{list.email}</dd>
                            <dd>{list.address.zipcode}</dd>
                            <dd>{list.phone}</dd>
                            <dd>{list.company.name}</dd>
                        </dl>
                    </li>
                )
            })}
            </ul>
            <button onClick={onChangeList}>Change</button>
        </div>
    )
};

export default Home;