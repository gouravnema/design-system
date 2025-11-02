import { Silhouette } from './silhouette';

const options: string[] = [1,2,3,4].reduce((acc, i) => {
  acc.push(`head_${i}_1`);
  acc.push(`head_${i}_2`);
  acc.push(`head_${i}_3`);
  acc.push(`head_${i}_4`);
  return acc;
}, []);

const props ={
  code: {
    control: 'select',
    description: 'Image code',
    options: options,
  },
  rounded: {
    control: 'boolean',
    description: 'Should the image be rounded or not',
  },
  size: {
    control: 'number',
    description: 'Size of the image in vw',
  }
}

const meta = {
  component: Silhouette,
  title: 'Sprites/People/Silhouette',
  args:{
    rounded: true,
    code: options[3],
    size: 10,
  },
  argTypes: {
    ...props,
  },
};

export default meta;

export const Default = {};