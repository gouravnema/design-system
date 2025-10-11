import React from 'react';
interface ModalProps {
    children: React.ReactNode;
    shouldShow: boolean;
    onClose: () => void;
}
export declare const Modal: React.FC<ModalProps>;
export {};
