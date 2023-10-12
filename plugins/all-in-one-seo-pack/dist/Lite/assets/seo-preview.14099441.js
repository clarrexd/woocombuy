import{_ as u}from"./js/_plugin-vue_export-helper.8a32e791.js";import{o as a,c,C as P,r as d,d as p,a as i,K as S,L as B,z as n,D as y,f as b,b as m,n as k,B as w,w as v,g as F,E as O}from"./js/vue.runtime.esm-bundler.c297bd08.js";import{c as M,a as K}from"./js/vue-router.2f451e23.js";import{H as L,I as G,u as C,m as T,J as H,K as N}from"./js/links.da3be5e7.js";import{e as x,b as j,c as U,B as R}from"./js/Caret.8cc4e863.js";import{C as q}from"./js/Tabs.bb1d552b.js";import{C as Y}from"./js/Index.e21839d7.js";import{S as Z,a as z}from"./js/Twitter.e3694924.js";import{S as J}from"./js/Settings.961050db.js";import{C as W}from"./js/FacebookPreview.efb497b3.js";import{C as Q}from"./js/GoogleSearchPreview.940cefb0.js";import"./js/default-i18n.3881921e.js";import{u as X,T as ee}from"./js/TruSeoScore.29220195.js";import{S as te}from"./js/Exclamation.a9500c7c.js";import{r as oe}from"./js/isArrayLikeObject.10b615a9.js";import{C as se}from"./js/TwitterPreview.0179e3b3.js";import{t as ie}from"./js/translations.6e7b2383.js";import"./js/SaveChanges.f4365226.js";import"./js/Information.6e632c27.js";import"./js/Ellipse.404f2a7a.js";import"./js/Slide.d2bcb99c.js";/* empty css                                                 */import"./js/Img.f4a97ae4.js";import"./js/Profile.870d95a3.js";import"./js/Book.25916b6e.js";const re={},ae={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"aioseo-icon-google"},ne=P('<circle cx="12" cy="12" r="11.5" fill="white" stroke="#D0D1D7"></circle><g clip-path="url(#clip0_3359_97687)"><path d="M19.04 12.1666C19.04 11.6466 18.9933 11.1466 18.9067 10.6666H12V13.5032H15.9467C15.7767 14.4199 15.26 15.1966 14.4833 15.7166V17.5566H16.8533C18.24 16.2799 19.04 14.3999 19.04 12.1666Z" fill="#4285F4"></path><path d="M12 19.3332C13.98 19.3332 15.64 18.6765 16.8533 17.5565L14.4833 15.7165C13.8267 16.1565 12.9867 16.4165 12 16.4165C10.09 16.4165 8.47332 15.1265 7.89665 13.3932H5.44666V15.2932C6.65332 17.6899 9.13332 19.3332 12 19.3332Z" fill="#34A853"></path><path d="M7.89663 13.3931C7.74996 12.9531 7.66663 12.4831 7.66663 11.9998C7.66663 11.5164 7.74996 11.0464 7.89663 10.6064V8.70642H5.44663C4.93329 9.72833 4.66617 10.8562 4.66663 11.9998C4.66663 13.1831 4.94996 14.3031 5.44663 15.2931L7.89663 13.3931Z" fill="#FBBC05"></path><path d="M12 7.58323C13.0767 7.58323 14.0433 7.95323 14.8033 8.6799L16.9067 6.57657C15.6367 5.39323 13.9767 4.66656 12 4.66656C9.13332 4.66656 6.65332 6.3099 5.44666 8.70656L7.89666 10.6066C8.47332 8.87323 10.09 7.58323 12 7.58323Z" fill="#EA4335"></path></g><defs><clipPath id="clip0_3359_97687"><rect width="16" height="16" fill="white" transform="translate(4 3.99994)"></rect></clipPath></defs>',3),ce=[ne];function le(e,s){return a(),c("svg",ae,ce)}const de=u(re,[["render",le]]),_e={components:{CoreFacebookPreview:W},data(){return{facebookData:L()}}},pe={class:"preview-wrapper"};function he(e,s,r,_,t,o){const l=d("core-facebook-preview");return a(),c("div",pe,[p(l,{description:t.facebookData.description,image:t.facebookData.image,title:t.facebookData.title},null,8,["description","image","title"])])}const ue=u(_e,[["render",he]]),me={components:{CoreGoogleSearchPreview:Q},data(){return{googleData:G()}}},ge={class:"preview-wrapper"};function fe(e,s,r,_,t,o){const l=d("core-google-search-preview");return a(),c("div",ge,[p(l,{description:t.googleData.description,domain:t.googleData.domain,title:t.googleData.title},null,8,["description","domain","title"])])}const ve=u(me,[["render",fe]]);const be={computed:{metaTags(){var _,t;const e=[],s=[{label:this.$t.__("Title",this.$td),value:document.title||""},{label:this.$t.__("Description",this.$td),value:((_=document.querySelector('meta[name="description"]'))==null?void 0:_.content)||""},{label:this.$t.__("Canonical URL",this.$td),value:((t=document.querySelector('link[rel="canonical"]'))==null?void 0:t.href)||""}],r=document.querySelectorAll('meta[property^="og:"][content],meta[name^="twitter:"][content]');return s.forEach(o=>{o.value&&e.push({label:o.label,value:o.value})}),0<(r==null?void 0:r.length)&&r.forEach(o=>{o.content&&e.push({label:o.getAttribute("name")?o.getAttribute("name"):o.getAttribute("property"),value:o.content})}),e}},methods:{isUrl:oe}},we={class:"aioseo-seo-preview-standalone-view-meta-tags"},ke=["href"];function ye(e,s,r,_,t,o){return a(),c("div",we,[i("dl",null,[(a(!0),c(S,null,B(o.metaTags,(l,g)=>(a(),c(S,{key:g},[i("dt",null,n(l.label),1),i("dd",null,[o.isUrl(l.value)?(a(),c("a",{key:0,href:l.value,target:"_blank"},n(l.value),9,ke)):(a(),c(S,{key:1},[y(n(l.value),1)],64))])],64))),128))])])}const Se=u(be,[["render",ye],["__scopeId","data-v-0bbdaf35"]]);const Ce={setup(){const{strings:e}=X();return{rootStore:C(),composableStrings:e}},components:{SvgIconPencil:x,SvgCircleCheck:j,SvgCircleExclamation:te,SvgCircleClose:U,ViewMetaTags:Se},computed:{focusKeyphrase(){var e,s,r;return((r=(s=(e=this.rootStore.aioseo)==null?void 0:e.keyphrases)==null?void 0:s.focus)==null?void 0:r.keyphrase)||!1}},methods:{getCheckObject(e){var s,r;return(r=(s=this.rootStore.aioseo)==null?void 0:s.page_analysis)==null?void 0:r.analysis[e]},getCheckErrors(e){var s;return((s=this.getCheckObject(e))==null?void 0:s.errors)||0},getCheckIconComponent(e){const s=this.getErrorClass(this.getCheckErrors(e));return s==="red"?"svg-circle-close":s==="orange"?"svg-circle-exclamation":"svg-circle-check"},checkErrorsExists(e){var s,r;return typeof((r=(s=this.rootStore.aioseo.page_analysis.analysis)==null?void 0:s[e])==null?void 0:r.errors)<"u"},isCheckEligible(){var e;return typeof((e=this.rootStore.aioseo.page_analysis)==null?void 0:e.analysis)<"u"}},mixins:[ee],data(){return{strings:T(this.composableStrings,{focusKeyphrase:this.$t.__("Focus Keyphrase",this.$td),checks:this.$t.__("Checks",this.$td),basicSeo:this.$t.__("Basic SEO",this.$td),readability:this.$t.__("Readability",this.$td),title:this.$t.__("Title",this.$td),metaTags:this.$t.__("Meta Tags",this.$td),noKeyphraseFound:this.$t.__("No keyphrase found",this.$td),noDataYet:this.$t.__("No data yet",this.$td)})}}},De={class:"aioseo-seo-preview-standalone-view-seo-inspector"},Ee={key:0,class:"first-half"},Te={class:"child"},xe={key:0},$e={key:1,class:"no-keyphrase-found"},Ve={key:0,class:"check"},Ie={class:"check__title"},Ae={class:"check__feedback"},Pe={key:1,class:"check"},Be={class:"check__title"},Fe={class:"check__feedback"},Oe={key:2,class:"check"},Me={class:"check__title"},Ke={class:"check__feedback"},Le={key:3,class:"check"},Ge={class:"check__title"},He={class:"check__feedback"},Ne={key:4,class:"check"},je={class:"check__title"},Ue={class:"check__feedback"},Re={key:5,class:"check"},qe={class:"check__title"},Ye={class:"check__feedback"},Ze={class:"second-half"},ze={class:"child"};function Je(e,s,r,_,t,o){const l=d("svg-circle-exclamation"),g=d("view-meta-tags");return a(),c("div",De,[i("div",null,[o.isCheckEligible()?(a(),c("div",Ee,[i("div",Te,[i("dl",null,[i("dt",null,n(t.strings.focusKeyphrase),1),i("dd",null,[o.focusKeyphrase?(a(),c("span",xe,n(o.focusKeyphrase),1)):b("",!0),o.focusKeyphrase?b("",!0):(a(),c("span",$e,[p(l,{width:"20"}),y(" "+n(t.strings.noKeyphraseFound),1)]))]),i("dt",null,n(t.strings.checks),1),i("dd",null,[o.checkErrorsExists("basic")?(a(),c("div",Ve,[(a(),m(w(o.getCheckIconComponent("basic")),{class:k([e.getErrorClass(o.getCheckErrors("basic")),"check__icon"])},null,8,["class"])),i("div",null,[i("span",Ie,n(t.strings.basicSeo)+": ",1),i("span",Ae,n(e.getErrorDisplay(o.getCheckErrors("basic"))),1)])])):(a(),c("div",Pe,[i("span",Be,n(t.strings.basicSeo)+": ",1),i("span",Fe,n(t.strings.noDataYet),1)])),o.checkErrorsExists("title")?(a(),c("div",Oe,[(a(),m(w(o.getCheckIconComponent("title")),{class:k([e.getErrorClass(o.getCheckErrors("title")),"check__icon"])},null,8,["class"])),i("div",null,[i("span",Me,n(t.strings.title)+": ",1),i("span",Ke,n(e.getErrorDisplay(o.getCheckErrors("title"))),1)])])):(a(),c("div",Le,[i("span",Ge,n(t.strings.title)+": ",1),i("span",He,n(t.strings.noDataYet),1)])),o.checkErrorsExists("readability")?(a(),c("div",Ne,[(a(),m(w(o.getCheckIconComponent("readability")),{class:k([e.getErrorClass(o.getCheckErrors("readability")),"check__icon"])},null,8,["class"])),i("div",null,[i("span",je,n(t.strings.readability)+": ",1),i("span",Ue,n(e.getErrorDisplay(o.getCheckErrors("readability"))),1)])])):(a(),c("div",Re,[i("span",qe,n(t.strings.readability)+": ",1),i("span",Ye,n(t.strings.noDataYet),1)]))])])])])):b("",!0),i("div",Ze,[i("div",ze,[i("dl",null,[i("dt",null,n(t.strings.metaTags),1),i("dd",null,[p(g)])])])])])])}const We=u(Ce,[["render",Je],["__scopeId","data-v-b09bc63b"]]),Qe={components:{CoreTwitterPreview:se},data(){return{twitterData:H()}}},Xe={class:"preview-wrapper"};function et(e,s,r,_,t,o){const l=d("core-twitter-preview");return a(),c("div",Xe,[p(l,{card:t.twitterData.card,description:t.twitterData.description,image:t.twitterData.image,title:t.twitterData.title},null,8,["card","description","image","title"])])}const tt=u(Qe,[["render",et]]);const ot={setup(){return{rootStore:C()}},components:{BaseButton:R,CoreMainTabs:q,CoreModal:Y,SvgIconFacebook:Z,SvgIconGoogle:de,SvgIconPencil:x,SvgIconSettings:J,SvgIconTwitter:z,ViewFacebook:ue,ViewGoogle:ve,ViewSeoInspector:We,ViewTwitter:tt},methods:{styleShadowDom(){const e=document.querySelector(".aioseo-seo-preview-shadow-wrapper");if(!e)return!1;this.rootStore.aioseo.mainAssetCssQueue.forEach(s=>{if(typeof s.url>"u"||!s.url)return;const r=document.createElement("link");r.setAttribute("rel","stylesheet"),r.setAttribute("media","all"),r.setAttribute("href",s.url),e.shadowRoot.prepend(r)})},watchClicks(){const e=document.querySelector("#wp-admin-bar-aioseo-seo-preview a");e&&e.addEventListener("click",s=>{s.preventDefault(),this.display=!0})}},data(){return{activeTab:"ViewGoogle",display:!1,loadingEditPreviewDataBtn:!1,strings:{modalHeader:this.$t.__("SEO Preview",this.$td)},tabs:[{slug:"ViewGoogle",icon:"svg-icon-google",name:"Google",component:"ViewGoogle"},{slug:"ViewFacebook",icon:"svg-icon-facebook",name:"Facebook",component:"ViewFacebook"},{slug:"ViewTwitter",icon:"svg-icon-twitter",name:"Twitter",component:"ViewTwitter"},{slug:"ViewSeoInspector",icon:"svg-icon-settings",name:this.$t.__("SEO Inspector",this.$td),component:"ViewSeoInspector"}]}},computed:{editSnippetData(){const e={url:"",btnText:""};return this.activeTab==="ViewGoogle"?(e.url=this.rootStore.aioseo.editGoogleSnippetUrl||"",e.btnText=this.$t.__("Edit Snippet",this.$td)):this.activeTab==="ViewFacebook"?(e.url=this.rootStore.aioseo.editFacebookSnippetUrl||"",e.btnText=this.$t.__("Edit Facebook Meta Data",this.$td)):this.activeTab==="ViewTwitter"&&(e.url=this.rootStore.aioseo.editTwitterSnippetUrl||"",e.btnText=this.$t.__("Edit Twitter Meta Data",this.$td)),e},editObjectData(){const e={url:"",btnText:""};return this.activeTab==="ViewSeoInspector"&&(e.url=this.rootStore.aioseo.editObjectUrl||"",e.btnText=this.rootStore.aioseo.editObjectBtnText||""),e}},mounted(){this.styleShadowDom(),this.watchClicks()}},st={class:"aioseo-modal-content"},it={class:"component-overflow"},rt={class:"component-container"},at={key:0,class:"btn-edit-preview-data-wrapper"};function nt(e,s,r,_,t,o){const l=d("core-main-tabs"),g=d("svg-icon-pencil"),I=d("base-button"),A=d("core-modal");return t.display?(a(),m(A,{key:0,classes:["aioseo-app","aioseo-seo-preview-standalone"],onClose:s[2]||(s[2]=f=>t.display=!1)},{headerTitle:v(()=>[y(n(t.strings.modalHeader),1)]),body:v(()=>[i("div",st,[p(l,{tabs:t.tabs,showSaveButton:!1,active:t.activeTab,onChanged:s[0]||(s[0]=f=>this.activeTab=f)},{"var-tab-icon":v(({tab:f})=>[(a(),m(w(f.icon)))]),_:1},8,["tabs","active"]),i("div",it,[i("div",rt,[i("div",{class:k(["component-wrapper","tab"+t.activeTab])},[(a(),m(w(t.activeTab),{parentComponentContext:"modal"}))],2)])])])]),footer:v(()=>[o.editSnippetData.url||o.editObjectData.url?(a(),c("div",at,[p(I,{href:o.editSnippetData.url||o.editObjectData.url,loading:t.loadingEditPreviewDataBtn,onClick:s[1]||(s[1]=F(f=>t.loadingEditPreviewDataBtn=!0,["exact"])),class:"btn-edit-preview-data",type:"gray",size:"small",tag:"a"},{default:v(()=>[p(g),y(" "+n(o.editSnippetData.btnText||o.editObjectData.btnText),1)]),_:1},8,["href","loading"])])):b("",!0)]),_:1})):b("",!0)}const $=u(ot,[["render",nt],["__scopeId","data-v-2e9a6355"]]),D=M({history:K(),routes:[{path:"/",component:$}]}),h=O({...$,name:"Standalone/SeoPreview"});h.use(D);D.app=h;N(h,D);const E=C(),ct=JSON.parse(JSON.stringify(window.aioseoSeoPreview));E.aioseo=T({...E.aioseo},{...ct||{}});h.$t=h.config.globalProperties.$t=ie;h.$td=h.config.globalProperties.$td="all-in-one-seo-pack";const V=document.createElement("div");{const e=document.createElement("div"),s=e.attachShadow({mode:"open"}),r=document.createElement("div");e.setAttribute("class","aioseo-seo-preview-shadow-wrapper"),e.setAttribute("style","margin:0;padding:0;border:0"),r.setAttribute("dir",(document==null?void 0:document.dir)||"ltr"),r.setAttribute("style","margin:0;padding:0;border:0"),s.appendChild(r),r.appendChild(V),document.body.appendChild(e)}h.mount(V);