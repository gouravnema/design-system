"use strict";(self.webpackChunk_gouravnema_design_system=self.webpackChunk_gouravnema_design_system||[]).push([["484"],{"./src/components/buttons/buttons.stories.tsx"(e,t,r){r.r(t),r.d(t,{AllButtonStates:()=>u,Basic:()=>o,BlueOutline:()=>c,Primary:()=>s,RedOutline:()=>i,Secondary:()=>d,TimerButtons:()=>x,WithOnClick:()=>m,__namedExportsOrder:()=>p,default:()=>a});var n=r("./node_modules/react/index.js"),l=r("./src/components/buttons/buttons.tsx");let a={title:"Components/Buttons",component:l.yp,tags:["autodocs"],decorators:[e=>n.createElement("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"20px"}},n.createElement(e,null))]},o={render:()=>n.createElement(l.yp,null,"Click me")},s={render:()=>n.createElement(l.jn,null,"Primary Button")},d={render:()=>n.createElement(l.tA,null,"Secondary Button")},i={render:()=>n.createElement(l.uJ,null,"Red Outline")},c={render:()=>n.createElement(l.pE,null,"Blue Outline")},x={render:()=>n.createElement("div",{style:{display:"flex",gap:"20px",alignItems:"center"}},n.createElement(l.yi,null),n.createElement(l.wx,null),n.createElement(l.MG,null))},u={render:()=>n.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"15px"}},n.createElement("div",null,n.createElement("h3",null,"Buttons"),n.createElement(l.yp,null,"Default Button")),n.createElement("div",null,n.createElement("h3",null,"Primary Button"),n.createElement(l.jn,null,"Primary")),n.createElement("div",null,n.createElement("h3",null,"Secondary Button"),n.createElement(l.tA,null,"Secondary")),n.createElement("div",null,n.createElement("h3",null,"Outline Buttons"),n.createElement("div",{style:{display:"flex",gap:"10px"}},n.createElement(l.uJ,null,"Red"),n.createElement(l.pE,null,"Blue"))),n.createElement("div",null,n.createElement("h3",null,"Timer Buttons (Round)"),n.createElement("div",{style:{display:"flex",gap:"20px",alignItems:"center"}},n.createElement(l.yi,null),n.createElement(l.wx,null),n.createElement(l.MG,null))))},m={render:()=>n.createElement(l.jn,{onClick:()=>alert("Button clicked!")},"Click me!")},p=["Basic","Primary","Secondary","RedOutline","BlueOutline","TimerButtons","AllButtonStates","WithOnClick"]},"./src/components/buttons/buttons.tsx"(e,t,r){r.d(t,{MG:()=>y,jn:()=>m,pE:()=>u,tA:()=>p,uJ:()=>x,wx:()=>k,yi:()=>w,yp:()=>c});var n=r("./node_modules/react/index.js"),l=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),a=r("./src/theme/colors.ts"),o=r("./src/theme/radius.ts"),s=r("./src/theme/shadows.ts"),d=r("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),i=r("./node_modules/@fortawesome/react-fontawesome/dist/index.js");let c=l.Ay.button`
    width: calc(100% - 24px);
    padding: 12px;
    color: ${a.l.text_dark};
    background-color: ${a.l.base};
    border: none;
    border-radius: ${o.Z.medium};
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
`,x=(0,l.Ay)(c)`
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
`,u=(0,l.Ay)(c)`
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
`,m=(0,l.Ay)(c)`
    background-color: ${a.l.blue};
    color: white;
    
    &:hover {
        background-color: #4A5FB0;
        box-shadow: ${s.x.large};
    }

    &:active {
        box-shadow: ${s.x.insetMedium};
    }
`,p=(0,l.Ay)(c)`
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
`,g=(0,l.Ay)(c)`
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
`,b=(0,l.Ay)(g)`
     background: ${a.l.green};
     
     &:hover {
            background: #5FA35F;
            box-shadow: ${s.x.large};
     }

     &:active {
            box-shadow: ${s.x.insetDark};
     }
 `,h=(0,l.Ay)(g)`
    background: ${a.l.orange};
    
    &:hover {
        background: #C98A4F;
        box-shadow: ${s.x.large};
    }

    &:active {
        box-shadow: ${s.x.insetDark};
    }
`,E=(0,l.Ay)(g)`
    background: ${a.l.red};
    
    &:hover {
        background: #C84D5C;
        box-shadow: ${s.x.large};
    }

    &:active {
        box-shadow: ${s.x.insetDark};
    }
`,y=e=>n.createElement(E,e,n.createElement(i.gc,{icon:d.APi})),k=e=>n.createElement(h,e,n.createElement(i.gc,{icon:d.G1Y})),w=e=>n.createElement(b,e,n.createElement(i.gc,{icon:d.ijD}));y.__docgenInfo={description:"",methods:[],displayName:"TimerDoneButton"},k.__docgenInfo={description:"",methods:[],displayName:"TimerPauseButton"},w.__docgenInfo={description:"",methods:[],displayName:"TimerPlayButton"}},"./src/theme/colors.ts"(e,t,r){r.d(t,{l:()=>n});let n={base:"#E0E5EC",baseLight:"#F5F7FA",baseDark:"#A3B1C6",baseBorder:"#738196",blue:"#5F7FD4",green:"#5FB36D",dark_green:"#4A8A54",red:"#D85F6F",dark_red:"#B84C5A",orange:"#D99B5F",dark_orange:"#B87A47",text_dark:"#3A3F47",text:"#4A4F57",text_light:"#6B7280",background:"#E0E5EC",card_background:"#E0E5EC",light_gray:"#F5F7FA",medium_gray:"#C9D1DC",dark_gray:"#8FA3BD"}},"./src/theme/radius.ts"(e,t,r){r.d(t,{Z:()=>n});let n={small:"12px",medium:"20px",large:"30px",full:"50%"}},"./src/theme/shadows.ts"(e,t,r){r.d(t,{x:()=>n});let n={insetLight:"inset 2px 2px 5px rgba(255, 255, 255, 0.7), inset -2px -2px 5px rgba(0, 0, 0, 0.1)",insetMedium:"inset 3px 3px 7px rgba(255, 255, 255, 0.8), inset -3px -3px 7px rgba(0, 0, 0, 0.15)",insetDark:"inset 5px 5px 10px rgba(255, 255, 255, 0.9), inset -5px -5px 10px rgba(0, 0, 0, 0.2)",light:"3px 3px 6px rgba(0, 0, 0, 0.1), -3px -3px 6px rgba(255, 255, 255, 0.7)",medium:"5px 5px 10px rgba(0, 0, 0, 0.15), -5px -5px 10px rgba(255, 255, 255, 0.8)",medium2:"5px 5px 12px rgba(0, 0, 0, 0.12), -5px -5px 12px rgba(255, 255, 255, 0.75)",large:"8px 8px 16px rgba(0, 0, 0, 0.2), -8px -8px 16px rgba(255, 255, 255, 0.9)"}}}]);
//# sourceMappingURL=components-buttons-buttons-stories.c65df79e.iframe.bundle.js.map