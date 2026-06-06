import React from 'react';
export type SwitchProps = {
    defaultState?: boolean;
    onChange?: (value: boolean) => void;
};
export declare const Switch: ({ defaultState, onChange }: SwitchProps) => React.JSX.Element;
