import React from 'react';
import { DoughnutChart } from './doughnutChart';

export default {
  title: 'Components/Charts/DoughnutChart',
  component: DoughnutChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    chartName: { control: 'text' },
    data: { control: 'object' },
  },
};

export const Default = {
  args: {
    chartName: 'Sales Distribution',
    data: [
      { name: 'Group A', value: 400, color: '#0088FE' },
      { name: 'Group B', value: 300, color: '#00C49F' },
      { name: 'Group C', value: 300, color: '#FFBB28' },
      { name: 'Group D', value: 200, color: '#FF8042' },
    ],
  },
};

export const CustomColors = {
  args: {
    chartName: 'Project Status',
    data: [
      { name: 'Completed', value: 60, color: '#4CAF50' },
      { name: 'In Progress', value: 30, color: '#FFC107' },
      { name: 'Pending', value: 10, color: '#F44336' },
    ],
  },
};

export const NoChartName = {
  args: {
    data: [
      { name: 'Category 1', value: 150, color: '#A020F0' },
      { name: 'Category 2', value: 250, color: '#FF69B4' },
    ],
  },
};
