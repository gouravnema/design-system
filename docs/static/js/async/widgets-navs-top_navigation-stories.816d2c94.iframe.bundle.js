/*! For license information please see widgets-navs-top_navigation-stories.816d2c94.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_gouravnema_design_system=self.webpackChunk_gouravnema_design_system||[]).push([["821"],{"./src/widgets/navs/top_navigation.stories.tsx"(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>w,NoItems:()=>q,Default:()=>E,__namedExportsOrder:()=>$});var r=n("./node_modules/react/index.js"),i=n("./node_modules/styled-components/dist/styled-components.browser.esm.js");n("./src/components/avatar/avatar.tsx");var s=n("./src/components/cards/card.tsx");n("./src/components/charts/doughnutChart.tsx"),n("./src/components/switch/switch.tsx"),n("./src/components/pills/pills.tsx"),n("./src/components/sprites/sprite_builder.tsx");var o=n("./src/components/sprites/people/silhouette.tsx");n("./src/components/textbox/textinput.tsx");var a=n("./src/theme.constants.ts");let l=i.Ay.div`
    position: relative;
    padding: 5px 10px;
    margin: 5px 10px;
    &::before{
        content: "";
        display: inline-block;
        width: 50px;
        height: 50px;
        background-image: url(${e=>e.logo});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        vertical-align: middle;
        margin-right: 10px;
    }

    &::after {
        content: "${e=>e.title}";
        font-size: 1.5rem;
        font-weight: bold;
        display: inline-block;
        vertical-align: middle;
        color: ${a.lm.blue};
    }
`,d=n.p+"static/image/static/media/logo.cde6702f.png";var c=n("./node_modules/@fortawesome/react-fontawesome/dist/index.js"),m=n("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");let p=(0,i.Ay)(s.Z)`
    width: calc(100% - 24px);
    min-height: 40px;
    max-height: 80px;
    padding: 0;
    margin: 5px;
    display: flex;
    gap: 10px;
    font-size: 1.25vw;
`,u=i.Ay.div`
    padding: 5px 10px;
    min-width: 50px;
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`,g=e=>{let{item:t}=e;return r.createElement(u,{key:t.id,onClick:t.onClick},t.icon&&r.createElement("span",{className:"icon"},r.createElement("i",{className:`icon-${t.icon}`})),r.createElement("span",{className:"label"},t.label))},y=e=>{let{collection:t}=e;return r.createElement("div",{key:t.label},r.createElement("span",null,t.label),r.createElement("div",null,t.items.map(e=>r.createElement(g,{key:e.id,item:e}))))},h=i.Ay.div`
    display: flex;
    gap: 5px;
    font-weight: 500;
    padding: 5px;
    flex-grow: 1;
    align-items: center;
    justify-content: flex-end;
`,x=i.Ay.div`
    display: flex;
    gap: 5px;
    align-items: center;
    padding: 5px;
    flex-direction: row;

    >.img-holder {
        width: 5vw;
        height: 5vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`,b=e=>{let{items:t}=e;return r.createElement(h,null,t.map(e=>"items"in e?r.createElement(y,{key:e.label,collection:e}):r.createElement(g,{key:e.id,item:e})))},v=e=>{let{data:t}=e;return r.createElement(x,null,r.createElement("div",{className:"img-holder"},(null==t?void 0:t.avatarUrl)&&r.createElement("img",{src:t.avatarUrl,alt:t.name})||r.createElement(o.R,{code:"head_1_2",rounded:!0,size:4})),r.createElement("div",null,null==t?void 0:t.name,r.createElement(c.gc,{icon:m.Jt$})))},f=e=>{let{title:t,profileData:n,items:i=[]}=e;return r.createElement(p,null,r.createElement(l,{title:t,logo:d}),r.createElement(b,{items:i}),r.createElement(v,{data:n}))};f.__docgenInfo={description:"",methods:[],displayName:"TopNavigation",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:"MenuItem | MenuCollection",elements:[{name:"signature",type:"object",raw:"{\n  label: string;\n  icon?: IconProp;\n  id: string;\n  onClick: (e: SyntheticEvent) => void;\n  isSelected?: boolean;\n}",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"icon",value:{name:"IconProp",required:!1}},{key:"id",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"(e: SyntheticEvent) => void",signature:{arguments:[{type:{name:"SyntheticEvent"},name:"e"}],return:{name:"void"}},required:!0}},{key:"isSelected",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:"{\n  items: MenuItem[];\n  label: string;\n}",signature:{properties:[{key:"items",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  label: string;\n  icon?: IconProp;\n  id: string;\n  onClick: (e: SyntheticEvent) => void;\n  isSelected?: boolean;\n}",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"icon",value:{name:"IconProp",required:!1}},{key:"id",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"(e: SyntheticEvent) => void",signature:{arguments:[{type:{name:"SyntheticEvent"},name:"e"}],return:{name:"void"}},required:!0}},{key:"isSelected",value:{name:"boolean",required:!1}}]}}],raw:"MenuItem[]",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}]}],raw:"Array<MenuItem | MenuCollection>"},description:"",defaultValue:{value:"[]",computed:!1}},title:{required:!1,tsType:{name:"string"},description:""},profileData:{required:!0,tsType:{name:"ProfileData"},description:""}}};let w={title:"Widgets/Navs/TopNavigation",component:f},_=e=>r.createElement(f,e),k=e=>()=>console.log(`${e} action triggered`),E=_.bind({});E.args={toggleShowSideNav:()=>{},title:"My Application Sample",parameters:{layout:"center"},profileData:{name:"John Doe"},items:[{id:"home",label:"Home",onClick:k("item-click-home")},{id:"settings",label:"Settings",onClick:k("item-click-settings")}]};let q=_.bind({});q.args={toggleShowSideNav:k("toggleShowSideNav"),items:[]};let $=["Default","NoItems"]},"./src/components/avatar/avatar.tsx"(e,t,n){"use strict";n.d(t,{e:()=>a});var r=n("./node_modules/react/index.js"),i=n("./node_modules/styled-components/dist/styled-components.browser.esm.js");let s=n.p+"static/image/static/media/heads_sprite.535371b9.webp",o=i.Ay.img`
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  border-radius: 50%;
  object-fit: cover;
`,a=e=>{let{size:t=50,src:n,alt:i="User Avatar",...a}=e;return r.createElement(o,{size:t,src:n||s,alt:i,...a})};a.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"50",computed:!1}},src:{required:!1,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'User Avatar'",computed:!1}}}}},"./src/components/cards/card.tsx"(e,t,n){"use strict";n.d(t,{Z:()=>s});var r=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),i=n("./src/theme.constants.ts");let s=r.Ay.div`
    background-color: ${i.lm.card_background};
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    padding: 10px;
    border-radius: ${i.Zz.medium};
    box-shadow: ${i.xc.medium};
    border: 1px solid rgba(255, 255, 255, 0.5);
    width: 100%;
    text-align: center;
    box-sizing: border-box;
`},"./src/components/charts/doughnutChart.tsx"(e,t,n){"use strict";n.d(t,{l:()=>c});var r=n("./node_modules/react/index.js"),i=n("./node_modules/recharts/es6/component/ResponsiveContainer.js"),s=n("./node_modules/recharts/es6/chart/PieChart.js"),o=n("./node_modules/recharts/es6/polar/Pie.js"),a=n("./node_modules/recharts/es6/component/Cell.js"),l=n("./node_modules/recharts/es6/component/Tooltip.js");let d=["#0088FE","#00C49F","#FFBB28","#FF8042"],c=e=>{let{chartName:t="",data:n}=e;return n.reduce((e,t)=>e+t.value,0),r.createElement(i.u,{width:"100%",height:"100%"},r.createElement(s.r,null,r.createElement(o.Fq,{data:n,dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",innerRadius:"60%",outerRadius:"80%",fill:"#8884d8",labelLine:!1},n.map((e,t)=>r.createElement(a.f,{key:`cell-${t}`,fill:e.color?e.color:d[t%d.length]}))),r.createElement(l.m,null),r.createElement("text",{x:"50%",y:"50%",textAnchor:"middle",dominantBaseline:"middle",style:{fontSize:"1vw",fontWeight:"bold"}},t)))};c.__docgenInfo={description:"",methods:[],displayName:"DoughnutChart",props:{chartName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},data:{required:!0,tsType:{name:"Array",elements:[{name:"ChartDataItem"}],raw:"ChartDataItem[]"},description:""}}}},"./src/components/pills/pills.tsx"(e,t,n){"use strict";n.d(t,{Ai:()=>d,U6:()=>c,gI:()=>l});var r=n("./node_modules/react/index.js"),i=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),s=n("./src/theme.constants.ts");let o=i.Ay.span`
    padding: 5px;
    border-radius: ${s.Zz.small};
`,a=e=>{let{label:t,children:n,...i}=e;return r.createElement(o,i," ",t," :  ",r.createElement("em",null,n))},l=(0,i.Ay)(a)`
    background: ${s.lm.blue};
    color: white;
`,d=(0,i.Ay)(a)`
    background: ${s.lm.medium_gray};
    color: ${s.lm.text_dark};
`,c=(0,i.Ay)(a)`
    color: ${s.lm.text_light};
    border: 1px solid ${s.lm.light_gray};
`},"./src/components/sprites/people/silhouette.tsx"(e,t,n){"use strict";n.d(t,{R:()=>l});var r=n("./node_modules/react/index.js");let i=n.p+"static/image/static/media/heads_sprite.535371b9.webp";var s=n("./src/components/sprites/sprite_builder.tsx");let o=[8,79,151,223],a=[9,82,155,226].reduce((e,t,n)=>(o.forEach((r,i)=>{e[`head_${n+1}_${i+1}`]={x:t,y:r}}),e),{}),l=e=>{let{code:t,rounded:n,size:o=10}=e,l=a[t],d=o/64;return l?r.createElement(s.k,{rounded:n,width:o,height:o,maxSize:"64px",positionX:l.x*d,positionY:l.y*d,src:i,size:300*d}):null};l.__docgenInfo={description:"",methods:[],displayName:"Silhouette",props:{rounded:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10",computed:!1}},code:{required:!0,tsType:{name:"string"},description:""}}}},"./src/components/sprites/sprite_builder.tsx"(e,t,n){"use strict";n.d(t,{k:()=>l});var r=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),i=n("./node_modules/react/index.js"),s=n("./node_modules/classnames/index.js"),o=n.n(s);let a=r.Ay.div`
    width: ${e=>e.width}vw;
    height: ${e=>e.height}vw;
    background-image: url(${e=>e.src});
    background-position: ${e=>`-${e.positionX}vw -${e.positionY}vw`};
    background-size: ${e=>e.size+"vw"};
    background-repeat: no-repeat;
    &.rounded {
        border-radius: 50%;
    }
    max-height: ${e=>e.maxSize};
    max-width: ${e=>e.maxSize};
`,l=e=>{let{rounded:t=!1,width:n,height:r,positionX:s,positionY:l,...d}=e;return i.createElement(a,{className:o()({rounded:t}),width:n,height:r,positionX:s,positionY:l,...d})};l.__docgenInfo={description:"",methods:[],displayName:"Sprite",props:{width:{required:!0,tsType:{name:"number"},description:""},height:{required:!0,tsType:{name:"number"},description:""},positionX:{required:!0,tsType:{name:"number"},description:""},positionY:{required:!0,tsType:{name:"number"},description:""},src:{required:!0,tsType:{name:"string"},description:""},rounded:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"number"},description:""},maxSize:{required:!1,tsType:{name:"string"},description:""}}}},"./src/components/switch/switch.tsx"(e,t,n){"use strict";n.d(t,{d:()=>l});var r=n("./node_modules/react/index.js"),i=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),s=n("./src/theme.constants.ts");let o=i.Ay.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  width: 52px;
  height: 32px;
  padding: 2px;
  background-color: ${e=>e.isActive?s.lm.green:s.lm.medium_gray};
  border: none;
  border-radius: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  outline: none;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba(52, 199, 89, 0.1);
  }
`,a=i.Ay.div`
  position: absolute;
  width: 28px;
  height: 28px;
  background-color: white;
  border-radius: 50%;
  transition: transform 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  left: 2px;

  ${o}[data-active='true'] & {
    transform: translateX(20px);
  }
`,l=e=>{let{defaultState:t=!1,onChange:n}=e,[i,s]=r.useState(t);return r.createElement(o,{onClick:()=>{let e=!i;s(e),null==n||n(e)},role:"switch","aria-checked":i,type:"button"},r.createElement(a,null))};l.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{defaultState:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""}}}},"./src/components/textbox/textinput.tsx"(e,t,n){"use strict";n.d(t,{k:()=>a});var r=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),i=n("./node_modules/react/index.js"),s=n("./src/theme.constants.ts");let o=r.Ay.div`
    margin-bottom: 20px;
    text-align: left;
    label {
        display: block;
        margin-bottom: 8px;
        font-size: 0.9em;
        color: ${s.lm.text_light};
        font-weight: 500;
    }
    input {
        width: calc(100% - 24px);
        padding: 12px;
        border: 1px solid ${s.lm.medium_gray};
        border-radius: ${s.Zz.small};
        font-size: 1em;
        color: ${s.lm.text_dark};
        background-color: rgba(255, 255, 255, 0.7);
        transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }
`,a=e=>{let{label:t,...n}=e;return i.createElement(o,null,i.createElement("label",null,t),i.createElement("input",n))};a.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{label:{required:!0,tsType:{name:"string"},description:""}}}},"./src/theme.constants.ts"(e,t,n){"use strict";n.d(t,{Ne:()=>i,Zz:()=>s,lm:()=>r,xc:()=>o});let r={blue:"#007AFF",green:"#34C759",red:"#FF3B30",orange:"#FF9500",light_gray:"#EFEFF4",medium_gray:"#C7C7CC",dark_gray:"#8E8E93",text_dark:"#1C1C1E",text_light:"#636366",background:"#F2F2F7",card_background:"rgba(255, 255, 255, 0.9)"},i={font_family:"Arial",font_weight:"normal"},s={small:"8px",medium:"12px"},o={light:"0 1px 3px rgba(0, 0, 0, 0.08)",medium:"0 4px 10px rgba(0, 0, 0, 0.1)"}},"./node_modules/classnames/index.js"(e){!function(){"use strict";var t={}.hasOwnProperty;function n(){for(var e="",i=0;i<arguments.length;i++){var s=arguments[i];s&&(e=r(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var i="";for(var s in e)t.call(e,s)&&e[s]&&(i=r(i,s));return i}(s)))}return e}function r(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):"function"==typeof define&&"object"==typeof define.amd&&define.amd?define("classnames",[],function(){return n}):window.classNames=n}()}}]);
//# sourceMappingURL=widgets-navs-top_navigation-stories.816d2c94.iframe.bundle.js.map