import React from "react";

const List = (props) => {
    return(
        <div style={{margin: '20px'}}>
            <span style={{display:'inline-block', marginRight:'10px'}}>
                {props.para}
            </span>
            <button>삭제</button>
        </div>
    );
};

export default List;