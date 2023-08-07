import { useState } from 'react';
import styled from 'styled-components';

const HomeWrap = styled.div`
    margin-top: 1rem;
    width: 300px;
    height: 300px;
    border: 2px solid #fff;
`;
const FirstInput = styled.input.attrs({required: true})`
    width: 100%;
    padding: .75rem;
    box-sizing: border-box;
    background: pink;
    font-size: 20px;
    color: #2f00ff;
`;

const Home = () => {
    const [text, setText] = useState('');

    const onChange = (e) => {
        const { value } = e.target;
        setText(value);
    };

    return (
        <HomeWrap>
            Home
            <FirstInput type='text' value={text} onChange={onChange} />
        </HomeWrap>
    )
}

export default Home;