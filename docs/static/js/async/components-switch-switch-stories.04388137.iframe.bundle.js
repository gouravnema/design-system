"use strict";(self.webpackChunk_gouravnema_design_system=self.webpackChunk_gouravnema_design_system||[]).push([["866"],{"./src/components/switch/switch.stories.tsx"(e,t,a){a.r(t),a.d(t,{Enabled:()=>u,default:()=>d,Default:()=>c,WithOnChange:()=>g,__namedExportsOrder:()=>p});var n=a("./node_modules/react/index.js"),o=a("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=a("./src/theme.constants.ts");let s=o.Ay.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  width: 52px;
  height: 32px;
  padding: 2px;
  background-color: ${e=>e.isActive?r.lm.green:r.lm.medium_gray};
  border: none;
  border-radius: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  outline: none;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba(52, 199, 89, 0.1);
  }
`,i=o.Ay.div`
  position: absolute;
  width: 28px;
  height: 28px;
  background-color: white;
  border-radius: 50%;
  transition: transform 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  left: 2px;

  ${s}[data-active='true'] & {
    transform: translateX(20px);
  }
`,l=e=>{let{defaultState:t=!1,onChange:a}=e,[o,r]=n.useState(t);return n.createElement(s,{"data-active":o,onClick:()=>{let e=!o;r(e),null==a||a(e)},role:"switch","aria-checked":o,type:"button"},n.createElement(i,null))};l.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{defaultState:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""}}};let d={component:l,title:"Components/Switch",parameters:{layout:"centered"},tags:["autodocs"],argTypes:{defaultState:{control:"boolean",description:"Default State of Switch",defaultValue:!1},onChange:{action:"changed",description:"Callback to notify toggle of Switch"}}},c={args:{defaultState:!1}},u={args:{defaultState:!0}},g={args:{defaultState:!1,onChange:e=>console.log("Switch toggled to:",e)}},p=["Default","Enabled","WithOnChange"]},"./src/theme.constants.ts"(e,t,a){a.d(t,{Ne:()=>o,Zz:()=>r,lm:()=>n,xc:()=>s});let n={blue:"#007AFF",green:"#34C759",red:"#FF3B30",orange:"#FF9500",light_gray:"#EFEFF4",medium_gray:"#C7C7CC",dark_gray:"#8E8E93",text_dark:"#1C1C1E",text_light:"#636366",background:"#F2F2F7",card_background:"rgba(255, 255, 255, 0.9)"},o={font_family:"Arial",font_weight:"normal"},r={small:"8px",medium:"12px"},s={light:"0 1px 3px rgba(0, 0, 0, 0.08)",medium:"0 4px 10px rgba(0, 0, 0, 0.1)"}}}]);
//# sourceMappingURL=components-switch-switch-stories.04388137.iframe.bundle.js.map