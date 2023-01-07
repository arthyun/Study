import React from "react";
import AddNumber from './AddNumber';

function AddNumberRoot(props){
    return(
        <div>
            <h1>Add Number Root</h1>
            <AddNumber onClick={(size) => {
                props.onClick(size);
            }} />
        </div>
    );
}

export default AddNumberRoot;