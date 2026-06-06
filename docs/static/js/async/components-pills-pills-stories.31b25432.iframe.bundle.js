"use strict";(self.webpackChunk_gouravnema_design_system=self.webpackChunk_gouravnema_design_system||[]).push([["244"],{"./src/components/pills/pills.stories.tsx"(e,r,t){t.r(r),t.d(r,{Primary:()=>l,Secondary:()=>i,Transparent:()=>p,WithLongContent:()=>o,__namedExportsOrder:()=>x,default:()=>n});var a=t("./node_modules/react/index.js"),s=t("./src/components/pills/pills.tsx");let n={title:"Components/Pills",parameters:{layout:"centered"},tags:["autodocs"]},l={render:e=>a.createElement(s.gI,e),args:{label:"Status",children:"Active"}},i={render:e=>a.createElement(s.Ai,e),args:{label:"Category",children:"Marketing"}},p={render:e=>a.createElement(s.U6,e),args:{label:"Tag",children:"New Feature"}},o={render:e=>a.createElement(s.gI,e),args:{label:"Description",children:"This is a very long piece of content that should be displayed within the pill."}},x=["Primary","Secondary","Transparent","WithLongContent"]},"./src/components/pills/pills.tsx"(e,r,t){t.d(r,{Ai:()=>o,U6:()=>x,gI:()=>p});var a=t("./node_modules/react/index.js"),s=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),n=t("./src/theme.constants.ts");let l=s.Ay.span`
    padding: 8px 12px;
    border-radius: ${n.Zz.medium};
    display: inline-flex;
    align-items: center;
    gap: 4px;
    transition: all 0.3s ease;
`,i=e=>{let{label:r,children:t,...s}=e;return a.createElement(l,s," ",r," :  ",a.createElement("em",null,t))},p=(0,s.Ay)(i)`
    background: ${n.lm.blue};
    color: white;
    box-shadow: ${n.xc.light};

    &:hover {
        box-shadow: ${n.xc.medium};
    }
`,o=(0,s.Ay)(i)`
    background: ${n.lm.base};
    color: ${n.lm.text_dark};
    box-shadow: ${n.xc.light};

    &:hover {
        box-shadow: ${n.xc.medium};
    }
`,x=(0,s.Ay)(i)`
    color: ${n.lm.text_light};
    background: ${n.lm.baseLight};
    box-shadow: ${n.xc.light};

    &:hover {
        box-shadow: ${n.xc.medium};
    }
`},"./src/theme.constants.ts"(e,r,t){t.d(r,{Ne:()=>s,Zz:()=>n,lm:()=>a,xc:()=>l});let a={base:"#E0E5EC",baseLight:"#F5F7FA",baseDark:"#A3B1C6",blue:"#5F7FD4",green:"#5FB36D",dark_green:"#4A8A54",red:"#D85F6F",dark_red:"#B84C5A",orange:"#D99B5F",dark_orange:"#B87A47",text_dark:"#3A3F47",text_light:"#6B7280",background:"#E0E5EC",card_background:"#E0E5EC",light_gray:"#F5F7FA",medium_gray:"#C9D1DC",dark_gray:"#8FA3BD"},s={font_family:"Arial",font_weight:"normal"},n={small:"12px",medium:"20px",large:"30px",full:"50%"},l={insetLight:"inset 2px 2px 5px rgba(255, 255, 255, 0.7), inset -2px -2px 5px rgba(0, 0, 0, 0.1)",insetMedium:"inset 3px 3px 7px rgba(255, 255, 255, 0.8), inset -3px -3px 7px rgba(0, 0, 0, 0.15)",insetDark:"inset 5px 5px 10px rgba(255, 255, 255, 0.9), inset -5px -5px 10px rgba(0, 0, 0, 0.2)",light:"3px 3px 6px rgba(0, 0, 0, 0.1), -3px -3px 6px rgba(255, 255, 255, 0.7)",medium:"5px 5px 10px rgba(0, 0, 0, 0.15), -5px -5px 10px rgba(255, 255, 255, 0.8)",medium2:"5px 5px 12px rgba(0, 0, 0, 0.12), -5px -5px 12px rgba(255, 255, 255, 0.75)",large:"8px 8px 16px rgba(0, 0, 0, 0.2), -8px -8px 16px rgba(255, 255, 255, 0.9)"}}}]);
//# sourceMappingURL=components-pills-pills-stories.31b25432.iframe.bundle.js.map