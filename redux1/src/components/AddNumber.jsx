import React from "react";
import { useState } from "react";
import Store from '../store';

function AddNumber(props){
    const [size, setSize] = useState(1);

    return(
        <div>
            <h1>Add Number</h1>
            <input type='button' value='+' onClick={() => {
                Store.dispatch({type:'INCREMENT', size:size})
            }} />
            <input type='text' value={size} onChange={(e) => {
                setSize(Number(e.target.value));
                console.log(size);
            }} />
        </div>
    );
}

export default AddNumber;