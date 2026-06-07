"use strict";(self.webpackChunk_gouravnema_design_system=self.webpackChunk_gouravnema_design_system||[]).push([["68"],{"./src/widgets/forms/form.stories.tsx"(e,t,o){o.r(t),o.d(t,{__namedExportsOrder:()=>u,LoginForm:()=>c,default:()=>m,WithCustomClass:()=>p,ContactForm:()=>x});var r=o("./node_modules/react/index.js"),a=o("./node_modules/styled-components/dist/styled-components.browser.esm.js");let s=a.Ay.form`
 display: flex; 
`,n=e=>{let{children:t,onSubmit:o,className:a}=e;return r.createElement(s,{className:"form "+a,onSubmit:e=>{e.preventDefault(),o(e)}},t)};n.__docgenInfo={description:"",methods:[],displayName:"Form",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onSubmit:{required:!0,tsType:{name:"ReactFormEventHandler",raw:"React.FormEventHandler<HTMLFormElement>",elements:[{name:"HTMLFormElement"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};var l=o("./src/components/textbox/textinput.tsx"),d=o("./src/components/buttons/buttons.tsx");let i=a.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  background-color: #f9f9f9;
  width: 300px;
`,m={title:"Widgets/Form",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{onSubmit:{action:"submitted"},className:{control:"text"},children:{control:"object"}}},c={render:e=>r.createElement(n,e,r.createElement(i,null,r.createElement(l.k,{label:"Username",placeholder:"Enter your username"}),r.createElement(l.k,{label:"Password",placeholder:"Enter your password",type:"password"}),r.createElement(d.jn,{type:"submit"},"Login"))),args:{onSubmit:e=>{console.log("Form submitted with:",Object.fromEntries(new FormData(e).entries()))}}},x={render:e=>r.createElement(n,e,r.createElement(i,null,r.createElement(l.k,{label:"Name",placeholder:"Your Name"}),r.createElement(l.k,{label:"Email",placeholder:"Your Email",type:"email"}),r.createElement(l.k,{label:"Message",placeholder:"Your Message",as:"textarea",rows:"4"}),r.createElement(d.jn,{type:"submit"},"Send Message"))),args:{onSubmit:e=>{console.log("Contact form submitted with:",Object.fromEntries(new FormData(e).entries()))}}},p={render:e=>r.createElement(n,e,r.createElement(i,null,r.createElement(l.k,{label:"Field 1"}),r.createElement(d.jn,{type:"submit"},"Submit"))),args:{className:"my-custom-form",onSubmit:e=>console.log("Custom form submitted")}},u=["LoginForm","ContactForm","WithCustomClass"]},"./src/components/buttons/buttons.tsx"(e,t,o){o.d(t,{MG:()=>y,jn:()=>p,pE:()=>x,tA:()=>u,uJ:()=>c,wx:()=>E,yi:()=>f,yp:()=>m});var r=o("./node_modules/react/index.js"),a=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),s=o("./src/theme/colors.ts"),n=o("./src/theme/radius.ts"),l=o("./src/theme/shadows.ts"),d=o("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),i=o("./node_modules/@fortawesome/react-fontawesome/dist/index.js");let m=a.Ay.button`
    width: calc(100% - 24px);
    padding: 12px;
    color: ${s.l.text_dark};
    background-color: ${s.l.base};
    border: none;
    border-radius: ${n.Z.medium};
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 10px;
    box-shadow: ${l.x.medium};
    
    &:hover {
        box-shadow: ${l.x.large};
        transform: translateY(-2px);
    }

    &:active {
        box-shadow: ${l.x.insetMedium};
        transform: translateY(0);
    }
`,c=(0,a.Ay)(m)`
    background-color: ${s.l.baseLight};
    color: ${s.l.red};
    box-shadow: ${l.x.light};
    
    &:hover {
        box-shadow: ${l.x.medium};
        color: ${s.l.dark_red};
    }

    &:active {
        box-shadow: ${l.x.insetLight};
    }
`,x=(0,a.Ay)(m)`
    background-color: ${s.l.baseLight};
    color: ${s.l.blue};
    box-shadow: ${l.x.light};
    
    &:hover {
        box-shadow: ${l.x.medium};
        color: #4A5FB0;
    }

    &:active {
        box-shadow: ${l.x.insetLight};
    }
`,p=(0,a.Ay)(m)`
    background-color: ${s.l.blue};
    color: white;
    
    &:hover {
        background-color: #4A5FB0;
        box-shadow: ${l.x.large};
    }

    &:active {
        box-shadow: ${l.x.insetMedium};
    }
`,u=(0,a.Ay)(m)`
    background-color: ${s.l.light_gray};
    color: ${s.l.text_dark};
    box-shadow: ${l.x.light};
    
    &:hover {
        background-color: ${s.l.baseLight};
        box-shadow: ${l.x.medium};
    }

    &:active {
        box-shadow: ${l.x.insetLight};
    }
`,b=(0,a.Ay)(m)`
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
`,g=(0,a.Ay)(b)`
     background: ${s.l.green};
     
     &:hover {
            background: #5FA35F;
            box-shadow: ${l.x.large};
     }

     &:active {
            box-shadow: ${l.x.insetDark};
     }
 `,h=(0,a.Ay)(b)`
    background: ${s.l.orange};
    
    &:hover {
        background: #C98A4F;
        box-shadow: ${l.x.large};
    }

    &:active {
        box-shadow: ${l.x.insetDark};
    }
`,w=(0,a.Ay)(b)`
    background: ${s.l.red};
    
    &:hover {
        background: #C84D5C;
        box-shadow: ${l.x.large};
    }

    &:active {
        box-shadow: ${l.x.insetDark};
    }
`,y=e=>r.createElement(w,e,r.createElement(i.gc,{icon:d.APi})),E=e=>r.createElement(h,e,r.createElement(i.gc,{icon:d.G1Y})),f=e=>r.createElement(g,e,r.createElement(i.gc,{icon:d.ijD}));y.__docgenInfo={description:"",methods:[],displayName:"TimerDoneButton"},E.__docgenInfo={description:"",methods:[],displayName:"TimerPauseButton"},f.__docgenInfo={description:"",methods:[],displayName:"TimerPlayButton"}},"./src/components/textbox/textinput.tsx"(e,t,o){o.d(t,{k:()=>i});var r=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),a=o("./node_modules/react/index.js"),s=o("./src/theme/colors.ts"),n=o("./src/theme/radius.ts"),l=o("./src/theme/shadows.ts");let d=r.Ay.div`
    margin-bottom: 20px;
    text-align: left;
    label {
        display: block;
        margin-bottom: 8px;
        font-size: 0.9em;
        color: ${s.l.text_light};
        font-weight: 500;
    }
    input {
        width: calc(100% - 24px);
        padding: 12px;
        border: none;
        border-radius: ${n.Z.medium};
        font-size: 1em;
        color: ${s.l.text_dark};
        background-color: ${s.l.base};
        box-shadow: ${l.x.insetLight};
        transition: all 0.3s ease;

        &:focus {
            outline: none;
            box-shadow: ${l.x.insetMedium};
        }

        &:hover:not(:focus) {
            box-shadow: ${l.x.insetMedium};
        }

        &::placeholder {
            color: ${s.l.medium_gray};
        }
    }
`,i=e=>{let{label:t,...o}=e;return a.createElement(d,null,a.createElement("label",null,t),a.createElement("input",o))};i.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{label:{required:!0,tsType:{name:"string"},description:""}}}},"./src/theme/colors.ts"(e,t,o){o.d(t,{l:()=>r});let r={base:"#E0E5EC",baseLight:"#F5F7FA",baseDark:"#A3B1C6",baseBorder:"#738196",blue:"#5F7FD4",green:"#5FB36D",dark_green:"#4A8A54",red:"#D85F6F",dark_red:"#B84C5A",orange:"#D99B5F",dark_orange:"#B87A47",text_dark:"#3A3F47",text:"#4A4F57",text_light:"#6B7280",background:"#E0E5EC",card_background:"#E0E5EC",light_gray:"#F5F7FA",medium_gray:"#C9D1DC",dark_gray:"#8FA3BD"}},"./src/theme/radius.ts"(e,t,o){o.d(t,{Z:()=>r});let r={small:"12px",medium:"20px",large:"30px",full:"50%"}},"./src/theme/shadows.ts"(e,t,o){o.d(t,{x:()=>r});let r={insetLight:"inset 2px 2px 5px rgba(255, 255, 255, 0.7), inset -2px -2px 5px rgba(0, 0, 0, 0.1)",insetMedium:"inset 3px 3px 7px rgba(255, 255, 255, 0.8), inset -3px -3px 7px rgba(0, 0, 0, 0.15)",insetDark:"inset 5px 5px 10px rgba(255, 255, 255, 0.9), inset -5px -5px 10px rgba(0, 0, 0, 0.2)",light:"3px 3px 6px rgba(0, 0, 0, 0.1), -3px -3px 6px rgba(255, 255, 255, 0.7)",medium:"5px 5px 10px rgba(0, 0, 0, 0.15), -5px -5px 10px rgba(255, 255, 255, 0.8)",medium2:"5px 5px 12px rgba(0, 0, 0, 0.12), -5px -5px 12px rgba(255, 255, 255, 0.75)",large:"8px 8px 16px rgba(0, 0, 0, 0.2), -8px -8px 16px rgba(255, 255, 255, 0.9)"}}}]);
//# sourceMappingURL=widgets-forms-form-stories.28239929.iframe.bundle.js.map