import React from "react";
import { useState } from "react";
import store from '../store';

function DisplayNumber(){
    const [number, setNumber] = useState(
        store.getState().number
    )
    const [text, setText] = useState(
        store.getState().text
    )
    store.subscribe(() => {
        setNumber(store.getState().number);
        setText(store.getState().text);
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