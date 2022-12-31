import React from "react";

const CreateContent = (props) => {

    return (
        <article>
            <h2>Create</h2>

            <form action="/create_process" method="post"
            onSubmit={(e) => {
                e.preventDefault();
                // debugger;
                alert('제출되었습니다.');
                props.onSubmit(e.target.title.value);
            }} >
                <input type='text' name='title' placeholder="title 입력란" required />
                <input type='submit' />
            </form> 
        </article>
    );
};

export default CreateContent;