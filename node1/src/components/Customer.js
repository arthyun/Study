import React from 'react';


const CustomerProfile = (props) => {
    return (
        <>
            <img src={props.image} alt='profile' />
            <h2>{props.name}({props.id})</h2>
        </>
    )
}

const CustomerInfo = ({birthday, gender, job}) => {
    return (
        <>
            <p>{birthday}</p>
            <p>{gender}</p>
            <p>{job}</p>
        </>
    )
}

const Customer = (props) => {

    return (
        <>
            <h2>{props.id} 페이지</h2>
            <CustomerProfile image={props.image} name={props.name} id={props.id} />
            <CustomerInfo birthday={props.birthday} gender={props.gender} job={props.job} />
            <p style={{ color: 'red' }}>페이지 끝.</p>
        </>
    );
}

export default Customer;