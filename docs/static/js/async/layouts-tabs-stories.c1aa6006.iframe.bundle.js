"use strict";(self.webpackChunk_gouravnema_design_system=self.webpackChunk_gouravnema_design_system||[]).push([["270"],{"./src/layouts/tabs.stories.tsx"(e,t,a){a.r(t),a.d(t,{DynamicContent:()=>p,default:()=>c,WithLongerLabels:()=>m,Default:()=>b,__namedExportsOrder:()=>u});var n=a("./node_modules/react/index.js"),o=a("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=a("./src/components/buttons/buttons.tsx");let l=o.Ay.div`
    display: flex;
    flex-direction: column;
    gap:15px;
    margin: 10px;
    width: calc(100% - 20px);
    .tabs {
        padding: 5px;
        display: flex;
        gap:15px;
        button {
            width: 150px;
        }
    }
    .tab-content{
        padding: 5px;
        display: flex;
        flex-direction: column;
        gap:5px;
        overflow-y: scroll;
    }
`,s=e=>{let{tabs:t,onTabChange:a,content:o}=e,s=t.map(e=>{let t=t=>{t.preventDefault(),t.stopPropagation(),a(e.value)};return e.active?n.createElement(r.jn,{onClick:t},e.label):n.createElement(r.tA,{onClick:t},e.label)});return n.createElement(l,null,n.createElement("div",{className:"tabs"},s),n.createElement("div",{className:"tab-content"},o))};s.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{tabs:{required:!0,tsType:{name:"Array",elements:[{name:"TabItem"}],raw:"TabItem[]"},description:""},onTabChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};let i=o.Ay.div`
  padding: 15px;
  border: 1px solid #eee;
  border-top: none;
  border-radius: 0 0 8px 8px;
  background-color: #f9f9f9;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
`,c={title:"Layouts/Tabs",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{tabs:{control:"object"},onTabChange:{action:"tab changed"},content:{control:"object"}}},d=e=>{var t;let[a,o]=(0,n.useState)(e.initialActiveTab||"tab1"),r=(null==(t=e.tabs.find(e=>e.value===a))?void 0:t.content)||"No content for this tab.";return n.createElement("div",{style:{width:"500px",height:"300px",border:"1px solid #ccc",borderRadius:"8px",display:"flex",flexDirection:"column"}},n.createElement(s,{...e,tabs:e.tabs.map(e=>({...e,active:e.value===a})),onTabChange:t=>{o(t),e.onTabChange(t)},content:n.createElement(i,null,r)}))},b={render:e=>n.createElement(d,e),args:{initialActiveTab:"tab1",tabs:[{label:"Tab 1",value:"tab1",content:"Content for Tab 1"},{label:"Tab 2",value:"tab2",content:"Content for Tab 2"},{label:"Tab 3",value:"tab3",content:"Content for Tab 3"}]}},m={render:e=>n.createElement(d,e),args:{initialActiveTab:"overview",tabs:[{label:"Product Overview",value:"overview",content:"Detailed product overview information."},{label:"Technical Specifications",value:"specs",content:"Technical specifications and data sheets."},{label:"Customer Reviews",value:"reviews",content:"What customers are saying about the product."}]}},p={render:e=>n.createElement(d,e),args:{initialActiveTab:"home",tabs:[{label:"Home",value:"home",content:n.createElement("div",null,"Welcome to the Home tab!")},{label:"Profile",value:"profile",content:n.createElement("div",null,"User profile details here.")},{label:"Settings",value:"settings",content:n.createElement("div",null,"Adjust your settings.")}]}},u=["Default","WithLongerLabels","DynamicContent"]},"./src/components/buttons/buttons.tsx"(e,t,a){a.d(t,{jn:()=>s,tA:()=>i,uJ:()=>l,yp:()=>r});var n=a("./node_modules/styled-components/dist/styled-components.browser.esm.js"),o=a("./src/theme.constants.ts");let r=n.Ay.button`
    width: calc(100% - 24px);
    padding: 12px;
    color: white;
    border: none;
    border-radius: ${o.Zz.small};
    font-size: 1rem;
    font-weight: 200;
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.1s ease;
    margin-top: 10px;
`,l=(0,n.Ay)(r)`
    border: 1px solid red;
`;(0,n.Ay)(r)`
    border: 1px solid blue;
`;let s=(0,n.Ay)(r)`
    background-color: ${o.lm.blue};
    &:hover {
        background-color: #0056b3;
        transform: translateY(-1px);
        box-shadow: 0 2px 5px rgba(0, 122, 255, 0.3);
    }
`,i=(0,n.Ay)(r)`
    background-color: ${o.lm.light_gray};
    color: ${o.lm.text_dark};
    border: 1px solid ${o.lm.medium_gray};
    &:hover {
        background-color: ${o.lm.medium_gray};
        transform: translateY(-1px);
        box-shadow: 0 2px 5px rgba(0, 122, 255, 0.3);
    }
`},"./src/theme.constants.ts"(e,t,a){a.d(t,{Ne:()=>o,Zz:()=>r,lm:()=>n,xc:()=>l});let n={blue:"#007AFF",green:"#34C759",red:"#FF3B30",orange:"#FF9500",light_gray:"#EFEFF4",medium_gray:"#C7C7CC",dark_gray:"#8E8E93",text_dark:"#1C1C1E",text_light:"#636366",background:"#F2F2F7",card_background:"rgba(255, 255, 255, 0.9)"},o={font_family:"Arial",font_weight:"normal"},r={small:"8px",medium:"12px"},l={light:"0 1px 3px rgba(0, 0, 0, 0.08)",medium:"0 4px 10px rgba(0, 0, 0, 0.1)"}}}]);
//# sourceMappingURL=layouts-tabs-stories.c1aa6006.iframe.bundle.js.map