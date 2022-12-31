import React, { useState } from "react";

const Content2 = (props) => {
    const mode = props.state1;
    const changeMode = props.func1;

    return (
        <button onClick={changeMode}>{mode}</button>
    );
}

export default Content2;