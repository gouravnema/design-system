"use strict";(self.webpackChunk_gouravnema_design_system=self.webpackChunk_gouravnema_design_system||[]).push([["370"],{"./src/widgets/form.stories.tsx"(e,t,r){r.r(t),r.d(t,{__namedExportsOrder:()=>b,LoginForm:()=>c,default:()=>i,WithCustomClass:()=>u,ContactForm:()=>p});var o=r("./node_modules/react/index.js"),s=r("./node_modules/styled-components/dist/styled-components.browser.esm.js");let n=s.Ay.form`
 display: flex; 
`,a=e=>{let{children:t,onSubmit:r,className:s}=e;return o.createElement(n,{className:"form "+s,onSubmit:e=>{e.preventDefault(),r(e)}},t)};a.__docgenInfo={description:"",methods:[],displayName:"Form",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onSubmit:{required:!0,tsType:{name:"ReactFormEventHandler",raw:"React.FormEventHandler<HTMLFormElement>",elements:[{name:"HTMLFormElement"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};var l=r("./src/components/textbox/textinput.tsx"),m=r("./src/components/buttons/buttons.tsx");let d=s.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  background-color: #f9f9f9;
  width: 300px;
`,i={title:"Widgets/Form",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{onSubmit:{action:"submitted"},className:{control:"text"},children:{control:"object"}}},c={render:e=>o.createElement(a,e,o.createElement(d,null,o.createElement(l.k,{label:"Username",placeholder:"Enter your username"}),o.createElement(l.k,{label:"Password",placeholder:"Enter your password",type:"password"}),o.createElement(m.jn,{type:"submit"},"Login"))),args:{onSubmit:e=>{console.log("Form submitted with:",Object.fromEntries(new FormData(e).entries()))}}},p={render:e=>o.createElement(a,e,o.createElement(d,null,o.createElement(l.k,{label:"Name",placeholder:"Your Name"}),o.createElement(l.k,{label:"Email",placeholder:"Your Email",type:"email"}),o.createElement(l.k,{label:"Message",placeholder:"Your Message",as:"textarea",rows:"4"}),o.createElement(m.jn,{type:"submit"},"Send Message"))),args:{onSubmit:e=>{console.log("Contact form submitted with:",Object.fromEntries(new FormData(e).entries()))}}},u={render:e=>o.createElement(a,e,o.createElement(d,null,o.createElement(l.k,{label:"Field 1"}),o.createElement(m.jn,{type:"submit"},"Submit"))),args:{className:"my-custom-form",onSubmit:e=>console.log("Custom form submitted")}},b=["LoginForm","ContactForm","WithCustomClass"]},"./src/components/buttons/buttons.tsx"(e,t,r){r.d(t,{jn:()=>l,tA:()=>m,uJ:()=>a,yp:()=>n});var o=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),s=r("./src/theme.constants.ts");let n=o.Ay.button`
    width: calc(100% - 24px);
    padding: 12px;
    color: white;
    border: none;
    border-radius: ${s.Zz.small};
    font-size: 1rem;
    font-weight: 200;
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.1s ease;
    margin-top: 10px;
`,a=(0,o.Ay)(n)`
    border: 1px solid red;
`;(0,o.Ay)(n)`
    border: 1px solid blue;
`;let l=(0,o.Ay)(n)`
    background-color: ${s.lm.blue};
    &:hover {
        background-color: #0056b3;
        transform: translateY(-1px);
        box-shadow: 0 2px 5px rgba(0, 122, 255, 0.3);
    }
`,m=(0,o.Ay)(n)`
    background-color: ${s.lm.light_gray};
    color: ${s.lm.text_dark};
    border: 1px solid ${s.lm.medium_gray};
    &:hover {
        background-color: ${s.lm.medium_gray};
        transform: translateY(-1px);
        box-shadow: 0 2px 5px rgba(0, 122, 255, 0.3);
    }
`},"./src/components/textbox/textinput.tsx"(e,t,r){r.d(t,{k:()=>l});var o=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),s=r("./node_modules/react/index.js"),n=r("./src/theme.constants.ts");let a=o.Ay.div`
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
        border: 1px solid ${n.lm.medium_gray};
        border-radius: ${n.Zz.small};
        font-size: 1em;
        color: ${n.lm.text_dark};
        background-color: rgba(255, 255, 255, 0.7);
        transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }
`,l=e=>{let{label:t,...r}=e;return s.createElement(a,null,s.createElement("label",null,t),s.createElement("input",r))};l.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{label:{required:!0,tsType:{name:"string"},description:""}}}},"./src/theme.constants.ts"(e,t,r){r.d(t,{Ne:()=>s,Zz:()=>n,lm:()=>o,xc:()=>a});let o={blue:"#007AFF",green:"#34C759",red:"#FF3B30",orange:"#FF9500",light_gray:"#EFEFF4",medium_gray:"#C7C7CC",dark_gray:"#8E8E93",text_dark:"#1C1C1E",text_light:"#636366",background:"#F2F2F7",card_background:"rgba(255, 255, 255, 0.9)"},s={font_family:"Arial",font_weight:"normal"},n={small:"8px",medium:"12px"},a={light:"0 1px 3px rgba(0, 0, 0, 0.08)",medium:"0 4px 10px rgba(0, 0, 0, 0.1)"}}}]);
//# sourceMappingURL=widgets-form-stories.4af56646.iframe.bundle.js.map