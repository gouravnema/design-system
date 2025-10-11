import React from 'react';
import { Card } from './card';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
};

export const Default = {
  args: {
    children: 'This is a default card.',
  },
};

export const WithCustomContent = {
  args: {
    children: (
      <div>
        <h3>Custom Card Title</h3>
        <p>This card contains custom HTML content.</p>
        <button>Click Me</button>
      </div>
    ),
  },
};

export const LargeCard = {
  args: {
    children: (
      <div style={{ padding: '20px', fontSize: '1.2em' }}>
        <h2>A Larger Card</h2>
        <p>This card demonstrates more content and a slightly larger size due to internal padding.</p>
      </div>
    ),
  },
};
