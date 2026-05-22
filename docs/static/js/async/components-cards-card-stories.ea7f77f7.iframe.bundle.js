"use strict";(self.webpackChunk_gouravnema_design_system=self.webpackChunk_gouravnema_design_system||[]).push([["177"],{"./src/components/cards/card.stories.tsx"(e,t,r){r.r(t),r.d(t,{Default:()=>s,LargeCard:()=>l,WithCustomContent:()=>d,__namedExportsOrder:()=>o,default:()=>n});var a=r("./node_modules/react/index.js");let n={title:"Components/Card",component:r("./src/components/cards/card.tsx").Z,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{children:{control:"text"}}},s={args:{children:"This is a default card."}},d={args:{children:a.createElement("div",null,a.createElement("h3",null,"Custom Card Title"),a.createElement("p",null,"This card contains custom HTML content."),a.createElement("button",null,"Click Me"))}},l={args:{children:a.createElement("div",{style:{padding:"20px",fontSize:"1.2em"}},a.createElement("h2",null,"A Larger Card"),a.createElement("p",null,"This card demonstrates more content and a slightly larger size due to internal padding."))}},o=["Default","WithCustomContent","LargeCard"]},"./src/components/cards/card.tsx"(e,t,r){r.d(t,{Z:()=>s});var a=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),n=r("./src/theme.constants.ts");let s=a.Ay.div`
    background-color: ${n.lm.base};
    padding: 20px;
    border-radius: ${n.Zz.medium};
    box-shadow: ${n.xc.medium};
    border: none;
    width: 100%;
    text-align: center;
    box-sizing: border-box;
    transition: all 0.3s ease;

    &:hover {
        box-shadow: ${n.xc.large};
        transform: translateY(-2px);
    }
`},"./src/theme.constants.ts"(e,t,r){r.d(t,{Ne:()=>n,Zz:()=>s,lm:()=>a,xc:()=>d});let a={base:"#E0E5EC",baseLight:"#F5F7FA",baseDark:"#A3B1C6",blue:"#5F7FD4",green:"#5FB36D",dark_green:"#4A8A54",red:"#D85F6F",dark_red:"#B84C5A",orange:"#D99B5F",dark_orange:"#B87A47",text_dark:"#3A3F47",text_light:"#6B7280",background:"#E0E5EC",card_background:"#E0E5EC",light_gray:"#F5F7FA",medium_gray:"#C9D1DC",dark_gray:"#8FA3BD"},n={font_family:"Arial",font_weight:"normal"},s={small:"12px",medium:"20px",large:"30px",full:"50%"},d={insetLight:"inset 2px 2px 5px rgba(255, 255, 255, 0.7), inset -2px -2px 5px rgba(0, 0, 0, 0.1)",insetMedium:"inset 3px 3px 7px rgba(255, 255, 255, 0.8), inset -3px -3px 7px rgba(0, 0, 0, 0.15)",insetDark:"inset 5px 5px 10px rgba(255, 255, 255, 0.9), inset -5px -5px 10px rgba(0, 0, 0, 0.2)",light:"3px 3px 6px rgba(0, 0, 0, 0.1), -3px -3px 6px rgba(255, 255, 255, 0.7)",medium:"5px 5px 10px rgba(0, 0, 0, 0.15), -5px -5px 10px rgba(255, 255, 255, 0.8)",medium2:"5px 5px 12px rgba(0, 0, 0, 0.12), -5px -5px 12px rgba(255, 255, 255, 0.75)",large:"8px 8px 16px rgba(0, 0, 0, 0.2), -8px -8px 16px rgba(255, 255, 255, 0.9)"}}}]);
//# sourceMappingURL=components-cards-card-stories.ea7f77f7.iframe.bundle.js.map