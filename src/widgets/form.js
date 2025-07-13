import React from 'react';
import styled from "styled-components";

const MyForm = styled.form`
 display: flex; 
`
export const Form = function ({children, onSubmit, className}){
    const handler = (e)=>{
        e.preventDefault();
        onSubmit(e.target)
    }
    return <MyForm className={'form ' + className} onSubmit={handler}>
        {children}
    </MyForm>
}

