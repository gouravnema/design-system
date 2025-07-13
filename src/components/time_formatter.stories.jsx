import { TimeFormatter } from './time_formatter';

const meta = {
  component: TimeFormatter,
  title: 'Components/TimeFormatter',
  argTypes: {
    timeInSeconds: {
      control: 'number',
      description: 'Time in seconds to format',
      defaultValue: 3661, // Default value for the story
    },
    color: {
      control: 'color',
      description: 'Text color for the formatted time',
      defaultValue: '#000000', // Default color
    },
    humanize: {
      control: 'boolean',
      description: 'Whether to use humanized format or not',
      defaultValue: false, // Default value for the story
    },
  },
};

export default meta;

export const Default = {};