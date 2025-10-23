import styled from "styled-components";
import React from 'react';
import {COLORS, RADIUS} from "../../theme.constants";

const InputGroup = styled.div`
    margin-bottom: 20px;
    text-align: left;
    label {
        display: block;
        margin-bottom: 8px;
        font-size: 0.9em;
        color: ${COLORS.text_light};
        font-weight: 500;
    }
    input {
        width: calc(100% - 24px);
        padding: 12px;
        border: 1px solid ${COLORS.medium_gray};
        border-radius: ${RADIUS.small};
        font-size: 1em;
        color: ${COLORS.text_dark};
        background-color: rgba(255, 255, 255, 0.7);
        transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }
`

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export const TextInput: React.FC<TextInputProps> = ({label, ...props}) => {
    return <InputGroup>
        <label>
            {label}
        </label>
        <input {...props} />
    </InputGroup>
}
