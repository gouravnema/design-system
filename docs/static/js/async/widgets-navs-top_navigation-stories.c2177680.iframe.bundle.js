/*! For license information please see widgets-navs-top_navigation-stories.c2177680.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_gouravnema_design_system=self.webpackChunk_gouravnema_design_system||[]).push([["821"],{"./src/widgets/navs/top_navigation.stories.tsx"(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>k,NoItems:()=>C,Default:()=>A,__namedExportsOrder:()=>j});var o=n("./node_modules/react/index.js"),r=n("./node_modules/styled-components/dist/styled-components.browser.esm.js");n("./src/components/avatar/avatar.tsx");var a=n("./src/components/cards/card.tsx");n("./src/components/charts/doughnutChart.tsx"),n("./src/components/switch/switch.tsx"),n("./src/components/pills/pills.tsx"),n("./src/components/sprites/sprite_builder.tsx");var s=n("./src/components/sprites/people/silhouette.tsx");n("./src/components/textbox/textinput.tsx"),n("./src/components/buttons/buttons.tsx"),n("./src/components/buttons/confirm_button.tsx");var i=n("./src/theme.constants.ts");let d=r.Ay.div`
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
`,l=n.p+"static/image/static/media/logo.cde6702f.png";var c=n("./node_modules/@fortawesome/react-fontawesome/dist/index.js"),m=n("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),p=n("./src/theme/colors.ts"),u=n("./src/theme/shadows.ts");let x=(0,r.Ay)(a.Z)`
    width: calc(100% - 24px);
    min-height: 40px;
    max-height: 80px;
    padding: 0;
    margin: 5px;
    display: flex;
    gap: 10px;
    font-size: 1.25vw;
    background-color: ${p.l.base};
`,g=r.Ay.div`
    padding: 5px 10px;
    min-width: 50px;
    border-radius: 8px;
    transition: all 0.3s ease;
    &:hover {
        cursor: pointer;
        background-color: ${p.l.baseLight};
        box-shadow: ${u.x.light};
    }

    &:active {
        box-shadow: ${u.x.insetLight};
    }
`,h=e=>{let{item:t}=e;return o.createElement(g,{key:t.id,onClick:t.onClick},t.icon&&o.createElement("span",{className:"icon"},o.createElement("i",{className:`icon-${t.icon}`})),o.createElement("span",{className:"label"},t.label))},b=e=>{let{collection:t}=e;return o.createElement("div",{key:t.label},o.createElement("span",null,t.label),o.createElement("div",null,t.items.map(e=>o.createElement(h,{key:e.id,item:e}))))},y=r.Ay.div`
    display: flex;
    gap: 5px;
    font-weight: 500;
    padding: 5px;
    flex-grow: 1;
    align-items: center;
    justify-content: flex-end;
`,v=r.Ay.div`
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
`,f=e=>{let{items:t}=e;return o.createElement(y,null,t.map(e=>"items"in e?o.createElement(b,{key:e.label,collection:e}):o.createElement(h,{key:e.id,item:e})))},w=e=>{let{data:t}=e;return o.createElement(v,null,o.createElement("div",{className:"img-holder"},(null==t?void 0:t.avatarUrl)&&o.createElement("img",{src:t.avatarUrl,alt:t.name})||o.createElement(s.R,{code:"head_1_2",rounded:!0,size:4})),o.createElement("div",null,null==t?void 0:t.name,o.createElement(c.gc,{icon:m.Jt$})))},_=e=>{let{title:t,profileData:n,items:r=[]}=e;return o.createElement(x,null,o.createElement(d,{title:t,logo:l}),o.createElement(f,{items:r}),o.createElement(w,{data:n}))};_.__docgenInfo={description:"",methods:[],displayName:"TopNavigation",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:"MenuItem | MenuCollection",elements:[{name:"signature",type:"object",raw:"{\n  label: string;\n  icon?: IconProp;\n  id: string;\n  onClick: (e: SyntheticEvent) => void;\n  isSelected?: boolean;\n}",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"icon",value:{name:"IconProp",required:!1}},{key:"id",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"(e: SyntheticEvent) => void",signature:{arguments:[{type:{name:"SyntheticEvent"},name:"e"}],return:{name:"void"}},required:!0}},{key:"isSelected",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:"{\n  items: MenuItem[];\n  label: string;\n}",signature:{properties:[{key:"items",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  label: string;\n  icon?: IconProp;\n  id: string;\n  onClick: (e: SyntheticEvent) => void;\n  isSelected?: boolean;\n}",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"icon",value:{name:"IconProp",required:!1}},{key:"id",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"(e: SyntheticEvent) => void",signature:{arguments:[{type:{name:"SyntheticEvent"},name:"e"}],return:{name:"void"}},required:!0}},{key:"isSelected",value:{name:"boolean",required:!1}}]}}],raw:"MenuItem[]",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}]}],raw:"Array<MenuItem | MenuCollection>"},description:"",defaultValue:{value:"[]",computed:!1}},title:{required:!1,tsType:{name:"string"},description:""},profileData:{required:!0,tsType:{name:"ProfileData"},description:""}}};let k={title:"Widgets/Navs/TopNavigation",component:_},$=e=>o.createElement(_,e),E=e=>()=>console.log(`${e} action triggered`),A=$.bind({});A.args={toggleShowSideNav:()=>{},title:"My Application Sample",parameters:{layout:"center"},profileData:{name:"John Doe"},items:[{id:"home",label:"Home",onClick:E("item-click-home")},{id:"settings",label:"Settings",onClick:E("item-click-settings")}]};let C=$.bind({});C.args={toggleShowSideNav:E("toggleShowSideNav"),items:[]};let j=["Default","NoItems"]},"./src/components/avatar/avatar.tsx"(e,t,n){"use strict";n.d(t,{e:()=>i});var o=n("./node_modules/react/index.js"),r=n("./node_modules/styled-components/dist/styled-components.browser.esm.js");let a=n.p+"static/image/static/media/heads_sprite.535371b9.webp",s=r.Ay.img`
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.12), -4px -4px 8px rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.15), -6px -6px 12px rgba(255, 255, 255, 0.8);
  }
`,i=e=>{let{size:t=50,src:n,alt:r="User Avatar",...i}=e;return o.createElement(s,{size:t,src:n||a,alt:r,...i})};i.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"50",computed:!1}},src:{required:!1,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'User Avatar'",computed:!1}}}}},"./src/components/buttons/buttons.tsx"(e,t,n){"use strict";n.d(t,{tA:()=>u,pE:()=>m,MG:()=>y,wx:()=>v,jn:()=>p,yi:()=>f,yp:()=>l,uJ:()=>c});var o=n("./node_modules/react/index.js"),r=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),a=n("./src/theme/colors.ts"),s=n("./src/theme/shadows.ts"),i=n("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),d=n("./node_modules/@fortawesome/react-fontawesome/dist/index.js");let l=r.Ay.button`
    width: calc(100% - 24px);
    padding: 12px;
    color: ${a.l.text_dark};
    background-color: ${a.l.base};
    border: none;
    border-radius: ${"20px"};
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 10px;
    box-shadow: ${s.x.medium};
    
    &:hover {
        box-shadow: ${s.x.large};
        transform: translateY(-2px);
    }

    &:active {
        box-shadow: ${s.x.insetMedium};
        transform: translateY(0);
    }
`,c=(0,r.Ay)(l)`
    background-color: ${a.l.baseLight};
    color: ${a.l.red};
    box-shadow: ${s.x.light};
    
    &:hover {
        box-shadow: ${s.x.medium};
        color: ${a.l.dark_red};
    }

    &:active {
        box-shadow: ${s.x.insetLight};
    }
`,m=(0,r.Ay)(l)`
    background-color: ${a.l.baseLight};
    color: ${a.l.blue};
    box-shadow: ${s.x.light};
    
    &:hover {
        box-shadow: ${s.x.medium};
        color: #4A5FB0;
    }

    &:active {
        box-shadow: ${s.x.insetLight};
    }
`,p=(0,r.Ay)(l)`
    background-color: ${a.l.blue};
    color: white;
    
    &:hover {
        background-color: #4A5FB0;
        box-shadow: ${s.x.large};
    }

    &:active {
        box-shadow: ${s.x.insetMedium};
    }
`,u=(0,r.Ay)(l)`
    background-color: ${a.l.light_gray};
    color: ${a.l.text_dark};
    box-shadow: ${s.x.light};
    
    &:hover {
        background-color: ${a.l.baseLight};
        box-shadow: ${s.x.medium};
    }

    &:active {
        box-shadow: ${s.x.insetLight};
    }
`,x=(0,r.Ay)(l)`
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
    transition: all 0.3s ease;
    padding: 0;

    &:hover {
        transform: translateY(-3px);
    }

    &:active {
        transform: translateY(-1px);
    }
`,g=(0,r.Ay)(x)`
     background: ${a.l.green};
     
     &:hover {
            background: #5FA35F;
            box-shadow: ${s.x.large};
     }

     &:active {
            box-shadow: ${s.x.insetDark};
     }
 `,h=(0,r.Ay)(x)`
    background: ${a.l.orange};
    
    &:hover {
        background: #C98A4F;
        box-shadow: ${s.x.large};
    }

    &:active {
        box-shadow: ${s.x.insetDark};
    }
`,b=(0,r.Ay)(x)`
    background: ${a.l.red};
    
    &:hover {
        background: #C84D5C;
        box-shadow: ${s.x.large};
    }

    &:active {
        box-shadow: ${s.x.insetDark};
    }
`,y=e=>o.createElement(b,e,o.createElement(d.gc,{icon:i.APi})),v=e=>o.createElement(h,e,o.createElement(d.gc,{icon:i.G1Y})),f=e=>o.createElement(g,e,o.createElement(d.gc,{icon:i.ijD}));y.__docgenInfo={description:"",methods:[],displayName:"TimerDoneButton"},v.__docgenInfo={description:"",methods:[],displayName:"TimerPauseButton"},f.__docgenInfo={description:"",methods:[],displayName:"TimerPlayButton"}},"./src/components/buttons/confirm_button.tsx"(e,t,n){"use strict";n.d(t,{Z:()=>d});var o=n("./node_modules/react/index.js"),r=n("./src/components/buttons/buttons.tsx"),a=n("./src/widgets/modal/modal.tsx"),s=n("./node_modules/styled-components/dist/styled-components.browser.esm.js");let i=s.Ay.div`
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
`,d=e=>{let{onConfirm:t=()=>{},onCancel:n=()=>{},label:s="",confirmText:d="Are you sure?",confirmTitle:l="Confirmation?",ButtonComponent:c=r.tA,...m}=e,[p,u]=o.useState(!1),x=o.createElement(a.a,{onClose:()=>u(!1),shouldShow:p},o.createElement(i,{className:"confirm-modal"},o.createElement("h3",null,l),o.createElement("p",{className:"description"},d),o.createElement("div",{className:"confirm-actions"},o.createElement(r.tA,{onClick:e=>{u(!1),n(e)}},"Cancel"),o.createElement(r.jn,{onClick:e=>{u(!1),t(e)}},"Confirm")))),g=o.createElement(c,{...m,onClick:e=>{e.preventDefault(),u(!0)}},s);return o.createElement(o.Fragment,null,p?x:g)};d.__docgenInfo={description:"",methods:[],displayName:"ConfirmButton",props:{onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {\n}",computed:!1}},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {\n}",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},confirmText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Are you sure?"',computed:!1}},confirmTitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Confirmation?"',computed:!1}},ButtonComponent:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<any>",elements:[{name:"any"}]},description:"",defaultValue:{value:"styled(Buttons)`\n    background-color: ${COLORS.light_gray};\n    color: ${COLORS.text_dark};\n    box-shadow: ${SHADOW.light};\n    \n    &:hover {\n        background-color: ${COLORS.baseLight};\n        box-shadow: ${SHADOW.medium};\n    }\n\n    &:active {\n        box-shadow: ${SHADOW.insetLight};\n    }\n`",computed:!1}}}}},"./src/components/cards/card.tsx"(e,t,n){"use strict";n.d(t,{Z:()=>a});var o=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=n("./src/theme.constants.ts");let a=o.Ay.div`
    background-color: ${r.lm.base};
    padding: 20px;
    border-radius: ${r.Zz.medium};
    box-shadow: ${r.xc.medium};
    border: none;
    width: 100%;
    text-align: center;
    box-sizing: border-box;
    transition: all 0.3s ease;

    &:hover {
        box-shadow: ${r.xc.large};
        transform: translateY(-2px);
    }
`},"./src/components/charts/doughnutChart.tsx"(e,t,n){"use strict";n.d(t,{l:()=>m});var o=n("./node_modules/react/index.js"),r=n("./node_modules/recharts/es6/component/ResponsiveContainer.js"),a=n("./node_modules/recharts/es6/chart/PieChart.js"),s=n("./node_modules/recharts/es6/polar/Pie.js"),i=n("./node_modules/recharts/es6/component/Cell.js"),d=n("./node_modules/recharts/es6/component/Tooltip.js"),l=n("./src/theme.constants.ts");let c=[l.lm.blue,l.lm.green,l.lm.orange,l.lm.red],m=e=>{let{chartName:t="",data:n}=e;return o.createElement(r.u,{width:"100%",height:"100%"},o.createElement(a.r,null,o.createElement(s.Fq,{data:n,dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",innerRadius:"60%",outerRadius:"80%",fill:"#8884d8",labelLine:!1},n.map((e,t)=>o.createElement(i.f,{key:`cell-${t}`,fill:e.color?e.color:c[t%c.length]}))),o.createElement(d.m,null),o.createElement("text",{x:"50%",y:"50%",textAnchor:"middle",dominantBaseline:"middle",style:{fontSize:"1vw",fontWeight:"bold"}},t)))};m.__docgenInfo={description:"",methods:[],displayName:"DoughnutChart",props:{chartName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},data:{required:!0,tsType:{name:"Array",elements:[{name:"ChartDataItem"}],raw:"ChartDataItem[]"},description:""}}}},"./src/components/pills/pills.tsx"(e,t,n){"use strict";n.d(t,{Ai:()=>l,U6:()=>c,gI:()=>d});var o=n("./node_modules/react/index.js"),r=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),a=n("./src/theme.constants.ts");let s=r.Ay.span`
    padding: 8px 12px;
    border-radius: ${a.Zz.medium};
    display: inline-flex;
    align-items: center;
    gap: 4px;
    transition: all 0.3s ease;
`,i=e=>{let{label:t,children:n,...r}=e;return o.createElement(s,r," ",t," :  ",o.createElement("em",null,n))},d=(0,r.Ay)(i)`
    background: ${a.lm.blue};
    color: white;
    box-shadow: ${a.xc.light};

    &:hover {
        box-shadow: ${a.xc.medium};
    }
`,l=(0,r.Ay)(i)`
    background: ${a.lm.base};
    color: ${a.lm.text_dark};
    box-shadow: ${a.xc.light};

    &:hover {
        box-shadow: ${a.xc.medium};
    }
`,c=(0,r.Ay)(i)`
    color: ${a.lm.text_light};
    background: ${a.lm.baseLight};
    box-shadow: ${a.xc.light};

    &:hover {
        box-shadow: ${a.xc.medium};
    }
`},"./src/components/sprites/people/silhouette.tsx"(e,t,n){"use strict";n.d(t,{R:()=>d});var o=n("./node_modules/react/index.js");let r=n.p+"static/image/static/media/heads_sprite.535371b9.webp";var a=n("./src/components/sprites/sprite_builder.tsx");let s=[8,79,151,223],i=[9,82,155,226].reduce((e,t,n)=>(s.forEach((o,r)=>{e[`head_${n+1}_${r+1}`]={x:t,y:o}}),e),{}),d=e=>{let{code:t,rounded:n,size:s=10}=e,d=i[t],l=s/64;return d?o.createElement(a.k,{rounded:n,width:s,height:s,maxSize:"64px",positionX:d.x*l,positionY:d.y*l,src:r,size:300*l}):null};d.__docgenInfo={description:"",methods:[],displayName:"Silhouette",props:{rounded:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10",computed:!1}},code:{required:!0,tsType:{name:"string"},description:""}}}},"./src/components/sprites/sprite_builder.tsx"(e,t,n){"use strict";n.d(t,{k:()=>l});var o=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=n("./node_modules/react/index.js"),a=n("./node_modules/classnames/index.js"),s=n.n(a),i=n("./src/theme.constants.ts");let d=o.Ay.div`
    width: ${e=>e.width}vw;
    height: ${e=>e.height}vw;
    background-image: url(${e=>e.src});
    background-position: ${e=>`-${e.positionX}vw -${e.positionY}vw`};
    background-size: ${e=>e.size+"vw"};
    background-repeat: no-repeat;
    box-shadow: ${i.xc.light};
    transition: all 0.3s ease;
    
    &:hover {
        box-shadow: ${i.xc.medium};
    }

    &.rounded {
        border-radius: 50%;
    }
    max-height: ${e=>e.maxSize};
    max-width: ${e=>e.maxSize};
`,l=e=>{let{rounded:t=!1,width:n,height:o,positionX:a,positionY:i,...l}=e;return r.createElement(d,{className:s()({rounded:t}),width:n,height:o,positionX:a,positionY:i,...l})};l.__docgenInfo={description:"",methods:[],displayName:"Sprite",props:{width:{required:!0,tsType:{name:"number"},description:""},height:{required:!0,tsType:{name:"number"},description:""},positionX:{required:!0,tsType:{name:"number"},description:""},positionY:{required:!0,tsType:{name:"number"},description:""},src:{required:!0,tsType:{name:"string"},description:""},rounded:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"number"},description:""},maxSize:{required:!1,tsType:{name:"string"},description:""}}}},"./src/components/switch/switch.tsx"(e,t,n){"use strict";n.d(t,{d:()=>d});var o=n("./node_modules/react/index.js"),r=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),a=n("./src/theme.constants.ts");let s=r.Ay.button`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: auto;
    aspect-ratio: 13 / 8 ;
    min-width: 13px;
    min-height: 8px;
    background-color: ${e=>e.isActive?a.lm.green:a.lm.base};
    border: none;
    border-radius: 50vh;
    cursor: pointer;
    transition: background-color 0.3s ease;
    outline: none;
    box-sizing: border-box;
    box-shadow: ${e=>e.isActive?a.xc.medium:a.xc.insetLight};

    &:hover {
        box-shadow: ${e=>e.isActive?a.xc.large:a.xc.insetMedium};
    }

    &:focus {
        box-shadow: 0 0 0 3px rgba(95, 179, 109, 0.2);
    }
`,i=r.Ay.div`
    position: absolute;
    width: auto;
    height: 100%;
    aspect-ratio: 1;
    background-color: ${a.lm.baseLight};
    border-radius: 50%;
    transition: transform 0.3s ease;
    box-shadow: ${a.xc.medium};
    left: 0;
    top: 0;

    ${s}[data-active='true'] & {
        transform: translateX(80%);
    }
`,d=e=>{let{defaultState:t=!1,onChange:n}=e,[r,a]=o.useState(t);return o.createElement(s,{"data-active":r,onClick:()=>{let e=!r;a(e),null==n||n(e)},role:"switch","aria-checked":r,type:"button",isActive:r},o.createElement(i,null))};d.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{defaultState:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""}}}},"./src/components/textbox/textinput.tsx"(e,t,n){"use strict";n.d(t,{k:()=>i});var o=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=n("./node_modules/react/index.js"),a=n("./src/theme.constants.ts");let s=o.Ay.div`
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
        border: none;
        border-radius: ${a.Zz.medium};
        font-size: 1em;
        color: ${a.lm.text_dark};
        background-color: ${a.lm.base};
        box-shadow: ${a.xc.insetLight};
        transition: all 0.3s ease;

        &:focus {
            outline: none;
            box-shadow: ${a.xc.insetMedium};
        }

        &:hover:not(:focus) {
            box-shadow: ${a.xc.insetMedium};
        }

        &::placeholder {
            color: ${a.lm.medium_gray};
        }
    }
`,i=e=>{let{label:t,...n}=e;return r.createElement(s,null,r.createElement("label",null,t),r.createElement("input",n))};i.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{label:{required:!0,tsType:{name:"string"},description:""}}}},"./src/theme.constants.ts"(e,t,n){"use strict";n.d(t,{Ne:()=>r,Zz:()=>a,lm:()=>o,xc:()=>s});let o={base:"#E0E5EC",baseLight:"#F5F7FA",baseDark:"#A3B1C6",blue:"#5F7FD4",green:"#5FB36D",dark_green:"#4A8A54",red:"#D85F6F",dark_red:"#B84C5A",orange:"#D99B5F",dark_orange:"#B87A47",text_dark:"#3A3F47",text_light:"#6B7280",background:"#E0E5EC",card_background:"#E0E5EC",light_gray:"#F5F7FA",medium_gray:"#C9D1DC",dark_gray:"#8FA3BD"},r={font_family:"Arial",font_weight:"normal"},a={small:"12px",medium:"20px",large:"30px",full:"50%"},s={insetLight:"inset 2px 2px 5px rgba(255, 255, 255, 0.7), inset -2px -2px 5px rgba(0, 0, 0, 0.1)",insetMedium:"inset 3px 3px 7px rgba(255, 255, 255, 0.8), inset -3px -3px 7px rgba(0, 0, 0, 0.15)",insetDark:"inset 5px 5px 10px rgba(255, 255, 255, 0.9), inset -5px -5px 10px rgba(0, 0, 0, 0.2)",light:"3px 3px 6px rgba(0, 0, 0, 0.1), -3px -3px 6px rgba(255, 255, 255, 0.7)",medium:"5px 5px 10px rgba(0, 0, 0, 0.15), -5px -5px 10px rgba(255, 255, 255, 0.8)",medium2:"5px 5px 12px rgba(0, 0, 0, 0.12), -5px -5px 12px rgba(255, 255, 255, 0.75)",large:"8px 8px 16px rgba(0, 0, 0, 0.2), -8px -8px 16px rgba(255, 255, 255, 0.9)"}},"./src/theme/colors.ts"(e,t,n){"use strict";n.d(t,{l:()=>o});let o={base:"#E0E5EC",baseLight:"#F5F7FA",baseDark:"#A3B1C6",blue:"#5F7FD4",green:"#5FB36D",dark_green:"#4A8A54",red:"#D85F6F",dark_red:"#B84C5A",orange:"#D99B5F",dark_orange:"#B87A47",text_dark:"#3A3F47",text_light:"#6B7280",background:"#E0E5EC",card_background:"#E0E5EC",light_gray:"#F5F7FA",medium_gray:"#C9D1DC",dark_gray:"#8FA3BD"}},"./src/theme/shadows.ts"(e,t,n){"use strict";n.d(t,{x:()=>o});let o={insetLight:"inset 2px 2px 5px rgba(255, 255, 255, 0.7), inset -2px -2px 5px rgba(0, 0, 0, 0.1)",insetMedium:"inset 3px 3px 7px rgba(255, 255, 255, 0.8), inset -3px -3px 7px rgba(0, 0, 0, 0.15)",insetDark:"inset 5px 5px 10px rgba(255, 255, 255, 0.9), inset -5px -5px 10px rgba(0, 0, 0, 0.2)",light:"3px 3px 6px rgba(0, 0, 0, 0.1), -3px -3px 6px rgba(255, 255, 255, 0.7)",medium:"5px 5px 10px rgba(0, 0, 0, 0.15), -5px -5px 10px rgba(255, 255, 255, 0.8)",medium2:"5px 5px 12px rgba(0, 0, 0, 0.12), -5px -5px 12px rgba(255, 255, 255, 0.75)",large:"8px 8px 16px rgba(0, 0, 0, 0.2), -8px -8px 16px rgba(255, 255, 255, 0.9)"}},"./src/widgets/modal/modal.tsx"(e,t,n){"use strict";n.d(t,{a:()=>c});var o=n("./node_modules/react/index.js"),r=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),a=n("./src/components/cards/card.tsx"),s=n("./node_modules/@fortawesome/react-fontawesome/dist/index.js"),i=n("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),d=n("./src/theme.constants.ts");let l=r.Ay.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.2);
    top: 0;
    left: 0;
    z-index: 40;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(2px);
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
            border-radius: 50%;
            align-self: flex-end;
            background: ${d.lm.base};
            color: ${d.lm.text_dark};
            transition: all 0.3s ease;
            &:hover{
                box-shadow: ${d.xc.medium};
            }
            &:active {
                box-shadow: ${d.xc.insetLight};
            }
        }
        .content{
            display: flex;
            flex-direction: column;
        }
    }
`,c=e=>{let{children:t,shouldShow:n,onClose:r}=e;return n?o.createElement(l,null,o.createElement(a.Z,{className:"modal-card"},o.createElement("div",{className:"close",role:"button",onClick:r},o.createElement(s.gc,{icon:i.yYc})),o.createElement("div",{className:"content"},t))):null};c.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},shouldShow:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./node_modules/classnames/index.js"(e){!function(){"use strict";var t={}.hasOwnProperty;function n(){for(var e="",r=0;r<arguments.length;r++){var a=arguments[r];a&&(e=o(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var r="";for(var a in e)t.call(e,a)&&e[a]&&(r=o(r,a));return r}(a)))}return e}function o(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):"function"==typeof define&&"object"==typeof define.amd&&define.amd?define("classnames",[],function(){return n}):window.classNames=n}()}}]);
//# sourceMappingURL=widgets-navs-top_navigation-stories.c2177680.iframe.bundle.js.map