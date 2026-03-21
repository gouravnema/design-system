"use strict";(self.webpackChunk_gouravnema_design_system=self.webpackChunk_gouravnema_design_system||[]).push([["270"],{"./src/layouts/tabs.stories.tsx":function(e,t,a){a.r(t),a.d(t,{WithLongerLabels:()=>m,DynamicContent:()=>u,Default:()=>b,default:()=>c,__namedExportsOrder:()=>p});var n=a("./node_modules/react/index.js"),r=a("./node_modules/styled-components/dist/styled-components.browser.esm.js"),o=a("./src/components/buttons/buttons.tsx");let s=r.Ay.div`
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
`,l=e=>{let{tabs:t,onTabChange:a,content:r}=e,l=t.map(e=>{let t=t=>{t.preventDefault(),t.stopPropagation(),a(e.value)};return e.active?n.createElement(o.jn,{onClick:t},e.label):n.createElement(o.tA,{onClick:t},e.label)});return n.createElement(s,null,n.createElement("div",{className:"tabs"},l),n.createElement("div",{className:"tab-content"},r))};l.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{tabs:{required:!0,tsType:{name:"Array",elements:[{name:"TabItem"}],raw:"TabItem[]"},description:""},onTabChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};let i=r.Ay.div`
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
`,c={title:"Layouts/Tabs",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{tabs:{control:"object"},onTabChange:{action:"tab changed"},content:{control:"object"}}},d=e=>{var t;let[a,r]=(0,n.useState)(e.initialActiveTab||"tab1"),o=(null==(t=e.tabs.find(e=>e.value===a))?void 0:t.content)||"No content for this tab.";return n.createElement("div",{style:{width:"500px",height:"300px",border:"1px solid #ccc",borderRadius:"8px",display:"flex",flexDirection:"column"}},n.createElement(l,{...e,tabs:e.tabs.map(e=>({...e,active:e.value===a})),onTabChange:t=>{r(t),e.onTabChange(t)},content:n.createElement(i,null,o)}))},b={render:e=>n.createElement(d,e),args:{initialActiveTab:"tab1",tabs:[{label:"Tab 1",value:"tab1",content:"Content for Tab 1"},{label:"Tab 2",value:"tab2",content:"Content for Tab 2"},{label:"Tab 3",value:"tab3",content:"Content for Tab 3"}]}},m={render:e=>n.createElement(d,e),args:{initialActiveTab:"overview",tabs:[{label:"Product Overview",value:"overview",content:"Detailed product overview information."},{label:"Technical Specifications",value:"specs",content:"Technical specifications and data sheets."},{label:"Customer Reviews",value:"reviews",content:"What customers are saying about the product."}]}},u={render:e=>n.createElement(d,e),args:{initialActiveTab:"home",tabs:[{label:"Home",value:"home",content:n.createElement("div",null,"Welcome to the Home tab!")},{label:"Profile",value:"profile",content:n.createElement("div",null,"User profile details here.")},{label:"Settings",value:"settings",content:n.createElement("div",null,"Adjust your settings.")}]}},p=["Default","WithLongerLabels","DynamicContent"];b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"{\n  render: (args: TemplateArgs) => <Template {...args} />,\n  args: {\n    initialActiveTab: 'tab1',\n    tabs: [{\n      label: 'Tab 1',\n      value: 'tab1',\n      content: 'Content for Tab 1'\n    }, {\n      label: 'Tab 2',\n      value: 'tab2',\n      content: 'Content for Tab 2'\n    }, {\n      label: 'Tab 3',\n      value: 'tab3',\n      content: 'Content for Tab 3'\n    }]\n  }\n}",...b.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{\n  render: (args: TemplateArgs) => <Template {...args} />,\n  args: {\n    initialActiveTab: 'overview',\n    tabs: [{\n      label: 'Product Overview',\n      value: 'overview',\n      content: 'Detailed product overview information.'\n    }, {\n      label: 'Technical Specifications',\n      value: 'specs',\n      content: 'Technical specifications and data sheets.'\n    }, {\n      label: 'Customer Reviews',\n      value: 'reviews',\n      content: 'What customers are saying about the product.'\n    }]\n  }\n}",...m.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"{\n  render: (args: TemplateArgs) => <Template {...args} />,\n  args: {\n    initialActiveTab: 'home',\n    tabs: [{\n      label: 'Home',\n      value: 'home',\n      content: <div>Welcome to the Home tab!</div>\n    }, {\n      label: 'Profile',\n      value: 'profile',\n      content: <div>User profile details here.</div>\n    }, {\n      label: 'Settings',\n      value: 'settings',\n      content: <div>Adjust your settings.</div>\n    }]\n  }\n}",...u.parameters?.docs?.source}}}},"./src/components/buttons/buttons.tsx":function(e,t,a){a.d(t,{jn:()=>l,tA:()=>i,uJ:()=>s,yp:()=>o});var n=a("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=a("./src/theme.constants.ts");let o=n.Ay.button`
    width: calc(100% - 24px);
    padding: 12px;
    color: white;
    border: none;
    border-radius: ${r.Zz.small};
    font-size: 1rem;
    font-weight: 200;
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.1s ease;
    margin-top: 10px;
`,s=(0,n.Ay)(o)`
    border: 1px solid red;
`;(0,n.Ay)(o)`
    border: 1px solid blue;
`;let l=(0,n.Ay)(o)`
    background-color: ${r.lm.blue};
    &:hover {
        background-color: #0056b3;
        transform: translateY(-1px);
        box-shadow: 0 2px 5px rgba(0, 122, 255, 0.3);
    }
`,i=(0,n.Ay)(o)`
    background-color: ${r.lm.light_gray};
    color: ${r.lm.text_dark};
    border: 1px solid ${r.lm.medium_gray};
    &:hover {
        background-color: ${r.lm.medium_gray};
        transform: translateY(-1px);
        box-shadow: 0 2px 5px rgba(0, 122, 255, 0.3);
    }
`},"./src/theme.constants.ts":function(e,t,a){a.d(t,{Ne:()=>r,Zz:()=>o,lm:()=>n,xc:()=>s});let n={blue:"#007AFF",green:"#34C759",red:"#FF3B30",orange:"#FF9500",light_gray:"#EFEFF4",medium_gray:"#C7C7CC",dark_gray:"#8E8E93",text_dark:"#1C1C1E",text_light:"#636366",background:"#F2F2F7",card_background:"rgba(255, 255, 255, 0.9)"},r={font_family:"Arial",font_weight:"normal"},o={small:"8px",medium:"12px"},s={light:"0 1px 3px rgba(0, 0, 0, 0.08)",medium:"0 4px 10px rgba(0, 0, 0, 0.1)"}}}]);
//# sourceMappingURL=layouts-tabs-stories.61d1bd93.iframe.bundle.js.map