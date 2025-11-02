// generate a story file for index.tsx file
import React from 'react';
import {
  Head1,
  Head2,
  Head3,
  Head4,
  Head5,
  Head6,
  Head7,
  Head8,
  Head9,
  Head10,
  Head11,
  Head12,
  Head13,
  Head14,
  Head15,
  Head16
} from './index';

export default {
  title: 'Components/Sprites/People',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

const heads = [
  <Head1 key="head1" />,
  <Head2 key="head2" />,
  <Head3 key="head3" />,
  <Head4 key="head4" />,
  <Head5 key="head5" />,
  <Head6 key="head6" />,
  <Head7 key="head7" />,
  <Head8 key="head8" />,
  <Head9 key="head9" />,
  <Head10 key="head10" />,
  <Head11 key="head11" />,
  <Head12 key="head12" />,
  <Head13 key="head13" />,
  <Head14 key="head14" />,
  <Head15 key="head15" />,
  <Head16 key="head16" />
];


export const AllHeads = {

  render: () => (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', width:320}}>
      {heads.map(C=>{
        return <div key={C.key} style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          {C}
          <span style={{fontSize:12}}>{C.key}</span>
        </div>
      })}
    </div>
  ),
  args: {}
};
