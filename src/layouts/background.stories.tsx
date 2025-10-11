import React from 'react';
import { Background } from './background';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  padding: 20px;
  color: white;
  text-align: center;
  width: 100%;
`;

export default {
  title: 'Layouts/Background',
  component: Background,
  parameters: {
    layout: 'fullscreen', // Use fullscreen layout for backgrounds
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
};

export const Default = {
  args: {
    children: <ContentWrapper>This is content within the default background.</ContentWrapper>,
  },
};

export const WithMultipleElements = {
  args: {
    children: (
      <ContentWrapper>
        <h1>Welcome</h1>
        <p>This background can contain various elements.</p>
        <button>Learn More</button>
      </ContentWrapper>
    ),
  },
};
