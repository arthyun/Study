import React from "react";
import { useState } from "react";
import Store from '../store';

function DisplayNumber(props){
    const [number, setNumber] = useState(
        {number: Store.getState().number}
    )
    Store.subscribe(() => {
        setNumber({number: Store.getState().number});
    })

    return(
        <div>
            <h1>Display Number</h1>
            <input type='text' value={number.number} readOnly />
        </div>
    );
}

export default DisplayNumber;