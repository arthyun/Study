import React from 'react';


const Chungsik = (props) => {
    const json = props.food;

    return (
        <div className='Chungsik'>
            <h2>양식</h2>
            
            <ul>
                {
                    json.map((list, i) => {
                        return (
                        <li key={i}>
                            <a href='/'>
                            <img src={list.src} alt={list.name} width='50%' />
                            {list.name}
                            </a>
                        </li>
                        );
                    })
                }
            </ul>
        </div>
    )
}

export default Chungsik;