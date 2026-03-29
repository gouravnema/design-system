"use strict";(self.webpackChunk_gouravnema_design_system=self.webpackChunk_gouravnema_design_system||[]).push([["887"],{"./src/widgets/modal.stories.tsx"(e,t,o){o.r(t),o.d(t,{Default:()=>c,LargeContent:()=>u,WithTitleAndText:()=>m,__namedExportsOrder:()=>p,default:()=>d});var n=o("./node_modules/react/index.js"),r=o("./src/widgets/modal.tsx"),s=o("./src/components/buttons/buttons.tsx"),a=o("./node_modules/styled-components/dist/styled-components.browser.esm.js");let l=a.Ay.div`
  padding: 20px;
  text-align: center;
  color: #333;
`,d={title:"Widgets/Modal",component:r.a,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{shouldShow:{control:"boolean"},onClose:{action:"closed"},children:{control:"object"}}},i=e=>{let[t,o]=(0,n.useState)(e.shouldShow);return n.createElement("div",{style:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#f0f0f0"}},n.createElement(s.jn,{onClick:()=>o(!0)},"Open Modal"),n.createElement(r.a,{...e,shouldShow:t,onClose:()=>{o(!1),e.onClose()}},e.children))},c=i.bind({});c.args={shouldShow:!1,children:n.createElement(l,null,"This is the default modal content.")};let m=i.bind({});m.args={shouldShow:!1,children:n.createElement(l,null,n.createElement("h2",null,"Modal Title"),n.createElement("p",null,"This modal contains a title and some descriptive text."),n.createElement(s.jn,{onClick:()=>alert("Action performed!")},"Perform Action"))};let u=i.bind({});u.args={shouldShow:!1,children:n.createElement(l,{style:{maxWidth:"600px"}},n.createElement("h2",null,"Longer Modal Content"),n.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),n.createElement("p",null,"Another paragraph of content to demonstrate how the modal handles more text."))};let p=["Default","WithTitleAndText","LargeContent"]},"./src/components/buttons/buttons.tsx"(e,t,o){o.d(t,{jn:()=>l,tA:()=>d,uJ:()=>a,yp:()=>s});var n=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=o("./src/theme.constants.ts");let s=n.Ay.button`
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
`,a=(0,n.Ay)(s)`
    border: 1px solid red;
`;(0,n.Ay)(s)`
    border: 1px solid blue;
`;let l=(0,n.Ay)(s)`
    background-color: ${r.lm.blue};
    &:hover {
        background-color: #0056b3;
        transform: translateY(-1px);
        box-shadow: 0 2px 5px rgba(0, 122, 255, 0.3);
    }
`,d=(0,n.Ay)(s)`
    background-color: ${r.lm.light_gray};
    color: ${r.lm.text_dark};
    border: 1px solid ${r.lm.medium_gray};
    &:hover {
        background-color: ${r.lm.medium_gray};
        transform: translateY(-1px);
        box-shadow: 0 2px 5px rgba(0, 122, 255, 0.3);
    }
`},"./src/components/cards/card.tsx"(e,t,o){o.d(t,{Z:()=>s});var n=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=o("./src/theme.constants.ts");let s=n.Ay.div`
    background-color: ${r.lm.card_background};
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    padding: 10px;
    border-radius: ${r.Zz.medium};
    box-shadow: ${r.xc.medium};
    border: 1px solid rgba(255, 255, 255, 0.5);
    width: 100%;
    text-align: center;
    box-sizing: border-box;
`},"./src/theme.constants.ts"(e,t,o){o.d(t,{Ne:()=>r,Zz:()=>s,lm:()=>n,xc:()=>a});let n={blue:"#007AFF",green:"#34C759",red:"#FF3B30",orange:"#FF9500",light_gray:"#EFEFF4",medium_gray:"#C7C7CC",dark_gray:"#8E8E93",text_dark:"#1C1C1E",text_light:"#636366",background:"#F2F2F7",card_background:"rgba(255, 255, 255, 0.9)"},r={font_family:"Arial",font_weight:"normal"},s={small:"8px",medium:"12px"},a={light:"0 1px 3px rgba(0, 0, 0, 0.08)",medium:"0 4px 10px rgba(0, 0, 0, 0.1)"}},"./src/widgets/modal.tsx"(e,t,o){o.d(t,{a:()=>i});var n=o("./node_modules/react/index.js"),r=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),s=o("./src/components/cards/card.tsx"),a=o("./node_modules/@fortawesome/react-fontawesome/dist/index.js"),l=o("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");let d=r.Ay.div`
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
`,i=e=>{let{children:t,shouldShow:o,onClose:r}=e;return o?n.createElement(d,null,n.createElement(s.Z,{className:"modal-card"},n.createElement("div",{className:"close",role:"button",onClick:r},n.createElement(a.gc,{icon:l.yYc})),n.createElement("div",{className:"content"},t))):null};i.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},shouldShow:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}}}]);
//# sourceMappingURL=widgets-modal-stories.5535008c.iframe.bundle.js.map