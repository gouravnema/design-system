"use strict";(self.webpackChunk_gouravnema_design_system=self.webpackChunk_gouravnema_design_system||[]).push([["270"],{"./src/layouts/tabs.stories.tsx"(e,t,a){a.r(t),a.d(t,{DynamicContent:()=>g,default:()=>b,WithLongerLabels:()=>v,Default:()=>p,__namedExportsOrder:()=>f});var n=a("./node_modules/react/index.js"),o=a("./node_modules/styled-components/dist/styled-components.browser.esm.js"),l=a("./src/components/buttons/buttons.tsx"),r=a("./src/theme/sizes.ts");let s=o.Ay.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    gap:15px;
    margin: 10px;
    width: calc(100% - 20px);
    .tabs {
        padding: ${r.F.xs};
        display: flex;
        flex-wrap: wrap;
        gap:15px;
        button {
            width: 150px;
        }
    }
    .tab-content{
        padding: ${r.F.xs};
        display: flex;
        flex-direction: column;
        gap:5px;
        overflow-y: scroll;
        flex-grow: 1;
    }
`,i=function(e){let{tabs:t,onTabChange:a,content:o}=e;for(var r=arguments.length,i=Array(r>1?r-1:0),c=1;c<r;c++)i[c-1]=arguments[c];let d=t.map(e=>{let t=t=>{t.preventDefault(),t.stopPropagation(),a(e.value)};return e.active?n.createElement(l.jn,{onClick:t},e.label):n.createElement(l.tA,{onClick:t},e.label)});return n.createElement(s,i,n.createElement("div",{className:"tabs"},d),n.createElement("div",{className:"tab-content"},o))};i.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{tabs:{required:!0,tsType:{name:"Array",elements:[{name:"TabItem"}],raw:"TabItem[]"},description:""},onTabChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};var c=a("./src/components/index.ts"),d=a("./src/layouts/background.tsx");let u=(0,o.Ay)(c.Zp)`
    padding: 15px;
    border: 1px solid #eee;
    border-top: none;
    background-color: #f9f9f9;
    min-height: 100px;
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    color: #333;
`,b={title:"Layouts/Tabs",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{tabs:{control:"object"},onTabChange:{action:"tab changed"},content:{control:"object"}}},m=e=>{var t;let[a,o]=(0,n.useState)(e.initialActiveTab||"tab1"),l=(null==(t=e.tabs.find(e=>e.value===a))?void 0:t.content)||"No content for this tab.";return n.createElement(d.V,null,n.createElement(i,{...e,tabs:e.tabs.map(e=>({...e,active:e.value===a})),onTabChange:t=>{o(t),e.onTabChange(t)},content:n.createElement(u,null,l)}))},p={render:e=>n.createElement(m,e),args:{initialActiveTab:"tab1",tabs:[{label:"Tab 1",value:"tab1",content:"Content for Tab 1"},{label:"Tab 2",value:"tab2",content:"Content for Tab 2"},{label:"Tab 3",value:"tab3",content:"Content for Tab 3"}]}},v={render:e=>n.createElement(m,e),args:{initialActiveTab:"overview",tabs:[{label:"Product Overview",value:"overview",content:"Detailed product overview information."},{label:"Technical Specifications",value:"specs",content:"Technical specifications and data sheets."},{label:"Customer Reviews",value:"reviews",content:"What customers are saying about the product."}]}},g={render:e=>n.createElement(m,e),args:{initialActiveTab:"home",tabs:[{label:"Home",value:"home",content:n.createElement("div",null,"Welcome to the Home tab!")},{label:"Profile",value:"profile",content:n.createElement("div",null,"User profile details here.")},{label:"Settings",value:"settings",content:n.createElement("div",null,"Adjust your settings.")}]}},f=["Default","WithLongerLabels","DynamicContent"]},"./src/layouts/background.tsx"(e,t,a){a.d(t,{V:()=>l});var n=a("./node_modules/styled-components/dist/styled-components.browser.esm.js"),o=a("./src/theme/colors.ts");let l=n.Ay.div`
    background: ${o.l.background};
    width: 100vw;
    height: 100vh;
    display: flex;
    font-family: ${"Arial"};
    font-weight: ${"normal"};
`}}]);
//# sourceMappingURL=layouts-tabs-stories.a5bca716.iframe.bundle.js.map