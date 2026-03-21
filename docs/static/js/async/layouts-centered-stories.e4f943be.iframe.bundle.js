"use strict";(self.webpackChunk_gouravnema_design_system=self.webpackChunk_gouravnema_design_system||[]).push([["802"],{"./src/layouts/centered.stories.tsx":function(e,t,n){n.r(t),n.d(t,{default:()=>a,WithDifferentSizes:()=>d,Default:()=>c,WithMultipleElements:()=>i,__namedExportsOrder:()=>u});var r=n("./node_modules/react/index.js"),s=n("./node_modules/styled-components/dist/styled-components.browser.esm.js");let o=s.Ay.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`,l=s.Ay.div`
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
  color: #333;
`,a={title:"Layouts/Centered",component:o,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{children:{control:"text"}}},c={args:{children:r.createElement(l,null,"This content is centered.")}},i={args:{children:r.createElement(l,null,r.createElement("h1",null,"Centered Title"),r.createElement("p",null,"This is a paragraph within the centered layout."),r.createElement("button",null,"Centered Button"))}},d={args:{children:r.createElement(r.Fragment,null,r.createElement(l,{style:{width:"200px",height:"100px",marginBottom:"10px"}},"Small Block"),r.createElement(l,{style:{width:"400px",height:"150px"}},"Medium Block"))}},u=["Default","WithMultipleElements","WithDifferentSizes"];c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: <ContentBlock>This content is centered.</ContentBlock>\n  }\n}",...c.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: <ContentBlock>\n        <h1>Centered Title</h1>\n        <p>This is a paragraph within the centered layout.</p>\n        <button>Centered Button</button>\n      </ContentBlock>\n  }\n}",...i.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: <>\n        <ContentBlock style={{\n        width: '200px',\n        height: '100px',\n        marginBottom: '10px'\n      }}>Small Block</ContentBlock>\n        <ContentBlock style={{\n        width: '400px',\n        height: '150px'\n      }}>Medium Block</ContentBlock>\n      </>\n  }\n}",...d.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=layouts-centered-stories.e4f943be.iframe.bundle.js.map