"use strict";(self.webpackChunk_gouravnema_design_system=self.webpackChunk_gouravnema_design_system||[]).push([["484"],{"./src/components/buttons/buttons.stories.tsx"(e,t,n){n.r(t),n.d(t,{AllButtonStates:()=>u,Basic:()=>a,BlueOutline:()=>c,Primary:()=>s,RedOutline:()=>d,Secondary:()=>i,TimerButtons:()=>x,WithOnClick:()=>m,__namedExportsOrder:()=>p,default:()=>o});var r=n("./node_modules/react/index.js"),l=n("./src/components/buttons/buttons.tsx");let o={title:"Components/Buttons",component:l.yp,tags:["autodocs"],decorators:[e=>r.createElement("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"20px"}},r.createElement(e,null))]},a={render:()=>r.createElement(l.yp,null,"Click me")},s={render:()=>r.createElement(l.jn,null,"Primary Button")},i={render:()=>r.createElement(l.tA,null,"Secondary Button")},d={render:()=>r.createElement(l.uJ,null,"Red Outline")},c={render:()=>r.createElement(l.pE,null,"Blue Outline")},x={render:()=>r.createElement("div",{style:{display:"flex",gap:"20px",alignItems:"center"}},r.createElement(l.yi,null),r.createElement(l.wx,null),r.createElement(l.MG,null))},u={render:()=>r.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"15px"}},r.createElement("div",null,r.createElement("h3",null,"Buttons"),r.createElement(l.yp,null,"Default Button")),r.createElement("div",null,r.createElement("h3",null,"Primary Button"),r.createElement(l.jn,null,"Primary")),r.createElement("div",null,r.createElement("h3",null,"Secondary Button"),r.createElement(l.tA,null,"Secondary")),r.createElement("div",null,r.createElement("h3",null,"Outline Buttons"),r.createElement("div",{style:{display:"flex",gap:"10px"}},r.createElement(l.uJ,null,"Red"),r.createElement(l.pE,null,"Blue"))),r.createElement("div",null,r.createElement("h3",null,"Timer Buttons (Round)"),r.createElement("div",{style:{display:"flex",gap:"20px",alignItems:"center"}},r.createElement(l.yi,null),r.createElement(l.wx,null),r.createElement(l.MG,null))))},m={render:()=>r.createElement(l.jn,{onClick:()=>alert("Button clicked!")},"Click me!")},p=["Basic","Primary","Secondary","RedOutline","BlueOutline","TimerButtons","AllButtonStates","WithOnClick"]},"./src/components/buttons/buttons.tsx"(e,t,n){n.d(t,{tA:()=>m,pE:()=>x,MG:()=>E,wx:()=>y,jn:()=>u,yi:()=>k,yp:()=>d,uJ:()=>c});var r=n("./node_modules/react/index.js"),l=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),o=n("./src/theme/colors.ts"),a=n("./src/theme/shadows.ts"),s=n("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),i=n("./node_modules/@fortawesome/react-fontawesome/dist/index.js");let d=l.Ay.button`
    width: calc(100% - 24px);
    padding: 12px;
    color: ${o.l.text_dark};
    background-color: ${o.l.base};
    border: none;
    border-radius: ${"20px"};
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 10px;
    box-shadow: ${a.x.medium};
    
    &:hover {
        box-shadow: ${a.x.large};
        transform: translateY(-2px);
    }

    &:active {
        box-shadow: ${a.x.insetMedium};
        transform: translateY(0);
    }
`,c=(0,l.Ay)(d)`
    background-color: ${o.l.baseLight};
    color: ${o.l.red};
    box-shadow: ${a.x.light};
    
    &:hover {
        box-shadow: ${a.x.medium};
        color: ${o.l.dark_red};
    }

    &:active {
        box-shadow: ${a.x.insetLight};
    }
`,x=(0,l.Ay)(d)`
    background-color: ${o.l.baseLight};
    color: ${o.l.blue};
    box-shadow: ${a.x.light};
    
    &:hover {
        box-shadow: ${a.x.medium};
        color: #4A5FB0;
    }

    &:active {
        box-shadow: ${a.x.insetLight};
    }
`,u=(0,l.Ay)(d)`
    background-color: ${o.l.blue};
    color: white;
    
    &:hover {
        background-color: #4A5FB0;
        box-shadow: ${a.x.large};
    }

    &:active {
        box-shadow: ${a.x.insetMedium};
    }
`,m=(0,l.Ay)(d)`
    background-color: ${o.l.light_gray};
    color: ${o.l.text_dark};
    box-shadow: ${a.x.light};
    
    &:hover {
        background-color: ${o.l.baseLight};
        box-shadow: ${a.x.medium};
    }

    &:active {
        box-shadow: ${a.x.insetLight};
    }
`,p=(0,l.Ay)(d)`
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
`,g=(0,l.Ay)(p)`
     background: ${o.l.green};
     
     &:hover {
            background: #5FA35F;
            box-shadow: ${a.x.large};
     }

     &:active {
            box-shadow: ${a.x.insetDark};
     }
 `,b=(0,l.Ay)(p)`
    background: ${o.l.orange};
    
    &:hover {
        background: #C98A4F;
        box-shadow: ${a.x.large};
    }

    &:active {
        box-shadow: ${a.x.insetDark};
    }
`,h=(0,l.Ay)(p)`
    background: ${o.l.red};
    
    &:hover {
        background: #C84D5C;
        box-shadow: ${a.x.large};
    }

    &:active {
        box-shadow: ${a.x.insetDark};
    }
`,E=e=>r.createElement(h,e,r.createElement(i.gc,{icon:s.APi})),y=e=>r.createElement(b,e,r.createElement(i.gc,{icon:s.G1Y})),k=e=>r.createElement(g,e,r.createElement(i.gc,{icon:s.ijD}));E.__docgenInfo={description:"",methods:[],displayName:"TimerDoneButton"},y.__docgenInfo={description:"",methods:[],displayName:"TimerPauseButton"},k.__docgenInfo={description:"",methods:[],displayName:"TimerPlayButton"}},"./src/theme/colors.ts"(e,t,n){n.d(t,{l:()=>r});let r={base:"#E0E5EC",baseLight:"#F5F7FA",baseDark:"#A3B1C6",baseBorder:"#738196",blue:"#5F7FD4",green:"#5FB36D",dark_green:"#4A8A54",red:"#D85F6F",dark_red:"#B84C5A",orange:"#D99B5F",dark_orange:"#B87A47",text_dark:"#3A3F47",text:"#4A4F57",text_light:"#6B7280",background:"#E0E5EC",card_background:"#E0E5EC",light_gray:"#F5F7FA",medium_gray:"#C9D1DC",dark_gray:"#8FA3BD"}},"./src/theme/shadows.ts"(e,t,n){n.d(t,{x:()=>r});let r={insetLight:"inset 2px 2px 5px rgba(255, 255, 255, 0.7), inset -2px -2px 5px rgba(0, 0, 0, 0.1)",insetMedium:"inset 3px 3px 7px rgba(255, 255, 255, 0.8), inset -3px -3px 7px rgba(0, 0, 0, 0.15)",insetDark:"inset 5px 5px 10px rgba(255, 255, 255, 0.9), inset -5px -5px 10px rgba(0, 0, 0, 0.2)",light:"3px 3px 6px rgba(0, 0, 0, 0.1), -3px -3px 6px rgba(255, 255, 255, 0.7)",medium:"5px 5px 10px rgba(0, 0, 0, 0.15), -5px -5px 10px rgba(255, 255, 255, 0.8)",medium2:"5px 5px 12px rgba(0, 0, 0, 0.12), -5px -5px 12px rgba(255, 255, 255, 0.75)",large:"8px 8px 16px rgba(0, 0, 0, 0.2), -8px -8px 16px rgba(255, 255, 255, 0.9)"}}}]);
//# sourceMappingURL=components-buttons-buttons-stories.8e838778.iframe.bundle.js.map