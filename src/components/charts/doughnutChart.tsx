import React from "react";
import {PieChart, Pie, Cell, Tooltip, ResponsiveContainer} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

interface ChartDataItem {
    name: string;
    value: number;
    color?: string;
    [key: string]: any; // Add index signature
}

export interface DoughnutChartProps {
    chartName?: string;
    data: ChartDataItem[];
}

export const DoughnutChart: React.FC<DoughnutChartProps> = ({chartName = '', data}) => {
    const totalValue = data.reduce((acc, item) => acc + item.value, 0); // Calculate total

    return ( <ResponsiveContainer width={'100%'} height={'100%'} >
            <PieChart>
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={'60%'} // Creates the doughnut effect
                    outerRadius={'80%'}
                    fill="#8884d8"
                    labelLine={false} // Hide the default label lines
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color ? entry.color : COLORS[index % COLORS.length]}/>
                    ))}
                </Pie>
                <Tooltip/>
                <text
                    x="50%" // Center horizontally
                    y="50%" // Center vertically
                    textAnchor="middle"
                    dominantBaseline="middle"
                    style={{fontSize: "1vw", fontWeight: "bold"}}
                >
                    {chartName}
                </text>
            </PieChart>
        </ResponsiveContainer>
    );
};
