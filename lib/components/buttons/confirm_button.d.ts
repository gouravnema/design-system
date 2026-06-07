import React from 'react';
interface ConfirmButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    onConfirm?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onCancel?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    label?: string;
    confirmText?: string;
    confirmTitle?: string;
    ButtonComponent?: React.ComponentType<any>;
}
export declare const ConfirmButton: React.FC<ConfirmButtonProps>;
export {};
