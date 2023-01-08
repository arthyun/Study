import React from "react";
import { useState } from "react";
import Store from '../store';

function AddNumber(){
    const [size, setSize] = useState(0);
    const [text0, setText0] = useState('');

    return(
        <div>
            <h1>Add Number</h1>
            <input type='button' value='+' onClick={() => {
                Store.dispatch({type:'INCREMENT', size:size})
            }} />
            <input type='button' value='-' onClick={() => {
                Store.dispatch({type:'DECREMENT', size:size})
            }} />
            <input type='button' value='Text출력' onClick={() => {
                Store.dispatch({type:'testText', text: text0})
            }} /> <br/>
            <input type='text' value={size} onChange={(e) => {
                setSize(Number(e.target.value));
            }} /> <br/>
            <input type='text' value={text0} onChange={(e) => {
                setText0(String(e.target.value));
            }} placeholder='이곳에 입력하세요' />
        </div>
    );
}

export default AddNumber;