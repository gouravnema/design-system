"use strict";(self.webpackChunk_gouravnema_design_system=self.webpackChunk_gouravnema_design_system||[]).push([["370"],{"./src/widgets/form.stories.tsx":function(e,t,r){r.r(t),r.d(t,{WithCustomClass:()=>u,LoginForm:()=>i,__namedExportsOrder:()=>b,default:()=>c,ContactForm:()=>p});var o=r("./node_modules/react/index.js"),n=r("./node_modules/styled-components/dist/styled-components.browser.esm.js");let a=n.Ay.form`
 display: flex; 
`,s=e=>{let{children:t,onSubmit:r,className:n}=e;return o.createElement(a,{className:"form "+n,onSubmit:e=>{e.preventDefault(),r(e)}},t)};s.__docgenInfo={description:"",methods:[],displayName:"Form",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onSubmit:{required:!0,tsType:{name:"ReactFormEventHandler",raw:"React.FormEventHandler<HTMLFormElement>",elements:[{name:"HTMLFormElement"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};var m=r("./src/components/textbox/textinput.tsx"),l=r("./src/components/buttons/buttons.tsx");let d=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  background-color: #f9f9f9;
  width: 300px;
`,c={title:"Widgets/Form",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{onSubmit:{action:"submitted"},className:{control:"text"},children:{control:"object"}}},i={render:e=>o.createElement(s,e,o.createElement(d,null,o.createElement(m.k,{label:"Username",placeholder:"Enter your username"}),o.createElement(m.k,{label:"Password",placeholder:"Enter your password",type:"password"}),o.createElement(l.jn,{type:"submit"},"Login"))),args:{onSubmit:e=>{console.log("Form submitted with:",Object.fromEntries(new FormData(e).entries()))}}},p={render:e=>o.createElement(s,e,o.createElement(d,null,o.createElement(m.k,{label:"Name",placeholder:"Your Name"}),o.createElement(m.k,{label:"Email",placeholder:"Your Email",type:"email"}),o.createElement(m.k,{label:"Message",placeholder:"Your Message",as:"textarea",rows:"4"}),o.createElement(l.jn,{type:"submit"},"Send Message"))),args:{onSubmit:e=>{console.log("Contact form submitted with:",Object.fromEntries(new FormData(e).entries()))}}},u={render:e=>o.createElement(s,e,o.createElement(d,null,o.createElement(m.k,{label:"Field 1"}),o.createElement(l.jn,{type:"submit"},"Submit"))),args:{className:"my-custom-form",onSubmit:e=>console.log("Custom form submitted")}},b=["LoginForm","ContactForm","WithCustomClass"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:'{\n  render: args => <Form {...args}>\n      <FormContentWrapper>\n        <TextInput label="Username" placeholder="Enter your username" />\n        <TextInput label="Password" placeholder="Enter your password" type="password" />\n        <PrimaryButton type="submit">Login</PrimaryButton>\n      </FormContentWrapper>\n    </Form>,\n  args: {\n    onSubmit: target => {\n      const formData = new FormData(target);\n      const data = Object.fromEntries(formData.entries());\n      console.log(\'Form submitted with:\', data);\n    }\n  }\n}',...i.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:'{\n  render: args => <Form {...args}>\n      <FormContentWrapper>\n        <TextInput label="Name" placeholder="Your Name" />\n        <TextInput label="Email" placeholder="Your Email" type="email" />\n        <TextInput label="Message" placeholder="Your Message" as="textarea" rows="4" />\n        <PrimaryButton type="submit">Send Message</PrimaryButton>\n      </FormContentWrapper>\n    </Form>,\n  args: {\n    onSubmit: target => {\n      const formData = new FormData(target);\n      const data = Object.fromEntries(formData.entries());\n      console.log(\'Contact form submitted with:\', data);\n    }\n  }\n}',...p.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"{\n  render: args => <Form {...args}>\n      <FormContentWrapper>\n        <TextInput label=\"Field 1\" />\n        <PrimaryButton type=\"submit\">Submit</PrimaryButton>\n      </FormContentWrapper>\n    </Form>,\n  args: {\n    className: 'my-custom-form',\n    onSubmit: target => console.log('Custom form submitted')\n  }\n}",...u.parameters?.docs?.source}}}},"./src/components/buttons/buttons.tsx":function(e,t,r){r.d(t,{jn:()=>m,tA:()=>l,uJ:()=>s,yp:()=>a});var o=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),n=r("./src/theme.constants.ts");let a=o.Ay.button`
    width: calc(100% - 24px);
    padding: 12px;
    color: white;
    border: none;
    border-radius: ${n.Zz.small};
    font-size: 1rem;
    font-weight: 200;
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.1s ease;
    margin-top: 10px;
`,s=(0,o.Ay)(a)`
    border: 1px solid red;
`;(0,o.Ay)(a)`
    border: 1px solid blue;
`;let m=(0,o.Ay)(a)`
    background-color: ${n.lm.blue};
    &:hover {
        background-color: #0056b3;
        transform: translateY(-1px);
        box-shadow: 0 2px 5px rgba(0, 122, 255, 0.3);
    }
`,l=(0,o.Ay)(a)`
    background-color: ${n.lm.light_gray};
    color: ${n.lm.text_dark};
    border: 1px solid ${n.lm.medium_gray};
    &:hover {
        background-color: ${n.lm.medium_gray};
        transform: translateY(-1px);
        box-shadow: 0 2px 5px rgba(0, 122, 255, 0.3);
    }
`},"./src/components/textbox/textinput.tsx":function(e,t,r){r.d(t,{k:()=>m});var o=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),n=r("./node_modules/react/index.js"),a=r("./src/theme.constants.ts");let s=o.Ay.div`
    margin-bottom: 20px;
    text-align: left;
    label {
        display: block;
        margin-bottom: 8px;
        font-size: 0.9em;
        color: ${a.lm.text_light};
        font-weight: 500;
    }
    input {
        width: calc(100% - 24px);
        padding: 12px;
        border: 1px solid ${a.lm.medium_gray};
        border-radius: ${a.Zz.small};
        font-size: 1em;
        color: ${a.lm.text_dark};
        background-color: rgba(255, 255, 255, 0.7);
        transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }
`,m=e=>{let{label:t,...r}=e;return n.createElement(s,null,n.createElement("label",null,t),n.createElement("input",r))};m.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{label:{required:!0,tsType:{name:"string"},description:""}}}},"./src/theme.constants.ts":function(e,t,r){r.d(t,{Ne:()=>n,Zz:()=>a,lm:()=>o,xc:()=>s});let o={blue:"#007AFF",green:"#34C759",red:"#FF3B30",orange:"#FF9500",light_gray:"#EFEFF4",medium_gray:"#C7C7CC",dark_gray:"#8E8E93",text_dark:"#1C1C1E",text_light:"#636366",background:"#F2F2F7",card_background:"rgba(255, 255, 255, 0.9)"},n={font_family:"Arial",font_weight:"normal"},a={small:"8px",medium:"12px"},s={light:"0 1px 3px rgba(0, 0, 0, 0.08)",medium:"0 4px 10px rgba(0, 0, 0, 0.1)"}}}]);
//# sourceMappingURL=widgets-form-stories.eeff4367.iframe.bundle.js.map