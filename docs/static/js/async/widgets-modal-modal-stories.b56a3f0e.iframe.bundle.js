"use strict";(self.webpackChunk_gouravnema_design_system=self.webpackChunk_gouravnema_design_system||[]).push([["907"],{"./src/widgets/modal/modal.stories.tsx"(e,t,o){o.r(t),o.d(t,{Default:()=>c,LargeContent:()=>p,WithTitleAndText:()=>x,__namedExportsOrder:()=>m,default:()=>i});var a=o("./node_modules/react/index.js"),r=o("./src/widgets/modal/modal.tsx"),n=o("./src/components/buttons/buttons.tsx"),s=o("./node_modules/styled-components/dist/styled-components.browser.esm.js");let d=s.Ay.div`
  padding: 20px;
  text-align: center;
  color: #333;
`,i={title:"Widgets/Modal",component:r.a,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{shouldShow:{control:"boolean"},onClose:{action:"closed"},children:{control:"object"}}},l=e=>{let[t,o]=(0,a.useState)(e.shouldShow);return a.createElement("div",{style:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#f0f0f0"}},a.createElement(n.jn,{onClick:()=>o(!0)},"Open Modal"),a.createElement(r.a,{...e,shouldShow:t,onClose:()=>{o(!1),e.onClose()}},e.children))},c=l.bind({});c.args={shouldShow:!1,children:a.createElement(d,null,"This is the default modal content.")};let x=l.bind({});x.args={shouldShow:!1,children:a.createElement(d,null,a.createElement("h2",null,"Modal Title"),a.createElement("p",null,"This modal contains a title and some descriptive text."),a.createElement(n.jn,{onClick:()=>alert("Action performed!")},"Perform Action"))};let p=l.bind({});p.args={shouldShow:!1,children:a.createElement(d,{style:{maxWidth:"600px"}},a.createElement("h2",null,"Longer Modal Content"),a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),a.createElement("p",null,"Another paragraph of content to demonstrate how the modal handles more text."))};let m=["Default","WithTitleAndText","LargeContent"]},"./src/components/buttons/buttons.tsx"(e,t,o){o.d(t,{tA:()=>m,pE:()=>x,MG:()=>w,wx:()=>f,jn:()=>p,yi:()=>y,yp:()=>l,uJ:()=>c});var a=o("./node_modules/react/index.js"),r=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),n=o("./src/theme/colors.ts"),s=o("./src/theme/shadows.ts"),d=o("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),i=o("./node_modules/@fortawesome/react-fontawesome/dist/index.js");let l=r.Ay.button`
    width: calc(100% - 24px);
    padding: 12px;
    color: ${n.l.text_dark};
    background-color: ${n.l.base};
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
`,c=(0,r.Ay)(l)`
    background-color: ${n.l.baseLight};
    color: ${n.l.red};
    box-shadow: ${s.x.light};
    
    &:hover {
        box-shadow: ${s.x.medium};
        color: ${n.l.dark_red};
    }

    &:active {
        box-shadow: ${s.x.insetLight};
    }
`,x=(0,r.Ay)(l)`
    background-color: ${n.l.baseLight};
    color: ${n.l.blue};
    box-shadow: ${s.x.light};
    
    &:hover {
        box-shadow: ${s.x.medium};
        color: #4A5FB0;
    }

    &:active {
        box-shadow: ${s.x.insetLight};
    }
`,p=(0,r.Ay)(l)`
    background-color: ${n.l.blue};
    color: white;
    
    &:hover {
        background-color: #4A5FB0;
        box-shadow: ${s.x.large};
    }

    &:active {
        box-shadow: ${s.x.insetMedium};
    }
`,m=(0,r.Ay)(l)`
    background-color: ${n.l.light_gray};
    color: ${n.l.text_dark};
    box-shadow: ${s.x.light};
    
    &:hover {
        background-color: ${n.l.baseLight};
        box-shadow: ${s.x.medium};
    }

    &:active {
        box-shadow: ${s.x.insetLight};
    }
`,g=(0,r.Ay)(l)`
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
`,u=(0,r.Ay)(g)`
     background: ${n.l.green};
     
     &:hover {
            background: #5FA35F;
            box-shadow: ${s.x.large};
     }

     &:active {
            box-shadow: ${s.x.insetDark};
     }
 `,h=(0,r.Ay)(g)`
    background: ${n.l.orange};
    
    &:hover {
        background: #C98A4F;
        box-shadow: ${s.x.large};
    }

    &:active {
        box-shadow: ${s.x.insetDark};
    }
`,b=(0,r.Ay)(g)`
    background: ${n.l.red};
    
    &:hover {
        background: #C84D5C;
        box-shadow: ${s.x.large};
    }

    &:active {
        box-shadow: ${s.x.insetDark};
    }
`,w=e=>a.createElement(b,e,a.createElement(i.gc,{icon:d.APi})),f=e=>a.createElement(h,e,a.createElement(i.gc,{icon:d.G1Y})),y=e=>a.createElement(u,e,a.createElement(i.gc,{icon:d.ijD}));w.__docgenInfo={description:"",methods:[],displayName:"TimerDoneButton"},f.__docgenInfo={description:"",methods:[],displayName:"TimerPauseButton"},y.__docgenInfo={description:"",methods:[],displayName:"TimerPlayButton"}},"./src/components/cards/card.tsx"(e,t,o){o.d(t,{Z:()=>n});var a=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=o("./src/theme.constants.ts");let n=a.Ay.div`
    background-color: ${r.lm.base};
    padding: 20px;
    border-radius: ${r.Zz.medium};
    box-shadow: ${r.xc.medium};
    border: none;
    width: 100%;
    text-align: center;
    box-sizing: border-box;
    transition: all 0.3s ease;

    &:hover {
        box-shadow: ${r.xc.large};
        transform: translateY(-2px);
    }
`},"./src/theme.constants.ts"(e,t,o){o.d(t,{Ne:()=>r,Zz:()=>n,lm:()=>a,xc:()=>s});let a={base:"#E0E5EC",baseLight:"#F5F7FA",baseDark:"#A3B1C6",blue:"#5F7FD4",green:"#5FB36D",dark_green:"#4A8A54",red:"#D85F6F",dark_red:"#B84C5A",orange:"#D99B5F",dark_orange:"#B87A47",text_dark:"#3A3F47",text_light:"#6B7280",background:"#E0E5EC",card_background:"#E0E5EC",light_gray:"#F5F7FA",medium_gray:"#C9D1DC",dark_gray:"#8FA3BD"},r={font_family:"Arial",font_weight:"normal"},n={small:"12px",medium:"20px",large:"30px",full:"50%"},s={insetLight:"inset 2px 2px 5px rgba(255, 255, 255, 0.7), inset -2px -2px 5px rgba(0, 0, 0, 0.1)",insetMedium:"inset 3px 3px 7px rgba(255, 255, 255, 0.8), inset -3px -3px 7px rgba(0, 0, 0, 0.15)",insetDark:"inset 5px 5px 10px rgba(255, 255, 255, 0.9), inset -5px -5px 10px rgba(0, 0, 0, 0.2)",light:"3px 3px 6px rgba(0, 0, 0, 0.1), -3px -3px 6px rgba(255, 255, 255, 0.7)",medium:"5px 5px 10px rgba(0, 0, 0, 0.15), -5px -5px 10px rgba(255, 255, 255, 0.8)",medium2:"5px 5px 12px rgba(0, 0, 0, 0.12), -5px -5px 12px rgba(255, 255, 255, 0.75)",large:"8px 8px 16px rgba(0, 0, 0, 0.2), -8px -8px 16px rgba(255, 255, 255, 0.9)"}},"./src/theme/colors.ts"(e,t,o){o.d(t,{l:()=>a});let a={base:"#E0E5EC",baseLight:"#F5F7FA",baseDark:"#A3B1C6",blue:"#5F7FD4",green:"#5FB36D",dark_green:"#4A8A54",red:"#D85F6F",dark_red:"#B84C5A",orange:"#D99B5F",dark_orange:"#B87A47",text_dark:"#3A3F47",text_light:"#6B7280",background:"#E0E5EC",card_background:"#E0E5EC",light_gray:"#F5F7FA",medium_gray:"#C9D1DC",dark_gray:"#8FA3BD"}},"./src/theme/shadows.ts"(e,t,o){o.d(t,{x:()=>a});let a={insetLight:"inset 2px 2px 5px rgba(255, 255, 255, 0.7), inset -2px -2px 5px rgba(0, 0, 0, 0.1)",insetMedium:"inset 3px 3px 7px rgba(255, 255, 255, 0.8), inset -3px -3px 7px rgba(0, 0, 0, 0.15)",insetDark:"inset 5px 5px 10px rgba(255, 255, 255, 0.9), inset -5px -5px 10px rgba(0, 0, 0, 0.2)",light:"3px 3px 6px rgba(0, 0, 0, 0.1), -3px -3px 6px rgba(255, 255, 255, 0.7)",medium:"5px 5px 10px rgba(0, 0, 0, 0.15), -5px -5px 10px rgba(255, 255, 255, 0.8)",medium2:"5px 5px 12px rgba(0, 0, 0, 0.12), -5px -5px 12px rgba(255, 255, 255, 0.75)",large:"8px 8px 16px rgba(0, 0, 0, 0.2), -8px -8px 16px rgba(255, 255, 255, 0.9)"}},"./src/widgets/modal/modal.tsx"(e,t,o){o.d(t,{a:()=>c});var a=o("./node_modules/react/index.js"),r=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),n=o("./src/components/cards/card.tsx"),s=o("./node_modules/@fortawesome/react-fontawesome/dist/index.js"),d=o("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),i=o("./src/theme.constants.ts");let l=r.Ay.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.2);
    top: 0;
    left: 0;
    z-index: 40;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(2px);
    .modal-card{
        opacity: 1;
        max-width: 50vw;
        height: max-content;
        display: flex;
        flex-direction: column;
        .close{
            cursor: pointer;
            width: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 9px;
            border-radius: 50%;
            align-self: flex-end;
            background: ${i.lm.base};
            color: ${i.lm.text_dark};
            transition: all 0.3s ease;
            &:hover{
                box-shadow: ${i.xc.medium};
            }
            &:active {
                box-shadow: ${i.xc.insetLight};
            }
        }
        .content{
            display: flex;
            flex-direction: column;
        }
    }
`,c=e=>{let{children:t,shouldShow:o,onClose:r}=e;return o?a.createElement(l,null,a.createElement(n.Z,{className:"modal-card"},a.createElement("div",{className:"close",role:"button",onClick:r},a.createElement(s.gc,{icon:d.yYc})),a.createElement("div",{className:"content"},t))):null};c.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},shouldShow:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}}}]);
//# sourceMappingURL=widgets-modal-modal-stories.b56a3f0e.iframe.bundle.js.map