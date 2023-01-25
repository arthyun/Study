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
                            <a href='/' onClick={(e) => {
                                e.preventDefault();
                                var zone = document.querySelector('.totalZone ul');
                                var li = document.createElement('li');
                                li.innerHTML = `<span class='num'>${list.id}.</span> ${list.name} = 가격: <strong class='pc'>${list.price}</strong>`;
                                zone.appendChild(li);
                            }} >
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