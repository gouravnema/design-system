"use strict";(self.webpackChunk_gouravnema_design_system=self.webpackChunk_gouravnema_design_system||[]).push([["265"],{"./src/components/textbox/textinput.stories.tsx"(e,t,a){a.r(t),a.d(t,{Default:()=>o,Disabled:()=>d,Email:()=>s,Password:()=>r,ReadOnly:()=>i,WithValue:()=>n,__namedExportsOrder:()=>m,default:()=>l}),a("./node_modules/react/index.js");let l={title:"Components/TextInput",component:a("./src/components/textbox/textinput.tsx").k,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},placeholder:{control:"text"},type:{control:{type:"select"},options:["text","password","email","number"]},value:{control:"text"},onChange:{action:"changed"},disabled:{control:"boolean"},readOnly:{control:"boolean"}}},o={args:{label:"Username",placeholder:"Enter your username",type:"text"}},r={args:{label:"Password",placeholder:"Enter your password",type:"password"}},s={args:{label:"Email",placeholder:"Enter your email",type:"email"}},n={args:{label:"Pre-filled Value",value:"example@email.com",type:"email"}},d={args:{label:"Disabled Input",placeholder:"This input is disabled",disabled:!0}},i={args:{label:"Read-Only Input",value:"This value cannot be changed",readOnly:!0}},m=["Default","Password","Email","WithValue","Disabled","ReadOnly"]},"./src/components/textbox/textinput.tsx"(e,t,a){a.d(t,{k:()=>n});var l=a("./node_modules/styled-components/dist/styled-components.browser.esm.js"),o=a("./node_modules/react/index.js"),r=a("./src/theme.constants.ts");let s=l.Ay.div`
    margin-bottom: 20px;
    text-align: left;
    label {
        display: block;
        margin-bottom: 8px;
        font-size: 0.9em;
        color: ${r.lm.text_light};
        font-weight: 500;
    }
    input {
        width: calc(100% - 24px);
        padding: 12px;
        border: 1px solid ${r.lm.medium_gray};
        border-radius: ${r.Zz.small};
        font-size: 1em;
        color: ${r.lm.text_dark};
        background-color: rgba(255, 255, 255, 0.7);
        transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }
`,n=e=>{let{label:t,...a}=e;return o.createElement(s,null,o.createElement("label",null,t),o.createElement("input",a))};n.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{label:{required:!0,tsType:{name:"string"},description:""}}}},"./src/theme.constants.ts"(e,t,a){a.d(t,{Ne:()=>o,Zz:()=>r,lm:()=>l,xc:()=>s});let l={blue:"#007AFF",green:"#34C759",red:"#FF3B30",orange:"#FF9500",light_gray:"#EFEFF4",medium_gray:"#C7C7CC",dark_gray:"#8E8E93",text_dark:"#1C1C1E",text_light:"#636366",background:"#F2F2F7",card_background:"rgba(255, 255, 255, 0.9)"},o={font_family:"Arial",font_weight:"normal"},r={small:"8px",medium:"12px"},s={light:"0 1px 3px rgba(0, 0, 0, 0.08)",medium:"0 4px 10px rgba(0, 0, 0, 0.1)"}}}]);
//# sourceMappingURL=components-textbox-textinput-stories.b1a00a78.iframe.bundle.js.map