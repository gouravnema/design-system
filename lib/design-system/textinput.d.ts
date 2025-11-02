import React from 'react';
export declare const Label: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, never>> & string;
interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string | null;
}
export declare const TextInput: React.FC<TextInputProps>;
export {};
