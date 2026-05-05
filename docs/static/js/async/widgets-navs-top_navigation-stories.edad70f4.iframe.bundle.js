/*! For license information please see widgets-navs-top_navigation-stories.edad70f4.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_gouravnema_design_system=self.webpackChunk_gouravnema_design_system||[]).push([["821"],{"./src/widgets/navs/top_navigation.stories.tsx"(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>w,NoItems:()=>C,Default:()=>E,__namedExportsOrder:()=>j});var r=n("./node_modules/react/index.js"),o=n("./node_modules/styled-components/dist/styled-components.browser.esm.js");n("./src/components/avatar/avatar.tsx");var a=n("./src/components/cards/card.tsx");n("./src/components/charts/doughnutChart.tsx"),n("./src/components/switch/switch.tsx"),n("./src/components/pills/pills.tsx"),n("./src/components/sprites/sprite_builder.tsx");var s=n("./src/components/sprites/people/silhouette.tsx");n("./src/components/textbox/textinput.tsx"),n("./src/components/buttons/buttons.tsx"),n("./src/components/buttons/confirm_button.tsx");var i=n("./src/theme.constants.ts");let d=o.Ay.div`
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
        color: ${i.lm.blue};
    }
`,l=n.p+"static/image/static/media/logo.cde6702f.png";var c=n("./node_modules/@fortawesome/react-fontawesome/dist/index.js"),m=n("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");let u=(0,o.Ay)(a.Z)`
    width: calc(100% - 24px);
    min-height: 40px;
    max-height: 80px;
    padding: 0;
    margin: 5px;
    display: flex;
    gap: 10px;
    font-size: 1.25vw;
`,p=o.Ay.div`
    padding: 5px 10px;
    min-width: 50px;
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`,g=e=>{let{item:t}=e;return r.createElement(p,{key:t.id,onClick:t.onClick},t.icon&&r.createElement("span",{className:"icon"},r.createElement("i",{className:`icon-${t.icon}`})),r.createElement("span",{className:"label"},t.label))},x=e=>{let{collection:t}=e;return r.createElement("div",{key:t.label},r.createElement("span",null,t.label),r.createElement("div",null,t.items.map(e=>r.createElement(g,{key:e.id,item:e}))))},y=o.Ay.div`
    display: flex;
    gap: 5px;
    font-weight: 500;
    padding: 5px;
    flex-grow: 1;
    align-items: center;
    justify-content: flex-end;
`,b=o.Ay.div`
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
`,h=e=>{let{items:t}=e;return r.createElement(y,null,t.map(e=>"items"in e?r.createElement(x,{key:e.label,collection:e}):r.createElement(g,{key:e.id,item:e})))},v=e=>{let{data:t}=e;return r.createElement(b,null,r.createElement("div",{className:"img-holder"},(null==t?void 0:t.avatarUrl)&&r.createElement("img",{src:t.avatarUrl,alt:t.name})||r.createElement(s.R,{code:"head_1_2",rounded:!0,size:4})),r.createElement("div",null,null==t?void 0:t.name,r.createElement(c.gc,{icon:m.Jt$})))},f=e=>{let{title:t,profileData:n,items:o=[]}=e;return r.createElement(u,null,r.createElement(d,{title:t,logo:l}),r.createElement(h,{items:o}),r.createElement(v,{data:n}))};f.__docgenInfo={description:"",methods:[],displayName:"TopNavigation",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:"MenuItem | MenuCollection",elements:[{name:"signature",type:"object",raw:"{\n  label: string;\n  icon?: IconProp;\n  id: string;\n  onClick: (e: SyntheticEvent) => void;\n  isSelected?: boolean;\n}",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"icon",value:{name:"IconProp",required:!1}},{key:"id",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"(e: SyntheticEvent) => void",signature:{arguments:[{type:{name:"SyntheticEvent"},name:"e"}],return:{name:"void"}},required:!0}},{key:"isSelected",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:"{\n  items: MenuItem[];\n  label: string;\n}",signature:{properties:[{key:"items",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  label: string;\n  icon?: IconProp;\n  id: string;\n  onClick: (e: SyntheticEvent) => void;\n  isSelected?: boolean;\n}",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"icon",value:{name:"IconProp",required:!1}},{key:"id",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"(e: SyntheticEvent) => void",signature:{arguments:[{type:{name:"SyntheticEvent"},name:"e"}],return:{name:"void"}},required:!0}},{key:"isSelected",value:{name:"boolean",required:!1}}]}}],raw:"MenuItem[]",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}]}],raw:"Array<MenuItem | MenuCollection>"},description:"",defaultValue:{value:"[]",computed:!1}},title:{required:!1,tsType:{name:"string"},description:""},profileData:{required:!0,tsType:{name:"ProfileData"},description:""}}};let w={title:"Widgets/Navs/TopNavigation",component:f},_=e=>r.createElement(f,e),k=e=>()=>console.log(`${e} action triggered`),E=_.bind({});E.args={toggleShowSideNav:()=>{},title:"My Application Sample",parameters:{layout:"center"},profileData:{name:"John Doe"},items:[{id:"home",label:"Home",onClick:k("item-click-home")},{id:"settings",label:"Settings",onClick:k("item-click-settings")}]};let C=_.bind({});C.args={toggleShowSideNav:k("toggleShowSideNav"),items:[]};let j=["Default","NoItems"]},"./src/components/avatar/avatar.tsx"(e,t,n){"use strict";n.d(t,{e:()=>i});var r=n("./node_modules/react/index.js"),o=n("./node_modules/styled-components/dist/styled-components.browser.esm.js");let a=n.p+"static/image/static/media/heads_sprite.535371b9.webp",s=o.Ay.img`
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  border-radius: 50%;
  object-fit: cover;
`,i=e=>{let{size:t=50,src:n,alt:o="User Avatar",...i}=e;return r.createElement(s,{size:t,src:n||a,alt:o,...i})};i.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"50",computed:!1}},src:{required:!1,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'User Avatar'",computed:!1}}}}},"./src/components/buttons/buttons.tsx"(e,t,n){"use strict";n.d(t,{tA:()=>u,pE:()=>c,MG:()=>b,wx:()=>h,jn:()=>m,yi:()=>v,yp:()=>d,uJ:()=>l});var r=n("./node_modules/react/index.js"),o=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),a=n("./src/theme/colors.ts"),s=n("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),i=n("./node_modules/@fortawesome/react-fontawesome/dist/index.js");let d=o.Ay.button`
    width: calc(100% - 24px);
    padding: 12px;
    color: white;
    border: none;
    border-radius: ${"8px"};
    font-size: 1rem;
    font-weight: 200;
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.1s ease;
    margin-top: 10px;
`,l=(0,o.Ay)(d)`
    border: 1px solid red;
    background: white;
    color:red;
`,c=(0,o.Ay)(d)`
    border: 1px solid blue;
    background: white;
    color:blue;
`,m=(0,o.Ay)(d)`
    background-color: ${a.l.blue};
    &:hover {
        background-color: #0056b3;
        transform: translateY(-1px);
        box-shadow: 0 2px 5px rgba(0, 122, 255, 0.3);
    }
`,u=(0,o.Ay)(d)`
    background-color: ${a.l.light_gray};
    color: ${a.l.text_dark};
    border: 1px solid ${a.l.medium_gray};
    &:hover {
        background-color: ${a.l.medium_gray};
        transform: translateY(-1px);
        box-shadow: 0 2px 5px rgba(0, 122, 255, 0.3);
    }
`,p=(0,o.Ay)(d)`
    color: white;
    border: none;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: background-color 0.2s ease, transform 0.1s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 2px 5px rgba(0, 122, 255, 0.3);
    }
`,g=(0,o.Ay)(p)`
     background: ${a.l.green};
     &:hover {
            background: ${a.l.dark_green};
     }
 `,x=(0,o.Ay)(p)`
    background: ${a.l.orange};
    &:hover {
        background: ${a.l.dark_orange};
    }
`,y=(0,o.Ay)(p)`
    background: ${a.l.red};
    &:hover {
        background: ${a.l.dark_red};
    }
`,b=e=>r.createElement(y,e,r.createElement(i.gc,{icon:s.APi})),h=e=>r.createElement(x,e,r.createElement(i.gc,{icon:s.G1Y})),v=e=>r.createElement(g,e,r.createElement(i.gc,{icon:s.ijD}));b.__docgenInfo={description:"",methods:[],displayName:"TimerDoneButton"},h.__docgenInfo={description:"",methods:[],displayName:"TimerPauseButton"},v.__docgenInfo={description:"",methods:[],displayName:"TimerPlayButton"}},"./src/components/buttons/confirm_button.tsx"(e,t,n){"use strict";n.d(t,{Z:()=>d});var r=n("./node_modules/react/index.js"),o=n("./src/components/buttons/buttons.tsx"),a=n("./src/widgets/modal/modal.tsx"),s=n("./node_modules/styled-components/dist/styled-components.browser.esm.js");let i=s.Ay.div`
    padding:10px;
    display: flex;
    flex-direction: column;
    p.description{
        margin: 10px 0;
    }
    div.confirm-actions{
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        gap: 10px;
    }
`,d=e=>{let{onConfirm:t=()=>{},onCancel:n=()=>{},label:s="",confirmText:d="Are you sure?",confirmTitle:l="Confirmation?",ButtonComponent:c=o.tA,...m}=e,[u,p]=r.useState(!1),g=r.createElement(a.a,{onClose:()=>p(!1),shouldShow:u},r.createElement(i,{className:"confirm-modal"},r.createElement("h3",null,l),r.createElement("p",{className:"description"},d),r.createElement("div",{className:"confirm-actions"},r.createElement(o.tA,{onClick:e=>{p(!1),n(e)}},"Cancel"),r.createElement(o.jn,{onClick:e=>{p(!1),t(e)}},"Confirm")))),x=r.createElement(c,{...m,onClick:e=>{e.preventDefault(),p(!0)}},s);return r.createElement(r.Fragment,null,u?g:x)};d.__docgenInfo={description:"",methods:[],displayName:"ConfirmButton",props:{onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {\n}",computed:!1}},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {\n}",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},confirmText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Are you sure?"',computed:!1}},confirmTitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Confirmation?"',computed:!1}},ButtonComponent:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<any>",elements:[{name:"any"}]},description:"",defaultValue:{value:"styled(Buttons)`\n    background-color: ${COLORS.light_gray};\n    color: ${COLORS.text_dark};\n    border: 1px solid ${COLORS.medium_gray};\n    &:hover {\n        background-color: ${COLORS.medium_gray};\n        transform: translateY(-1px);\n        box-shadow: 0 2px 5px rgba(0, 122, 255, 0.3);\n    }\n`",computed:!1}}}}},"./src/components/cards/card.tsx"(e,t,n){"use strict";n.d(t,{Z:()=>a});var r=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),o=n("./src/theme.constants.ts");let a=r.Ay.div`
    background-color: ${o.lm.card_background};
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    padding: 10px;
    border-radius: ${o.Zz.medium};
    box-shadow: ${o.xc.medium};
    border: 1px solid rgba(255, 255, 255, 0.5);
    width: 100%;
    text-align: center;
    box-sizing: border-box;
`},"./src/components/charts/doughnutChart.tsx"(e,t,n){"use strict";n.d(t,{l:()=>c});var r=n("./node_modules/react/index.js"),o=n("./node_modules/recharts/es6/component/ResponsiveContainer.js"),a=n("./node_modules/recharts/es6/chart/PieChart.js"),s=n("./node_modules/recharts/es6/polar/Pie.js"),i=n("./node_modules/recharts/es6/component/Cell.js"),d=n("./node_modules/recharts/es6/component/Tooltip.js");let l=["#0088FE","#00C49F","#FFBB28","#FF8042"],c=e=>{let{chartName:t="",data:n}=e;return n.reduce((e,t)=>e+t.value,0),r.createElement(o.u,{width:"100%",height:"100%"},r.createElement(a.r,null,r.createElement(s.Fq,{data:n,dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",innerRadius:"60%",outerRadius:"80%",fill:"#8884d8",labelLine:!1},n.map((e,t)=>r.createElement(i.f,{key:`cell-${t}`,fill:e.color?e.color:l[t%l.length]}))),r.createElement(d.m,null),r.createElement("text",{x:"50%",y:"50%",textAnchor:"middle",dominantBaseline:"middle",style:{fontSize:"1vw",fontWeight:"bold"}},t)))};c.__docgenInfo={description:"",methods:[],displayName:"DoughnutChart",props:{chartName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},data:{required:!0,tsType:{name:"Array",elements:[{name:"ChartDataItem"}],raw:"ChartDataItem[]"},description:""}}}},"./src/components/pills/pills.tsx"(e,t,n){"use strict";n.d(t,{Ai:()=>l,U6:()=>c,gI:()=>d});var r=n("./node_modules/react/index.js"),o=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),a=n("./src/theme.constants.ts");let s=o.Ay.span`
    padding: 5px;
    border-radius: ${a.Zz.small};
`,i=e=>{let{label:t,children:n,...o}=e;return r.createElement(s,o," ",t," :  ",r.createElement("em",null,n))},d=(0,o.Ay)(i)`
    background: ${a.lm.blue};
    color: white;
`,l=(0,o.Ay)(i)`
    background: ${a.lm.medium_gray};
    color: ${a.lm.text_dark};
`,c=(0,o.Ay)(i)`
    color: ${a.lm.text_light};
    border: 1px solid ${a.lm.light_gray};
`},"./src/components/sprites/people/silhouette.tsx"(e,t,n){"use strict";n.d(t,{R:()=>d});var r=n("./node_modules/react/index.js");let o=n.p+"static/image/static/media/heads_sprite.535371b9.webp";var a=n("./src/components/sprites/sprite_builder.tsx");let s=[8,79,151,223],i=[9,82,155,226].reduce((e,t,n)=>(s.forEach((r,o)=>{e[`head_${n+1}_${o+1}`]={x:t,y:r}}),e),{}),d=e=>{let{code:t,rounded:n,size:s=10}=e,d=i[t],l=s/64;return d?r.createElement(a.k,{rounded:n,width:s,height:s,maxSize:"64px",positionX:d.x*l,positionY:d.y*l,src:o,size:300*l}):null};d.__docgenInfo={description:"",methods:[],displayName:"Silhouette",props:{rounded:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10",computed:!1}},code:{required:!0,tsType:{name:"string"},description:""}}}},"./src/components/sprites/sprite_builder.tsx"(e,t,n){"use strict";n.d(t,{k:()=>d});var r=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),o=n("./node_modules/react/index.js"),a=n("./node_modules/classnames/index.js"),s=n.n(a);let i=r.Ay.div`
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
`,d=e=>{let{rounded:t=!1,width:n,height:r,positionX:a,positionY:d,...l}=e;return o.createElement(i,{className:s()({rounded:t}),width:n,height:r,positionX:a,positionY:d,...l})};d.__docgenInfo={description:"",methods:[],displayName:"Sprite",props:{width:{required:!0,tsType:{name:"number"},description:""},height:{required:!0,tsType:{name:"number"},description:""},positionX:{required:!0,tsType:{name:"number"},description:""},positionY:{required:!0,tsType:{name:"number"},description:""},src:{required:!0,tsType:{name:"string"},description:""},rounded:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"number"},description:""},maxSize:{required:!1,tsType:{name:"string"},description:""}}}},"./src/components/switch/switch.tsx"(e,t,n){"use strict";n.d(t,{d:()=>d});var r=n("./node_modules/react/index.js"),o=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),a=n("./src/theme.constants.ts");let s=o.Ay.button`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    width: 52px;
    height: 32px;
    padding: 2px;
    background-color: ${e=>e.isActive?a.lm.green:a.lm.medium_gray};
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
`,i=o.Ay.div`
    position: absolute;
    width: 28px;
    height: 28px;
    background-color: white;
    border-radius: 50%;
    transition: transform 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    left: 2px;

    ${s}[data-active='true'] & {
        transform: translateX(20px);
    }
`,d=e=>{let{defaultState:t=!1,onChange:n}=e,[o,a]=r.useState(t);return r.createElement(s,{"data-active":o,onClick:()=>{let e=!o;a(e),null==n||n(e)},role:"switch","aria-checked":o,type:"button",isActive:o},r.createElement(i,null))};d.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{defaultState:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""}}}},"./src/components/textbox/textinput.tsx"(e,t,n){"use strict";n.d(t,{k:()=>i});var r=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),o=n("./node_modules/react/index.js"),a=n("./src/theme.constants.ts");let s=r.Ay.div`
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
`,i=e=>{let{label:t,...n}=e;return o.createElement(s,null,o.createElement("label",null,t),o.createElement("input",n))};i.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{label:{required:!0,tsType:{name:"string"},description:""}}}},"./src/theme.constants.ts"(e,t,n){"use strict";n.d(t,{Ne:()=>o,Zz:()=>a,lm:()=>r,xc:()=>s});let r={blue:"#007AFF",green:"#34C759",red:"#FF3B30",orange:"#FF9500",light_gray:"#EFEFF4",medium_gray:"#C7C7CC",dark_gray:"#8E8E93",text_dark:"#1C1C1E",text_light:"#636366",background:"#F2F2F7",card_background:"rgba(255, 255, 255, 0.9)"},o={font_family:"Arial",font_weight:"normal"},a={small:"8px",medium:"12px"},s={light:"0 1px 3px rgba(0, 0, 0, 0.08)",medium:"0 4px 10px rgba(0, 0, 0, 0.1)"}},"./src/theme/colors.ts"(e,t,n){"use strict";n.d(t,{l:()=>r});let r={blue:"#007AFF",green:"#34C759",dark_green:"#049729",red:"#FF3B30",dark_red:"#CF0B00",orange:"#FF9500",dark_orange:"#CF6500",light_gray:"#EFEFF4",medium_gray:"#C7C7CC",dark_gray:"#8E8E93",text_dark:"#1C1C1E",text_light:"#636366",background:"#F2F2F7",card_background:"rgba(255, 255, 255, 0.9)"}},"./src/widgets/modal/modal.tsx"(e,t,n){"use strict";n.d(t,{a:()=>l});var r=n("./node_modules/react/index.js"),o=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),a=n("./src/components/cards/card.tsx"),s=n("./node_modules/@fortawesome/react-fontawesome/dist/index.js"),i=n("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");let d=o.Ay.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: white;
    top: 0;
    left: 0;
    z-index: 40;
    display: flex;
    justify-content: center;
    align-items: center;
    .modal-card{
        opacity: 1;
        max-width: 50vw;
        height: max-content;
        display: flex;
        flex-direction: column;
        .close{
            cursor: pointer;
            width: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 9px;
            border-radius: 68%;
            align-self: flex-end;
            &:hover{
                box-shadow: 0 1px 5px rgba(0,0,0,0.2);
            }
            &:active {
                box-shadow: inset 0 1px 5px rgba(2, 0, 255, 0.5);
            }
        }
        .content{
            display: flex;
            flex-direction: column;
        }
    }
`,l=e=>{let{children:t,shouldShow:n,onClose:o}=e;return n?r.createElement(d,null,r.createElement(a.Z,{className:"modal-card"},r.createElement("div",{className:"close",role:"button",onClick:o},r.createElement(s.gc,{icon:i.yYc})),r.createElement("div",{className:"content"},t))):null};l.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},shouldShow:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./node_modules/classnames/index.js"(e){!function(){"use strict";var t={}.hasOwnProperty;function n(){for(var e="",o=0;o<arguments.length;o++){var a=arguments[o];a&&(e=r(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var o="";for(var a in e)t.call(e,a)&&e[a]&&(o=r(o,a));return o}(a)))}return e}function r(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):"function"==typeof define&&"object"==typeof define.amd&&define.amd?define("classnames",[],function(){return n}):window.classNames=n}()}}]);
//# sourceMappingURL=widgets-navs-top_navigation-stories.edad70f4.iframe.bundle.js.map