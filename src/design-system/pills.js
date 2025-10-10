import React from 'react';
import styled from "styled-components";
import {COLORS, RADIUS} from "./theme.constants";

const Base = styled.span`
    padding: 5px;
    border-radius: ${RADIUS.small};
`;
const Pills = ({label, children, ...rest}) => {
    return <Base {...rest} > {label} :  <em>{children}</em></Base>;
}

export const PrimaryPill = styled(Pills)`
    background: ${COLORS.blue};
    color: white;
`

export const SecondaryPill = styled(Pills)`
    background: ${COLORS.medium_gray};
    color: ${COLORS.text_dark};
`
export const TransparentPill = styled(Pills)`
    color: ${props=> (props.color || COLORS.text_dark)};
    border: 1px solid ${props=> (props.color || COLORS.light_gray)};
`