import React from "react";
import styled from "styled-components";

interface SummaryBoxProps extends React.HTMLAttributes<HTMLDivElement> {}

const SummaryBox = styled.div<SummaryBoxProps>`
    display: flex;
    border-radius: 10px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin: 5px;
    padding: 5px;
    min-width: 100px;
    background: #fffef0;
    color: #505050;

    .label {
        font-weight: bold;
    }

    .value {

    }
`

interface LabelTextProps {
    label: string;
    text: string | number;
}

export const LabelText: React.FC<LabelTextProps> = ({label, text}) => {
    return <SummaryBox>
        <span className={'label'}>{label}:</span>
        <span className={'value'}>{text}</span>
    </SummaryBox>
}
