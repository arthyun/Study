import React, { useState } from 'react';
import { countState, countStateSelector } from '../store';
import { useRecoilValue } from 'recoil';

const About = () => {
    const selectedCount = useRecoilValue<number>(countState);
    const selectedSelector = useRecoilValue<string>(countStateSelector);
    const [test1, setTest1] = useState<string>('감지되지 않음');

    return (
        <div className='aboutWrap'>
            <h3>초기 상태 값 : {selectedCount}</h3>

            <button type='button' onClick={() => {
                setTest1(selectedSelector);
            }}>Selector 실행</button>
            <h3>변경된 Select 값 : {test1}</h3>
        </div>
    )
}

export default About;