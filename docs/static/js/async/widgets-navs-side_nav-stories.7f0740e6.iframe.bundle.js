/*! For license information please see widgets-navs-side_nav-stories.7f0740e6.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_gouravnema_design_system=self.webpackChunk_gouravnema_design_system||[]).push([["126"],{"./src/widgets/navs/side_nav.stories.tsx"(e,t,r){"use strict";r.r(t),r.d(t,{WithMoreLinks:()=>y,Default:()=>h,default:()=>v,NoLogo:()=>k,__namedExportsOrder:()=>x});var o=r("./node_modules/react/index.js"),n=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),i=r("./node_modules/@fortawesome/react-fontawesome/dist/index.js"),a=r("./src/theme/colors.ts"),l=r("./node_modules/classnames/index.js"),s=r.n(l);let d=n.Ay.aside`
    min-width: 250px;
    background-color: ${a.l.card_background};
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    box-shadow: ${"0 4px 10px rgba(0, 0, 0, 0.1)"};
    padding: 20px 0;
    border-right: 1px solid ${a.l.light_gray};
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
            color: ${a.l.text_dark};
            display: flex;
            align-items: center;
            padding: 10px 20px;
            transition: background-color 0.3s ease;

            &:hover {
                background-color: ${a.l.light_gray};
            }

            &.active {
                background-color: ${a.l.blue};
                color: white;
                box-shadow: ${"0 1px 3px rgba(0, 0, 0, 0.08)"};
            }
        }
    }
`,u=n.Ay.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px 30px;
    position: relative;
`,g=e=>{let{links:t}=e;return o.createElement(d,null,o.createElement(u,null),o.createElement(c,null,o.createElement("ul",null,Object.entries(t).sort((e,t)=>e[1].order-t[1].order).map(e=>{let[t,r]=e;return o.createElement("li",{key:t},o.createElement("a",{href:r.to,style:{display:"flex",alignItems:"center",padding:"10px 20px"},className:s()({active:r.active}),onClick:r.onClick},o.createElement(i.gc,{icon:r.icon,style:{marginRight:"10px"}}),r.label))}))))};g.__docgenInfo={description:"",methods:[],displayName:"SideNav",props:{logo:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},links:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: SideNavLink }",signature:{properties:[{key:{name:"string"},value:{name:"SideNavLink",required:!0}}]}},description:""}}};var p=r("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");let m=n.Ay.div`
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
`,v={title:"Widgets/navs/SideNav",component:g,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{logo:{control:"text"},links:{control:"object"}}},b=e=>{var t;let[r,n]=(0,o.useState)((null==(t=Object.values(e.links).find(e=>e.active))?void 0:t.value)||"home"),i=Object.fromEntries(Object.entries(e.links).map(e=>{let[t,o]=e;return[t,{...o,active:o.value===r,onClick:e=>{var t;e.preventDefault(),n(t=o.value),console.log(`Navigated to: ${t}`)}}]}));return o.createElement(m,null,o.createElement(g,{...e,links:i}),o.createElement(f,null,o.createElement("h2",null,"Current Section: ",r.charAt(0).toUpperCase()+r.slice(1)),o.createElement("p",null,"Content for the ",r," section would go here.")))},h=b.bind({});h.args={logo:"My App",links:{home:{to:"#home",label:"Home",icon:p.v02,order:1,value:"home",active:!0},profile:{to:"#profile",label:"Profile",icon:p.X46,order:2,value:"profile"},settings:{to:"#settings",label:"Settings",icon:p.dB,order:3,value:"settings"}},initialActiveLink:"home"};let y=b.bind({});y.args={logo:"Admin Dashboard",links:{dashboard:{to:"#dashboard",label:"Dashboard",icon:p.$Fj,order:1,value:"dashboard",active:!0},users:{to:"#users",label:"Users",icon:p.X46,order:2,value:"users"},messages:{to:"#messages",label:"Messages",icon:p.y_8,order:3,value:"messages"},settings:{to:"#settings",label:"Settings",icon:p.dB,order:4,value:"settings"}},initialActiveLink:"dashboard"};let k=b.bind({});k.args={links:{home:{to:"#home",label:"Home",icon:p.v02,order:1,value:"home",active:!0},profile:{to:"#profile",label:"Profile",icon:p.X46,order:2,value:"profile"}},initialActiveLink:"home"};let x=["Default","WithMoreLinks","NoLogo"]},"./src/theme/colors.ts"(e,t,r){"use strict";r.d(t,{l:()=>o});let o={blue:"#007AFF",green:"#34C759",dark_green:"#049729",red:"#FF3B30",dark_red:"#CF0B00",orange:"#FF9500",dark_orange:"#CF6500",light_gray:"#EFEFF4",medium_gray:"#C7C7CC",dark_gray:"#8E8E93",text_dark:"#1C1C1E",text_light:"#636366",background:"#F2F2F7",card_background:"rgba(255, 255, 255, 0.9)"}},"./node_modules/classnames/index.js"(e){!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e="",n=0;n<arguments.length;n++){var i=arguments[n];i&&(e=o(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var n="";for(var i in e)t.call(e,i)&&e[i]&&(n=o(n,i));return n}(i)))}return e}function o(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):"function"==typeof define&&"object"==typeof define.amd&&define.amd?define("classnames",[],function(){return r}):window.classNames=r}()}}]);
//# sourceMappingURL=widgets-navs-side_nav-stories.7f0740e6.iframe.bundle.js.map