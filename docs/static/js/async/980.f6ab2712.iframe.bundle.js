/*! For license information please see 980.f6ab2712.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_gouravnema_design_system=self.webpackChunk_gouravnema_design_system||[]).push([["980"],{"./src/components/avatar/avatar.tsx"(e,t,o){"use strict";o.d(t,{e:()=>i});var s=o("./node_modules/react/index.js"),r=o("./node_modules/styled-components/dist/styled-components.browser.esm.js");let n=o.p+"static/image/static/media/heads_sprite.535371b9.webp",a=r.Ay.img`
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.12), -4px -4px 8px rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.15), -6px -6px 12px rgba(255, 255, 255, 0.8);
  }
`,i=e=>{let{size:t=50,src:o,alt:r="User Avatar",...i}=e;return s.createElement(a,{size:t,src:o||n,alt:r,...i})};i.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"50",computed:!1}},src:{required:!1,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'User Avatar'",computed:!1}}}}},"./src/components/buttons/buttons.tsx"(e,t,o){"use strict";o.d(t,{MG:()=>w,jn:()=>p,pE:()=>u,tA:()=>x,uJ:()=>m,wx:()=>v,yi:()=>f,yp:()=>c});var s=o("./node_modules/react/index.js"),r=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),n=o("./src/theme/colors.ts"),a=o("./src/theme/radius.ts"),i=o("./src/theme/shadows.ts"),d=o("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),l=o("./node_modules/@fortawesome/react-fontawesome/dist/index.js");let c=r.Ay.button`
    width: calc(100% - 24px);
    padding: 12px;
    color: ${n.l.text_dark};
    background-color: ${n.l.base};
    border: none;
    border-radius: ${a.Z.medium};
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 10px;
    box-shadow: ${i.x.medium};
    
    &:hover {
        box-shadow: ${i.x.large};
        transform: translateY(-2px);
    }

    &:active {
        box-shadow: ${i.x.insetMedium};
        transform: translateY(0);
    }
`,m=(0,r.Ay)(c)`
    background-color: ${n.l.baseLight};
    color: ${n.l.red};
    box-shadow: ${i.x.light};
    
    &:hover {
        box-shadow: ${i.x.medium};
        color: ${n.l.dark_red};
    }

    &:active {
        box-shadow: ${i.x.insetLight};
    }
`,u=(0,r.Ay)(c)`
    background-color: ${n.l.baseLight};
    color: ${n.l.blue};
    box-shadow: ${i.x.light};
    
    &:hover {
        box-shadow: ${i.x.medium};
        color: #4A5FB0;
    }

    &:active {
        box-shadow: ${i.x.insetLight};
    }
`,p=(0,r.Ay)(c)`
    background-color: ${n.l.blue};
    color: white;
    
    &:hover {
        background-color: #4A5FB0;
        box-shadow: ${i.x.large};
    }

    &:active {
        box-shadow: ${i.x.insetMedium};
    }
`,x=(0,r.Ay)(c)`
    background-color: ${n.l.light_gray};
    color: ${n.l.text_dark};
    box-shadow: ${i.x.light};
    
    &:hover {
        background-color: ${n.l.baseLight};
        box-shadow: ${i.x.medium};
    }

    &:active {
        box-shadow: ${i.x.insetLight};
    }
`,h=(0,r.Ay)(c)`
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
`,g=(0,r.Ay)(h)`
     background: ${n.l.green};
     
     &:hover {
            background: #5FA35F;
            box-shadow: ${i.x.large};
     }

     &:active {
            box-shadow: ${i.x.insetDark};
     }
 `,b=(0,r.Ay)(h)`
    background: ${n.l.orange};
    
    &:hover {
        background: #C98A4F;
        box-shadow: ${i.x.large};
    }

    &:active {
        box-shadow: ${i.x.insetDark};
    }
`,y=(0,r.Ay)(h)`
    background: ${n.l.red};
    
    &:hover {
        background: #C84D5C;
        box-shadow: ${i.x.large};
    }

    &:active {
        box-shadow: ${i.x.insetDark};
    }
`,w=e=>s.createElement(y,e,s.createElement(l.gc,{icon:d.APi})),v=e=>s.createElement(b,e,s.createElement(l.gc,{icon:d.G1Y})),f=e=>s.createElement(g,e,s.createElement(l.gc,{icon:d.ijD}));w.__docgenInfo={description:"",methods:[],displayName:"TimerDoneButton"},v.__docgenInfo={description:"",methods:[],displayName:"TimerPauseButton"},f.__docgenInfo={description:"",methods:[],displayName:"TimerPlayButton"}},"./src/components/buttons/confirm_button.tsx"(e,t,o){"use strict";o.d(t,{Z:()=>d});var s=o("./node_modules/react/index.js"),r=o("./src/components/buttons/buttons.tsx"),n=o("./src/widgets/modal/modal.tsx"),a=o("./node_modules/styled-components/dist/styled-components.browser.esm.js");let i=a.Ay.div`
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
`,d=e=>{let{onConfirm:t=()=>{},onCancel:o=()=>{},label:a="",confirmText:d="Are you sure?",confirmTitle:l="Confirmation?",ButtonComponent:c=r.tA,...m}=e,[u,p]=s.useState(!1),x=s.createElement(n.a,{onClose:()=>p(!1),shouldShow:u},s.createElement(i,{className:"confirm-modal"},s.createElement("h3",null,l),s.createElement("p",{className:"description"},d),s.createElement("div",{className:"confirm-actions"},s.createElement(r.tA,{onClick:e=>{p(!1),o(e)}},"Cancel"),s.createElement(r.jn,{onClick:e=>{p(!1),t(e)}},"Confirm")))),h=s.createElement(c,{...m,onClick:e=>{e.preventDefault(),p(!0)}},a);return s.createElement(s.Fragment,null,u?x:h)};d.__docgenInfo={description:"",methods:[],displayName:"ConfirmButton",props:{onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {\n}",computed:!1}},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {\n}",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},confirmText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Are you sure?"',computed:!1}},confirmTitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Confirmation?"',computed:!1}},ButtonComponent:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<any>",elements:[{name:"any"}]},description:"",defaultValue:{value:"styled(Buttons)`\n    background-color: ${COLORS.light_gray};\n    color: ${COLORS.text_dark};\n    box-shadow: ${SHADOW.light};\n    \n    &:hover {\n        background-color: ${COLORS.baseLight};\n        box-shadow: ${SHADOW.medium};\n    }\n\n    &:active {\n        box-shadow: ${SHADOW.insetLight};\n    }\n`",computed:!1}}}}},"./src/components/cards/card.tsx"(e,t,o){"use strict";o.d(t,{Z:()=>d});var s=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=o("./src/theme/colors.ts"),n=o("./src/theme/sizes.ts"),a=o("./src/theme/radius.ts"),i=o("./src/theme/shadows.ts");let d=s.Ay.div`
    background-color: ${r.l.base};
    padding: ${n.F.lg};
    border-radius: ${a.Z.medium};
    box-shadow: ${i.x.medium};
    border: none;
    width: 100%;
    text-align: center;
    box-sizing: border-box;
    transition: all 0.3s ease;

    &:hover {
        box-shadow: ${i.x.large};
    }
`},"./src/components/charts/doughnutChart.tsx"(e,t,o){"use strict";o.d(t,{l:()=>m});var s=o("./node_modules/react/index.js"),r=o("./node_modules/recharts/es6/component/ResponsiveContainer.js"),n=o("./node_modules/recharts/es6/chart/PieChart.js"),a=o("./node_modules/recharts/es6/polar/Pie.js"),i=o("./node_modules/recharts/es6/component/Cell.js"),d=o("./node_modules/recharts/es6/component/Tooltip.js"),l=o("./src/theme/colors.ts");let c=[l.l.blue,l.l.green,l.l.orange,l.l.red],m=e=>{let{chartName:t="",data:o}=e;return s.createElement(r.u,{width:"100%",height:"100%"},s.createElement(n.r,null,s.createElement(a.Fq,{data:o,dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",innerRadius:"60%",outerRadius:"80%",fill:"#8884d8",labelLine:!1},o.map((e,t)=>s.createElement(i.f,{key:`cell-${t}`,fill:e.color?e.color:c[t%c.length]}))),s.createElement(d.m,null),s.createElement("text",{x:"50%",y:"50%",textAnchor:"middle",dominantBaseline:"middle",style:{fontSize:"1vw",fontWeight:"bold"}},t)))};m.__docgenInfo={description:"",methods:[],displayName:"DoughnutChart",props:{chartName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},data:{required:!0,tsType:{name:"Array",elements:[{name:"ChartDataItem"}],raw:"ChartDataItem[]"},description:""}}}},"./src/components/index.ts"(e,t,o){"use strict";o.d(t,{RP:()=>r.R,Zp:()=>s.Z}),o("./src/components/avatar/avatar.tsx");var s=o("./src/components/cards/card.tsx");o("./src/components/charts/doughnutChart.tsx"),o("./src/components/switch/switch.tsx"),o("./src/components/pills/pills.tsx"),o("./src/components/sprites/sprite_builder.tsx");var r=o("./src/components/sprites/people/silhouette.tsx");o("./src/components/textbox/textinput.tsx"),o("./src/components/buttons/buttons.tsx"),o("./src/components/buttons/confirm_button.tsx")},"./src/components/pills/pills.tsx"(e,t,o){"use strict";o.d(t,{Ai:()=>m,U6:()=>u,gI:()=>c});var s=o("./node_modules/react/index.js"),r=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),n=o("./src/theme/radius.ts"),a=o("./src/theme/colors.ts"),i=o("./src/theme/shadows.ts");let d=r.Ay.span`
    padding: 8px 12px;
    border-radius: ${n.Z.medium};
    display: inline-flex;
    align-items: center;
    gap: 4px;
    transition: all 0.3s ease;
`,l=e=>{let{label:t,children:o,...r}=e;return s.createElement(d,r," ",t," :  ",s.createElement("em",null,o))},c=(0,r.Ay)(l)`
    background: ${a.l.blue};
    color: white;
    box-shadow: ${i.x.light};

    &:hover {
        box-shadow: ${i.x.medium};
    }
`,m=(0,r.Ay)(l)`
    background: ${a.l.base};
    color: ${a.l.text_dark};
    box-shadow: ${i.x.light};

    &:hover {
        box-shadow: ${i.x.medium};
    }
`,u=(0,r.Ay)(l)`
    color: ${a.l.text_light};
    background: ${a.l.baseLight};
    box-shadow: ${i.x.light};

    &:hover {
        box-shadow: ${i.x.medium};
    }
`},"./src/components/sprites/people/silhouette.tsx"(e,t,o){"use strict";o.d(t,{R:()=>d});var s=o("./node_modules/react/index.js");let r=o.p+"static/image/static/media/heads_sprite.535371b9.webp";var n=o("./src/components/sprites/sprite_builder.tsx");let a=[8,79,151,223],i=[9,82,155,226].reduce((e,t,o)=>(a.forEach((s,r)=>{e[`head_${o+1}_${r+1}`]={x:t,y:s}}),e),{}),d=e=>{let{code:t,rounded:o,size:a=10}=e,d=i[t],l=a/64;return d?s.createElement(n.k,{rounded:o,width:a,height:a,maxSize:"64px",positionX:d.x*l,positionY:d.y*l,src:r,size:300*l}):null};d.__docgenInfo={description:"",methods:[],displayName:"Silhouette",props:{rounded:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10",computed:!1}},code:{required:!0,tsType:{name:"string"},description:""}}}},"./src/components/sprites/sprite_builder.tsx"(e,t,o){"use strict";o.d(t,{k:()=>l});var s=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=o("./node_modules/react/index.js"),n=o("./node_modules/classnames/index.js"),a=o.n(n),i=o("./src/theme/shadows.ts");let d=s.Ay.div`
    width: ${e=>e.width}vw;
    height: ${e=>e.height}vw;
    background-image: url(${e=>e.src});
    background-position: ${e=>`-${e.positionX}vw -${e.positionY}vw`};
    background-size: ${e=>e.size+"vw"};
    background-repeat: no-repeat;
    box-shadow: ${i.x.light};
    transition: all 0.3s ease;
    
    &:hover {
        box-shadow: ${i.x.medium};
    }

    &.rounded {
        border-radius: 50%;
    }
    max-height: ${e=>e.maxSize};
    max-width: ${e=>e.maxSize};
`,l=e=>{let{rounded:t=!1,width:o,height:s,positionX:n,positionY:i,...l}=e;return r.createElement(d,{className:a()({rounded:t}),width:o,height:s,positionX:n,positionY:i,...l})};l.__docgenInfo={description:"",methods:[],displayName:"Sprite",props:{width:{required:!0,tsType:{name:"number"},description:""},height:{required:!0,tsType:{name:"number"},description:""},positionX:{required:!0,tsType:{name:"number"},description:""},positionY:{required:!0,tsType:{name:"number"},description:""},src:{required:!0,tsType:{name:"string"},description:""},rounded:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"number"},description:""},maxSize:{required:!1,tsType:{name:"string"},description:""}}}},"./src/components/switch/switch.tsx"(e,t,o){"use strict";o.d(t,{d:()=>l});var s=o("./node_modules/react/index.js"),r=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),n=o("./src/theme/colors.ts"),a=o("./src/theme/shadows.ts");let i=r.Ay.button`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: auto;
    aspect-ratio: 13 / 8 ;
    min-width: 13px;
    min-height: 8px;
    background-color: ${e=>e.isActive?n.l.green:n.l.base};
    border: none;
    border-radius: 50vh;
    cursor: pointer;
    transition: background-color 0.3s ease;
    outline: none;
    box-sizing: border-box;
    box-shadow: ${e=>e.isActive?a.x.medium:a.x.insetLight};

    &:hover {
        box-shadow: ${e=>e.isActive?a.x.large:a.x.insetMedium};
    }

    &:focus {
        box-shadow: 0 0 0 3px rgba(95, 179, 109, 0.2);
    }
`,d=r.Ay.div`
    position: absolute;
    width: auto;
    height: 100%;
    aspect-ratio: 1;
    background-color: ${n.l.baseLight};
    border-radius: 50%;
    transition: transform 0.3s ease;
    box-shadow: ${a.x.medium};
    left: 0;
    top: 0;

    ${i}[data-active='true'] & {
        transform: translateX(80%);
    }
`,l=e=>{let{defaultState:t=!1,onChange:o}=e,[r,n]=s.useState(t);return s.createElement(i,{"data-active":r,onClick:()=>{let e=!r;n(e),null==o||o(e)},role:"switch","aria-checked":r,type:"button",isActive:r},s.createElement(d,null))};l.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{defaultState:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""}}}},"./src/components/textbox/textinput.tsx"(e,t,o){"use strict";o.d(t,{k:()=>l});var s=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=o("./node_modules/react/index.js"),n=o("./src/theme/colors.ts"),a=o("./src/theme/radius.ts"),i=o("./src/theme/shadows.ts");let d=s.Ay.div`
    margin-bottom: 20px;
    text-align: left;
    label {
        display: block;
        margin-bottom: 8px;
        font-size: 0.9em;
        color: ${n.l.text_light};
        font-weight: 500;
    }
    input {
        width: calc(100% - 24px);
        padding: 12px;
        border: none;
        border-radius: ${a.Z.medium};
        font-size: 1em;
        color: ${n.l.text_dark};
        background-color: ${n.l.base};
        box-shadow: ${i.x.insetLight};
        transition: all 0.3s ease;

        &:focus {
            outline: none;
            box-shadow: ${i.x.insetMedium};
        }

        &:hover:not(:focus) {
            box-shadow: ${i.x.insetMedium};
        }

        &::placeholder {
            color: ${n.l.medium_gray};
        }
    }
`,l=e=>{let{label:t,...o}=e;return r.createElement(d,null,r.createElement("label",null,t),r.createElement("input",o))};l.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{label:{required:!0,tsType:{name:"string"},description:""}}}},"./src/theme/colors.ts"(e,t,o){"use strict";o.d(t,{l:()=>s});let s={base:"#E0E5EC",baseLight:"#F5F7FA",baseDark:"#A3B1C6",baseBorder:"#738196",blue:"#5F7FD4",green:"#5FB36D",dark_green:"#4A8A54",red:"#D85F6F",dark_red:"#B84C5A",orange:"#D99B5F",dark_orange:"#B87A47",text_dark:"#3A3F47",text:"#4A4F57",text_light:"#6B7280",background:"#E0E5EC",card_background:"#E0E5EC",light_gray:"#F5F7FA",medium_gray:"#C9D1DC",dark_gray:"#8FA3BD"}},"./src/theme/radius.ts"(e,t,o){"use strict";o.d(t,{Z:()=>s});let s={small:"12px",medium:"20px",large:"30px",full:"50%"}},"./src/theme/shadows.ts"(e,t,o){"use strict";o.d(t,{x:()=>s});let s={insetLight:"inset 2px 2px 5px rgba(255, 255, 255, 0.7), inset -2px -2px 5px rgba(0, 0, 0, 0.1)",insetMedium:"inset 3px 3px 7px rgba(255, 255, 255, 0.8), inset -3px -3px 7px rgba(0, 0, 0, 0.15)",insetDark:"inset 5px 5px 10px rgba(255, 255, 255, 0.9), inset -5px -5px 10px rgba(0, 0, 0, 0.2)",light:"3px 3px 6px rgba(0, 0, 0, 0.1), -3px -3px 6px rgba(255, 255, 255, 0.7)",medium:"5px 5px 10px rgba(0, 0, 0, 0.15), -5px -5px 10px rgba(255, 255, 255, 0.8)",medium2:"5px 5px 12px rgba(0, 0, 0, 0.12), -5px -5px 12px rgba(255, 255, 255, 0.75)",large:"8px 8px 16px rgba(0, 0, 0, 0.2), -8px -8px 16px rgba(255, 255, 255, 0.9)"}},"./src/theme/sizes.ts"(e,t,o){"use strict";o.d(t,{F:()=>s,n:()=>r});let s={xs:"8px",sm:"12px",md:"16px",lg:"20px",xl:"24px"},r={small_mobile:"480px",mobile:"768px",tablet:"1024px",desktop:"1440px",fullHd:"1920px",desktop4K:"3840px"}},"./src/widgets/modal/modal.tsx"(e,t,o){"use strict";o.d(t,{a:()=>u});var s=o("./node_modules/react/index.js"),r=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),n=o("./src/components/index.ts"),a=o("./node_modules/@fortawesome/react-fontawesome/dist/index.js"),i=o("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),d=o("./src/theme/sizes.ts"),l=o("./src/theme/colors.ts"),c=o("./src/theme/shadows.ts");let m=r.Ay.div`
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

    .modal-card {
        opacity: 1;
        max-width: 50vw;
        height: max-content;
        display: flex;
        flex-direction: column;
        @media (max-width: ${d.n.mobile}) {
            max-width: 100vw;
            height: 100vh;
            border-radius: 0;
        }

        .close {
            cursor: pointer;
            width: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 9px;
            border-radius: 50%;
            align-self: flex-end;
            background: ${l.l.base};
            color: ${l.l.text_dark};
            transition: all 0.3s ease;

            &:hover {
                box-shadow: ${c.x.medium};
            }

            &:active {
                box-shadow: ${c.x.insetLight};
            }
        }

        .content {
            display: flex;
            flex-direction: column;
        }
    }
`,u=e=>{let{children:t,shouldShow:o,onClose:r}=e;return o?s.createElement(m,null,s.createElement(n.Zp,{className:"modal-card"},s.createElement("div",{className:"close",role:"button",onClick:r},s.createElement(a.gc,{icon:i.yYc})),s.createElement("div",{className:"content"},t))):null};u.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},shouldShow:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./node_modules/classnames/index.js"(e){!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var e="",r=0;r<arguments.length;r++){var n=arguments[r];n&&(e=s(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var r="";for(var n in e)t.call(e,n)&&e[n]&&(r=s(r,n));return r}(n)))}return e}function s(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):"function"==typeof define&&"object"==typeof define.amd&&define.amd?define("classnames",[],function(){return o}):window.classNames=o}()}}]);
//# sourceMappingURL=980.f6ab2712.iframe.bundle.js.map