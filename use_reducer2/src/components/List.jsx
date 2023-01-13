import React from "react";

const List = ({para, dispatch, id}) => {
    return(
        <div style={{margin: '20px'}}>
            <span style={{display:'inline-block', marginRight:'10px'}}>
                {para}
            </span>
            <button onClick={() => {
                dispatch({ type:'delete', payload: {id} })
            }}>삭제</button>
        </div>
    );
};

export default List;