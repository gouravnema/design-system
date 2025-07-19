import { TextInput } from './textinput';

const meta = {
  component: TextInput,
  title: 'Components/TextInput',
  argTypes: {
    label: {
      control: 'text',
      description: 'Label for the input field',
      defaultValue: 'Enter text here', // Default value for the story
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input field',
      defaultValue: 'Type something...', // Default placeholder
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number'],
      description: 'Type of input field',
      defaultValue: 'text', // Default type
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled or not',
      defaultValue: false, // Default value for the story
    },
  },
};

export default meta;

export const Default = {
  args: {},
};
