import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';


// const CustomerProfile = (props) => {
//     return (
//         <>
//             <img src={props.image} alt='profile' />
//             <h2>{props.name}({props.id})</h2>
//         </>
//     )
// }

// const CustomerInfo = ({birthday, gender, job}) => {
//     return (
//         <>
//             <p>{birthday}</p>
//             <p>{gender}</p>
//             <p>{job}</p>
//         </>
//     )
// }

const Customer = (props) => {

    return (
        <TableRow>
            <TableCell>{props.id}</TableCell>
            <TableCell><img src={props.image} alt='profile' /></TableCell>
            <TableCell>{props.name}</TableCell>
            <TableCell>{props.birthday}</TableCell>
            <TableCell>{props.gender}</TableCell>
            <TableCell>{props.job}</TableCell>
        </TableRow>
    );
}

export default Customer;