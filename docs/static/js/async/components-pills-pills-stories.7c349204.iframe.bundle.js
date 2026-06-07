"use strict";(self.webpackChunk_gouravnema_design_system=self.webpackChunk_gouravnema_design_system||[]).push([["244"],{"./src/components/pills/pills.stories.tsx"(e,r,t){t.r(r),t.d(r,{Primary:()=>n,Secondary:()=>i,Transparent:()=>d,WithLongContent:()=>o,__namedExportsOrder:()=>p,default:()=>l});var a=t("./node_modules/react/index.js"),s=t("./src/components/pills/pills.tsx");let l={title:"Components/Pills",parameters:{layout:"centered"},tags:["autodocs"]},n={render:e=>a.createElement(s.gI,e),args:{label:"Status",children:"Active"}},i={render:e=>a.createElement(s.Ai,e),args:{label:"Category",children:"Marketing"}},d={render:e=>a.createElement(s.U6,e),args:{label:"Tag",children:"New Feature"}},o={render:e=>a.createElement(s.gI,e),args:{label:"Description",children:"This is a very long piece of content that should be displayed within the pill."}},p=["Primary","Secondary","Transparent","WithLongContent"]},"./src/components/pills/pills.tsx"(e,r,t){t.d(r,{Ai:()=>x,U6:()=>g,gI:()=>p});var a=t("./node_modules/react/index.js"),s=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),l=t("./src/theme/radius.ts"),n=t("./src/theme/colors.ts"),i=t("./src/theme/shadows.ts");let d=s.Ay.span`
    padding: 8px 12px;
    border-radius: ${l.Z.medium};
    display: inline-flex;
    align-items: center;
    gap: 4px;
    transition: all 0.3s ease;
`,o=e=>{let{label:r,children:t,...s}=e;return a.createElement(d,s," ",r," :  ",a.createElement("em",null,t))},p=(0,s.Ay)(o)`
    background: ${n.l.blue};
    color: white;
    box-shadow: ${i.x.light};

    &:hover {
        box-shadow: ${i.x.medium};
    }
`,x=(0,s.Ay)(o)`
    background: ${n.l.base};
    color: ${n.l.text_dark};
    box-shadow: ${i.x.light};

    &:hover {
        box-shadow: ${i.x.medium};
    }
`,g=(0,s.Ay)(o)`
    color: ${n.l.text_light};
    background: ${n.l.baseLight};
    box-shadow: ${i.x.light};

    &:hover {
        box-shadow: ${i.x.medium};
    }
`},"./src/theme/colors.ts"(e,r,t){t.d(r,{l:()=>a});let a={base:"#E0E5EC",baseLight:"#F5F7FA",baseDark:"#A3B1C6",baseBorder:"#738196",blue:"#5F7FD4",green:"#5FB36D",dark_green:"#4A8A54",red:"#D85F6F",dark_red:"#B84C5A",orange:"#D99B5F",dark_orange:"#B87A47",text_dark:"#3A3F47",text:"#4A4F57",text_light:"#6B7280",background:"#E0E5EC",card_background:"#E0E5EC",light_gray:"#F5F7FA",medium_gray:"#C9D1DC",dark_gray:"#8FA3BD"}},"./src/theme/radius.ts"(e,r,t){t.d(r,{Z:()=>a});let a={small:"12px",medium:"20px",large:"30px",full:"50%"}},"./src/theme/shadows.ts"(e,r,t){t.d(r,{x:()=>a});let a={insetLight:"inset 2px 2px 5px rgba(255, 255, 255, 0.7), inset -2px -2px 5px rgba(0, 0, 0, 0.1)",insetMedium:"inset 3px 3px 7px rgba(255, 255, 255, 0.8), inset -3px -3px 7px rgba(0, 0, 0, 0.15)",insetDark:"inset 5px 5px 10px rgba(255, 255, 255, 0.9), inset -5px -5px 10px rgba(0, 0, 0, 0.2)",light:"3px 3px 6px rgba(0, 0, 0, 0.1), -3px -3px 6px rgba(255, 255, 255, 0.7)",medium:"5px 5px 10px rgba(0, 0, 0, 0.15), -5px -5px 10px rgba(255, 255, 255, 0.8)",medium2:"5px 5px 12px rgba(0, 0, 0, 0.12), -5px -5px 12px rgba(255, 255, 255, 0.75)",large:"8px 8px 16px rgba(0, 0, 0, 0.2), -8px -8px 16px rgba(255, 255, 255, 0.9)"}}}]);
//# sourceMappingURL=components-pills-pills-stories.7c349204.iframe.bundle.js.map