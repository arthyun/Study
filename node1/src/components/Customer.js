import React from 'react';

const Customer = (props) => {

    return (
        <>
            <h2>Customer Page!</h2>
            <p>{props.name}</p>
            <p>{props.birthday}</p>
            <p>{props.gender}</p>
            <p>{props.job}</p>
        </>
    );
}

export default Customer;