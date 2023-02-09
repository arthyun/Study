import React from 'react';
import styled, { css, keyframes } from 'styled-components';


//애니메이션을 넣으려면...
const CircleAnimation = keyframes`
        0% {
            background-color: red;
        }
        50% {
            background-color: blue;
        }
        100% {
            background-color: orange;
        }
`;

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
//가상 선택자(hover/before/after)를 사용하려면 아래처럼 &표기나 해당 태그를 중복해서 작성하면 된다.
const StyledButton2 = styled(StyledButton)`
    border-radius: 50%;
    &:hover {
        border-radius: 0;
    }
`;
//required 속성을 가진 input 태그가 여러 개 필요할 경우 (attrs())
const Inputs = styled.input.attrs({ required:true, maxLength:10 })`
    background-color: orange;
    text-align: center;
    animation: ${CircleAnimation} 1.5s infinite linear;
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
        <StyledButton as='div' {...props}>{children}</StyledButton>
        <Inputs type='text' value='input이다'/>
        </>
    );
}

export default Button;