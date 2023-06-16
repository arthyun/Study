import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Home = () => {
    const dispatch = useDispatch();

    const [text, setText] = useState("");

    function onChange(e) {
        setText(e.target.value);
    };

    function onSubmit(e) {
        e.preventDefault();
        dispatch({ type: "ADD", text: text });
        setText("");
    };


    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} required />
                <button>Add</button>
            </form>
            <ul></ul>
        </>
    );
};

export default Home;