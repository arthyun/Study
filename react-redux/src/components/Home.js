import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { plus, minus } from '../store';

const Home = () => {
    const dispatch = useDispatch();
    const rowData = useSelector(state => state.first.data);

    //States
    const [text, setText] = useState("");

    const onChange = (e) => {
        setText(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        // dispatch({ type: "ADD", text: text });
        dispatch(plus({ name: text }));
        setText("");
    };

    const onDelete = (name) => {
        dispatch(minus({ name: name }));
    };


    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} required />
                <button>Add</button>
            </form>
            <ul>
                {
                    rowData.map((item, i) => {
                        return (
                            <li key={i}>
                                <p>{item.name} 
                                <span onClick={() => onDelete(item.name)} style={{cursor: 'pointer', display: 'inline-block', marginLeft: '5px'}}>❌</span>
                                </p>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    );
};

export default Home;