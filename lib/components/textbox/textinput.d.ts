import React from 'react';
export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}
export declare const TextInput: React.FC<TextInputProps>;
