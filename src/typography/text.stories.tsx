import React from 'react';
import { ParsedText, Text } from './text';

export default {
  title: 'Typography/Text',
  component: Text,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'text',
      description: 'Font size of the text',
      defaultValue: '1rem'
    },
    color: {
      control: 'color',
      description: 'Color of the text',
      defaultValue: '#000000'
    },
    margin: {
      control: 'text',
      description: 'Margin of the text',
      defaultValue: '0'
    },
    padding: {
      control: 'text',
      description: 'Padding of the text',
      defaultValue: '0'
    },
    align: {
      control: {
        type: 'select',
        options: ['left', 'center', 'right', 'justify']
      },
      description: 'Text alignment',
      defaultValue: 'left'
    },
    children: {
      control: 'text',
      description: 'Text content'
    }
  }
};

export const Default = {
  args: {
    children: 'This is default text'
  }
};

export const LargeText = {
  args: {
    children: 'This is large text',
    size: '2rem'
  }
};

export const SmallText = {
  args: {
    children: 'This is small text',
    size: '0.875rem'
  }
};

export const ColoredText = {
  args: {
    children: 'This is colored text',
    color: '#0066cc'
  }
};

export const CenteredText = {
  args: {
    children: 'This is centered text',
    align: 'center'
  }
};

export const RightAlignedText = {
  args: {
    children: 'This is right-aligned text',
    align: 'right'
  }
};

export const WithPadding = {
  args: {
    children: 'This text has padding',
    padding: '20px'
  }
};

export const WithMargin = {
  args: {
    children: 'This text has margin',
    margin: '20px 0'
  }
};

export const LargeColoredCenteredText = {
  args: {
    children: 'Large, colored, and centered text',
    size: '1.5rem',
    color: '#ff6b6b',
    align: 'center'
  }
};

export const JustifiedLongText = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    align: 'justify',
    size: '1rem'
  }
};

export const CustomStyledText = {
  render: (args) => (
    <div>
      <Text {...args} size="1rem" color="#333" margin="10px 0">
        Default styled
      </Text>
      <Text {...args} size="1.25rem" color="#0066cc" margin="10px 0">
        Large and blue
      </Text>
      <Text {...args} size="0.875rem" color="#999" margin="10px 0">
        Small and gray
      </Text>
    </div>
  ),
  args: {}
};