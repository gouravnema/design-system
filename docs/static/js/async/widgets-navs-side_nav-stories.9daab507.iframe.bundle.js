/*! For license information please see widgets-navs-side_nav-stories.9daab507.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_gouravnema_design_system=self.webpackChunk_gouravnema_design_system||[]).push([["126"],{"./src/widgets/navs/side_nav.stories.tsx"(e,t,n){"use strict";n.r(t),n.d(t,{WithMoreLinks:()=>_,Default:()=>E,default:()=>k,NoLogo:()=>A,__namedExportsOrder:()=>$});var r=n("./node_modules/react/index.js"),i=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),a=n("./node_modules/@fortawesome/react-fontawesome/dist/index.js"),o=n("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),s=n("./node_modules/classnames/index.js"),l=n.n(s),d=n("./src/theme/colors.ts"),c=n("./src/theme/shadows.ts"),p=n("./src/theme/sizes.ts");let m=i.Ay.aside`
    min-width: 250px;
    background-color: ${d.l.base};
    box-shadow: ${c.x.medium};
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

    @media (max-width: ${p.n.mobile}) {
        display: none;
    }
`,x=i.Ay.div`
    flex-grow: 1;

    ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
            display: list-item;
            margin: ${p.F.xs};
        }

        a {
            text-decoration: none;
            color: ${d.l.text_dark};
            display: flex;
            align-items: center;
            padding: 12px 20px;
            transition: all 0.3s ease;
            border-radius: 8px;
            margin: 0 10px;

            &:hover {
                background-color: ${d.l.baseLight};
                box-shadow: ${c.x.light};
            }

            &.active {
                background-color: ${d.l.blue};
                color: white;
                box-shadow: ${c.x.medium};
            }
        }
    }
`,u=i.Ay.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px 30px;
    position: relative;
`,g=i.Ay.div`
    display: none;

    @media (max-width: ${p.n.mobile}) {
        display: block;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: 1200;
    }
`,b=i.Ay.button`
    width: 100%;
    border: none;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    cursor: pointer;

    .handle {
        width: 74px;
        height: 34px;
        border-radius: 18px 18px 0 0;
        background: ${d.l.base};
        box-shadow: ${c.x.medium};
        display: flex;
        align-items: center;
        justify-content: center;
    }
`,h=i.Ay.div`
    background: ${d.l.base};
    box-shadow: ${c.x.medium};
    border-radius: 20px 20px 0 0;
    overflow: hidden;
    transition: all 0.3s ease;

    max-height: ${e=>{let{open:t}=e;return t?"420px":"0px"}};

    ul {
        list-style: none;
        padding: 10px 0 20px;
        margin: 0;
    }

    li {
        margin: 0;
    }

    a {
        text-decoration: none;
        color: ${d.l.text_dark};
        display: flex;
        align-items: center;
        padding: 16px 20px;
        transition: all 0.2s ease;

        &:hover {
            background: ${d.l.baseLight};
        }

        &.active {
            background-color: ${d.l.blue};
            color: white;
        }
    }
`,f=e=>{let{logo:t,links:n}=e,[i,s]=(0,r.useState)(!1),d=Object.entries(n).sort((e,t)=>e[1].order-t[1].order);return r.createElement(r.Fragment,null,r.createElement(m,{className:"side-nav"},r.createElement(u,null,t),r.createElement(x,null,r.createElement("ul",null,d.map(e=>{let[t,n]=e;return r.createElement("li",{key:t},r.createElement("a",{href:n.to,className:l()({active:n.active}),onClick:n.onClick},r.createElement(a.gc,{icon:n.icon,style:{marginRight:"10px"}}),n.label))})))),r.createElement(g,null,r.createElement(b,{onClick:()=>s(!i)},r.createElement("div",{className:"handle"},r.createElement(a.gc,{icon:i?o.Jt$:o.w2A}))),r.createElement(h,{open:i},r.createElement("ul",null,d.map(e=>{let[t,n]=e;return r.createElement("li",{key:t},r.createElement("a",{href:n.to,className:l()({active:n.active}),onClick:e=>{n.onClick(e),s(!1)}},r.createElement(a.gc,{icon:n.icon,style:{marginRight:"10px"}}),n.label))})))))};f.__docgenInfo={description:"",methods:[],displayName:"SideNav",props:{logo:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},links:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: SideNavLink }",signature:{properties:[{key:{name:"string"},value:{name:"SideNavLink",required:!0}}]}},description:""}}};let v=i.Ay.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: #f0f2f5;
`,y=i.Ay.div`
  flex-grow: 1;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
`,k={title:"Widgets/navs/SideNav",component:f,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{logo:{control:"text"},links:{control:"object"}}},w=e=>{var t;let[n,i]=(0,r.useState)((null==(t=Object.values(e.links).find(e=>e.active))?void 0:t.value)||"home"),a=Object.fromEntries(Object.entries(e.links).map(e=>{let[t,r]=e;return[t,{...r,active:r.value===n,onClick:e=>{var t;e.preventDefault(),i(t=r.value),console.log(`Navigated to: ${t}`)}}]}));return r.createElement(v,null,r.createElement(f,{...e,links:a}),r.createElement(y,null,r.createElement("h2",null,"Current Section: ",n.charAt(0).toUpperCase()+n.slice(1)),r.createElement("p",null,"Content for the ",n," section would go here.")))},E=w.bind({});E.args={logo:"My App",links:{home:{to:"#home",label:"Home",icon:o.v02,order:1,value:"home",active:!0},profile:{to:"#profile",label:"Profile",icon:o.X46,order:2,value:"profile"},settings:{to:"#settings",label:"Settings",icon:o.dB,order:3,value:"settings"}},initialActiveLink:"home"};let _=w.bind({});_.args={logo:"Admin Dashboard",links:{dashboard:{to:"#dashboard",label:"Dashboard",icon:o.$Fj,order:1,value:"dashboard",active:!0},users:{to:"#users",label:"Users",icon:o.X46,order:2,value:"users"},messages:{to:"#messages",label:"Messages",icon:o.y_8,order:3,value:"messages"},settings:{to:"#settings",label:"Settings",icon:o.dB,order:4,value:"settings"}},initialActiveLink:"dashboard"};let A=w.bind({});A.args={links:{home:{to:"#home",label:"Home",icon:o.v02,order:1,value:"home",active:!0},profile:{to:"#profile",label:"Profile",icon:o.X46,order:2,value:"profile"}},initialActiveLink:"home"};let $=["Default","WithMoreLinks","NoLogo"]},"./src/theme/colors.ts"(e,t,n){"use strict";n.d(t,{l:()=>r});let r={base:"#E0E5EC",baseLight:"#F5F7FA",baseDark:"#A3B1C6",baseBorder:"#738196",blue:"#5F7FD4",green:"#5FB36D",dark_green:"#4A8A54",red:"#D85F6F",dark_red:"#B84C5A",orange:"#D99B5F",dark_orange:"#B87A47",text_dark:"#3A3F47",text:"#4A4F57",text_light:"#6B7280",background:"#E0E5EC",card_background:"#E0E5EC",light_gray:"#F5F7FA",medium_gray:"#C9D1DC",dark_gray:"#8FA3BD"}},"./src/theme/shadows.ts"(e,t,n){"use strict";n.d(t,{x:()=>r});let r={insetLight:"inset 2px 2px 5px rgba(255, 255, 255, 0.7), inset -2px -2px 5px rgba(0, 0, 0, 0.1)",insetMedium:"inset 3px 3px 7px rgba(255, 255, 255, 0.8), inset -3px -3px 7px rgba(0, 0, 0, 0.15)",insetDark:"inset 5px 5px 10px rgba(255, 255, 255, 0.9), inset -5px -5px 10px rgba(0, 0, 0, 0.2)",light:"3px 3px 6px rgba(0, 0, 0, 0.1), -3px -3px 6px rgba(255, 255, 255, 0.7)",medium:"5px 5px 10px rgba(0, 0, 0, 0.15), -5px -5px 10px rgba(255, 255, 255, 0.8)",medium2:"5px 5px 12px rgba(0, 0, 0, 0.12), -5px -5px 12px rgba(255, 255, 255, 0.75)",large:"8px 8px 16px rgba(0, 0, 0, 0.2), -8px -8px 16px rgba(255, 255, 255, 0.9)"}},"./src/theme/sizes.ts"(e,t,n){"use strict";n.d(t,{F:()=>r,n:()=>i});let r={xs:"8px",sm:"12px",md:"16px",lg:"20px",xl:"24px"},i={small_mobile:"480px",mobile:"768px",tablet:"1024px",desktop:"1440px",fullHd:"1920px",desktop4K:"3840px"}},"./node_modules/classnames/index.js"(e){!function(){"use strict";var t={}.hasOwnProperty;function n(){for(var e="",i=0;i<arguments.length;i++){var a=arguments[i];a&&(e=r(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var i="";for(var a in e)t.call(e,a)&&e[a]&&(i=r(i,a));return i}(a)))}return e}function r(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):"function"==typeof define&&"object"==typeof define.amd&&define.amd?define("classnames",[],function(){return n}):window.classNames=n}()}}]);
//# sourceMappingURL=widgets-navs-side_nav-stories.9daab507.iframe.bundle.js.map