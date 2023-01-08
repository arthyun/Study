import React from "react";
import { useState } from "react";
import Store from '../store';

function DisplayNumber(){
    const [number, setNumber] = useState(
        Store.getState().number
    )
    const [text, setText] = useState(
        Store.getState().text
    )
    Store.subscribe(() => {
        setNumber(Store.getState().number);
        setText(Store.getState().text);
    })
    console.log(number); //초기값은 store.js에서 정한대로 0이다.

    return(
        <div>
            <h1>Display Number</h1>
            <input type='text' value={number} readOnly /> <br/>
            <input type='text' value={text} readOnly />
        </div>
    );
}

export default DisplayNumber;