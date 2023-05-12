import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';


const Home = () => {
    //Fetch Test
    const [fetchArr, setFetchArr] = useState([]);
    const onFetch = () => {
        fetch('http://localhost:5000/')
        .then(response => response.json())
        .then(data => {
            setFetchArr(data);
            console.log(data);
        })
        .catch(err => console.error(err));
    }
    useEffect(() => {
        onFetch();
    }, [])


    return (
        <div style={{ padding: '1rem 2rem', boxSizing: 'border-box' }}>
            <h1>Home Page(AWS 수정된 위치)</h1>

            <nav className='homeNav'>
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

            <Outlet />

            {/* Fetch Test */}
            <br/>
            <button onClick={onFetch} type='button'>데이터 가져오기!</button>
            <div style={{marginTop: '1rem', display: 'flex', flexFlow: 'wrap', gap: '3rem'}}>
            {
                fetchArr.map(el => {
                    return(
                        <div key={el._id} style={{boxShadow: '0px 10px 15px -3px rgba(225,225,225,1)', width: '30%', background: '#555', padding: '1rem', boxSizing: 'border-box', borderRadius: '10px'}}>
                            <p>{el.name}</p>
                            <p>{el.phone}</p>
                            <p>{el.email}</p>
                            <p>{el.gender}</p>
                        </div>
                    )
                })
            }
            </div>

            <style jsx='true'>
            {`
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