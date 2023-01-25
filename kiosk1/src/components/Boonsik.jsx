import React, { useState } from 'react';


const Boonsik = (props) => {
    const json = props.food;
    const [cnt, setCnt] = useState(1);

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
                                li.classList.add(`list${i+1}`)
                                li.innerHTML = `<span class='num'>${cnt}</span>, ${list.name} = 가격: <strong class='pc${i}'>${list.price}</strong>`;
                                zone.appendChild(li);

                                var compare1 = document.querySelector('.totalZone .list1');
                                console.log(compare1)

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