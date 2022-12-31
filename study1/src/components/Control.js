import React from "react";

const Control = (props) => {
    const createBtn = (e) => {
        e.preventDefault();
        props.onChangeMode('create');
    };
    const updateBtn = (e) => {
        e.preventDefault();
        props.onChangeMode('update');
    };
    const deleteBtn = (e) => {
        e.preventDefault();
        props.onChangeMode('delete');
    };


    return (
    <ul>
        <li>
            <a onClick={createBtn} href='/create'>create</a>
        </li>
        <li>
            <a onClick={updateBtn} href='/update'>update</a>
        </li>
        <li>
            <input onClick={deleteBtn} type='button' value='delete' />
        </li>
        <p>현재 state: {props.state1}</p>
    </ul>
    );
}

export default Control;