import React, {useEffect, useState} from "react";
// import jsonData from '../강남구.json';

const Home = () => {
    const [contents, setContents] = useState([
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
    ]);

    let [cnt, setCnt] = useState(0);
    
    const clickHandle = () => {
        setCnt(cnt = cnt + 1);
        if(true){
            cnt % 2 === 1 ? 
            setContents([
                {id:1, title:'HTML5', desc:'HTML5 is for information'},
                {id:2, title:'CSS3', desc:'CSS3 is for design'},
                {id:3, title:'ES6', desc:'ES6 is for easy'}
            ], console.log(cnt)) :
            setContents([
                {id:1, title:'HTML', desc:'HTML is for information'},
                {id:2, title:'CSS', desc:'CSS is for design'},
                {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
            ], console.log(cnt));
        }
    };

    //Rest_Api 호출하기
    const urlApi = 'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=10&serviceKey=9D7Rg6V6wDr4R1GG9TV%2FY1c4JU9ttSuq9KL8%2F%2B5PMw4tls0giUwdYXMH751nxznUp7lL3wQL0YDgFZYc%2FdNtwQ%3D%3D';
    const [dataMain, setDataMain] = useState([]); //배열로 state만들어야함

    const getData = () => {
        fetch(urlApi)
        .then((response) => 
            response.json()
        )
        .then((data) => {
            setDataMain(data.data);
        })
    }
    //새로고침마다 한번씩만 api를 불러오기
    useEffect(() => {
        getData();
    }, []);

    //input태그 관련 기능
    const [value1, setValue] = useState('');
    const keyupHandle = (e) => {
        setValue(e.target.value);
    }

    return (
        <>
        <ul className="firstList">
            {
                contents.map((el, i) => {
                    return (
                    <li key={el.id}>
                        <p>
                            {el.title} /&nbsp;
                            <span>{el.desc}</span>
                        </p>
                    </li>
                    );
                })
            }
            <button onClick={clickHandle}>클릭하시오!!!</button>
        </ul>
        
        <div className="callApi">
            <h2>RestApi 호출</h2>
            {
                dataMain.map((el, i) => {
                    return ( 
                        <p key={i}>
                            {el.address} ... 
                            <span>{el.phoneNumber}</span>
                        </p>
                    );
                })
            }
        </div>

        <div className="formZone">
            <form>
                <label htmlFor="text">입력해 보세요</label> &nbsp;
                <input id="text" name="text" type='text'
                value={value1} onChange={keyupHandle} />
                <p>현재 입력값 : {value1}</p>
            </form>
        </div>
        </>
    );
};

export default Home;