import React from 'react';
import styled, { css } from 'styled-components';

//props를 대입할때는 함수로서 가져와야함
const StyledButton = styled.button<Props>`
    padding: 10px 20px;
    color: ${(props) => props.color || 'gray'};
    background: ${(props) => props.background || 'white'};

    ${(props) =>
        props.primary &&
        css`
        color: white;
        background: navy;
        border-color: navy;
    `}
`; 
//첫번째 styled-component를 가진 또 다른 component를 생성 시 ()괄호 안에 넣어준다.
const StyledButton2 = styled(StyledButton)`
    border-radius: 50%;
`;
//required 속성을 가진 input 태그가 여러 개 필요할 경우 (attrs())
const Inputs = styled.input.attrs({ required:true })`
    background-color: orange;
    text-align: center;
`;

interface Props {
    [key : string]: string;
}
interface Total extends Props {
    children : string;
}

const Button = ({children, ...props} :Total) : JSX.Element => {

    return (
        <>
        <StyledButton {...props}>{children}</StyledButton>
        <StyledButton2 {...props}>{children}</StyledButton2>
        <StyledButton2 as='div' {...props}>{children}</StyledButton2>
        <Inputs type='text' value='input이다'/>
        </>
    );
}

export default Button;