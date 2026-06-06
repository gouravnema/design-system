"use strict";(self.webpackChunk_gouravnema_design_system=self.webpackChunk_gouravnema_design_system||[]).push([["866"],{"./src/components/switch/switch.stories.tsx"(e,t,a){a.r(t),a.d(t,{Default:()=>d,Enabled:()=>l,WithOnChange:()=>p,__namedExportsOrder:()=>c,default:()=>i});var n=a("./node_modules/react/index.js"),s=a("./src/components/switch/switch.tsx"),o=a("./node_modules/styled-components/dist/styled-components.browser.esm.js");let r=o.Ay.div`
  width: 40px;
`,i={component:e=>n.createElement(r,null,n.createElement(s.d,e)),title:"Components/Switch",parameters:{layout:"centered"},tags:["autodocs"],argTypes:{defaultState:{control:"boolean",description:"Default State of Switch",defaultValue:!1},onChange:{action:"changed",description:"Callback to notify toggle of Switch"}}},d={args:{defaultState:!1}},l={args:{defaultState:!0}},p={args:{defaultState:!1,onChange:e=>console.log("Switch toggled to:",e)}},c=["Default","Enabled","WithOnChange"]},"./src/components/switch/switch.tsx"(e,t,a){a.d(t,{d:()=>d});var n=a("./node_modules/react/index.js"),s=a("./node_modules/styled-components/dist/styled-components.browser.esm.js"),o=a("./src/theme.constants.ts");let r=s.Ay.button`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: auto;
    aspect-ratio: 13 / 8 ;
    min-width: 13px;
    min-height: 8px;
    background-color: ${e=>e.isActive?o.lm.green:o.lm.base};
    border: none;
    border-radius: 50vh;
    cursor: pointer;
    transition: background-color 0.3s ease;
    outline: none;
    box-sizing: border-box;
    box-shadow: ${e=>e.isActive?o.xc.medium:o.xc.insetLight};

    &:hover {
        box-shadow: ${e=>e.isActive?o.xc.large:o.xc.insetMedium};
    }

    &:focus {
        box-shadow: 0 0 0 3px rgba(95, 179, 109, 0.2);
    }
`,i=s.Ay.div`
    position: absolute;
    width: auto;
    height: 100%;
    aspect-ratio: 1;
    background-color: ${o.lm.baseLight};
    border-radius: 50%;
    transition: transform 0.3s ease;
    box-shadow: ${o.xc.medium};
    left: 0;
    top: 0;

    ${r}[data-active='true'] & {
        transform: translateX(80%);
    }
`,d=e=>{let{defaultState:t=!1,onChange:a}=e,[s,o]=n.useState(t);return n.createElement(r,{"data-active":s,onClick:()=>{let e=!s;o(e),null==a||a(e)},role:"switch","aria-checked":s,type:"button",isActive:s},n.createElement(i,null))};d.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{defaultState:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""}}}},"./src/theme.constants.ts"(e,t,a){a.d(t,{Ne:()=>s,Zz:()=>o,lm:()=>n,xc:()=>r});let n={base:"#E0E5EC",baseLight:"#F5F7FA",baseDark:"#A3B1C6",blue:"#5F7FD4",green:"#5FB36D",dark_green:"#4A8A54",red:"#D85F6F",dark_red:"#B84C5A",orange:"#D99B5F",dark_orange:"#B87A47",text_dark:"#3A3F47",text_light:"#6B7280",background:"#E0E5EC",card_background:"#E0E5EC",light_gray:"#F5F7FA",medium_gray:"#C9D1DC",dark_gray:"#8FA3BD"},s={font_family:"Arial",font_weight:"normal"},o={small:"12px",medium:"20px",large:"30px",full:"50%"},r={insetLight:"inset 2px 2px 5px rgba(255, 255, 255, 0.7), inset -2px -2px 5px rgba(0, 0, 0, 0.1)",insetMedium:"inset 3px 3px 7px rgba(255, 255, 255, 0.8), inset -3px -3px 7px rgba(0, 0, 0, 0.15)",insetDark:"inset 5px 5px 10px rgba(255, 255, 255, 0.9), inset -5px -5px 10px rgba(0, 0, 0, 0.2)",light:"3px 3px 6px rgba(0, 0, 0, 0.1), -3px -3px 6px rgba(255, 255, 255, 0.7)",medium:"5px 5px 10px rgba(0, 0, 0, 0.15), -5px -5px 10px rgba(255, 255, 255, 0.8)",medium2:"5px 5px 12px rgba(0, 0, 0, 0.12), -5px -5px 12px rgba(255, 255, 255, 0.75)",large:"8px 8px 16px rgba(0, 0, 0, 0.2), -8px -8px 16px rgba(255, 255, 255, 0.9)"}}}]);
//# sourceMappingURL=components-switch-switch-stories.fcc643a1.iframe.bundle.js.map