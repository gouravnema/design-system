"use strict";(self.webpackChunk_gouravnema_design_system=self.webpackChunk_gouravnema_design_system||[]).push([["68"],{"./src/widgets/forms/form.stories.tsx"(e,t,r){r.r(t),r.d(t,{__namedExportsOrder:()=>g,LoginForm:()=>i,default:()=>c,WithCustomClass:()=>p,ContactForm:()=>u});var o=r("./node_modules/react/index.js"),n=r("./node_modules/styled-components/dist/styled-components.browser.esm.js");let a=n.Ay.form`
 display: flex; 
`,s=e=>{let{children:t,onSubmit:r,className:n}=e;return o.createElement(a,{className:"form "+n,onSubmit:e=>{e.preventDefault(),r(e)}},t)};s.__docgenInfo={description:"",methods:[],displayName:"Form",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onSubmit:{required:!0,tsType:{name:"ReactFormEventHandler",raw:"React.FormEventHandler<HTMLFormElement>",elements:[{name:"HTMLFormElement"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};var l=r("./src/components/textbox/textinput.tsx"),d=r("./src/components/buttons/buttons.tsx");let m=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  background-color: #f9f9f9;
  width: 300px;
`,c={title:"Widgets/Form",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{onSubmit:{action:"submitted"},className:{control:"text"},children:{control:"object"}}},i={render:e=>o.createElement(s,e,o.createElement(m,null,o.createElement(l.k,{label:"Username",placeholder:"Enter your username"}),o.createElement(l.k,{label:"Password",placeholder:"Enter your password",type:"password"}),o.createElement(d.jn,{type:"submit"},"Login"))),args:{onSubmit:e=>{console.log("Form submitted with:",Object.fromEntries(new FormData(e).entries()))}}},u={render:e=>o.createElement(s,e,o.createElement(m,null,o.createElement(l.k,{label:"Name",placeholder:"Your Name"}),o.createElement(l.k,{label:"Email",placeholder:"Your Email",type:"email"}),o.createElement(l.k,{label:"Message",placeholder:"Your Message",as:"textarea",rows:"4"}),o.createElement(d.jn,{type:"submit"},"Send Message"))),args:{onSubmit:e=>{console.log("Contact form submitted with:",Object.fromEntries(new FormData(e).entries()))}}},p={render:e=>o.createElement(s,e,o.createElement(m,null,o.createElement(l.k,{label:"Field 1"}),o.createElement(d.jn,{type:"submit"},"Submit"))),args:{className:"my-custom-form",onSubmit:e=>console.log("Custom form submitted")}},g=["LoginForm","ContactForm","WithCustomClass"]},"./src/components/buttons/buttons.tsx"(e,t,r){r.d(t,{tA:()=>u,pE:()=>c,MG:()=>y,wx:()=>h,jn:()=>i,yi:()=>_,yp:()=>d,uJ:()=>m});var o=r("./node_modules/react/index.js"),n=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),a=r("./src/theme/colors.ts"),s=r("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),l=r("./node_modules/@fortawesome/react-fontawesome/dist/index.js");let d=n.Ay.button`
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
`,m=(0,n.Ay)(d)`
    border: 1px solid red;
    background: white;
    color:red;
`,c=(0,n.Ay)(d)`
    border: 1px solid blue;
    background: white;
    color:blue;
`,i=(0,n.Ay)(d)`
    background-color: ${a.l.blue};
    &:hover {
        background-color: #0056b3;
        transform: translateY(-1px);
        box-shadow: 0 2px 5px rgba(0, 122, 255, 0.3);
    }
`,u=(0,n.Ay)(d)`
    background-color: ${a.l.light_gray};
    color: ${a.l.text_dark};
    border: 1px solid ${a.l.medium_gray};
    &:hover {
        background-color: ${a.l.medium_gray};
        transform: translateY(-1px);
        box-shadow: 0 2px 5px rgba(0, 122, 255, 0.3);
    }
`,p=(0,n.Ay)(d)`
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
`,g=(0,n.Ay)(p)`
     background: ${a.l.green};
     &:hover {
            background: ${a.l.dark_green};
     }
 `,b=(0,n.Ay)(p)`
    background: ${a.l.orange};
    &:hover {
        background: ${a.l.dark_orange};
    }
`,x=(0,n.Ay)(p)`
    background: ${a.l.red};
    &:hover {
        background: ${a.l.dark_red};
    }
`,y=e=>o.createElement(x,e,o.createElement(l.gc,{icon:s.APi})),h=e=>o.createElement(b,e,o.createElement(l.gc,{icon:s.G1Y})),_=e=>o.createElement(g,e,o.createElement(l.gc,{icon:s.ijD}));y.__docgenInfo={description:"",methods:[],displayName:"TimerDoneButton"},h.__docgenInfo={description:"",methods:[],displayName:"TimerPauseButton"},_.__docgenInfo={description:"",methods:[],displayName:"TimerPlayButton"}},"./src/components/textbox/textinput.tsx"(e,t,r){r.d(t,{k:()=>l});var o=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),n=r("./node_modules/react/index.js"),a=r("./src/theme.constants.ts");let s=o.Ay.div`
    margin-bottom: 20px;
    text-align: left;
    label {
        display: block;
        margin-bottom: 8px;
        font-size: 0.9em;
        color: ${a.lm.text_light};
        font-weight: 500;
    }
    input {
        width: calc(100% - 24px);
        padding: 12px;
        border: 1px solid ${a.lm.medium_gray};
        border-radius: ${a.Zz.small};
        font-size: 1em;
        color: ${a.lm.text_dark};
        background-color: rgba(255, 255, 255, 0.7);
        transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }
`,l=e=>{let{label:t,...r}=e;return n.createElement(s,null,n.createElement("label",null,t),n.createElement("input",r))};l.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{label:{required:!0,tsType:{name:"string"},description:""}}}},"./src/theme.constants.ts"(e,t,r){r.d(t,{Ne:()=>n,Zz:()=>a,lm:()=>o,xc:()=>s});let o={blue:"#007AFF",green:"#34C759",red:"#FF3B30",orange:"#FF9500",light_gray:"#EFEFF4",medium_gray:"#C7C7CC",dark_gray:"#8E8E93",text_dark:"#1C1C1E",text_light:"#636366",background:"#F2F2F7",card_background:"rgba(255, 255, 255, 0.9)"},n={font_family:"Arial",font_weight:"normal"},a={small:"8px",medium:"12px"},s={light:"0 1px 3px rgba(0, 0, 0, 0.08)",medium:"0 4px 10px rgba(0, 0, 0, 0.1)"}},"./src/theme/colors.ts"(e,t,r){r.d(t,{l:()=>o});let o={blue:"#007AFF",green:"#34C759",dark_green:"#049729",red:"#FF3B30",dark_red:"#CF0B00",orange:"#FF9500",dark_orange:"#CF6500",light_gray:"#EFEFF4",medium_gray:"#C7C7CC",dark_gray:"#8E8E93",text_dark:"#1C1C1E",text_light:"#636366",background:"#F2F2F7",card_background:"rgba(255, 255, 255, 0.9)"}}}]);
//# sourceMappingURL=widgets-forms-form-stories.56e17b0f.iframe.bundle.js.map