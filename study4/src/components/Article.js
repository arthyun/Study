import React from 'react';

const Article = (props) => {

    return (
        <article>
            <h2>{props.article.title}</h2>
            {props.article.desc}
        </article>
    );
}

export default Article;