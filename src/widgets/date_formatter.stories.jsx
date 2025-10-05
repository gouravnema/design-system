import React from 'react';
import { DateFormatter } from './date_formatter';

export default {
  title: 'Widgets/DateFormatter',
  component: DateFormatter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    milliseconds: { control: 'number' },
  },
};

export const CurrentDate = {
  args: {
    milliseconds: Date.now(),
  },
};

export const SpecificDate = {
  args: {
    milliseconds: new Date('2023-01-15T10:30:00Z').getTime(),
  },
};

export const PastDate = {
  args: {
    milliseconds: new Date('2022-05-20T14:00:00Z').getTime(),
  },
};

export const FutureDate = {
  args: {
    milliseconds: new Date('2026-12-25T08:00:00Z').getTime(),
  },
};
