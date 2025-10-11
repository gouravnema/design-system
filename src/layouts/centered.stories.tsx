import React from 'react';
import { Centered } from './centered';
import styled from 'styled-components';

const ContentBlock = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
  color: #333;
`;

export default {
  title: 'Layouts/Centered',
  component: Centered,
  parameters: {
    layout: 'fullscreen', // Use fullscreen layout to demonstrate centering effectively
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
};

export const Default = {
  args: {
    children: <ContentBlock>This content is centered.</ContentBlock>,
  },
};

export const WithMultipleElements = {
  args: {
    children: (
      <ContentBlock>
        <h1>Centered Title</h1>
        <p>This is a paragraph within the centered layout.</p>
        <button>Centered Button</button>
      </ContentBlock>
    ),
  },
};

export const WithDifferentSizes = {
  args: {
    children: (
      <>
        <ContentBlock style={{ width: '200px', height: '100px', marginBottom: '10px' }}>Small Block</ContentBlock>
        <ContentBlock style={{ width: '400px', height: '150px' }}>Medium Block</ContentBlock>
      </>
    ),
  },
};
