"use strict";(self.webpackChunk_gouravnema_design_system=self.webpackChunk_gouravnema_design_system||[]).push([["352"],{"./src/components/buttons/confirm_button.stories.tsx"(e,t,o){o.r(t),o.d(t,{CustomMessages:()=>p,default:()=>d,__namedExportsOrder:()=>b,WithSecondaryButton:()=>m,AllVariants:()=>x,Default:()=>c,WithCustomCallbacks:()=>g,WithPrimaryButton:()=>u});var n=o("./node_modules/react/index.js"),r=o("./src/components/buttons/buttons.tsx"),a=o("./src/widgets/modal/modal.tsx"),l=o("./node_modules/styled-components/dist/styled-components.browser.esm.js");let s=l.Ay.div`
    padding:10px;
    display: flex;
    flex-direction: column;
    p.description{
        margin: 10px 0;
    }
    div.confirm-actions{
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        gap: 10px;
    }
`,i=e=>{let{onConfirm:t=()=>{},onCancel:o=()=>{},label:l="",confirmText:i="Are you sure?",confirmTitle:d="Confirmation?",ButtonComponent:c=r.tA,...m}=e,[u,p]=n.useState(!1),g=n.createElement(a.a,{onClose:()=>p(!1),shouldShow:u},n.createElement(s,{className:"confirm-modal"},n.createElement("h3",null,d),n.createElement("p",{className:"description"},i),n.createElement("div",{className:"confirm-actions"},n.createElement(r.tA,{onClick:e=>{p(!1),o(e)}},"Cancel"),n.createElement(r.jn,{onClick:e=>{p(!1),t(e)}},"Confirm")))),x=n.createElement(c,{...m,onClick:e=>{e.preventDefault(),p(!0)}},l);return n.createElement(n.Fragment,null,u?g:x)};i.__docgenInfo={description:"",methods:[],displayName:"ConfirmButton",props:{onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {\n}",computed:!1}},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {\n}",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},confirmText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Are you sure?"',computed:!1}},confirmTitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Confirmation?"',computed:!1}},ButtonComponent:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<any>",elements:[{name:"any"}]},description:"",defaultValue:{value:"styled(Buttons)`\n    background-color: ${COLORS.light_gray};\n    color: ${COLORS.text_dark};\n    border: 1px solid ${COLORS.medium_gray};\n    &:hover {\n        background-color: ${COLORS.medium_gray};\n        transform: translateY(-1px);\n        box-shadow: 0 2px 5px rgba(0, 122, 255, 0.3);\n    }\n`",computed:!1}}}};let d={title:"Components/Buttons/ConfirmButton",component:i,tags:["autodocs"],decorators:[e=>n.createElement("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"20px"}},n.createElement(e,null))]},c={args:{label:"Delete Item",confirmTitle:"Delete Confirmation",confirmText:"Are you sure you want to delete this item? This action cannot be undone.",onConfirm:()=>alert("Item deleted!"),onCancel:()=>alert("Delete cancelled")}},m={args:{label:"Remove",ButtonComponent:r.tA,confirmTitle:"Remove Item",confirmText:"This will remove the item from your list.",onConfirm:()=>alert("Item removed!"),onCancel:()=>alert("Action cancelled")}},u={args:{label:"Submit",ButtonComponent:r.jn,confirmTitle:"Submit Confirmation",confirmText:"Are you sure you want to submit this form?",onConfirm:()=>alert("Form submitted!"),onCancel:()=>alert("Submission cancelled")}},p={args:{label:"Logout",confirmTitle:"Logout?",confirmText:"You will be logged out. Any unsaved data will be lost.",onConfirm:()=>alert("Logged out!"),onCancel:()=>alert("Logout cancelled")}},g={args:{label:"Dangerous Action",confirmTitle:"Warning",confirmText:"This action cannot be reversed. Please confirm.",onConfirm:e=>{console.log("Confirmed:",e),alert("Action performed!")},onCancel:e=>{console.log("Cancelled:",e),alert("Action cancelled")}}},x={render:()=>n.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"30px"}},n.createElement("div",null,n.createElement("h3",null,"Secondary Button (Default)"),n.createElement(i,{label:"Delete",confirmTitle:"Delete Item?",confirmText:"Are you sure?",onConfirm:()=>alert("Deleted")})),n.createElement("div",null,n.createElement("h3",null,"Primary Button"),n.createElement(i,{label:"Submit",ButtonComponent:r.jn,confirmTitle:"Submit?",confirmText:"Submit this form?",onConfirm:()=>alert("Submitted")})))},b=["Default","WithSecondaryButton","WithPrimaryButton","CustomMessages","WithCustomCallbacks","AllVariants"]},"./src/components/buttons/buttons.tsx"(e,t,o){o.d(t,{tA:()=>u,pE:()=>c,MG:()=>f,wx:()=>y,jn:()=>m,yi:()=>h,yp:()=>i,uJ:()=>d});var n=o("./node_modules/react/index.js"),r=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),a=o("./src/theme/colors.ts"),l=o("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),s=o("./node_modules/@fortawesome/react-fontawesome/dist/index.js");let i=r.Ay.button`
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
`,d=(0,r.Ay)(i)`
    border: 1px solid red;
    background: white;
    color:red;
`,c=(0,r.Ay)(i)`
    border: 1px solid blue;
    background: white;
    color:blue;
`,m=(0,r.Ay)(i)`
    background-color: ${a.l.blue};
    &:hover {
        background-color: #0056b3;
        transform: translateY(-1px);
        box-shadow: 0 2px 5px rgba(0, 122, 255, 0.3);
    }
`,u=(0,r.Ay)(i)`
    background-color: ${a.l.light_gray};
    color: ${a.l.text_dark};
    border: 1px solid ${a.l.medium_gray};
    &:hover {
        background-color: ${a.l.medium_gray};
        transform: translateY(-1px);
        box-shadow: 0 2px 5px rgba(0, 122, 255, 0.3);
    }
`,p=(0,r.Ay)(i)`
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
`,g=(0,r.Ay)(p)`
     background: ${a.l.green};
     &:hover {
            background: ${a.l.dark_green};
     }
 `,x=(0,r.Ay)(p)`
    background: ${a.l.orange};
    &:hover {
        background: ${a.l.dark_orange};
    }
`,b=(0,r.Ay)(p)`
    background: ${a.l.red};
    &:hover {
        background: ${a.l.dark_red};
    }
`,f=e=>n.createElement(b,e,n.createElement(s.gc,{icon:l.APi})),y=e=>n.createElement(x,e,n.createElement(s.gc,{icon:l.G1Y})),h=e=>n.createElement(g,e,n.createElement(s.gc,{icon:l.ijD}));f.__docgenInfo={description:"",methods:[],displayName:"TimerDoneButton"},y.__docgenInfo={description:"",methods:[],displayName:"TimerPauseButton"},h.__docgenInfo={description:"",methods:[],displayName:"TimerPlayButton"}},"./src/components/cards/card.tsx"(e,t,o){o.d(t,{Z:()=>a});var n=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=o("./src/theme.constants.ts");let a=n.Ay.div`
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
`},"./src/theme.constants.ts"(e,t,o){o.d(t,{Ne:()=>r,Zz:()=>a,lm:()=>n,xc:()=>l});let n={blue:"#007AFF",green:"#34C759",red:"#FF3B30",orange:"#FF9500",light_gray:"#EFEFF4",medium_gray:"#C7C7CC",dark_gray:"#8E8E93",text_dark:"#1C1C1E",text_light:"#636366",background:"#F2F2F7",card_background:"rgba(255, 255, 255, 0.9)"},r={font_family:"Arial",font_weight:"normal"},a={small:"8px",medium:"12px"},l={light:"0 1px 3px rgba(0, 0, 0, 0.08)",medium:"0 4px 10px rgba(0, 0, 0, 0.1)"}},"./src/theme/colors.ts"(e,t,o){o.d(t,{l:()=>n});let n={blue:"#007AFF",green:"#34C759",dark_green:"#049729",red:"#FF3B30",dark_red:"#CF0B00",orange:"#FF9500",dark_orange:"#CF6500",light_gray:"#EFEFF4",medium_gray:"#C7C7CC",dark_gray:"#8E8E93",text_dark:"#1C1C1E",text_light:"#636366",background:"#F2F2F7",card_background:"rgba(255, 255, 255, 0.9)"}},"./src/widgets/modal/modal.tsx"(e,t,o){o.d(t,{a:()=>d});var n=o("./node_modules/react/index.js"),r=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),a=o("./src/components/cards/card.tsx"),l=o("./node_modules/@fortawesome/react-fontawesome/dist/index.js"),s=o("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");let i=r.Ay.div`
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
`,d=e=>{let{children:t,shouldShow:o,onClose:r}=e;return o?n.createElement(i,null,n.createElement(a.Z,{className:"modal-card"},n.createElement("div",{className:"close",role:"button",onClick:r},n.createElement(l.gc,{icon:s.yYc})),n.createElement("div",{className:"content"},t))):null};d.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},shouldShow:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}}}]);
//# sourceMappingURL=components-buttons-confirm_button-stories.fd13f485.iframe.bundle.js.map