"use strict";(self.webpackChunk_gouravnema_design_system=self.webpackChunk_gouravnema_design_system||[]).push([["270"],{"./src/layouts/tabs.stories.tsx"(e,t,a){a.r(t),a.d(t,{DynamicContent:()=>m,default:()=>c,WithLongerLabels:()=>u,Default:()=>b,__namedExportsOrder:()=>p});var o=a("./node_modules/react/index.js"),n=a("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=a("./src/components/buttons/buttons.tsx");let s=n.Ay.div`
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
`,l=e=>{let{tabs:t,onTabChange:a,content:n}=e,l=t.map(e=>{let t=t=>{t.preventDefault(),t.stopPropagation(),a(e.value)};return e.active?o.createElement(r.jn,{onClick:t},e.label):o.createElement(r.tA,{onClick:t},e.label)});return o.createElement(s,null,o.createElement("div",{className:"tabs"},l),o.createElement("div",{className:"tab-content"},n))};l.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{tabs:{required:!0,tsType:{name:"Array",elements:[{name:"TabItem"}],raw:"TabItem[]"},description:""},onTabChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};let i=n.Ay.div`
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
`,c={title:"Layouts/Tabs",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{tabs:{control:"object"},onTabChange:{action:"tab changed"},content:{control:"object"}}},d=e=>{var t;let[a,n]=(0,o.useState)(e.initialActiveTab||"tab1"),r=(null==(t=e.tabs.find(e=>e.value===a))?void 0:t.content)||"No content for this tab.";return o.createElement("div",{style:{width:"500px",height:"300px",border:"1px solid #ccc",borderRadius:"8px",display:"flex",flexDirection:"column"}},o.createElement(l,{...e,tabs:e.tabs.map(e=>({...e,active:e.value===a})),onTabChange:t=>{n(t),e.onTabChange(t)},content:o.createElement(i,null,r)}))},b={render:e=>o.createElement(d,e),args:{initialActiveTab:"tab1",tabs:[{label:"Tab 1",value:"tab1",content:"Content for Tab 1"},{label:"Tab 2",value:"tab2",content:"Content for Tab 2"},{label:"Tab 3",value:"tab3",content:"Content for Tab 3"}]}},u={render:e=>o.createElement(d,e),args:{initialActiveTab:"overview",tabs:[{label:"Product Overview",value:"overview",content:"Detailed product overview information."},{label:"Technical Specifications",value:"specs",content:"Technical specifications and data sheets."},{label:"Customer Reviews",value:"reviews",content:"What customers are saying about the product."}]}},m={render:e=>o.createElement(d,e),args:{initialActiveTab:"home",tabs:[{label:"Home",value:"home",content:o.createElement("div",null,"Welcome to the Home tab!")},{label:"Profile",value:"profile",content:o.createElement("div",null,"User profile details here.")},{label:"Settings",value:"settings",content:o.createElement("div",null,"Adjust your settings.")}]}},p=["Default","WithLongerLabels","DynamicContent"]},"./src/components/buttons/buttons.tsx"(e,t,a){a.d(t,{tA:()=>u,pE:()=>d,MG:()=>h,wx:()=>v,jn:()=>b,yi:()=>y,yp:()=>i,uJ:()=>c});var o=a("./node_modules/react/index.js"),n=a("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=a("./src/theme/colors.ts"),s=a("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),l=a("./node_modules/@fortawesome/react-fontawesome/dist/index.js");let i=n.Ay.button`
    width: calc(100% - 24px);
    padding: 12px;
    color: white;
    border: none;
    border-radius: ${"8px"};
    font-size: 1rem;
    font-weight: 200;
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.1s ease;
    margin-top: 10px;
`,c=(0,n.Ay)(i)`
    border: 1px solid red;
    background: white;
    color:red;
`,d=(0,n.Ay)(i)`
    border: 1px solid blue;
    background: white;
    color:blue;
`,b=(0,n.Ay)(i)`
    background-color: ${r.l.blue};
    &:hover {
        background-color: #0056b3;
        transform: translateY(-1px);
        box-shadow: 0 2px 5px rgba(0, 122, 255, 0.3);
    }
`,u=(0,n.Ay)(i)`
    background-color: ${r.l.light_gray};
    color: ${r.l.text_dark};
    border: 1px solid ${r.l.medium_gray};
    &:hover {
        background-color: ${r.l.medium_gray};
        transform: translateY(-1px);
        box-shadow: 0 2px 5px rgba(0, 122, 255, 0.3);
    }
`,m=(0,n.Ay)(i)`
    color: white;
    border: none;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: background-color 0.2s ease, transform 0.1s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 2px 5px rgba(0, 122, 255, 0.3);
    }
`,p=(0,n.Ay)(m)`
     background: ${r.l.green};
     &:hover {
            background: ${r.l.dark_green};
     }
 `,g=(0,n.Ay)(m)`
    background: ${r.l.orange};
    &:hover {
        background: ${r.l.dark_orange};
    }
`,x=(0,n.Ay)(m)`
    background: ${r.l.red};
    &:hover {
        background: ${r.l.dark_red};
    }
`,h=e=>o.createElement(x,e,o.createElement(l.gc,{icon:s.APi})),v=e=>o.createElement(g,e,o.createElement(l.gc,{icon:s.G1Y})),y=e=>o.createElement(p,e,o.createElement(l.gc,{icon:s.ijD}));h.__docgenInfo={description:"",methods:[],displayName:"TimerDoneButton"},v.__docgenInfo={description:"",methods:[],displayName:"TimerPauseButton"},y.__docgenInfo={description:"",methods:[],displayName:"TimerPlayButton"}},"./src/theme/colors.ts"(e,t,a){a.d(t,{l:()=>o});let o={blue:"#007AFF",green:"#34C759",dark_green:"#049729",red:"#FF3B30",dark_red:"#CF0B00",orange:"#FF9500",dark_orange:"#CF6500",light_gray:"#EFEFF4",medium_gray:"#C7C7CC",dark_gray:"#8E8E93",text_dark:"#1C1C1E",text_light:"#636366",background:"#F2F2F7",card_background:"rgba(255, 255, 255, 0.9)"}}}]);
//# sourceMappingURL=layouts-tabs-stories.5589e628.iframe.bundle.js.map