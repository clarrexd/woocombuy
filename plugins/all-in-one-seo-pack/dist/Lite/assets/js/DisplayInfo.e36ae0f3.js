import{r as c,o as t,c as i,d as h,w as l,K as $,L as x,b as f,a as r,e as y,D as b,z as g,Q as M,I as B,f as u,C as Z,g as A,n as I,U as T}from"./vue.runtime.esm-bundler.c297bd08.js";import{G as O,a as D}from"./Row.b4141467.js";import{_ as m}from"./_plugin-vue_export-helper.8a32e791.js";import{C as J}from"./Tooltip.42b4f815.js";import{S as P}from"./CheckSolid.ad3772f2.js";import{c as E}from"./index.6d5de07f.js";import{C as G}from"./SettingsRow.5327053b.js";import{T as N}from"./Slide.d2bcb99c.js";const j={components:{GridColumn:O,GridRow:D},props:{options:{type:Array,required:!0},name:{type:String,required:!0},modelValue:String}},q={class:"aioseo-box-toggle"},R=["id","name","onInput","checked"],U=["for"];function z(e,o,a,w,s,d){const v=c("grid-column"),C=c("grid-row");return t(),i("div",q,[h(C,null,{default:l(()=>[(t(!0),i($,null,x(a.options,(_,p)=>(t(),f(v,{key:p,sm:"6",md:"4"},{default:l(()=>[r("input",{id:`id_${a.name}_${p}`,name:a.name,type:"radio",onInput:H=>e.$emit("update:modelValue",_.value),checked:_.value===a.modelValue},null,40,R),r("label",{for:`id_${a.name}_${p}`},[y(e.$slots,_.slot,{},()=>[b(g(_.label),1)])],8,U)]),_:2},1024))),128))]),_:3})])}const W=m(j,[["render",z]]);const F={components:{CoreTooltip:J,SvgCircleCheckSolid:P,SvgCopy:E},props:{message:{type:String,required:!0}},data(){return{copied:!1}},computed:{copyText(){return this.copied?this.$t.__("Copied!",this.$td):this.$t.__("Click to Copy",this.$td)}},methods:{onCopy(){this.copied=!0;const e=this.$refs.copy;e.popperJS&&(e.popperJS.destroy(),e.popperJS=null),e.showPopper=!1,setTimeout(()=>{e.popperJS&&(e.popperJS.destroy(),e.popperJS=null),e.showPopper=!1,this.copied=!1},2e3)},onError(){}}},K={class:"aioseo-copy-block"},Q={class:"message"},X={ref:"copy",class:"copy"};function Y(e,o,a,w,s,d){const v=c("svg-copy"),C=c("svg-circle-check-solid"),_=c("core-tooltip"),p=M("clipboard");return t(),i("div",K,[r("div",Q,g(a.message),1),h(_,{class:"copy-tooltip",type:"action"},{tooltip:l(()=>[b(g(d.copyText),1)]),default:l(()=>[B((t(),i("div",X,[s.copied?u("",!0):(t(),f(v,{key:0})),s.copied?(t(),f(C,{key:1})):u("",!0)])),[[p,a.message,"copy"],[p,d.onCopy,"success"],[p,d.onError,"error"]])]),_:1})])}const ee=m(F,[["render",Y]]),te={},oe={viewBox:"0 0 59 54",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"aioseo-gutenberg-block"},se=r("rect",{x:"1.5",y:"1.50024",stroke:"currentColor","stroke-width":"3","stroke-dasharray":"5 3"},null,-1),ne=r("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M47.6849 10.0276H11.3151V43.9728H47.6849V10.0276ZM22.6301 25.8377V28.1766H28.7115V34.2742H31.0967V28.1766H37.1781V25.8377H31.0967V19.7262H28.7115V25.8377H22.6301Z",fill:"currentcolor"},null,-1),re=[se,ne];function ce(e,o){return t(),i("svg",oe,re)}const ie=m(te,[["render",ce]]),le={},ae={viewBox:"0 0 110 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"aioseo-php"},pe=Z('<path d="M23.3994 19.1184H27.8077V23.0002H23.3994V19.1184ZM18 9.44752C18.1183 6.89548 19.0996 5.08666 20.9438 4.02106C22.1075 3.34052 23.5375 3.00024 25.2337 3.00024C27.4625 3.00024 29.3116 3.48379 30.7811 4.45088C32.2604 5.41797 33 6.8507 33 8.74907C33 9.91316 32.6795 10.8937 32.0385 11.6906C31.6637 12.1742 30.9438 12.7921 29.8787 13.5442L28.8284 14.283C28.2564 14.6859 27.8767 15.1561 27.6893 15.6933C27.571 16.0336 27.5069 16.5619 27.497 17.2783H23.503C23.5621 15.765 23.7199 14.7218 23.9763 14.1487C24.2327 13.5666 24.8935 12.8995 25.9586 12.1473L27.0385 11.3817C27.3935 11.1399 27.6795 10.8758 27.8965 10.5892C28.2909 10.0967 28.4882 9.55498 28.4882 8.96398C28.4882 8.28343 28.2663 7.66557 27.8225 7.11039C27.3886 6.54625 26.5897 6.26418 25.426 6.26418C24.2821 6.26418 23.4684 6.60893 22.9852 7.29843C22.5118 7.98793 22.2751 8.7043 22.2751 9.44752H18Z" fill="currentColor"></path><path d="M49.9406 9.72752C49.9406 8.79129 49.695 8.12372 49.2038 7.7248C48.7207 7.32589 48.0403 7.12643 47.1626 7.12643H43.696V12.4263H47.1626C48.0403 12.4263 48.7207 12.2106 49.2038 11.7791C49.695 11.3476 49.9406 10.6637 49.9406 9.72752ZM53.6246 9.70309C53.6246 11.8279 53.0931 13.33 52.0302 14.2092C50.9673 15.0884 49.4494 15.5281 47.4766 15.5281H43.696V22.0002H40V4.00024H47.7544C49.542 4.00024 50.9673 4.46429 52.0302 5.39237C53.0931 6.32046 53.6246 7.75737 53.6246 9.70309Z" fill="currentColor"></path><path d="M56.3905 22.0002V4.00024H60.0745V10.8632H67.0317V4.00024H70.7277V22.0002H67.0317V13.965H60.0745V22.0002H56.3905Z" fill="currentColor"></path><path d="M84.3161 9.72752C84.3161 8.79129 84.0705 8.12372 83.5793 7.7248C83.0961 7.32589 82.4157 7.12643 81.538 7.12643H78.0715V12.4263H81.538C82.4157 12.4263 83.0961 12.2106 83.5793 11.7791C84.0705 11.3476 84.3161 10.6637 84.3161 9.72752ZM88 9.70309C88 11.8279 87.4685 13.33 86.4056 14.2092C85.3427 15.0884 83.8249 15.5281 81.852 15.5281H78.0715V22.0002H74.3754V4.00024H82.1298C83.9175 4.00024 85.3427 4.46429 86.4056 5.39237C87.4685 6.32046 88 7.75737 88 9.70309Z" fill="currentColor"></path><path d="M12.1457 0.000244141L15 2.93774L5.72875 12.5002L15 22.0627L12.1457 25.0002L0 12.5002L12.1457 0.000244141Z" fill="currentColor"></path><path d="M97.8543 0.000244141L95 2.93774L104.271 12.5002L95 22.0627L97.8543 25.0002L110 12.5002L97.8543 0.000244141Z" fill="currentColor"></path>',6),de=[pe];function _e(e,o){return t(),i("svg",ae,de)}const ue=m(le,[["render",_e]]),ge={},he={viewBox:"0 0 59 39",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"aioseo-shortcode"},fe=r("path",{d:"M0 0.000244141H11V4.31055H5.91633V34.6692H11V39.0002H0V0.000244141Z",fill:"currentColor"},null,-1),me=r("path",{d:"M34.1337 0.000244141H40L25.8168 39.0002H20L34.1337 0.000244141Z",fill:"currentColor"},null,-1),ve=r("path",{d:"M59 0.000244141H48V4.31055H53.0837V34.6692H48V39.0002H59V0.000244141Z",fill:"currentColor"},null,-1),Ce=[fe,me,ve];function ye(e,o){return t(),i("svg",he,Ce)}const we=m(ge,[["render",ye]]),He={},Ve={viewBox:"0 0 57 57",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"aioseo-widget"},$e=r("path",{d:"M48.6875 7.12506H8.3125C7.00625 7.12506 5.9375 8.19381 5.9375 9.50006V23.7501C5.9375 25.0563 7.00625 26.1251 8.3125 26.1251H48.6875C49.9938 26.1251 51.0625 25.0563 51.0625 23.7501V9.50006C51.0625 8.19381 49.9938 7.12506 48.6875 7.12506ZM46.3125 21.3751V11.8751H10.6875V21.3751H46.3125ZM46.3125 45.1251V35.6251H10.6875V45.1251H46.3125ZM8.3125 30.8751H48.6875C49.9938 30.8751 51.0625 31.9438 51.0625 33.2501V47.5001C51.0625 48.8063 49.9938 49.8751 48.6875 49.8751H8.3125C7.00625 49.8751 5.9375 48.8063 5.9375 47.5001V33.2501C5.9375 31.9438 7.00625 30.8751 8.3125 30.8751Z",fill:"currentColor"},null,-1),xe=[$e];function be(e,o){return t(),i("svg",Ve,xe)}const ke=m(He,[["render",be]]);const Se={components:{BaseBoxToggle:W,CoreCopyBlock:ee,CoreSettingsRow:G,SvgGutenbergBlock:ie,SvgPhp:ue,SvgShortcode:we,SvgWidget:ke,TransitionSlide:N},props:{label:{type:String,default(){const e=T();return e.appContext.app.$t.__("Display Info",e.appContext.app.$td)}},options:{type:Object,default(){return{block:{copy:"",desc:"",input:!1},shortcode:{copy:"",desc:"",input:!1},widget:{copy:"",desc:"",input:!1},php:{copy:"",desc:"",input:!1},extra:{copy:"",desc:"",input:!1}}}}},data(){return{currentItem:Object.keys(this.options)[0],errors:[],showAdvancedSettings:!1,strings:{advancedSettings:this.$t.__("Advanced Settings",this.$td),gutenbergBlock:this.$t.__("Gutenberg Block",this.$td),phpCode:this.$t.__("PHP Code",this.$td),shortcode:this.$t.__("Shortcode",this.$td),widget:this.$t.__("Widget",this.$td)}}},computed:{boxToggleOptions(){return Object.keys(this.options).map(o=>({value:o,slot:o,copy:this.options[o].copy,desc:this.options[o].desc}))}},watch:{currentItem(e){this.currentItem=e}},methods:{inputEvent(e){this.$emit("input",e),this.showAdvancedSettings=!1}}},Le={class:"displayInfo-show-content"},Me={key:0,class:"copy-box"},Be=["innerHTML"],Ze={key:1,class:"extra-box"};function Ae(e,o,a,w,s,d){const v=c("svg-shortcode"),C=c("svg-gutenberg-block"),_=c("svg-php"),p=c("svg-widget"),H=c("base-box-toggle"),k=c("core-copy-block"),V=c("transition-slide"),S=c("core-settings-row");return t(),f(S,{class:"aioseo-display-info",name:a.label},{content:l(()=>[h(H,{modelValue:s.currentItem,"onUpdate:modelValue":[o[0]||(o[0]=n=>s.currentItem=n),o[1]||(o[1]=n=>d.inputEvent(n))],name:"displayInfo",options:d.boxToggleOptions},{extra:l(()=>[y(e.$slots,"extra")]),shortcode:l(()=>[h(v),r("p",null,g(s.strings.shortcode),1)]),block:l(()=>[h(C),r("p",null,g(s.strings.gutenbergBlock),1)]),php:l(()=>[h(_),r("p",null,g(s.strings.phpCode),1)]),widget:l(()=>[h(p),r("p",null,g(s.strings.widget),1)]),_:3},8,["modelValue","options"]),r("div",Le,[(t(!0),i($,null,x(d.boxToggleOptions,(n,L)=>(t(),f(V,{key:L,active:n.value===s.currentItem},{default:l(()=>[n.slot!=="extra"?(t(),i("div",Me,[r("div",null,[n.desc?(t(),i("div",{key:0,class:"aioseo-description",innerHTML:n.desc},null,8,Be)):u("",!0),n.copy?(t(),f(k,{key:1,message:n.copy},null,8,["message"])):u("",!0),e.$slots[n.slot+"Advanced"]&&!s.showAdvancedSettings?(t(),i("a",{key:2,class:"advanced-settings-link",href:"#",onClick:o[2]||(o[2]=A(Ie=>s.showAdvancedSettings=!s.showAdvancedSettings,["prevent"]))},g(s.strings.advancedSettings),1)):u("",!0)]),e.$slots[n.slot+"Advanced"]?(t(),f(V,{key:0,class:I({"advanced-settings":!0,"advanced-settings-hidden":!s.showAdvancedSettings}),active:s.showAdvancedSettings},{default:l(()=>[y(e.$slots,n.slot+"Advanced")]),_:2},1032,["class","active"])):u("",!0)])):u("",!0),n.slot==="extra"?(t(),i("div",Ze,[y(e.$slots,"extraBox",{item:n})])):u("",!0)]),_:2},1032,["active"]))),128))])]),_:3},8,["name"])}const je=m(Se,[["render",Ae]]);export{je as C};