"use strict";(self.webpackChunk_gouravnema_design_system=self.webpackChunk_gouravnema_design_system||[]).push([["866"],{"./src/components/switch/switch.stories.tsx"(e,t,a){a.r(t),a.d(t,{Default:()=>d,Enabled:()=>l,WithOnChange:()=>p,__namedExportsOrder:()=>c,default:()=>i});var s=a("./node_modules/react/index.js"),o=a("./src/components/switch/switch.tsx"),r=a("./node_modules/styled-components/dist/styled-components.browser.esm.js");let n=r.Ay.div`
  width: 40px;
`,i={component:e=>s.createElement(n,null,s.createElement(o.d,e)),title:"Components/Switch",parameters:{layout:"centered"},tags:["autodocs"],argTypes:{defaultState:{control:"boolean",description:"Default State of Switch",defaultValue:!1},onChange:{action:"changed",description:"Callback to notify toggle of Switch"}}},d={args:{defaultState:!1}},l={args:{defaultState:!0}},p={args:{defaultState:!1,onChange:e=>console.log("Switch toggled to:",e)}},c=["Default","Enabled","WithOnChange"]},"./src/components/switch/switch.tsx"(e,t,a){a.d(t,{d:()=>l});var s=a("./node_modules/react/index.js"),o=a("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=a("./src/theme/colors.ts"),n=a("./src/theme/shadows.ts");let i=o.Ay.button`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: auto;
    aspect-ratio: 13 / 8 ;
    min-width: 13px;
    min-height: 8px;
    background-color: ${e=>e.isActive?r.l.green:r.l.base};
    border: none;
    border-radius: 50vh;
    cursor: pointer;
    transition: background-color 0.3s ease;
    outline: none;
    box-sizing: border-box;
    box-shadow: ${e=>e.isActive?n.x.medium:n.x.insetLight};

    &:hover {
        box-shadow: ${e=>e.isActive?n.x.large:n.x.insetMedium};
    }

    &:focus {
        box-shadow: 0 0 0 3px rgba(95, 179, 109, 0.2);
    }
`,d=o.Ay.div`
    position: absolute;
    width: auto;
    height: 100%;
    aspect-ratio: 1;
    background-color: ${r.l.baseLight};
    border-radius: 50%;
    transition: transform 0.3s ease;
    box-shadow: ${n.x.medium};
    left: 0;
    top: 0;

    ${i}[data-active='true'] & {
        transform: translateX(80%);
    }
`,l=e=>{let{defaultState:t=!1,onChange:a}=e,[o,r]=s.useState(t);return s.createElement(i,{"data-active":o,onClick:()=>{let e=!o;r(e),null==a||a(e)},role:"switch","aria-checked":o,type:"button",isActive:o},s.createElement(d,null))};l.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{defaultState:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""}}}},"./src/theme/colors.ts"(e,t,a){a.d(t,{l:()=>s});let s={base:"#E0E5EC",baseLight:"#F5F7FA",baseDark:"#A3B1C6",baseBorder:"#738196",blue:"#5F7FD4",green:"#5FB36D",dark_green:"#4A8A54",red:"#D85F6F",dark_red:"#B84C5A",orange:"#D99B5F",dark_orange:"#B87A47",text_dark:"#3A3F47",text:"#4A4F57",text_light:"#6B7280",background:"#E0E5EC",card_background:"#E0E5EC",light_gray:"#F5F7FA",medium_gray:"#C9D1DC",dark_gray:"#8FA3BD"}},"./src/theme/shadows.ts"(e,t,a){a.d(t,{x:()=>s});let s={insetLight:"inset 2px 2px 5px rgba(255, 255, 255, 0.7), inset -2px -2px 5px rgba(0, 0, 0, 0.1)",insetMedium:"inset 3px 3px 7px rgba(255, 255, 255, 0.8), inset -3px -3px 7px rgba(0, 0, 0, 0.15)",insetDark:"inset 5px 5px 10px rgba(255, 255, 255, 0.9), inset -5px -5px 10px rgba(0, 0, 0, 0.2)",light:"3px 3px 6px rgba(0, 0, 0, 0.1), -3px -3px 6px rgba(255, 255, 255, 0.7)",medium:"5px 5px 10px rgba(0, 0, 0, 0.15), -5px -5px 10px rgba(255, 255, 255, 0.8)",medium2:"5px 5px 12px rgba(0, 0, 0, 0.12), -5px -5px 12px rgba(255, 255, 255, 0.75)",large:"8px 8px 16px rgba(0, 0, 0, 0.2), -8px -8px 16px rgba(255, 255, 255, 0.9)"}}}]);
//# sourceMappingURL=components-switch-switch-stories.53b4fd16.iframe.bundle.js.map