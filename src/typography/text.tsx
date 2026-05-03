import React from 'react';
import styled from 'styled-components';

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
    size?: string;
    color?: string;
    margin?: string;
    padding?: string;
    align?: string;
}

const Wrapper = styled.p<TextProps>`
    font-size: ${(props) => props.size || '1rem'};
    color: ${(props) => props.color || 'black'};
    margin: ${(props) => props.margin || '0'};
    padding: ${(props) => props.padding || '0'};
    text-align: ${(props) => props.align || 'left'};
`;



export const Text: React.FC<TextProps> = ({ children, ...rest }) => {
    return <Wrapper {...rest}>
        {children}
    </Wrapper>
};


