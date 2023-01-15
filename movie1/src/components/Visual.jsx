import React from 'react';
import Data from '../visual.json';


//로컬 json은 fetch와 같은 함수로 호출하는 것이 아닌 import로 해야한다.
const Visual = () => {
    return (
        <div className='visual'>
            <ul>
            {
                Data.data.map((movie, i) => {
                    return <li key={i}><img src={movie.src} alt={movie.title} /></li> 
                    }   
                )
            }
            </ul>
        </div>
    );
};

export default Visual;