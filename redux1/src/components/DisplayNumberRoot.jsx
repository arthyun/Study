import React from "react";
import DisplayNumber from './DisplayNumber';

function DisplayNumberRoot(props){
    return(
        <div>
            <h1>Display Number Root</h1>
            <DisplayNumber number={props.number} />
        </div>
    );
}

export default DisplayNumberRoot;