"use strict";(self.webpackChunk_gouravnema_design_system=self.webpackChunk_gouravnema_design_system||[]).push([["810"],{"./src/layouts/background.stories.tsx":function(e,t,n){n.r(t),n.d(t,{default:()=>c,Default:()=>i,WithMultipleElements:()=>d,__namedExportsOrder:()=>u});var r=n("./node_modules/react/index.js"),a=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),s=n("./src/theme.constants.ts");let o=a.Ay.div`
    background: ${s.lm.background};
    width: 100vw;
    height: 100vh;
    display: flex;
    font-family: ${s.Ne.font_family};
    font-weight: ${s.Ne.font_weight};
`,l=a.Ay.div`
  padding: 20px;
  color: white;
  text-align: center;
  width: 100%;
`,c={title:"Layouts/Background",component:o,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{children:{control:"text"}}},i={args:{children:r.createElement(l,null,"This is content within the default background.")}},d={args:{children:r.createElement(l,null,r.createElement("h1",null,"Welcome"),r.createElement("p",null,"This background can contain various elements."),r.createElement("button",null,"Learn More"))}},u=["Default","WithMultipleElements"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: <ContentWrapper>This is content within the default background.</ContentWrapper>\n  }\n}",...i.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: <ContentWrapper>\n        <h1>Welcome</h1>\n        <p>This background can contain various elements.</p>\n        <button>Learn More</button>\n      </ContentWrapper>\n  }\n}",...d.parameters?.docs?.source}}}},"./src/theme.constants.ts":function(e,t,n){n.d(t,{Ne:()=>a,Zz:()=>s,lm:()=>r,xc:()=>o});let r={blue:"#007AFF",green:"#34C759",red:"#FF3B30",orange:"#FF9500",light_gray:"#EFEFF4",medium_gray:"#C7C7CC",dark_gray:"#8E8E93",text_dark:"#1C1C1E",text_light:"#636366",background:"#F2F2F7",card_background:"rgba(255, 255, 255, 0.9)"},a={font_family:"Arial",font_weight:"normal"},s={small:"8px",medium:"12px"},o={light:"0 1px 3px rgba(0, 0, 0, 0.08)",medium:"0 4px 10px rgba(0, 0, 0, 0.1)"}}}]);
//# sourceMappingURL=layouts-background-stories.c0b6aa7e.iframe.bundle.js.map