"use strict";(self.webpackChunk_gouravnema_design_system=self.webpackChunk_gouravnema_design_system||[]).push([["866"],{"./src/components/switch/switch.stories.tsx"(e,t,a){a.r(t),a.d(t,{Default:()=>l,Enabled:()=>d,WithOnChange:()=>c,__namedExportsOrder:()=>u,default:()=>i});var o=a("./node_modules/react/index.js"),n=a("./src/components/switch/switch.tsx"),s=a("./node_modules/styled-components/dist/styled-components.browser.esm.js");let r=s.Ay.div`
  width: 40px;
`,i={component:e=>o.createElement(r,null,o.createElement(n.d,e)),title:"Components/Switch",parameters:{layout:"centered"},tags:["autodocs"],argTypes:{defaultState:{control:"boolean",description:"Default State of Switch",defaultValue:!1},onChange:{action:"changed",description:"Callback to notify toggle of Switch"}}},l={args:{defaultState:!1}},d={args:{defaultState:!0}},c={args:{defaultState:!1,onChange:e=>console.log("Switch toggled to:",e)}},u=["Default","Enabled","WithOnChange"]},"./src/components/switch/switch.tsx"(e,t,a){a.d(t,{d:()=>l});var o=a("./node_modules/react/index.js"),n=a("./node_modules/styled-components/dist/styled-components.browser.esm.js"),s=a("./src/theme.constants.ts");let r=n.Ay.button`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: auto;
    aspect-ratio: 13 / 8 ;
    min-width: 13px;
    min-height: 8px;
    background-color: ${e=>e.isActive?s.lm.green:s.lm.medium_gray};
    border: none;
    border-radius: 50vh;
    cursor: pointer;
    transition: background-color 0.3s ease;
    outline: none;
    box-sizing: border-box;

    &:hover {
        opacity: 0.8;
    }

    &:focus {
        box-shadow: 0 0 0 3px rgba(52, 199, 89, 0.1);
    }
`,i=n.Ay.div`
    position: absolute;
    width: auto;
    height: 100%;
    aspect-ratio: 1;
    background-color: white;
    border-radius: 50%;
    transition: transform 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    left: 0;
    top: 0;

    ${r}[data-active='true'] & {
        transform: translateX(80%);
    }
`,l=e=>{let{defaultState:t=!1,onChange:a}=e,[n,s]=o.useState(t);return o.createElement(r,{"data-active":n,onClick:()=>{let e=!n;s(e),null==a||a(e)},role:"switch","aria-checked":n,type:"button",isActive:n},o.createElement(i,null))};l.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{defaultState:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""}}}},"./src/theme.constants.ts"(e,t,a){a.d(t,{Ne:()=>n,Zz:()=>s,lm:()=>o,xc:()=>r});let o={blue:"#007AFF",green:"#34C759",red:"#FF3B30",orange:"#FF9500",light_gray:"#EFEFF4",medium_gray:"#C7C7CC",dark_gray:"#8E8E93",text_dark:"#1C1C1E",text_light:"#636366",background:"#F2F2F7",card_background:"rgba(255, 255, 255, 0.9)"},n={font_family:"Arial",font_weight:"normal"},s={small:"8px",medium:"12px"},r={light:"0 1px 3px rgba(0, 0, 0, 0.08)",medium:"0 4px 10px rgba(0, 0, 0, 0.1)"}}}]);
//# sourceMappingURL=components-switch-switch-stories.33797814.iframe.bundle.js.map