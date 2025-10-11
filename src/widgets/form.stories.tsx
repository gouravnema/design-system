import React from 'react';
import { Form } from './form';
import { TextInput } from '../components/textbox/textinput';
import { PrimaryButton } from '../components/buttons/buttons';
import styled from 'styled-components';

const FormContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  background-color: #f9f9f9;
  width: 300px;
`;

export default {
  title: 'Widgets/Form',
  component: Form,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onSubmit: { action: 'submitted' },
    className: { control: 'text' },
    children: { control: 'object' },
  },
};

export const LoginForm = {
  render: (args) => (
    <Form {...args}>
      <FormContentWrapper>
        <TextInput label="Username" placeholder="Enter your username" />
        <TextInput label="Password" placeholder="Enter your password" type="password" />
        <PrimaryButton type="submit">Login</PrimaryButton>
      </FormContentWrapper>
    </Form>
  ),
  args: {
    onSubmit: (target) => {
      const formData = new FormData(target);
      const data = Object.fromEntries(formData.entries());
      console.log('Form submitted with:', data);
    },
  },
};

export const ContactForm = {
  render: (args) => (
    <Form {...args}>
      <FormContentWrapper>
        <TextInput label="Name" placeholder="Your Name" />
        <TextInput label="Email" placeholder="Your Email" type="email" />
        <TextInput label="Message" placeholder="Your Message" as="textarea" rows="4" />
        <PrimaryButton type="submit">Send Message</PrimaryButton>
      </FormContentWrapper>
    </Form>
  ),
  args: {
    onSubmit: (target) => {
      const formData = new FormData(target);
      const data = Object.fromEntries(formData.entries());
      console.log('Contact form submitted with:', data);
    },
  },
};

export const WithCustomClass = {
  render: (args) => (
    <Form {...args}>
      <FormContentWrapper>
        <TextInput label="Field 1" />
        <PrimaryButton type="submit">Submit</PrimaryButton>
      </FormContentWrapper>
    </Form>
  ),
  args: {
    className: 'my-custom-form',
    onSubmit: (target) => console.log('Custom form submitted'),
  },
};
