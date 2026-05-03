"use strict";(self.webpackChunk_gouravnema_design_system=self.webpackChunk_gouravnema_design_system||[]).push([["484"],{"./src/components/buttons/buttons.stories.tsx"(e,t,n){n.r(t),n.d(t,{AllButtonStates:()=>m,Basic:()=>a,BlueOutline:()=>i,Primary:()=>d,RedOutline:()=>c,Secondary:()=>s,TimerButtons:()=>u,WithOnClick:()=>p,__namedExportsOrder:()=>g,default:()=>o});var r=n("./node_modules/react/index.js"),l=n("./src/components/buttons/buttons.tsx");let o={title:"Components/Buttons",component:l.yp,tags:["autodocs"],decorators:[e=>r.createElement("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"20px"}},r.createElement(e,null))]},a={render:()=>r.createElement(l.yp,null,"Click me")},d={render:()=>r.createElement(l.jn,null,"Primary Button")},s={render:()=>r.createElement(l.tA,null,"Secondary Button")},c={render:()=>r.createElement(l.uJ,null,"Red Outline")},i={render:()=>r.createElement(l.pE,null,"Blue Outline")},u={render:()=>r.createElement("div",{style:{display:"flex",gap:"20px",alignItems:"center"}},r.createElement(l.yi,null),r.createElement(l.wx,null),r.createElement(l.MG,null))},m={render:()=>r.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"15px"}},r.createElement("div",null,r.createElement("h3",null,"Buttons"),r.createElement(l.yp,null,"Default Button")),r.createElement("div",null,r.createElement("h3",null,"Primary Button"),r.createElement(l.jn,null,"Primary")),r.createElement("div",null,r.createElement("h3",null,"Secondary Button"),r.createElement(l.tA,null,"Secondary")),r.createElement("div",null,r.createElement("h3",null,"Outline Buttons"),r.createElement("div",{style:{display:"flex",gap:"10px"}},r.createElement(l.uJ,null,"Red"),r.createElement(l.pE,null,"Blue"))),r.createElement("div",null,r.createElement("h3",null,"Timer Buttons (Round)"),r.createElement("div",{style:{display:"flex",gap:"20px",alignItems:"center"}},r.createElement(l.yi,null),r.createElement(l.wx,null),r.createElement(l.MG,null))))},p={render:()=>r.createElement(l.jn,{onClick:()=>alert("Button clicked!")},"Click me!")},g=["Basic","Primary","Secondary","RedOutline","BlueOutline","TimerButtons","AllButtonStates","WithOnClick"]},"./src/components/buttons/buttons.tsx"(e,t,n){n.d(t,{tA:()=>m,pE:()=>i,MG:()=>E,wx:()=>b,jn:()=>u,yi:()=>h,yp:()=>s,uJ:()=>c});var r=n("./node_modules/react/index.js"),l=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),o=n("./src/theme/colors.ts"),a=n("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),d=n("./node_modules/@fortawesome/react-fontawesome/dist/index.js");let s=l.Ay.button`
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
`,c=(0,l.Ay)(s)`
    border: 1px solid red;
    background: white;
    color:red;
`,i=(0,l.Ay)(s)`
    border: 1px solid blue;
    background: white;
    color:blue;
`,u=(0,l.Ay)(s)`
    background-color: ${o.l.blue};
    &:hover {
        background-color: #0056b3;
        transform: translateY(-1px);
        box-shadow: 0 2px 5px rgba(0, 122, 255, 0.3);
    }
`,m=(0,l.Ay)(s)`
    background-color: ${o.l.light_gray};
    color: ${o.l.text_dark};
    border: 1px solid ${o.l.medium_gray};
    &:hover {
        background-color: ${o.l.medium_gray};
        transform: translateY(-1px);
        box-shadow: 0 2px 5px rgba(0, 122, 255, 0.3);
    }
`,p=(0,l.Ay)(s)`
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
`,g=(0,l.Ay)(p)`
     background: ${o.l.green};
     &:hover {
            background: ${o.l.dark_green};
     }
 `,x=(0,l.Ay)(p)`
    background: ${o.l.orange};
    &:hover {
        background: ${o.l.dark_orange};
    }
`,y=(0,l.Ay)(p)`
    background: ${o.l.red};
    &:hover {
        background: ${o.l.dark_red};
    }
`,E=e=>r.createElement(y,e,r.createElement(d.gc,{icon:a.APi})),b=e=>r.createElement(x,e,r.createElement(d.gc,{icon:a.G1Y})),h=e=>r.createElement(g,e,r.createElement(d.gc,{icon:a.ijD}));E.__docgenInfo={description:"",methods:[],displayName:"TimerDoneButton"},b.__docgenInfo={description:"",methods:[],displayName:"TimerPauseButton"},h.__docgenInfo={description:"",methods:[],displayName:"TimerPlayButton"}},"./src/theme/colors.ts"(e,t,n){n.d(t,{l:()=>r});let r={blue:"#007AFF",green:"#34C759",dark_green:"#049729",red:"#FF3B30",dark_red:"#CF0B00",orange:"#FF9500",dark_orange:"#CF6500",light_gray:"#EFEFF4",medium_gray:"#C7C7CC",dark_gray:"#8E8E93",text_dark:"#1C1C1E",text_light:"#636366",background:"#F2F2F7",card_background:"rgba(255, 255, 255, 0.9)"}}}]);
//# sourceMappingURL=components-buttons-buttons-stories.277222c0.iframe.bundle.js.map