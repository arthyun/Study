import React from 'react';
import { countState } from '../store';
import { useRecoilState, useRecoilValue } from 'recoil';

const About = () => {
    const selectedCount = useRecoilValue<number>(countState);

    return (
        <div className='aboutWrap'>
            <h3>변경된 상태 값 : {selectedCount}</h3>
        </div>
    )
}

export default About;