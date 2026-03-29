/*! For license information please see widgets-navs-side_nav-stories.7c31e07f.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_gouravnema_design_system=self.webpackChunk_gouravnema_design_system||[]).push([["126"],{"./src/widgets/navs/side_nav.stories.tsx"(e,t,o){"use strict";o.r(t),o.d(t,{WithMoreLinks:()=>y,Default:()=>h,default:()=>v,NoLogo:()=>x,__namedExportsOrder:()=>k});var r=o("./node_modules/react/index.js"),n=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),i=o("./node_modules/@fortawesome/react-fontawesome/dist/index.js"),a=o("./src/theme.constants.ts"),l=o("./node_modules/classnames/index.js"),s=o.n(l);let d=n.Ay.aside`
    min-width: 250px;
    background-color: ${a.lm.card_background};
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    box-shadow: ${a.xc.medium};
    padding: 20px 0;
    border-right: 1px solid ${a.lm.light_gray};
    display: flex;
    flex-direction: column;
    transition: width 0.3s ease;
    position: sticky;
    top: 0;
    height: 100vh;
    overflow-y: auto;
    z-index: 900;
`,c=n.Ay.div`
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
            color: ${a.lm.text_dark};
            display: flex;
            align-items: center;
            padding: 10px 20px;
            transition: background-color 0.3s ease;

            &:hover {
                background-color: ${a.lm.light_gray};
            }

            &.active {
                background-color: ${a.lm.blue};
                color: white;
                box-shadow: ${a.xc.light};
            }
        }
    }
`,u=n.Ay.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px 30px;
    position: relative;
`,m=e=>{let{links:t}=e;return r.createElement(d,null,r.createElement(u,null),r.createElement(c,null,r.createElement("ul",null,Object.entries(t).sort((e,t)=>e[1].order-t[1].order).map(e=>{let[t,o]=e;return r.createElement("li",{key:t},r.createElement("a",{href:o.to,style:{display:"flex",alignItems:"center",padding:"10px 20px"},className:s()({active:o.active}),onClick:o.onClick},r.createElement(i.gc,{icon:o.icon,style:{marginRight:"10px"}}),o.label))}))))};m.__docgenInfo={description:"",methods:[],displayName:"SideNav",props:{logo:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},links:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: SideNavLink }",signature:{properties:[{key:{name:"string"},value:{name:"SideNavLink",required:!0}}]}},description:""}}};var g=o("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");let p=n.Ay.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: #f0f2f5;
`,f=n.Ay.div`
  flex-grow: 1;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
`,v={title:"Widgets/navs/SideNav",component:m,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{logo:{control:"text"},links:{control:"object"}}},b=e=>{var t;let[o,n]=(0,r.useState)((null==(t=Object.values(e.links).find(e=>e.active))?void 0:t.value)||"home"),i=Object.fromEntries(Object.entries(e.links).map(e=>{let[t,r]=e;return[t,{...r,active:r.value===o,onClick:e=>{var t;e.preventDefault(),n(t=r.value),console.log(`Navigated to: ${t}`)}}]}));return r.createElement(p,null,r.createElement(m,{...e,links:i}),r.createElement(f,null,r.createElement("h2",null,"Current Section: ",o.charAt(0).toUpperCase()+o.slice(1)),r.createElement("p",null,"Content for the ",o," section would go here.")))},h=b.bind({});h.args={logo:"My App",links:{home:{to:"#home",label:"Home",icon:g.v02,order:1,value:"home",active:!0},profile:{to:"#profile",label:"Profile",icon:g.X46,order:2,value:"profile"},settings:{to:"#settings",label:"Settings",icon:g.dB,order:3,value:"settings"}},initialActiveLink:"home"};let y=b.bind({});y.args={logo:"Admin Dashboard",links:{dashboard:{to:"#dashboard",label:"Dashboard",icon:g.$Fj,order:1,value:"dashboard",active:!0},users:{to:"#users",label:"Users",icon:g.X46,order:2,value:"users"},messages:{to:"#messages",label:"Messages",icon:g.y_8,order:3,value:"messages"},settings:{to:"#settings",label:"Settings",icon:g.dB,order:4,value:"settings"}},initialActiveLink:"dashboard"};let x=b.bind({});x.args={links:{home:{to:"#home",label:"Home",icon:g.v02,order:1,value:"home",active:!0},profile:{to:"#profile",label:"Profile",icon:g.X46,order:2,value:"profile"}},initialActiveLink:"home"};let k=["Default","WithMoreLinks","NoLogo"]},"./src/theme.constants.ts"(e,t,o){"use strict";o.d(t,{Ne:()=>n,Zz:()=>i,lm:()=>r,xc:()=>a});let r={blue:"#007AFF",green:"#34C759",red:"#FF3B30",orange:"#FF9500",light_gray:"#EFEFF4",medium_gray:"#C7C7CC",dark_gray:"#8E8E93",text_dark:"#1C1C1E",text_light:"#636366",background:"#F2F2F7",card_background:"rgba(255, 255, 255, 0.9)"},n={font_family:"Arial",font_weight:"normal"},i={small:"8px",medium:"12px"},a={light:"0 1px 3px rgba(0, 0, 0, 0.08)",medium:"0 4px 10px rgba(0, 0, 0, 0.1)"}},"./node_modules/classnames/index.js"(e){!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var e="",n=0;n<arguments.length;n++){var i=arguments[n];i&&(e=r(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var n="";for(var i in e)t.call(e,i)&&e[i]&&(n=r(n,i));return n}(i)))}return e}function r(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):"function"==typeof define&&"object"==typeof define.amd&&define.amd?define("classnames",[],function(){return o}):window.classNames=o}()}}]);
//# sourceMappingURL=widgets-navs-side_nav-stories.7c31e07f.iframe.bundle.js.map