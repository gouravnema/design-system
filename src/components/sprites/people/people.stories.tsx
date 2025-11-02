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
  ({rounded=false,})=><Head1  rounded={rounded} key="head1" />,
  ({rounded=false})=><Head2  rounded={rounded} key="head2" />,
  ({rounded=false})=><Head3  rounded={rounded} key="head3" />,
  ({rounded=false})=><Head4  rounded={rounded} key="head4" />,
  ({rounded=false})=><Head5  rounded={rounded} key="head5" />,
  ({rounded=false})=><Head6  rounded={rounded} key="head6" />,
  ({rounded=false})=><Head7  rounded={rounded} key="head7" />,
  ({rounded=false})=><Head8  rounded={rounded} key="head8" />,
  ({rounded=false})=><Head9  rounded={rounded} key="head9" />,
  ({rounded=false})=><Head10 rounded={rounded}  key="head10" />,
  ({rounded=false})=><Head11 rounded={rounded}  key="head11" />,
  ({rounded=false})=><Head12 rounded={rounded}  key="head12" />,
  ({rounded=false})=><Head13 rounded={rounded}  key="head13" />,
  ({rounded=false})=><Head14 rounded={rounded}  key="head14" />,
  ({rounded=false})=><Head15 rounded={rounded}  key="head15" />,
  ({rounded=false})=><Head16 rounded={rounded}  key="head16" />
];


export const AllHeads = {

  render: ({rounded}) => (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', width:320}}>
      {heads.map((C, i)=>{
        const k = 'head_'+(i+1);
        const t = 'Head '+(i+1);
        return <div key={k} style={{display:'flex',flexDirection:'column',alignItems:'center', gap:'4px'}}>
          {<C rounded={rounded}/>}
          <span style={{fontSize:12}}>{t}</span>
        </div>
      })}
    </div>
  ),
  args: {rounded: false},
};
