import React from 'react';
interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
    children: React.ReactNode;
    onSubmit: React.FormEventHandler<HTMLFormElement>;
    className?: string;
}
export declare const Form: React.FC<FormProps>;
export {};
