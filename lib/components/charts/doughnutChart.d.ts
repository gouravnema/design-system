import React from "react";
interface ChartDataItem {
    name: string;
    value: number;
    color?: string;
    [key: string]: any;
}
export interface DoughnutChartProps {
    chartName?: string;
    data: ChartDataItem[];
}
export declare const DoughnutChart: React.FC<DoughnutChartProps>;
export {};
