/*! For license information please see widgets-navs-side_nav-stories.b7230181.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_gouravnema_design_system=self.webpackChunk_gouravnema_design_system||[]).push([["126"],{"./src/widgets/navs/side_nav.stories.tsx":function(e,n,t){"use strict";t.r(n),t.d(n,{default:()=>v,WithMoreLinks:()=>y,Default:()=>h,NoLogo:()=>b,__namedExportsOrder:()=>x});var i=t("./node_modules/react/index.js"),a=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=t("./node_modules/@fortawesome/react-fontawesome/dist/index.js"),o=t("./src/theme.constants.ts"),l=t("./node_modules/classnames/index.js"),s=t.n(l);let c=a.Ay.aside`
    min-width: 250px;
    background-color: ${o.lm.card_background};
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    box-shadow: ${o.xc.medium};
    padding: 20px 0;
    border-right: 1px solid ${o.lm.light_gray};
    display: flex;
    flex-direction: column;
    transition: width 0.3s ease;
    position: sticky;
    top: 0;
    height: 100vh;
    overflow-y: auto;
    z-index: 900;
`,d=a.Ay.div`
    flex-grow: 1;

    ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
            display: list-item;
            text-align: -webkit-match-parent;
            unicode-bidi: isolate;
        }

        a {
            text-decoration: none;
            color: ${o.lm.text_dark};
            display: flex;
            align-items: center;
            padding: 10px 20px;
            transition: background-color 0.3s ease;

            &:hover {
                background-color: ${o.lm.light_gray};
            }

            &.active {
                background-color: ${o.lm.blue};
                color: white;
                box-shadow: ${o.xc.light};
            }
        }
    }
`,u=a.Ay.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px 30px;
    position: relative;
`,p=e=>{let{links:n}=e;return i.createElement(c,null,i.createElement(u,null),i.createElement(d,null,i.createElement("ul",null,Object.entries(n).sort((e,n)=>e[1].order-n[1].order).map(e=>{let[n,t]=e;return i.createElement("li",{key:n},i.createElement("a",{href:t.to,style:{display:"flex",alignItems:"center",padding:"10px 20px"},className:s()({active:t.active}),onClick:t.onClick},i.createElement(r.gc,{icon:t.icon,style:{marginRight:"10px"}}),t.label))}))))};p.__docgenInfo={description:"",methods:[],displayName:"SideNav",props:{logo:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},links:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: SideNavLink }",signature:{properties:[{key:{name:"string"},value:{name:"SideNavLink",required:!0}}]}},description:""}}};var k=t("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");let g=a.Ay.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: #f0f2f5;
`,m=a.Ay.div`
  flex-grow: 1;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
`,v={title:"Widgets/navs/SideNav",component:p,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{logo:{control:"text"},links:{control:"object"}}},f=e=>{var n;let[t,a]=(0,i.useState)((null==(n=Object.values(e.links).find(e=>e.active))?void 0:n.value)||"home"),r=Object.fromEntries(Object.entries(e.links).map(e=>{let[n,i]=e;return[n,{...i,active:i.value===t,onClick:e=>{var n;e.preventDefault(),a(n=i.value),console.log(`Navigated to: ${n}`)}}]}));return i.createElement(g,null,i.createElement(p,{...e,links:r}),i.createElement(m,null,i.createElement("h2",null,"Current Section: ",t.charAt(0).toUpperCase()+t.slice(1)),i.createElement("p",null,"Content for the ",t," section would go here.")))},h=f.bind({});h.args={logo:"My App",links:{home:{to:"#home",label:"Home",icon:k.v02,order:1,value:"home",active:!0},profile:{to:"#profile",label:"Profile",icon:k.X46,order:2,value:"profile"},settings:{to:"#settings",label:"Settings",icon:k.dB,order:3,value:"settings"}},initialActiveLink:"home"};let y=f.bind({});y.args={logo:"Admin Dashboard",links:{dashboard:{to:"#dashboard",label:"Dashboard",icon:k.$Fj,order:1,value:"dashboard",active:!0},users:{to:"#users",label:"Users",icon:k.X46,order:2,value:"users"},messages:{to:"#messages",label:"Messages",icon:k.y_8,order:3,value:"messages"},settings:{to:"#settings",label:"Settings",icon:k.dB,order:4,value:"settings"}},initialActiveLink:"dashboard"};let b=f.bind({});b.args={links:{home:{to:"#home",label:"Home",icon:k.v02,order:1,value:"home",active:!0},profile:{to:"#profile",label:"Profile",icon:k.X46,order:2,value:"profile"}},initialActiveLink:"home"};let x=["Default","WithMoreLinks","NoLogo"];h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"(args: any) => {\n  const [activeLink, setActiveLink] = useState(Object.values(args.links).find(link => link.active)?.value || 'home');\n  const handleLinkClick = linkValue => {\n    setActiveLink(linkValue);\n    // In a real app, this would navigate or update content\n    console.log(`Navigated to: ${linkValue}`);\n  };\n  const updatedLinks = Object.fromEntries(Object.entries(args.links).map(([key, link]) => [key, {\n    ...link,\n    active: link.value === activeLink,\n    onClick: (e: any) => {\n      e.preventDefault();\n      handleLinkClick(link.value);\n    }\n  }]));\n  return <StoryWrapper>\n      <SideNav {...args} links={updatedLinks} />\n      <ContentArea>\n        <h2>Current Section: {activeLink.charAt(0).toUpperCase() + activeLink.slice(1)}</h2>\n        <p>Content for the {activeLink} section would go here.</p>\n      </ContentArea>\n    </StoryWrapper>;\n}",...h.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:"(args: any) => {\n  const [activeLink, setActiveLink] = useState(Object.values(args.links).find(link => link.active)?.value || 'home');\n  const handleLinkClick = linkValue => {\n    setActiveLink(linkValue);\n    // In a real app, this would navigate or update content\n    console.log(`Navigated to: ${linkValue}`);\n  };\n  const updatedLinks = Object.fromEntries(Object.entries(args.links).map(([key, link]) => [key, {\n    ...link,\n    active: link.value === activeLink,\n    onClick: (e: any) => {\n      e.preventDefault();\n      handleLinkClick(link.value);\n    }\n  }]));\n  return <StoryWrapper>\n      <SideNav {...args} links={updatedLinks} />\n      <ContentArea>\n        <h2>Current Section: {activeLink.charAt(0).toUpperCase() + activeLink.slice(1)}</h2>\n        <p>Content for the {activeLink} section would go here.</p>\n      </ContentArea>\n    </StoryWrapper>;\n}",...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"(args: any) => {\n  const [activeLink, setActiveLink] = useState(Object.values(args.links).find(link => link.active)?.value || 'home');\n  const handleLinkClick = linkValue => {\n    setActiveLink(linkValue);\n    // In a real app, this would navigate or update content\n    console.log(`Navigated to: ${linkValue}`);\n  };\n  const updatedLinks = Object.fromEntries(Object.entries(args.links).map(([key, link]) => [key, {\n    ...link,\n    active: link.value === activeLink,\n    onClick: (e: any) => {\n      e.preventDefault();\n      handleLinkClick(link.value);\n    }\n  }]));\n  return <StoryWrapper>\n      <SideNav {...args} links={updatedLinks} />\n      <ContentArea>\n        <h2>Current Section: {activeLink.charAt(0).toUpperCase() + activeLink.slice(1)}</h2>\n        <p>Content for the {activeLink} section would go here.</p>\n      </ContentArea>\n    </StoryWrapper>;\n}",...b.parameters?.docs?.source}}}},"./src/theme.constants.ts":function(e,n,t){"use strict";t.d(n,{Ne:()=>a,Zz:()=>r,lm:()=>i,xc:()=>o});let i={blue:"#007AFF",green:"#34C759",red:"#FF3B30",orange:"#FF9500",light_gray:"#EFEFF4",medium_gray:"#C7C7CC",dark_gray:"#8E8E93",text_dark:"#1C1C1E",text_light:"#636366",background:"#F2F2F7",card_background:"rgba(255, 255, 255, 0.9)"},a={font_family:"Arial",font_weight:"normal"},r={small:"8px",medium:"12px"},o={light:"0 1px 3px rgba(0, 0, 0, 0.08)",medium:"0 4px 10px rgba(0, 0, 0, 0.1)"}},"./node_modules/classnames/index.js":function(e){!function(){"use strict";var n={}.hasOwnProperty;function t(){for(var e="",a=0;a<arguments.length;a++){var r=arguments[a];r&&(e=i(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return t.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var a="";for(var r in e)n.call(e,r)&&e[r]&&(a=i(a,r));return a}(r)))}return e}function i(e,n){return n?e?e+" "+n:e+n:e}e.exports?(t.default=t,e.exports=t):"function"==typeof define&&"object"==typeof define.amd&&define.amd?define("classnames",[],function(){return t}):window.classNames=t}()}}]);
//# sourceMappingURL=widgets-navs-side_nav-stories.b7230181.iframe.bundle.js.map