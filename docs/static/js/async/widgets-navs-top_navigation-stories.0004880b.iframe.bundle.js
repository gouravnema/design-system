"use strict";(self.webpackChunk_gouravnema_design_system=self.webpackChunk_gouravnema_design_system||[]).push([["821"],{"./src/widgets/navs/top_navigation.stories.tsx"(e,t,n){n.r(t),n.d(t,{default:()=>q,NoItems:()=>A,Default:()=>$,__namedExportsOrder:()=>C});var i=n("./node_modules/react/index.js"),a=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),l=n("./src/components/index.ts"),r=n("./src/theme.constants.ts");let o=a.Ay.div`
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
        color: ${r.lm.blue};
    }
`,s=n.p+"static/image/static/media/logo.cde6702f.png";var d=n("./node_modules/@fortawesome/react-fontawesome/dist/index.js"),c=n("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),m=n("./src/theme/colors.ts"),p=n("./src/theme/shadows.ts");let g=(0,a.Ay)(l.Zp)`
    
    width: calc(100% - 24px);
    min-height: 40px;
    padding: 0;
    margin: 5px;
    display: flex;
    flex-direction: column;
    gap: 0;
    font-size: clamp(12px, 1.25vw, 18px);
    background-color: ${m.l.base};
    position: relative;

    @media (max-width: 768px) {
        width: calc(100% - 16px);
        margin: 3px;
        font-size: clamp(10px, 2vw, 14px);
    }
`,u=a.Ay.div`
    padding: 5px 10px;
    min-width: 50px;
    border-radius: 8px;
    transition: all 0.3s ease;
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 5px;
    &:hover {
        cursor: pointer;
        background-color: ${m.l.baseLight};
        box-shadow: ${p.x.light};
    }

    &:active {
        box-shadow: ${p.x.insetLight};
    }

    @media (max-width: 768px) {
        padding: 12px 15px;
        font-size: 14px;
        width: 100%;
        white-space: normal;
        justify-content: center;
    }
`,x=e=>{let{item:t}=e;return i.createElement(u,{key:t.id,onClick:t.onClick},t.icon&&i.createElement("span",{className:"icon"},i.createElement("i",{className:`icon-${t.icon}`})),i.createElement("span",{className:"label"},t.label))},y=e=>{let{collection:t}=e;return i.createElement("div",{key:t.label},i.createElement("span",null,t.label),i.createElement("div",null,t.items.map(e=>i.createElement(x,{key:e.id,item:e}))))},h=a.Ay.div`
    display: flex;
    gap: 5px;
    font-weight: 500;
    padding: 5px;
    align-items: center;
    justify-content: flex-end;
    flex-grow: 1;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        gap: 0;
        padding: 0;
        max-height: ${e=>e.isOpen?"1000px":"0"};
        overflow: hidden;
        transition: max-height 0.4s ease-in-out;
        border-top: ${e=>e.isOpen?`1px solid ${m.l.baseBorder}`:"none"};
    }
`,v=a.Ay.div`
    display: flex;
    gap: 8px;
    align-items: center;
    padding: 5px;
    flex-direction: row;

    >.img-holder {
        width: 5vw;
        height: 5vw;
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 40px;
        min-height: 40px;
    }

    @media (max-width: 768px) {
        width: 100%;
        justify-content: flex-start;
        padding: 10px 15px;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        gap: 10px;

        >.img-holder {
            width: 40px;
            height: 40px;
        }
    }
`,w=e=>{let{items:t,isOpen:n=!1}=e;return i.createElement(h,{isOpen:n,className:"items"},t.map(e=>"items"in e?i.createElement(y,{key:e.label,collection:e}):i.createElement(x,{key:e.id,item:e})))},f=e=>{let{data:t,isOpen:n}=e;if(!1!==n)return i.createElement(v,null,i.createElement("div",{className:"img-holder"},(null==t?void 0:t.avatarUrl)&&i.createElement("img",{src:t.avatarUrl,alt:t.name})||i.createElement(l.RP,{code:"head_1_2",rounded:!0,size:4})),i.createElement("div",null,null==t?void 0:t.name,i.createElement(d.gc,{icon:c.Jt$})))},b=a.Ay.button`
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    color: ${m.l.text};
    padding: 5px 10px;
    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`,k=a.Ay.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 5px;
    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`,E=a.Ay.div`
    display: none;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`,S=a.Ay.div`
    display: flex;
    @media (max-width: 768px) {
        display: none;
    }
`,_=e=>{let{title:t,profileData:n,items:a=[]}=e,[l,r]=(0,i.useState)(!1);return i.createElement(g,null,i.createElement(k,null,i.createElement(o,{title:t,logo:s}),i.createElement(S,null,i.createElement(w,{items:a,isOpen:l}),i.createElement(f,{data:n,isOpen:l})),i.createElement(b,{onClick:()=>{r(!l)}},i.createElement(d.gc,{icon:l?c.GRI:c.ckx}))),i.createElement(E,null,i.createElement(w,{items:a,isOpen:l}),i.createElement(f,{data:n,isOpen:l})))};_.__docgenInfo={description:"",methods:[],displayName:"TopNavigation",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:"MenuItem | MenuCollection",elements:[{name:"signature",type:"object",raw:"{\n  label: string;\n  icon?: IconProp;\n  id: string;\n  onClick: (e: SyntheticEvent) => void;\n  isSelected?: boolean;\n}",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"icon",value:{name:"IconProp",required:!1}},{key:"id",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"(e: SyntheticEvent) => void",signature:{arguments:[{type:{name:"SyntheticEvent"},name:"e"}],return:{name:"void"}},required:!0}},{key:"isSelected",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:"{\n  items: MenuItem[];\n  label: string;\n}",signature:{properties:[{key:"items",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  label: string;\n  icon?: IconProp;\n  id: string;\n  onClick: (e: SyntheticEvent) => void;\n  isSelected?: boolean;\n}",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"icon",value:{name:"IconProp",required:!1}},{key:"id",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"(e: SyntheticEvent) => void",signature:{arguments:[{type:{name:"SyntheticEvent"},name:"e"}],return:{name:"void"}},required:!0}},{key:"isSelected",value:{name:"boolean",required:!1}}]}}],raw:"MenuItem[]",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}]}],raw:"Array<MenuItem | MenuCollection>"},description:"",defaultValue:{value:"[]",computed:!1}},title:{required:!1,tsType:{name:"string"},description:""},profileData:{required:!0,tsType:{name:"ProfileData"},description:""}}};let q={title:"Widgets/Navs/TopNavigation",component:_},j=e=>i.createElement(_,e),N=e=>()=>console.log(`${e} action triggered`),$=j.bind({});$.args={toggleShowSideNav:()=>{},title:"My Application Sample",parameters:{layout:"center"},profileData:{name:"John Doe"},items:[{id:"home",label:"Home",onClick:N("item-click-home")},{id:"settings",label:"Settings",onClick:N("item-click-settings")}]};let A=j.bind({});A.args={toggleShowSideNav:N("toggleShowSideNav"),items:[]};let C=["Default","NoItems"]}}]);
//# sourceMappingURL=widgets-navs-top_navigation-stories.0004880b.iframe.bundle.js.map