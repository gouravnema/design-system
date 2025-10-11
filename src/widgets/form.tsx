import React from 'react';
import styled from "styled-components";

const MyForm = styled.form`
 display: flex; 
`
interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
    children: React.ReactNode;
    onSubmit: React.FormEventHandler<HTMLFormElement>;
    className?: string;
}

export const Form: React.FC<FormProps> = ({children, onSubmit, className}) => {
    const handler = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        onSubmit(e)
    }
    return <MyForm className={'form ' + className} onSubmit={handler}>
        {children}
    </MyForm>
}
