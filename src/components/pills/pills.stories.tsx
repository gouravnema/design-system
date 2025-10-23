import React from 'react';
import { PrimaryPill, SecondaryPill, TransparentPill, PillsProps } from './pills';

export default {
  title: 'Components/Pills',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Primary = {
  render: (args: PillsProps) => <PrimaryPill {...args} />,
  args: {
    label: 'Status',
    children: 'Active',
  },
};

export const Secondary = {
  render: (args: PillsProps) => <SecondaryPill {...args} />,
  args: {
    label: 'Category',
    children: 'Marketing',
  },
};

export const Transparent = {
  render: (args: PillsProps) => <TransparentPill {...args} />,
  args: {
    label: 'Tag',
    children: 'New Feature',
  },
};

export const WithLongContent = {
  render: (args: PillsProps) => <PrimaryPill {...args} />,
  args: {
    label: 'Description',
    children: 'This is a very long piece of content that should be displayed within the pill.',
  },
};
