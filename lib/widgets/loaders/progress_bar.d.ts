import React from "react";
interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
    backgroundColor?: string;
    shadow?: string;
    progress?: string;
    color?: string;
    progress2?: string;
    color2?: string;
}
export declare const ProgressBar: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof ProgressBarProps> & ProgressBarProps, never> & Partial<Pick<import("styled-components").FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof ProgressBarProps> & ProgressBarProps, never>>> & string;
export {};
