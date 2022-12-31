import React from "react";

const UpdateContent = (props) => {

    return (
        <article>
            <h2>Update</h2>

            <form action="/create_process" method="post"
            onSubmit={(e) => {
                e.preventDefault();
                // debugger;
                // console.log(props.str2)
                props.onSubmit(e.target.title.value);
            }} >
                <input type='text' name='title' placeholder="title 입력란" 
                value={props.str1} onChange={props.str2} required />
                <input type='submit' />
            </form> 
        </article>
    );
};

export default UpdateContent;