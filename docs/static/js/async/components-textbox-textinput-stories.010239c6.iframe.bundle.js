"use strict";(self.webpackChunk_gouravnema_design_system=self.webpackChunk_gouravnema_design_system||[]).push([["265"],{"./src/components/textbox/textinput.stories.tsx"(e,t,a){a.r(t),a.d(t,{Default:()=>r,Disabled:()=>p,Email:()=>o,Password:()=>n,ReadOnly:()=>d,WithValue:()=>s,__namedExportsOrder:()=>i,default:()=>l}),a("./node_modules/react/index.js");let l={title:"Components/TextInput",component:a("./src/components/textbox/textinput.tsx").k,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},placeholder:{control:"text"},type:{control:{type:"select"},options:["text","password","email","number"]},value:{control:"text"},onChange:{action:"changed"},disabled:{control:"boolean"},readOnly:{control:"boolean"}}},r={args:{label:"Username",placeholder:"Enter your username",type:"text"}},n={args:{label:"Password",placeholder:"Enter your password",type:"password"}},o={args:{label:"Email",placeholder:"Enter your email",type:"email"}},s={args:{label:"Pre-filled Value",value:"example@email.com",type:"email"}},p={args:{label:"Disabled Input",placeholder:"This input is disabled",disabled:!0}},d={args:{label:"Read-Only Input",value:"This value cannot be changed",readOnly:!0}},i=["Default","Password","Email","WithValue","Disabled","ReadOnly"]},"./src/components/textbox/textinput.tsx"(e,t,a){a.d(t,{k:()=>s});var l=a("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=a("./node_modules/react/index.js"),n=a("./src/theme.constants.ts");let o=l.Ay.div`
    margin-bottom: 20px;
    text-align: left;
    label {
        display: block;
        margin-bottom: 8px;
        font-size: 0.9em;
        color: ${n.lm.text_light};
        font-weight: 500;
    }
    input {
        width: calc(100% - 24px);
        padding: 12px;
        border: none;
        border-radius: ${n.Zz.medium};
        font-size: 1em;
        color: ${n.lm.text_dark};
        background-color: ${n.lm.base};
        box-shadow: ${n.xc.insetLight};
        transition: all 0.3s ease;

        &:focus {
            outline: none;
            box-shadow: ${n.xc.insetMedium};
        }

        &:hover:not(:focus) {
            box-shadow: ${n.xc.insetMedium};
        }

        &::placeholder {
            color: ${n.lm.medium_gray};
        }
    }
`,s=e=>{let{label:t,...a}=e;return r.createElement(o,null,r.createElement("label",null,t),r.createElement("input",a))};s.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{label:{required:!0,tsType:{name:"string"},description:""}}}},"./src/theme.constants.ts"(e,t,a){a.d(t,{Ne:()=>r,Zz:()=>n,lm:()=>l,xc:()=>o});let l={base:"#E0E5EC",baseLight:"#F5F7FA",baseDark:"#A3B1C6",blue:"#5F7FD4",green:"#5FB36D",dark_green:"#4A8A54",red:"#D85F6F",dark_red:"#B84C5A",orange:"#D99B5F",dark_orange:"#B87A47",text_dark:"#3A3F47",text_light:"#6B7280",background:"#E0E5EC",card_background:"#E0E5EC",light_gray:"#F5F7FA",medium_gray:"#C9D1DC",dark_gray:"#8FA3BD"},r={font_family:"Arial",font_weight:"normal"},n={small:"12px",medium:"20px",large:"30px",full:"50%"},o={insetLight:"inset 2px 2px 5px rgba(255, 255, 255, 0.7), inset -2px -2px 5px rgba(0, 0, 0, 0.1)",insetMedium:"inset 3px 3px 7px rgba(255, 255, 255, 0.8), inset -3px -3px 7px rgba(0, 0, 0, 0.15)",insetDark:"inset 5px 5px 10px rgba(255, 255, 255, 0.9), inset -5px -5px 10px rgba(0, 0, 0, 0.2)",light:"3px 3px 6px rgba(0, 0, 0, 0.1), -3px -3px 6px rgba(255, 255, 255, 0.7)",medium:"5px 5px 10px rgba(0, 0, 0, 0.15), -5px -5px 10px rgba(255, 255, 255, 0.8)",medium2:"5px 5px 12px rgba(0, 0, 0, 0.12), -5px -5px 12px rgba(255, 255, 255, 0.75)",large:"8px 8px 16px rgba(0, 0, 0, 0.2), -8px -8px 16px rgba(255, 255, 255, 0.9)"}}}]);
//# sourceMappingURL=components-textbox-textinput-stories.010239c6.iframe.bundle.js.map