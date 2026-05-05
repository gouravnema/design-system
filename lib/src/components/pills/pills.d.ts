import React from 'react';
interface PillsProps extends React.HTMLAttributes<HTMLSpanElement> {
    label: string;
    children: React.ReactNode;
}
export declare const PrimaryPill: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<PillsProps, never>> & string & Omit<React.FC<PillsProps>, keyof React.Component<any, {}, any>>;
export declare const SecondaryPill: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<PillsProps, never>> & string & Omit<React.FC<PillsProps>, keyof React.Component<any, {}, any>>;
export declare const TransparentPill: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<PillsProps, never>> & string & Omit<React.FC<PillsProps>, keyof React.Component<any, {}, any>>;
export {};
