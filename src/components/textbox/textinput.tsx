import styled from "styled-components";
import React from 'react';
import {COLORS, RADIUS, SHADOW} from "../../theme.constants";

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
        border: none;
        border-radius: ${RADIUS.medium};
        font-size: 1em;
        color: ${COLORS.text_dark};
        background-color: ${COLORS.base};
        box-shadow: ${SHADOW.insetLight};
        transition: all 0.3s ease;

        &:focus {
            outline: none;
            box-shadow: ${SHADOW.insetMedium};
        }

        &:hover:not(:focus) {
            box-shadow: ${SHADOW.insetMedium};
        }

        &::placeholder {
            color: ${COLORS.medium_gray};
        }
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
