import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';


const InputTest = () => {
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');

    const onChange = (e) => {
        const { value } = e.target;
        setText1(value);
        console.log(text1);
    };

    const onInput = (e) => {
        const { value } = e.target;
        setText2(value);
        console.log(text2);
    };

    const location = useLocation();
    console.log(location);

    return (
        <div>
            <h2>InputTest</h2>
            <input type='text' value={text1} onChange={onChange} /> <br/>
            <input type='text' value={text2} onInput={onInput} />

        {
            location.state !== null && 
            <dl>
                <dt>{location.state.name}</dt>
                <dd>{location.state.age}</dd>
                <dd>{location.state.gender}</dd>
            </dl>
            }
        </div>
    )
}

export default InputTest;