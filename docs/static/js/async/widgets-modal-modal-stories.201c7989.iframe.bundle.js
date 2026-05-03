"use strict";(self.webpackChunk_gouravnema_design_system=self.webpackChunk_gouravnema_design_system||[]).push([["907"],{"./src/widgets/modal/modal.stories.tsx"(e,t,o){o.r(t),o.d(t,{Default:()=>c,LargeContent:()=>u,WithTitleAndText:()=>m,__namedExportsOrder:()=>p,default:()=>l});var r=o("./node_modules/react/index.js"),n=o("./src/widgets/modal/modal.tsx"),a=o("./src/components/buttons/buttons.tsx"),d=o("./node_modules/styled-components/dist/styled-components.browser.esm.js");let s=d.Ay.div`
  padding: 20px;
  text-align: center;
  color: #333;
`,l={title:"Widgets/Modal",component:n.a,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{shouldShow:{control:"boolean"},onClose:{action:"closed"},children:{control:"object"}}},i=e=>{let[t,o]=(0,r.useState)(e.shouldShow);return r.createElement("div",{style:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#f0f0f0"}},r.createElement(a.jn,{onClick:()=>o(!0)},"Open Modal"),r.createElement(n.a,{...e,shouldShow:t,onClose:()=>{o(!1),e.onClose()}},e.children))},c=i.bind({});c.args={shouldShow:!1,children:r.createElement(s,null,"This is the default modal content.")};let m=i.bind({});m.args={shouldShow:!1,children:r.createElement(s,null,r.createElement("h2",null,"Modal Title"),r.createElement("p",null,"This modal contains a title and some descriptive text."),r.createElement(a.jn,{onClick:()=>alert("Action performed!")},"Perform Action"))};let u=i.bind({});u.args={shouldShow:!1,children:r.createElement(s,{style:{maxWidth:"600px"}},r.createElement("h2",null,"Longer Modal Content"),r.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),r.createElement("p",null,"Another paragraph of content to demonstrate how the modal handles more text."))};let p=["Default","WithTitleAndText","LargeContent"]},"./src/components/buttons/buttons.tsx"(e,t,o){o.d(t,{tA:()=>u,pE:()=>c,MG:()=>b,wx:()=>y,jn:()=>m,yi:()=>f,yp:()=>l,uJ:()=>i});var r=o("./node_modules/react/index.js"),n=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),a=o("./src/theme/colors.ts"),d=o("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),s=o("./node_modules/@fortawesome/react-fontawesome/dist/index.js");let l=n.Ay.button`
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
`,i=(0,n.Ay)(l)`
    border: 1px solid red;
    background: white;
    color:red;
`,c=(0,n.Ay)(l)`
    border: 1px solid blue;
    background: white;
    color:blue;
`,m=(0,n.Ay)(l)`
    background-color: ${a.l.blue};
    &:hover {
        background-color: #0056b3;
        transform: translateY(-1px);
        box-shadow: 0 2px 5px rgba(0, 122, 255, 0.3);
    }
`,u=(0,n.Ay)(l)`
    background-color: ${a.l.light_gray};
    color: ${a.l.text_dark};
    border: 1px solid ${a.l.medium_gray};
    &:hover {
        background-color: ${a.l.medium_gray};
        transform: translateY(-1px);
        box-shadow: 0 2px 5px rgba(0, 122, 255, 0.3);
    }
`,p=(0,n.Ay)(l)`
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
 `,x=(0,n.Ay)(p)`
    background: ${a.l.orange};
    &:hover {
        background: ${a.l.dark_orange};
    }
`,h=(0,n.Ay)(p)`
    background: ${a.l.red};
    &:hover {
        background: ${a.l.dark_red};
    }
`,b=e=>r.createElement(h,e,r.createElement(s.gc,{icon:d.APi})),y=e=>r.createElement(x,e,r.createElement(s.gc,{icon:d.G1Y})),f=e=>r.createElement(g,e,r.createElement(s.gc,{icon:d.ijD}));b.__docgenInfo={description:"",methods:[],displayName:"TimerDoneButton"},y.__docgenInfo={description:"",methods:[],displayName:"TimerPauseButton"},f.__docgenInfo={description:"",methods:[],displayName:"TimerPlayButton"}},"./src/components/cards/card.tsx"(e,t,o){o.d(t,{Z:()=>a});var r=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),n=o("./src/theme.constants.ts");let a=r.Ay.div`
    background-color: ${n.lm.card_background};
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    padding: 10px;
    border-radius: ${n.Zz.medium};
    box-shadow: ${n.xc.medium};
    border: 1px solid rgba(255, 255, 255, 0.5);
    width: 100%;
    text-align: center;
    box-sizing: border-box;
`},"./src/theme.constants.ts"(e,t,o){o.d(t,{Ne:()=>n,Zz:()=>a,lm:()=>r,xc:()=>d});let r={blue:"#007AFF",green:"#34C759",red:"#FF3B30",orange:"#FF9500",light_gray:"#EFEFF4",medium_gray:"#C7C7CC",dark_gray:"#8E8E93",text_dark:"#1C1C1E",text_light:"#636366",background:"#F2F2F7",card_background:"rgba(255, 255, 255, 0.9)"},n={font_family:"Arial",font_weight:"normal"},a={small:"8px",medium:"12px"},d={light:"0 1px 3px rgba(0, 0, 0, 0.08)",medium:"0 4px 10px rgba(0, 0, 0, 0.1)"}},"./src/theme/colors.ts"(e,t,o){o.d(t,{l:()=>r});let r={blue:"#007AFF",green:"#34C759",dark_green:"#049729",red:"#FF3B30",dark_red:"#CF0B00",orange:"#FF9500",dark_orange:"#CF6500",light_gray:"#EFEFF4",medium_gray:"#C7C7CC",dark_gray:"#8E8E93",text_dark:"#1C1C1E",text_light:"#636366",background:"#F2F2F7",card_background:"rgba(255, 255, 255, 0.9)"}},"./src/widgets/modal/modal.tsx"(e,t,o){o.d(t,{a:()=>i});var r=o("./node_modules/react/index.js"),n=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),a=o("./src/components/cards/card.tsx"),d=o("./node_modules/@fortawesome/react-fontawesome/dist/index.js"),s=o("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");let l=n.Ay.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: white;
    top: 0;
    left: 0;
    z-index: 40;
    display: flex;
    justify-content: center;
    align-items: center;
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
            border-radius: 68%;
            align-self: flex-end;
            &:hover{
                box-shadow: 0 1px 5px rgba(0,0,0,0.2);
            }
            &:active {
                box-shadow: inset 0 1px 5px rgba(2, 0, 255, 0.5);
            }
        }
        .content{
            display: flex;
            flex-direction: column;
        }
    }
`,i=e=>{let{children:t,shouldShow:o,onClose:n}=e;return o?r.createElement(l,null,r.createElement(a.Z,{className:"modal-card"},r.createElement("div",{className:"close",role:"button",onClick:n},r.createElement(d.gc,{icon:s.yYc})),r.createElement("div",{className:"content"},t))):null};i.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},shouldShow:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}}}]);
//# sourceMappingURL=widgets-modal-modal-stories.201c7989.iframe.bundle.js.map