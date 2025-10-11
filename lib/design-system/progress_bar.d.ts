import React from "react";
interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
    backgroundColor?: string;
    shadow?: string;
    progress?: string;
    color?: string;
    progress2?: string;
    color2?: string;
}
export declare const ProgressBar: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ProgressBarProps>> & string;
export {};
