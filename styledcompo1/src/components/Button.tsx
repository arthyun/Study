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

interface Props {
    [key : string]: string;
}
interface Total extends Props {
    children : string;
}

const Button = ({children, ...props} :Total) : JSX.Element => {

    return (
        <StyledButton {...props}>{children}</StyledButton>
    );
}

export default Button;