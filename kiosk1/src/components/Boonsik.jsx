import React from 'react';


const Boonsik = (props) => {
    const json = props.food;

    return (
        <div className='Boonsik'>
            <h2>분식</h2>
            
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

export default Boonsik;