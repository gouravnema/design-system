/*! For license information please see widgets-navs-side_nav-stories.73437a88.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_gouravnema_design_system=self.webpackChunk_gouravnema_design_system||[]).push([["126"],{"./src/widgets/navs/side_nav.stories.tsx"(e,t,r){"use strict";r.r(t),r.d(t,{WithMoreLinks:()=>y,Default:()=>h,default:()=>f,NoLogo:()=>k,__namedExportsOrder:()=>_});var i=r("./node_modules/react/index.js"),n=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),o=r("./node_modules/@fortawesome/react-fontawesome/dist/index.js"),a=r("./src/theme/colors.ts"),s=r("./src/theme/shadows.ts"),l=r("./node_modules/classnames/index.js"),d=r.n(l);let c=n.Ay.aside`
    min-width: 250px;
    background-color: ${a.l.base};
    box-shadow: ${s.x.medium};
    padding: 20px 0;
    border-right: none;
    display: flex;
    flex-direction: column;
    transition: width 0.3s ease;
    position: sticky;
    top: 0;
    height: 100vh;
    overflow-y: auto;
    z-index: 900;
`,p=n.Ay.div`
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
            transition: all 0.3s ease;
            border-radius: 8px;
            margin: 0 10px;

            &:hover {
                background-color: ${a.l.baseLight};
                box-shadow: ${s.x.light};
            }

            &.active {
                background-color: ${a.l.blue};
                color: white;
                box-shadow: ${s.x.medium};
            }
        }
    }
`,g=n.Ay.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px 30px;
    position: relative;
`,u=e=>{let{links:t}=e;return i.createElement(c,null,i.createElement(g,null),i.createElement(p,null,i.createElement("ul",null,Object.entries(t).sort((e,t)=>e[1].order-t[1].order).map(e=>{let[t,r]=e;return i.createElement("li",{key:t},i.createElement("a",{href:r.to,style:{display:"flex",alignItems:"center",padding:"10px 20px"},className:d()({active:r.active}),onClick:r.onClick},i.createElement(o.gc,{icon:r.icon,style:{marginRight:"10px"}}),r.label))}))))};u.__docgenInfo={description:"",methods:[],displayName:"SideNav",props:{logo:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},links:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: SideNavLink }",signature:{properties:[{key:{name:"string"},value:{name:"SideNavLink",required:!0}}]}},description:""}}};var m=r("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");let x=n.Ay.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: #f0f2f5;
`,b=n.Ay.div`
  flex-grow: 1;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
`,f={title:"Widgets/navs/SideNav",component:u,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{logo:{control:"text"},links:{control:"object"}}},v=e=>{var t;let[r,n]=(0,i.useState)((null==(t=Object.values(e.links).find(e=>e.active))?void 0:t.value)||"home"),o=Object.fromEntries(Object.entries(e.links).map(e=>{let[t,i]=e;return[t,{...i,active:i.value===r,onClick:e=>{var t;e.preventDefault(),n(t=i.value),console.log(`Navigated to: ${t}`)}}]}));return i.createElement(x,null,i.createElement(u,{...e,links:o}),i.createElement(b,null,i.createElement("h2",null,"Current Section: ",r.charAt(0).toUpperCase()+r.slice(1)),i.createElement("p",null,"Content for the ",r," section would go here.")))},h=v.bind({});h.args={logo:"My App",links:{home:{to:"#home",label:"Home",icon:m.v02,order:1,value:"home",active:!0},profile:{to:"#profile",label:"Profile",icon:m.X46,order:2,value:"profile"},settings:{to:"#settings",label:"Settings",icon:m.dB,order:3,value:"settings"}},initialActiveLink:"home"};let y=v.bind({});y.args={logo:"Admin Dashboard",links:{dashboard:{to:"#dashboard",label:"Dashboard",icon:m.$Fj,order:1,value:"dashboard",active:!0},users:{to:"#users",label:"Users",icon:m.X46,order:2,value:"users"},messages:{to:"#messages",label:"Messages",icon:m.y_8,order:3,value:"messages"},settings:{to:"#settings",label:"Settings",icon:m.dB,order:4,value:"settings"}},initialActiveLink:"dashboard"};let k=v.bind({});k.args={links:{home:{to:"#home",label:"Home",icon:m.v02,order:1,value:"home",active:!0},profile:{to:"#profile",label:"Profile",icon:m.X46,order:2,value:"profile"}},initialActiveLink:"home"};let _=["Default","WithMoreLinks","NoLogo"]},"./src/theme/colors.ts"(e,t,r){"use strict";r.d(t,{l:()=>i});let i={base:"#E0E5EC",baseLight:"#F5F7FA",baseDark:"#A3B1C6",blue:"#5F7FD4",green:"#5FB36D",dark_green:"#4A8A54",red:"#D85F6F",dark_red:"#B84C5A",orange:"#D99B5F",dark_orange:"#B87A47",text_dark:"#3A3F47",text_light:"#6B7280",background:"#E0E5EC",card_background:"#E0E5EC",light_gray:"#F5F7FA",medium_gray:"#C9D1DC",dark_gray:"#8FA3BD"}},"./src/theme/shadows.ts"(e,t,r){"use strict";r.d(t,{x:()=>i});let i={insetLight:"inset 2px 2px 5px rgba(255, 255, 255, 0.7), inset -2px -2px 5px rgba(0, 0, 0, 0.1)",insetMedium:"inset 3px 3px 7px rgba(255, 255, 255, 0.8), inset -3px -3px 7px rgba(0, 0, 0, 0.15)",insetDark:"inset 5px 5px 10px rgba(255, 255, 255, 0.9), inset -5px -5px 10px rgba(0, 0, 0, 0.2)",light:"3px 3px 6px rgba(0, 0, 0, 0.1), -3px -3px 6px rgba(255, 255, 255, 0.7)",medium:"5px 5px 10px rgba(0, 0, 0, 0.15), -5px -5px 10px rgba(255, 255, 255, 0.8)",medium2:"5px 5px 12px rgba(0, 0, 0, 0.12), -5px -5px 12px rgba(255, 255, 255, 0.75)",large:"8px 8px 16px rgba(0, 0, 0, 0.2), -8px -8px 16px rgba(255, 255, 255, 0.9)"}},"./node_modules/classnames/index.js"(e){!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e="",n=0;n<arguments.length;n++){var o=arguments[n];o&&(e=i(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var n="";for(var o in e)t.call(e,o)&&e[o]&&(n=i(n,o));return n}(o)))}return e}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):"function"==typeof define&&"object"==typeof define.amd&&define.amd?define("classnames",[],function(){return r}):window.classNames=r}()}}]);
//# sourceMappingURL=widgets-navs-side_nav-stories.73437a88.iframe.bundle.js.map