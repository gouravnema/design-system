"use strict";(self.webpackChunk_gouravnema_design_system=self.webpackChunk_gouravnema_design_system||[]).push([["352"],{"./src/components/buttons/confirm_button.stories.tsx"(e,t,o){o.r(t),o.d(t,{AllVariants:()=>u,CustomMessages:()=>c,Default:()=>i,WithCustomCallbacks:()=>m,WithPrimaryButton:()=>d,WithSecondaryButton:()=>l,__namedExportsOrder:()=>x,default:()=>s});var n=o("./node_modules/react/index.js"),r=o("./src/components/buttons/confirm_button.tsx"),a=o("./src/components/buttons/buttons.tsx");let s={title:"Components/Buttons/ConfirmButton",component:r.Z,tags:["autodocs"],decorators:[e=>n.createElement("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"20px"}},n.createElement(e,null))]},i={args:{label:"Delete Item",confirmTitle:"Delete Confirmation",confirmText:"Are you sure you want to delete this item? This action cannot be undone.",onConfirm:()=>alert("Item deleted!"),onCancel:()=>alert("Delete cancelled")}},l={args:{label:"Remove",ButtonComponent:a.tA,confirmTitle:"Remove Item",confirmText:"This will remove the item from your list.",onConfirm:()=>alert("Item removed!"),onCancel:()=>alert("Action cancelled")}},d={args:{label:"Submit",ButtonComponent:a.jn,confirmTitle:"Submit Confirmation",confirmText:"Are you sure you want to submit this form?",onConfirm:()=>alert("Form submitted!"),onCancel:()=>alert("Submission cancelled")}},c={args:{label:"Logout",confirmTitle:"Logout?",confirmText:"You will be logged out. Any unsaved data will be lost.",onConfirm:()=>alert("Logged out!"),onCancel:()=>alert("Logout cancelled")}},m={args:{label:"Dangerous Action",confirmTitle:"Warning",confirmText:"This action cannot be reversed. Please confirm.",onConfirm:e=>{console.log("Confirmed:",e),alert("Action performed!")},onCancel:e=>{console.log("Cancelled:",e),alert("Action cancelled")}}},u={render:()=>n.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"30px"}},n.createElement("div",null,n.createElement("h3",null,"Secondary Button (Default)"),n.createElement(r.Z,{label:"Delete",confirmTitle:"Delete Item?",confirmText:"Are you sure?",onConfirm:()=>alert("Deleted")})),n.createElement("div",null,n.createElement("h3",null,"Primary Button"),n.createElement(r.Z,{label:"Submit",ButtonComponent:a.jn,confirmTitle:"Submit?",confirmText:"Submit this form?",onConfirm:()=>alert("Submitted")})))},x=["Default","WithSecondaryButton","WithPrimaryButton","CustomMessages","WithCustomCallbacks","AllVariants"]},"./src/components/buttons/buttons.tsx"(e,t,o){o.d(t,{tA:()=>x,pE:()=>m,MG:()=>f,wx:()=>y,jn:()=>u,yi:()=>v,yp:()=>d,uJ:()=>c});var n=o("./node_modules/react/index.js"),r=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),a=o("./src/theme/colors.ts"),s=o("./src/theme/shadows.ts"),i=o("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),l=o("./node_modules/@fortawesome/react-fontawesome/dist/index.js");let d=r.Ay.button`
    width: calc(100% - 24px);
    padding: 12px;
    color: ${a.l.text_dark};
    background-color: ${a.l.base};
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
`,c=(0,r.Ay)(d)`
    background-color: ${a.l.baseLight};
    color: ${a.l.red};
    box-shadow: ${s.x.light};
    
    &:hover {
        box-shadow: ${s.x.medium};
        color: ${a.l.dark_red};
    }

    &:active {
        box-shadow: ${s.x.insetLight};
    }
`,m=(0,r.Ay)(d)`
    background-color: ${a.l.baseLight};
    color: ${a.l.blue};
    box-shadow: ${s.x.light};
    
    &:hover {
        box-shadow: ${s.x.medium};
        color: #4A5FB0;
    }

    &:active {
        box-shadow: ${s.x.insetLight};
    }
`,u=(0,r.Ay)(d)`
    background-color: ${a.l.blue};
    color: white;
    
    &:hover {
        background-color: #4A5FB0;
        box-shadow: ${s.x.large};
    }

    &:active {
        box-shadow: ${s.x.insetMedium};
    }
`,x=(0,r.Ay)(d)`
    background-color: ${a.l.light_gray};
    color: ${a.l.text_dark};
    box-shadow: ${s.x.light};
    
    &:hover {
        background-color: ${a.l.baseLight};
        box-shadow: ${s.x.medium};
    }

    &:active {
        box-shadow: ${s.x.insetLight};
    }
`,p=(0,r.Ay)(d)`
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
`,g=(0,r.Ay)(p)`
     background: ${a.l.green};
     
     &:hover {
            background: #5FA35F;
            box-shadow: ${s.x.large};
     }

     &:active {
            box-shadow: ${s.x.insetDark};
     }
 `,b=(0,r.Ay)(p)`
    background: ${a.l.orange};
    
    &:hover {
        background: #C98A4F;
        box-shadow: ${s.x.large};
    }

    &:active {
        box-shadow: ${s.x.insetDark};
    }
`,h=(0,r.Ay)(p)`
    background: ${a.l.red};
    
    &:hover {
        background: #C84D5C;
        box-shadow: ${s.x.large};
    }

    &:active {
        box-shadow: ${s.x.insetDark};
    }
`,f=e=>n.createElement(h,e,n.createElement(l.gc,{icon:i.APi})),y=e=>n.createElement(b,e,n.createElement(l.gc,{icon:i.G1Y})),v=e=>n.createElement(g,e,n.createElement(l.gc,{icon:i.ijD}));f.__docgenInfo={description:"",methods:[],displayName:"TimerDoneButton"},y.__docgenInfo={description:"",methods:[],displayName:"TimerPauseButton"},v.__docgenInfo={description:"",methods:[],displayName:"TimerPlayButton"}},"./src/components/buttons/confirm_button.tsx"(e,t,o){o.d(t,{Z:()=>l});var n=o("./node_modules/react/index.js"),r=o("./src/components/buttons/buttons.tsx"),a=o("./src/widgets/modal/modal.tsx"),s=o("./node_modules/styled-components/dist/styled-components.browser.esm.js");let i=s.Ay.div`
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
`,l=e=>{let{onConfirm:t=()=>{},onCancel:o=()=>{},label:s="",confirmText:l="Are you sure?",confirmTitle:d="Confirmation?",ButtonComponent:c=r.tA,...m}=e,[u,x]=n.useState(!1),p=n.createElement(a.a,{onClose:()=>x(!1),shouldShow:u},n.createElement(i,{className:"confirm-modal"},n.createElement("h3",null,d),n.createElement("p",{className:"description"},l),n.createElement("div",{className:"confirm-actions"},n.createElement(r.tA,{onClick:e=>{x(!1),o(e)}},"Cancel"),n.createElement(r.jn,{onClick:e=>{x(!1),t(e)}},"Confirm")))),g=n.createElement(c,{...m,onClick:e=>{e.preventDefault(),x(!0)}},s);return n.createElement(n.Fragment,null,u?p:g)};l.__docgenInfo={description:"",methods:[],displayName:"ConfirmButton",props:{onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {\n}",computed:!1}},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {\n}",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},confirmText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Are you sure?"',computed:!1}},confirmTitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Confirmation?"',computed:!1}},ButtonComponent:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<any>",elements:[{name:"any"}]},description:"",defaultValue:{value:"styled(Buttons)`\n    background-color: ${COLORS.light_gray};\n    color: ${COLORS.text_dark};\n    box-shadow: ${SHADOW.light};\n    \n    &:hover {\n        background-color: ${COLORS.baseLight};\n        box-shadow: ${SHADOW.medium};\n    }\n\n    &:active {\n        box-shadow: ${SHADOW.insetLight};\n    }\n`",computed:!1}}}}},"./src/components/cards/card.tsx"(e,t,o){o.d(t,{Z:()=>a});var n=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=o("./src/theme.constants.ts");let a=n.Ay.div`
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
`},"./src/theme.constants.ts"(e,t,o){o.d(t,{Ne:()=>r,Zz:()=>a,lm:()=>n,xc:()=>s});let n={base:"#E0E5EC",baseLight:"#F5F7FA",baseDark:"#A3B1C6",blue:"#5F7FD4",green:"#5FB36D",dark_green:"#4A8A54",red:"#D85F6F",dark_red:"#B84C5A",orange:"#D99B5F",dark_orange:"#B87A47",text_dark:"#3A3F47",text_light:"#6B7280",background:"#E0E5EC",card_background:"#E0E5EC",light_gray:"#F5F7FA",medium_gray:"#C9D1DC",dark_gray:"#8FA3BD"},r={font_family:"Arial",font_weight:"normal"},a={small:"12px",medium:"20px",large:"30px",full:"50%"},s={insetLight:"inset 2px 2px 5px rgba(255, 255, 255, 0.7), inset -2px -2px 5px rgba(0, 0, 0, 0.1)",insetMedium:"inset 3px 3px 7px rgba(255, 255, 255, 0.8), inset -3px -3px 7px rgba(0, 0, 0, 0.15)",insetDark:"inset 5px 5px 10px rgba(255, 255, 255, 0.9), inset -5px -5px 10px rgba(0, 0, 0, 0.2)",light:"3px 3px 6px rgba(0, 0, 0, 0.1), -3px -3px 6px rgba(255, 255, 255, 0.7)",medium:"5px 5px 10px rgba(0, 0, 0, 0.15), -5px -5px 10px rgba(255, 255, 255, 0.8)",medium2:"5px 5px 12px rgba(0, 0, 0, 0.12), -5px -5px 12px rgba(255, 255, 255, 0.75)",large:"8px 8px 16px rgba(0, 0, 0, 0.2), -8px -8px 16px rgba(255, 255, 255, 0.9)"}},"./src/theme/colors.ts"(e,t,o){o.d(t,{l:()=>n});let n={base:"#E0E5EC",baseLight:"#F5F7FA",baseDark:"#A3B1C6",blue:"#5F7FD4",green:"#5FB36D",dark_green:"#4A8A54",red:"#D85F6F",dark_red:"#B84C5A",orange:"#D99B5F",dark_orange:"#B87A47",text_dark:"#3A3F47",text_light:"#6B7280",background:"#E0E5EC",card_background:"#E0E5EC",light_gray:"#F5F7FA",medium_gray:"#C9D1DC",dark_gray:"#8FA3BD"}},"./src/theme/shadows.ts"(e,t,o){o.d(t,{x:()=>n});let n={insetLight:"inset 2px 2px 5px rgba(255, 255, 255, 0.7), inset -2px -2px 5px rgba(0, 0, 0, 0.1)",insetMedium:"inset 3px 3px 7px rgba(255, 255, 255, 0.8), inset -3px -3px 7px rgba(0, 0, 0, 0.15)",insetDark:"inset 5px 5px 10px rgba(255, 255, 255, 0.9), inset -5px -5px 10px rgba(0, 0, 0, 0.2)",light:"3px 3px 6px rgba(0, 0, 0, 0.1), -3px -3px 6px rgba(255, 255, 255, 0.7)",medium:"5px 5px 10px rgba(0, 0, 0, 0.15), -5px -5px 10px rgba(255, 255, 255, 0.8)",medium2:"5px 5px 12px rgba(0, 0, 0, 0.12), -5px -5px 12px rgba(255, 255, 255, 0.75)",large:"8px 8px 16px rgba(0, 0, 0, 0.2), -8px -8px 16px rgba(255, 255, 255, 0.9)"}},"./src/widgets/modal/modal.tsx"(e,t,o){o.d(t,{a:()=>c});var n=o("./node_modules/react/index.js"),r=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),a=o("./src/components/cards/card.tsx"),s=o("./node_modules/@fortawesome/react-fontawesome/dist/index.js"),i=o("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),l=o("./src/theme.constants.ts");let d=r.Ay.div`
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
            background: ${l.lm.base};
            color: ${l.lm.text_dark};
            transition: all 0.3s ease;
            &:hover{
                box-shadow: ${l.xc.medium};
            }
            &:active {
                box-shadow: ${l.xc.insetLight};
            }
        }
        .content{
            display: flex;
            flex-direction: column;
        }
    }
`,c=e=>{let{children:t,shouldShow:o,onClose:r}=e;return o?n.createElement(d,null,n.createElement(a.Z,{className:"modal-card"},n.createElement("div",{className:"close",role:"button",onClick:r},n.createElement(s.gc,{icon:i.yYc})),n.createElement("div",{className:"content"},t))):null};c.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},shouldShow:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}}}]);
//# sourceMappingURL=components-buttons-confirm_button-stories.e9be5228.iframe.bundle.js.map