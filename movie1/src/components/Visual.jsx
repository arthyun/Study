import React, {useEffect} from 'react';
import Data from '../visual.json';


//로컬 json은 fetch와 같은 함수로 호출하는 것이 아닌 import로 해야한다.
const Visual = () => {
    useEffect(() => {
        const vBtn = document.querySelectorAll('.vBtn');
        let moveUl = document.querySelector('.visual ul');
    
        vBtn.forEach((el, i) => {
            el.addEventListener('click', (e) => {
                if(e.target.classList.contains('leftBtn')){
                    moveUl.style.transform = 'translateX(0)';
                } else if(e.target.classList.contains('rightBtn')) {
                    moveUl.style.transform = 'translateX(-50%)';
                }
            })
        });
    }, []);
    

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
            <span className='vBtn leftBtn'>좌</span>
            <span className='vBtn rightBtn'>우</span>
        </div>
    );
};

export default Visual;