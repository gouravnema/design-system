"use strict";(self.webpackChunk_gouravnema_design_system=self.webpackChunk_gouravnema_design_system||[]).push([["68"],{"./src/widgets/forms/form.stories.tsx"(e,t,r){r.r(t),r.d(t,{__namedExportsOrder:()=>g,LoginForm:()=>x,default:()=>m,WithCustomClass:()=>p,ContactForm:()=>c});var o=r("./node_modules/react/index.js"),a=r("./node_modules/styled-components/dist/styled-components.browser.esm.js");let s=a.Ay.form`
 display: flex; 
`,n=e=>{let{children:t,onSubmit:r,className:a}=e;return o.createElement(s,{className:"form "+a,onSubmit:e=>{e.preventDefault(),r(e)}},t)};n.__docgenInfo={description:"",methods:[],displayName:"Form",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onSubmit:{required:!0,tsType:{name:"ReactFormEventHandler",raw:"React.FormEventHandler<HTMLFormElement>",elements:[{name:"HTMLFormElement"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};var l=r("./src/components/textbox/textinput.tsx"),i=r("./src/components/buttons/buttons.tsx");let d=a.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  background-color: #f9f9f9;
  width: 300px;
`,m={title:"Widgets/Form",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{onSubmit:{action:"submitted"},className:{control:"text"},children:{control:"object"}}},x={render:e=>o.createElement(n,e,o.createElement(d,null,o.createElement(l.k,{label:"Username",placeholder:"Enter your username"}),o.createElement(l.k,{label:"Password",placeholder:"Enter your password",type:"password"}),o.createElement(i.jn,{type:"submit"},"Login"))),args:{onSubmit:e=>{console.log("Form submitted with:",Object.fromEntries(new FormData(e).entries()))}}},c={render:e=>o.createElement(n,e,o.createElement(d,null,o.createElement(l.k,{label:"Name",placeholder:"Your Name"}),o.createElement(l.k,{label:"Email",placeholder:"Your Email",type:"email"}),o.createElement(l.k,{label:"Message",placeholder:"Your Message",as:"textarea",rows:"4"}),o.createElement(i.jn,{type:"submit"},"Send Message"))),args:{onSubmit:e=>{console.log("Contact form submitted with:",Object.fromEntries(new FormData(e).entries()))}}},p={render:e=>o.createElement(n,e,o.createElement(d,null,o.createElement(l.k,{label:"Field 1"}),o.createElement(i.jn,{type:"submit"},"Submit"))),args:{className:"my-custom-form",onSubmit:e=>console.log("Custom form submitted")}},g=["LoginForm","ContactForm","WithCustomClass"]},"./src/components/buttons/buttons.tsx"(e,t,r){r.d(t,{tA:()=>p,pE:()=>x,MG:()=>y,wx:()=>E,jn:()=>c,yi:()=>w,yp:()=>d,uJ:()=>m});var o=r("./node_modules/react/index.js"),a=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),s=r("./src/theme/colors.ts"),n=r("./src/theme/shadows.ts"),l=r("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),i=r("./node_modules/@fortawesome/react-fontawesome/dist/index.js");let d=a.Ay.button`
    width: calc(100% - 24px);
    padding: 12px;
    color: ${s.l.text_dark};
    background-color: ${s.l.base};
    border: none;
    border-radius: ${"20px"};
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 10px;
    box-shadow: ${n.x.medium};
    
    &:hover {
        box-shadow: ${n.x.large};
        transform: translateY(-2px);
    }

    &:active {
        box-shadow: ${n.x.insetMedium};
        transform: translateY(0);
    }
`,m=(0,a.Ay)(d)`
    background-color: ${s.l.baseLight};
    color: ${s.l.red};
    box-shadow: ${n.x.light};
    
    &:hover {
        box-shadow: ${n.x.medium};
        color: ${s.l.dark_red};
    }

    &:active {
        box-shadow: ${n.x.insetLight};
    }
`,x=(0,a.Ay)(d)`
    background-color: ${s.l.baseLight};
    color: ${s.l.blue};
    box-shadow: ${n.x.light};
    
    &:hover {
        box-shadow: ${n.x.medium};
        color: #4A5FB0;
    }

    &:active {
        box-shadow: ${n.x.insetLight};
    }
`,c=(0,a.Ay)(d)`
    background-color: ${s.l.blue};
    color: white;
    
    &:hover {
        background-color: #4A5FB0;
        box-shadow: ${n.x.large};
    }

    &:active {
        box-shadow: ${n.x.insetMedium};
    }
`,p=(0,a.Ay)(d)`
    background-color: ${s.l.light_gray};
    color: ${s.l.text_dark};
    box-shadow: ${n.x.light};
    
    &:hover {
        background-color: ${s.l.baseLight};
        box-shadow: ${n.x.medium};
    }

    &:active {
        box-shadow: ${n.x.insetLight};
    }
`,g=(0,a.Ay)(d)`
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
`,b=(0,a.Ay)(g)`
     background: ${s.l.green};
     
     &:hover {
            background: #5FA35F;
            box-shadow: ${n.x.large};
     }

     &:active {
            box-shadow: ${n.x.insetDark};
     }
 `,u=(0,a.Ay)(g)`
    background: ${s.l.orange};
    
    &:hover {
        background: #C98A4F;
        box-shadow: ${n.x.large};
    }

    &:active {
        box-shadow: ${n.x.insetDark};
    }
`,h=(0,a.Ay)(g)`
    background: ${s.l.red};
    
    &:hover {
        background: #C84D5C;
        box-shadow: ${n.x.large};
    }

    &:active {
        box-shadow: ${n.x.insetDark};
    }
`,y=e=>o.createElement(h,e,o.createElement(i.gc,{icon:l.APi})),E=e=>o.createElement(u,e,o.createElement(i.gc,{icon:l.G1Y})),w=e=>o.createElement(b,e,o.createElement(i.gc,{icon:l.ijD}));y.__docgenInfo={description:"",methods:[],displayName:"TimerDoneButton"},E.__docgenInfo={description:"",methods:[],displayName:"TimerPauseButton"},w.__docgenInfo={description:"",methods:[],displayName:"TimerPlayButton"}},"./src/components/textbox/textinput.tsx"(e,t,r){r.d(t,{k:()=>l});var o=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),a=r("./node_modules/react/index.js"),s=r("./src/theme.constants.ts");let n=o.Ay.div`
    margin-bottom: 20px;
    text-align: left;
    label {
        display: block;
        margin-bottom: 8px;
        font-size: 0.9em;
        color: ${s.lm.text_light};
        font-weight: 500;
    }
    input {
        width: calc(100% - 24px);
        padding: 12px;
        border: none;
        border-radius: ${s.Zz.medium};
        font-size: 1em;
        color: ${s.lm.text_dark};
        background-color: ${s.lm.base};
        box-shadow: ${s.xc.insetLight};
        transition: all 0.3s ease;

        &:focus {
            outline: none;
            box-shadow: ${s.xc.insetMedium};
        }

        &:hover:not(:focus) {
            box-shadow: ${s.xc.insetMedium};
        }

        &::placeholder {
            color: ${s.lm.medium_gray};
        }
    }
`,l=e=>{let{label:t,...r}=e;return a.createElement(n,null,a.createElement("label",null,t),a.createElement("input",r))};l.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{label:{required:!0,tsType:{name:"string"},description:""}}}},"./src/theme.constants.ts"(e,t,r){r.d(t,{Ne:()=>a,Zz:()=>s,lm:()=>o,xc:()=>n});let o={base:"#E0E5EC",baseLight:"#F5F7FA",baseDark:"#A3B1C6",blue:"#5F7FD4",green:"#5FB36D",dark_green:"#4A8A54",red:"#D85F6F",dark_red:"#B84C5A",orange:"#D99B5F",dark_orange:"#B87A47",text_dark:"#3A3F47",text_light:"#6B7280",background:"#E0E5EC",card_background:"#E0E5EC",light_gray:"#F5F7FA",medium_gray:"#C9D1DC",dark_gray:"#8FA3BD"},a={font_family:"Arial",font_weight:"normal"},s={small:"12px",medium:"20px",large:"30px",full:"50%"},n={insetLight:"inset 2px 2px 5px rgba(255, 255, 255, 0.7), inset -2px -2px 5px rgba(0, 0, 0, 0.1)",insetMedium:"inset 3px 3px 7px rgba(255, 255, 255, 0.8), inset -3px -3px 7px rgba(0, 0, 0, 0.15)",insetDark:"inset 5px 5px 10px rgba(255, 255, 255, 0.9), inset -5px -5px 10px rgba(0, 0, 0, 0.2)",light:"3px 3px 6px rgba(0, 0, 0, 0.1), -3px -3px 6px rgba(255, 255, 255, 0.7)",medium:"5px 5px 10px rgba(0, 0, 0, 0.15), -5px -5px 10px rgba(255, 255, 255, 0.8)",medium2:"5px 5px 12px rgba(0, 0, 0, 0.12), -5px -5px 12px rgba(255, 255, 255, 0.75)",large:"8px 8px 16px rgba(0, 0, 0, 0.2), -8px -8px 16px rgba(255, 255, 255, 0.9)"}},"./src/theme/colors.ts"(e,t,r){r.d(t,{l:()=>o});let o={base:"#E0E5EC",baseLight:"#F5F7FA",baseDark:"#A3B1C6",blue:"#5F7FD4",green:"#5FB36D",dark_green:"#4A8A54",red:"#D85F6F",dark_red:"#B84C5A",orange:"#D99B5F",dark_orange:"#B87A47",text_dark:"#3A3F47",text_light:"#6B7280",background:"#E0E5EC",card_background:"#E0E5EC",light_gray:"#F5F7FA",medium_gray:"#C9D1DC",dark_gray:"#8FA3BD"}},"./src/theme/shadows.ts"(e,t,r){r.d(t,{x:()=>o});let o={insetLight:"inset 2px 2px 5px rgba(255, 255, 255, 0.7), inset -2px -2px 5px rgba(0, 0, 0, 0.1)",insetMedium:"inset 3px 3px 7px rgba(255, 255, 255, 0.8), inset -3px -3px 7px rgba(0, 0, 0, 0.15)",insetDark:"inset 5px 5px 10px rgba(255, 255, 255, 0.9), inset -5px -5px 10px rgba(0, 0, 0, 0.2)",light:"3px 3px 6px rgba(0, 0, 0, 0.1), -3px -3px 6px rgba(255, 255, 255, 0.7)",medium:"5px 5px 10px rgba(0, 0, 0, 0.15), -5px -5px 10px rgba(255, 255, 255, 0.8)",medium2:"5px 5px 12px rgba(0, 0, 0, 0.12), -5px -5px 12px rgba(255, 255, 255, 0.75)",large:"8px 8px 16px rgba(0, 0, 0, 0.2), -8px -8px 16px rgba(255, 255, 255, 0.9)"}}}]);
//# sourceMappingURL=widgets-forms-form-stories.475f0e42.iframe.bundle.js.map