"use strict";(self.webpackChunk_gouravnema_design_system=self.webpackChunk_gouravnema_design_system||[]).push([["270"],{"./src/layouts/tabs.stories.tsx"(e,t,a){a.r(t),a.d(t,{DynamicContent:()=>x,default:()=>d,WithLongerLabels:()=>p,Default:()=>b,__namedExportsOrder:()=>m});var o=a("./node_modules/react/index.js"),n=a("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=a("./src/components/buttons/buttons.tsx");let s=n.Ay.div`
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
`,i=e=>{let{tabs:t,onTabChange:a,content:n}=e,i=t.map(e=>{let t=t=>{t.preventDefault(),t.stopPropagation(),a(e.value)};return e.active?o.createElement(r.jn,{onClick:t},e.label):o.createElement(r.tA,{onClick:t},e.label)});return o.createElement(s,null,o.createElement("div",{className:"tabs"},i),o.createElement("div",{className:"tab-content"},n))};i.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{tabs:{required:!0,tsType:{name:"Array",elements:[{name:"TabItem"}],raw:"TabItem[]"},description:""},onTabChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};let l=n.Ay.div`
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
`,d={title:"Layouts/Tabs",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{tabs:{control:"object"},onTabChange:{action:"tab changed"},content:{control:"object"}}},c=e=>{var t;let[a,n]=(0,o.useState)(e.initialActiveTab||"tab1"),r=(null==(t=e.tabs.find(e=>e.value===a))?void 0:t.content)||"No content for this tab.";return o.createElement("div",{style:{width:"500px",height:"300px",border:"1px solid #ccc",borderRadius:"8px",display:"flex",flexDirection:"column"}},o.createElement(i,{...e,tabs:e.tabs.map(e=>({...e,active:e.value===a})),onTabChange:t=>{n(t),e.onTabChange(t)},content:o.createElement(l,null,r)}))},b={render:e=>o.createElement(c,e),args:{initialActiveTab:"tab1",tabs:[{label:"Tab 1",value:"tab1",content:"Content for Tab 1"},{label:"Tab 2",value:"tab2",content:"Content for Tab 2"},{label:"Tab 3",value:"tab3",content:"Content for Tab 3"}]}},p={render:e=>o.createElement(c,e),args:{initialActiveTab:"overview",tabs:[{label:"Product Overview",value:"overview",content:"Detailed product overview information."},{label:"Technical Specifications",value:"specs",content:"Technical specifications and data sheets."},{label:"Customer Reviews",value:"reviews",content:"What customers are saying about the product."}]}},x={render:e=>o.createElement(c,e),args:{initialActiveTab:"home",tabs:[{label:"Home",value:"home",content:o.createElement("div",null,"Welcome to the Home tab!")},{label:"Profile",value:"profile",content:o.createElement("div",null,"User profile details here.")},{label:"Settings",value:"settings",content:o.createElement("div",null,"Adjust your settings.")}]}},m=["Default","WithLongerLabels","DynamicContent"]},"./src/components/buttons/buttons.tsx"(e,t,a){a.d(t,{tA:()=>x,pE:()=>b,MG:()=>v,wx:()=>y,jn:()=>p,yi:()=>f,yp:()=>d,uJ:()=>c});var o=a("./node_modules/react/index.js"),n=a("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=a("./src/theme/colors.ts"),s=a("./src/theme/shadows.ts"),i=a("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),l=a("./node_modules/@fortawesome/react-fontawesome/dist/index.js");let d=n.Ay.button`
    width: calc(100% - 24px);
    padding: 12px;
    color: ${r.l.text_dark};
    background-color: ${r.l.base};
    border: none;
    border-radius: ${"20px"};
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 10px;
    box-shadow: ${s.x.medium};
    
    &:hover {
        box-shadow: ${s.x.large};
        transform: translateY(-2px);
    }

    &:active {
        box-shadow: ${s.x.insetMedium};
        transform: translateY(0);
    }
`,c=(0,n.Ay)(d)`
    background-color: ${r.l.baseLight};
    color: ${r.l.red};
    box-shadow: ${s.x.light};
    
    &:hover {
        box-shadow: ${s.x.medium};
        color: ${r.l.dark_red};
    }

    &:active {
        box-shadow: ${s.x.insetLight};
    }
`,b=(0,n.Ay)(d)`
    background-color: ${r.l.baseLight};
    color: ${r.l.blue};
    box-shadow: ${s.x.light};
    
    &:hover {
        box-shadow: ${s.x.medium};
        color: #4A5FB0;
    }

    &:active {
        box-shadow: ${s.x.insetLight};
    }
`,p=(0,n.Ay)(d)`
    background-color: ${r.l.blue};
    color: white;
    
    &:hover {
        background-color: #4A5FB0;
        box-shadow: ${s.x.large};
    }

    &:active {
        box-shadow: ${s.x.insetMedium};
    }
`,x=(0,n.Ay)(d)`
    background-color: ${r.l.light_gray};
    color: ${r.l.text_dark};
    box-shadow: ${s.x.light};
    
    &:hover {
        background-color: ${r.l.baseLight};
        box-shadow: ${s.x.medium};
    }

    &:active {
        box-shadow: ${s.x.insetLight};
    }
`,m=(0,n.Ay)(d)`
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
    transition: all 0.3s ease;
    padding: 0;

    &:hover {
        transform: translateY(-3px);
    }

    &:active {
        transform: translateY(-1px);
    }
`,g=(0,n.Ay)(m)`
     background: ${r.l.green};
     
     &:hover {
            background: #5FA35F;
            box-shadow: ${s.x.large};
     }

     &:active {
            box-shadow: ${s.x.insetDark};
     }
 `,u=(0,n.Ay)(m)`
    background: ${r.l.orange};
    
    &:hover {
        background: #C98A4F;
        box-shadow: ${s.x.large};
    }

    &:active {
        box-shadow: ${s.x.insetDark};
    }
`,h=(0,n.Ay)(m)`
    background: ${r.l.red};
    
    &:hover {
        background: #C84D5C;
        box-shadow: ${s.x.large};
    }

    &:active {
        box-shadow: ${s.x.insetDark};
    }
`,v=e=>o.createElement(h,e,o.createElement(l.gc,{icon:i.APi})),y=e=>o.createElement(u,e,o.createElement(l.gc,{icon:i.G1Y})),f=e=>o.createElement(g,e,o.createElement(l.gc,{icon:i.ijD}));v.__docgenInfo={description:"",methods:[],displayName:"TimerDoneButton"},y.__docgenInfo={description:"",methods:[],displayName:"TimerPauseButton"},f.__docgenInfo={description:"",methods:[],displayName:"TimerPlayButton"}},"./src/theme/colors.ts"(e,t,a){a.d(t,{l:()=>o});let o={base:"#E0E5EC",baseLight:"#F5F7FA",baseDark:"#A3B1C6",blue:"#5F7FD4",green:"#5FB36D",dark_green:"#4A8A54",red:"#D85F6F",dark_red:"#B84C5A",orange:"#D99B5F",dark_orange:"#B87A47",text_dark:"#3A3F47",text_light:"#6B7280",background:"#E0E5EC",card_background:"#E0E5EC",light_gray:"#F5F7FA",medium_gray:"#C9D1DC",dark_gray:"#8FA3BD"}},"./src/theme/shadows.ts"(e,t,a){a.d(t,{x:()=>o});let o={insetLight:"inset 2px 2px 5px rgba(255, 255, 255, 0.7), inset -2px -2px 5px rgba(0, 0, 0, 0.1)",insetMedium:"inset 3px 3px 7px rgba(255, 255, 255, 0.8), inset -3px -3px 7px rgba(0, 0, 0, 0.15)",insetDark:"inset 5px 5px 10px rgba(255, 255, 255, 0.9), inset -5px -5px 10px rgba(0, 0, 0, 0.2)",light:"3px 3px 6px rgba(0, 0, 0, 0.1), -3px -3px 6px rgba(255, 255, 255, 0.7)",medium:"5px 5px 10px rgba(0, 0, 0, 0.15), -5px -5px 10px rgba(255, 255, 255, 0.8)",medium2:"5px 5px 12px rgba(0, 0, 0, 0.12), -5px -5px 12px rgba(255, 255, 255, 0.75)",large:"8px 8px 16px rgba(0, 0, 0, 0.2), -8px -8px 16px rgba(255, 255, 255, 0.9)"}}}]);
//# sourceMappingURL=layouts-tabs-stories.ccc970b1.iframe.bundle.js.map