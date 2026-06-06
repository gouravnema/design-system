/*! For license information please see 615.f676180c.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_gouravnema_design_system=self.webpackChunk_gouravnema_design_system||[]).push([["615"],{"./src/components/avatar/avatar.tsx"(e,t,o){"use strict";o.d(t,{e:()=>i});var n=o("./node_modules/react/index.js"),s=o("./node_modules/styled-components/dist/styled-components.browser.esm.js");let r=o.p+"static/image/static/media/heads_sprite.535371b9.webp",a=s.Ay.img`
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.12), -4px -4px 8px rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.15), -6px -6px 12px rgba(255, 255, 255, 0.8);
  }
`,i=e=>{let{size:t=50,src:o,alt:s="User Avatar",...i}=e;return n.createElement(a,{size:t,src:o||r,alt:s,...i})};i.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"50",computed:!1}},src:{required:!1,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'User Avatar'",computed:!1}}}}},"./src/components/buttons/buttons.tsx"(e,t,o){"use strict";o.d(t,{tA:()=>u,pE:()=>m,MG:()=>y,wx:()=>f,jn:()=>p,yi:()=>v,yp:()=>l,uJ:()=>c});var n=o("./node_modules/react/index.js"),s=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=o("./src/theme/colors.ts"),a=o("./src/theme/shadows.ts"),i=o("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),d=o("./node_modules/@fortawesome/react-fontawesome/dist/index.js");let l=s.Ay.button`
    width: calc(100% - 24px);
    padding: 12px;
    color: ${r.l.text_dark};
    background-color: ${r.l.base};
    border: none;
    border-radius: ${"20px"};
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 10px;
    box-shadow: ${a.x.medium};
    
    &:hover {
        box-shadow: ${a.x.large};
        transform: translateY(-2px);
    }

    &:active {
        box-shadow: ${a.x.insetMedium};
        transform: translateY(0);
    }
`,c=(0,s.Ay)(l)`
    background-color: ${r.l.baseLight};
    color: ${r.l.red};
    box-shadow: ${a.x.light};
    
    &:hover {
        box-shadow: ${a.x.medium};
        color: ${r.l.dark_red};
    }

    &:active {
        box-shadow: ${a.x.insetLight};
    }
`,m=(0,s.Ay)(l)`
    background-color: ${r.l.baseLight};
    color: ${r.l.blue};
    box-shadow: ${a.x.light};
    
    &:hover {
        box-shadow: ${a.x.medium};
        color: #4A5FB0;
    }

    &:active {
        box-shadow: ${a.x.insetLight};
    }
`,p=(0,s.Ay)(l)`
    background-color: ${r.l.blue};
    color: white;
    
    &:hover {
        background-color: #4A5FB0;
        box-shadow: ${a.x.large};
    }

    &:active {
        box-shadow: ${a.x.insetMedium};
    }
`,u=(0,s.Ay)(l)`
    background-color: ${r.l.light_gray};
    color: ${r.l.text_dark};
    box-shadow: ${a.x.light};
    
    &:hover {
        background-color: ${r.l.baseLight};
        box-shadow: ${a.x.medium};
    }

    &:active {
        box-shadow: ${a.x.insetLight};
    }
`,x=(0,s.Ay)(l)`
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
`,g=(0,s.Ay)(x)`
     background: ${r.l.green};
     
     &:hover {
            background: #5FA35F;
            box-shadow: ${a.x.large};
     }

     &:active {
            box-shadow: ${a.x.insetDark};
     }
 `,h=(0,s.Ay)(x)`
    background: ${r.l.orange};
    
    &:hover {
        background: #C98A4F;
        box-shadow: ${a.x.large};
    }

    &:active {
        box-shadow: ${a.x.insetDark};
    }
`,b=(0,s.Ay)(x)`
    background: ${r.l.red};
    
    &:hover {
        background: #C84D5C;
        box-shadow: ${a.x.large};
    }

    &:active {
        box-shadow: ${a.x.insetDark};
    }
`,y=e=>n.createElement(b,e,n.createElement(d.gc,{icon:i.APi})),f=e=>n.createElement(h,e,n.createElement(d.gc,{icon:i.G1Y})),v=e=>n.createElement(g,e,n.createElement(d.gc,{icon:i.ijD}));y.__docgenInfo={description:"",methods:[],displayName:"TimerDoneButton"},f.__docgenInfo={description:"",methods:[],displayName:"TimerPauseButton"},v.__docgenInfo={description:"",methods:[],displayName:"TimerPlayButton"}},"./src/components/buttons/confirm_button.tsx"(e,t,o){"use strict";o.d(t,{Z:()=>d});var n=o("./node_modules/react/index.js"),s=o("./src/components/buttons/buttons.tsx"),r=o("./src/widgets/modal/modal.tsx"),a=o("./node_modules/styled-components/dist/styled-components.browser.esm.js");let i=a.Ay.div`
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
`,d=e=>{let{onConfirm:t=()=>{},onCancel:o=()=>{},label:a="",confirmText:d="Are you sure?",confirmTitle:l="Confirmation?",ButtonComponent:c=s.tA,...m}=e,[p,u]=n.useState(!1),x=n.createElement(r.a,{onClose:()=>u(!1),shouldShow:p},n.createElement(i,{className:"confirm-modal"},n.createElement("h3",null,l),n.createElement("p",{className:"description"},d),n.createElement("div",{className:"confirm-actions"},n.createElement(s.tA,{onClick:e=>{u(!1),o(e)}},"Cancel"),n.createElement(s.jn,{onClick:e=>{u(!1),t(e)}},"Confirm")))),g=n.createElement(c,{...m,onClick:e=>{e.preventDefault(),u(!0)}},a);return n.createElement(n.Fragment,null,p?x:g)};d.__docgenInfo={description:"",methods:[],displayName:"ConfirmButton",props:{onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {\n}",computed:!1}},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {\n}",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},confirmText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Are you sure?"',computed:!1}},confirmTitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Confirmation?"',computed:!1}},ButtonComponent:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<any>",elements:[{name:"any"}]},description:"",defaultValue:{value:"styled(Buttons)`\n    background-color: ${COLORS.light_gray};\n    color: ${COLORS.text_dark};\n    box-shadow: ${SHADOW.light};\n    \n    &:hover {\n        background-color: ${COLORS.baseLight};\n        box-shadow: ${SHADOW.medium};\n    }\n\n    &:active {\n        box-shadow: ${SHADOW.insetLight};\n    }\n`",computed:!1}}}}},"./src/components/cards/card.tsx"(e,t,o){"use strict";o.d(t,{Z:()=>r});var n=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),s=o("./src/theme.constants.ts");let r=n.Ay.div`
    background-color: ${s.lm.base};
    padding: 20px;
    border-radius: ${s.Zz.medium};
    box-shadow: ${s.xc.medium};
    border: none;
    width: 100%;
    text-align: center;
    box-sizing: border-box;
    transition: all 0.3s ease;

    &:hover {
        box-shadow: ${s.xc.large};
        transform: translateY(-2px);
    }
`},"./src/components/charts/doughnutChart.tsx"(e,t,o){"use strict";o.d(t,{l:()=>m});var n=o("./node_modules/react/index.js"),s=o("./node_modules/recharts/es6/component/ResponsiveContainer.js"),r=o("./node_modules/recharts/es6/chart/PieChart.js"),a=o("./node_modules/recharts/es6/polar/Pie.js"),i=o("./node_modules/recharts/es6/component/Cell.js"),d=o("./node_modules/recharts/es6/component/Tooltip.js"),l=o("./src/theme.constants.ts");let c=[l.lm.blue,l.lm.green,l.lm.orange,l.lm.red],m=e=>{let{chartName:t="",data:o}=e;return n.createElement(s.u,{width:"100%",height:"100%"},n.createElement(r.r,null,n.createElement(a.Fq,{data:o,dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",innerRadius:"60%",outerRadius:"80%",fill:"#8884d8",labelLine:!1},o.map((e,t)=>n.createElement(i.f,{key:`cell-${t}`,fill:e.color?e.color:c[t%c.length]}))),n.createElement(d.m,null),n.createElement("text",{x:"50%",y:"50%",textAnchor:"middle",dominantBaseline:"middle",style:{fontSize:"1vw",fontWeight:"bold"}},t)))};m.__docgenInfo={description:"",methods:[],displayName:"DoughnutChart",props:{chartName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},data:{required:!0,tsType:{name:"Array",elements:[{name:"ChartDataItem"}],raw:"ChartDataItem[]"},description:""}}}},"./src/components/index.ts"(e,t,o){"use strict";o.d(t,{RP:()=>s.R,Zp:()=>n.Z}),o("./src/components/avatar/avatar.tsx");var n=o("./src/components/cards/card.tsx");o("./src/components/charts/doughnutChart.tsx"),o("./src/components/switch/switch.tsx"),o("./src/components/pills/pills.tsx"),o("./src/components/sprites/sprite_builder.tsx");var s=o("./src/components/sprites/people/silhouette.tsx");o("./src/components/textbox/textinput.tsx"),o("./src/components/buttons/buttons.tsx"),o("./src/components/buttons/confirm_button.tsx")},"./src/components/pills/pills.tsx"(e,t,o){"use strict";o.d(t,{Ai:()=>l,U6:()=>c,gI:()=>d});var n=o("./node_modules/react/index.js"),s=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=o("./src/theme.constants.ts");let a=s.Ay.span`
    padding: 8px 12px;
    border-radius: ${r.Zz.medium};
    display: inline-flex;
    align-items: center;
    gap: 4px;
    transition: all 0.3s ease;
`,i=e=>{let{label:t,children:o,...s}=e;return n.createElement(a,s," ",t," :  ",n.createElement("em",null,o))},d=(0,s.Ay)(i)`
    background: ${r.lm.blue};
    color: white;
    box-shadow: ${r.xc.light};

    &:hover {
        box-shadow: ${r.xc.medium};
    }
`,l=(0,s.Ay)(i)`
    background: ${r.lm.base};
    color: ${r.lm.text_dark};
    box-shadow: ${r.xc.light};

    &:hover {
        box-shadow: ${r.xc.medium};
    }
`,c=(0,s.Ay)(i)`
    color: ${r.lm.text_light};
    background: ${r.lm.baseLight};
    box-shadow: ${r.xc.light};

    &:hover {
        box-shadow: ${r.xc.medium};
    }
`},"./src/components/sprites/people/silhouette.tsx"(e,t,o){"use strict";o.d(t,{R:()=>d});var n=o("./node_modules/react/index.js");let s=o.p+"static/image/static/media/heads_sprite.535371b9.webp";var r=o("./src/components/sprites/sprite_builder.tsx");let a=[8,79,151,223],i=[9,82,155,226].reduce((e,t,o)=>(a.forEach((n,s)=>{e[`head_${o+1}_${s+1}`]={x:t,y:n}}),e),{}),d=e=>{let{code:t,rounded:o,size:a=10}=e,d=i[t],l=a/64;return d?n.createElement(r.k,{rounded:o,width:a,height:a,maxSize:"64px",positionX:d.x*l,positionY:d.y*l,src:s,size:300*l}):null};d.__docgenInfo={description:"",methods:[],displayName:"Silhouette",props:{rounded:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10",computed:!1}},code:{required:!0,tsType:{name:"string"},description:""}}}},"./src/components/sprites/sprite_builder.tsx"(e,t,o){"use strict";o.d(t,{k:()=>l});var n=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),s=o("./node_modules/react/index.js"),r=o("./node_modules/classnames/index.js"),a=o.n(r),i=o("./src/theme.constants.ts");let d=n.Ay.div`
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
`,l=e=>{let{rounded:t=!1,width:o,height:n,positionX:r,positionY:i,...l}=e;return s.createElement(d,{className:a()({rounded:t}),width:o,height:n,positionX:r,positionY:i,...l})};l.__docgenInfo={description:"",methods:[],displayName:"Sprite",props:{width:{required:!0,tsType:{name:"number"},description:""},height:{required:!0,tsType:{name:"number"},description:""},positionX:{required:!0,tsType:{name:"number"},description:""},positionY:{required:!0,tsType:{name:"number"},description:""},src:{required:!0,tsType:{name:"string"},description:""},rounded:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"number"},description:""},maxSize:{required:!1,tsType:{name:"string"},description:""}}}},"./src/components/switch/switch.tsx"(e,t,o){"use strict";o.d(t,{d:()=>d});var n=o("./node_modules/react/index.js"),s=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=o("./src/theme.constants.ts");let a=s.Ay.button`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: auto;
    aspect-ratio: 13 / 8 ;
    min-width: 13px;
    min-height: 8px;
    background-color: ${e=>e.isActive?r.lm.green:r.lm.base};
    border: none;
    border-radius: 50vh;
    cursor: pointer;
    transition: background-color 0.3s ease;
    outline: none;
    box-sizing: border-box;
    box-shadow: ${e=>e.isActive?r.xc.medium:r.xc.insetLight};

    &:hover {
        box-shadow: ${e=>e.isActive?r.xc.large:r.xc.insetMedium};
    }

    &:focus {
        box-shadow: 0 0 0 3px rgba(95, 179, 109, 0.2);
    }
`,i=s.Ay.div`
    position: absolute;
    width: auto;
    height: 100%;
    aspect-ratio: 1;
    background-color: ${r.lm.baseLight};
    border-radius: 50%;
    transition: transform 0.3s ease;
    box-shadow: ${r.xc.medium};
    left: 0;
    top: 0;

    ${a}[data-active='true'] & {
        transform: translateX(80%);
    }
`,d=e=>{let{defaultState:t=!1,onChange:o}=e,[s,r]=n.useState(t);return n.createElement(a,{"data-active":s,onClick:()=>{let e=!s;r(e),null==o||o(e)},role:"switch","aria-checked":s,type:"button",isActive:s},n.createElement(i,null))};d.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{defaultState:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""}}}},"./src/components/textbox/textinput.tsx"(e,t,o){"use strict";o.d(t,{k:()=>i});var n=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),s=o("./node_modules/react/index.js"),r=o("./src/theme.constants.ts");let a=n.Ay.div`
    margin-bottom: 20px;
    text-align: left;
    label {
        display: block;
        margin-bottom: 8px;
        font-size: 0.9em;
        color: ${r.lm.text_light};
        font-weight: 500;
    }
    input {
        width: calc(100% - 24px);
        padding: 12px;
        border: none;
        border-radius: ${r.Zz.medium};
        font-size: 1em;
        color: ${r.lm.text_dark};
        background-color: ${r.lm.base};
        box-shadow: ${r.xc.insetLight};
        transition: all 0.3s ease;

        &:focus {
            outline: none;
            box-shadow: ${r.xc.insetMedium};
        }

        &:hover:not(:focus) {
            box-shadow: ${r.xc.insetMedium};
        }

        &::placeholder {
            color: ${r.lm.medium_gray};
        }
    }
`,i=e=>{let{label:t,...o}=e;return s.createElement(a,null,s.createElement("label",null,t),s.createElement("input",o))};i.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{label:{required:!0,tsType:{name:"string"},description:""}}}},"./src/theme.constants.ts"(e,t,o){"use strict";o.d(t,{Ne:()=>s,Zz:()=>r,lm:()=>n,xc:()=>a});let n={base:"#E0E5EC",baseLight:"#F5F7FA",baseDark:"#A3B1C6",blue:"#5F7FD4",green:"#5FB36D",dark_green:"#4A8A54",red:"#D85F6F",dark_red:"#B84C5A",orange:"#D99B5F",dark_orange:"#B87A47",text_dark:"#3A3F47",text_light:"#6B7280",background:"#E0E5EC",card_background:"#E0E5EC",light_gray:"#F5F7FA",medium_gray:"#C9D1DC",dark_gray:"#8FA3BD"},s={font_family:"Arial",font_weight:"normal"},r={small:"12px",medium:"20px",large:"30px",full:"50%"},a={insetLight:"inset 2px 2px 5px rgba(255, 255, 255, 0.7), inset -2px -2px 5px rgba(0, 0, 0, 0.1)",insetMedium:"inset 3px 3px 7px rgba(255, 255, 255, 0.8), inset -3px -3px 7px rgba(0, 0, 0, 0.15)",insetDark:"inset 5px 5px 10px rgba(255, 255, 255, 0.9), inset -5px -5px 10px rgba(0, 0, 0, 0.2)",light:"3px 3px 6px rgba(0, 0, 0, 0.1), -3px -3px 6px rgba(255, 255, 255, 0.7)",medium:"5px 5px 10px rgba(0, 0, 0, 0.15), -5px -5px 10px rgba(255, 255, 255, 0.8)",medium2:"5px 5px 12px rgba(0, 0, 0, 0.12), -5px -5px 12px rgba(255, 255, 255, 0.75)",large:"8px 8px 16px rgba(0, 0, 0, 0.2), -8px -8px 16px rgba(255, 255, 255, 0.9)"}},"./src/theme/colors.ts"(e,t,o){"use strict";o.d(t,{l:()=>n});let n={base:"#E0E5EC",baseLight:"#F5F7FA",baseDark:"#A3B1C6",baseBorder:"#738196",blue:"#5F7FD4",green:"#5FB36D",dark_green:"#4A8A54",red:"#D85F6F",dark_red:"#B84C5A",orange:"#D99B5F",dark_orange:"#B87A47",text_dark:"#3A3F47",text:"#4A4F57",text_light:"#6B7280",background:"#E0E5EC",card_background:"#E0E5EC",light_gray:"#F5F7FA",medium_gray:"#C9D1DC",dark_gray:"#8FA3BD"}},"./src/theme/shadows.ts"(e,t,o){"use strict";o.d(t,{x:()=>n});let n={insetLight:"inset 2px 2px 5px rgba(255, 255, 255, 0.7), inset -2px -2px 5px rgba(0, 0, 0, 0.1)",insetMedium:"inset 3px 3px 7px rgba(255, 255, 255, 0.8), inset -3px -3px 7px rgba(0, 0, 0, 0.15)",insetDark:"inset 5px 5px 10px rgba(255, 255, 255, 0.9), inset -5px -5px 10px rgba(0, 0, 0, 0.2)",light:"3px 3px 6px rgba(0, 0, 0, 0.1), -3px -3px 6px rgba(255, 255, 255, 0.7)",medium:"5px 5px 10px rgba(0, 0, 0, 0.15), -5px -5px 10px rgba(255, 255, 255, 0.8)",medium2:"5px 5px 12px rgba(0, 0, 0, 0.12), -5px -5px 12px rgba(255, 255, 255, 0.75)",large:"8px 8px 16px rgba(0, 0, 0, 0.2), -8px -8px 16px rgba(255, 255, 255, 0.9)"}},"./src/widgets/modal/modal.tsx"(e,t,o){"use strict";o.d(t,{a:()=>c});var n=o("./node_modules/react/index.js"),s=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=o("./src/components/cards/card.tsx"),a=o("./node_modules/@fortawesome/react-fontawesome/dist/index.js"),i=o("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),d=o("./src/theme.constants.ts");let l=s.Ay.div`
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
`,c=e=>{let{children:t,shouldShow:o,onClose:s}=e;return o?n.createElement(l,null,n.createElement(r.Z,{className:"modal-card"},n.createElement("div",{className:"close",role:"button",onClick:s},n.createElement(a.gc,{icon:i.yYc})),n.createElement("div",{className:"content"},t))):null};c.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},shouldShow:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./node_modules/classnames/index.js"(e){!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var e="",s=0;s<arguments.length;s++){var r=arguments[s];r&&(e=n(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var s="";for(var r in e)t.call(e,r)&&e[r]&&(s=n(s,r));return s}(r)))}return e}function n(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):"function"==typeof define&&"object"==typeof define.amd&&define.amd?define("classnames",[],function(){return o}):window.classNames=o}()}}]);
//# sourceMappingURL=615.f676180c.iframe.bundle.js.map