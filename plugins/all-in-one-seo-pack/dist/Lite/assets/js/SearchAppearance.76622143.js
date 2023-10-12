import{b as V,f as H,m as P}from"./links.da3be5e7.js";import"./default-i18n.3881921e.js";import{u as L,W as x}from"./Wizard.6351b3ab.js";import{r as a,c as u,d as r,w as d,o as p,a as o,D as c,z as n,n as C,f as m,b as B,g as D}from"./vue.runtime.esm-bundler.c297bd08.js";import{_ as M}from"./_plugin-vue_export-helper.8a32e791.js";import"./index.6d5de07f.js";import"./Caret.8cc4e863.js";/* empty css                                            */import"./constants.44daa6bb.js";/* empty css                                              */import{M as U}from"./MaxCounts.12b45bab.js";import{T as G}from"./Tags.1449bd9f.js";import"./TruSeoHighlighter.271256b4.js";import{B as N}from"./Checkbox.1f4414d4.js";import{B as R}from"./RadioToggle.2004a807.js";import{C as O}from"./GoogleSearchPreview.940cefb0.js";import{C as I}from"./HtmlTagsEditor.500dedd6.js";import{C as E}from"./PostTypeOptions.45c1c02b.js";import{W as Y,a as j,b as q}from"./Header.0920a349.js";import{W as F,_ as J}from"./Steps.8dc7c182.js";import"./isArrayLikeObject.10b615a9.js";import"./addons.1640e0f5.js";import"./upperFirst.d65414ba.js";import"./_stringToArray.a4422725.js";import"./Index.e21839d7.js";/* empty css                                              */import"./tags.0f985950.js";import"./postContent.d84eb650.js";import"./cleanForSlug.a67f7e84.js";import"./Ellipse.404f2a7a.js";import"./toFinite.c2274946.js";import"./Checkmark.dcb95692.js";import"./Editor.46a63b09.js";import"./UnfilteredHtml.acaa614e.js";import"./HighlightToggle.2c86687c.js";import"./Tooltip.42b4f815.js";import"./Row.b4141467.js";import"./Logo.be6331d8.js";const K={setup(){const{strings:l}=L();return{optionsStore:V(),setupWizardStore:H(),composableStrings:l}},components:{BaseCheckbox:N,BaseRadioToggle:R,CoreGoogleSearchPreview:O,CoreHtmlTagsEditor:I,CorePostTypeOptions:E,WizardBody:Y,WizardCloseAndExit:F,WizardContainer:j,WizardHeader:q,WizardSteps:J},mixins:[U,G,x],data(){return{separator:void 0,loaded:!1,titleCount:0,descriptionCount:0,showHoverClass:!1,editing:!1,loading:!1,stage:"search-appearance",strings:P(this.composableStrings,{searchAppearance:this.$t.__("Search Appearance",this.$td),description:this.$t.__("The way your site is displayed in search results is very important. Take some time to look over these settings and tweak as needed.",this.$td),googleSnippetPreview:this.$t.__("Google Snippet Preview",this.$td),editTitleAndDescription:this.$t.__("Edit Title and Description",this.$td),clickToAddSiteTitle:this.$t.__("Click on the tags below to insert variables into your site title.",this.$td),clickToAddSiteDescription:this.$t.__("Click on the tags below to insert variables into your meta description.",this.$td),siteTitle:this.$t.__("Home Page Title",this.$td),metaDescription:this.$t.__("Meta Description",this.$td),isSiteUnderConstruction:this.$t.__("Is the site under construction or live (ready to be indexed)?",this.$td),underConstruction:this.$t.__("Under Construction",this.$td),liveSite:this.$t.__("Live Site",this.$td),includeAllPostTypes:this.$t.__("Include All Post Types",this.$td),enableSitemap:this.$t.__("Enable Sitemap",this.$td),doYouHaveMultipleAuthors:this.$t.__("Do you have multiple authors?",this.$td),redirectAttachmentPages:this.$t.__("Redirect attachment pages?",this.$td)})}},methods:{addHoverClass(){this.showHoverClass=!0},removeHoverClass(){this.showHoverClass=!1},saveAndContinue(){this.loading=!0,this.setupWizardStore.saveWizard("searchAppearance").then(()=>{this.$router.push(this.setupWizardStore.getNextLink)})},skipStep(){this.setupWizardStore.saveWizard(),this.$router.push(this.setupWizardStore.getNextLink)}},mounted(){this.$nextTick(()=>{this.setupWizardStore.searchAppearance.redirectAttachmentPages=this.optionsStore.dynamicOptions.searchAppearance.postTypes.attachment.redirectAttachmentUrls==="attachment",this.loaded=!0})}},Q={class:"aioseo-wizard-search-appearance"},X={class:"header"},Z={class:"description"},$={class:"aioseo-settings-row no-border"},ee={class:"settings-name"},te={class:"name small-margin"},se={key:1,class:"action"},oe={key:0,class:"site-info"},ie={class:"site-title aioseo-settings-row no-border"},re={class:"settings-name"},ne={class:"name small-margin"},ae=["innerHTML"],le={class:"site-description aioseo-settings-row no-border"},de={class:"settings-name"},ce={class:"name small-margin"},pe=["innerHTML"],ue={class:"settings-name"},me={class:"name small-margin"},_e={key:1,class:"aioseo-settings-row no-border post-types"},ge={key:2,class:"aioseo-settings-row no-border enable-sitemaps"},he={key:3,class:"aioseo-settings-row no-border"},ve={class:"settings-name"},Se={class:"name small-margin"},Ce={key:4,class:"aioseo-settings-row no-border no-margin small-padding"},ye={class:"settings-name"},Ae={class:"name small-margin"},fe={class:"go-back"},ze=o("div",{class:"spacer"},null,-1);function be(l,s,ke,t,e,_){const y=a("wizard-header"),A=a("wizard-steps"),f=a("core-google-search-preview"),g=a("base-button"),v=a("core-html-tags-editor"),h=a("base-radio-toggle"),z=a("base-toggle"),b=a("core-post-type-options"),k=a("base-checkbox"),S=a("router-link"),T=a("wizard-body"),W=a("wizard-close-and-exit"),w=a("wizard-container");return p(),u("div",Q,[r(y),r(w,null,{default:d(()=>[r(T,null,{footer:d(()=>[o("div",fe,[r(S,{to:t.setupWizardStore.getPrevLink,class:"no-underline"},{default:d(()=>[c("←")]),_:1},8,["to"]),c("   "),r(S,{to:t.setupWizardStore.getPrevLink},{default:d(()=>[c(n(e.strings.goBack),1)]),_:1},8,["to"])]),ze,r(g,{type:"gray",onClick:_.skipStep},{default:d(()=>[c(n(e.strings.skipThisStep),1)]),_:1},8,["onClick"]),r(g,{type:"blue",loading:e.loading,onClick:_.saveAndContinue},{default:d(()=>[c(n(e.strings.saveAndContinue)+" →",1)]),_:1},8,["loading","onClick"])]),default:d(()=>[r(A),o("div",X,n(e.strings.searchAppearance),1),o("div",Z,n(e.strings.description),1),o("div",$,[o("div",ee,[o("div",te,n(e.strings.googleSnippetPreview),1)]),o("div",{class:C(["edit-site-info-activator",{hover:e.showHoverClass}]),onMouseenter:s[2]||(s[2]=(...i)=>_.addHoverClass&&_.addHoverClass(...i)),onMouseleave:s[3]||(s[3]=(...i)=>_.removeHoverClass&&_.removeHoverClass(...i))},[r(f,{title:l.parseTags(t.setupWizardStore.category.siteTitle),separator:t.optionsStore.options.searchAppearance.global.separator,description:l.parseTags(t.setupWizardStore.category.metaDescription)},null,8,["title","separator","description"]),e.showHoverClass&&!e.editing?(p(),u("div",{key:0,class:"background-fade",onClick:s[0]||(s[0]=i=>e.editing=!0)})):m("",!0),e.showHoverClass&&!e.editing?(p(),u("div",se,[r(g,{size:"small",type:"black",onClick:s[1]||(s[1]=i=>e.editing=!0)},{default:d(()=>[c(n(e.strings.editTitleAndDescription),1)]),_:1})])):m("",!0)],34)]),e.editing?(p(),u("div",oe,[o("div",ie,[o("div",re,[o("div",ne,n(e.strings.siteTitle),1)]),r(v,{modelValue:t.setupWizardStore.category.siteTitle,"onUpdate:modelValue":s[4]||(s[4]=i=>t.setupWizardStore.category.siteTitle=i),"line-numbers":!1,single:"",onCounter:s[5]||(s[5]=i=>l.updateCount(i,"titleCount")),"tags-context":"homePage","default-tags":["site_title","separator_sa","tagline"]},{"tags-description":d(()=>[c(n(e.strings.clickToAddSiteTitle),1)]),_:1},8,["modelValue"]),o("div",{class:"max-recommended-count",innerHTML:l.maxRecommendedCount(e.titleCount,60)},null,8,ae)]),o("div",le,[o("div",de,[o("div",ce,n(e.strings.metaDescription),1)]),r(v,{modelValue:t.setupWizardStore.category.metaDescription,"onUpdate:modelValue":s[6]||(s[6]=i=>t.setupWizardStore.category.metaDescription=i),"line-numbers":!1,onCounter:s[7]||(s[7]=i=>l.updateCount(i,"descriptionCount")),"tags-context":"homePage","default-tags":["site_title","separator_sa","tagline"]},{"tags-description":d(()=>[c(n(e.strings.clickToAddSiteDescription),1)]),_:1},8,["modelValue"]),o("div",{class:"max-recommended-count",innerHTML:l.maxRecommendedCount(e.descriptionCount,160)},null,8,pe)])])):m("",!0),o("div",{class:C(["aioseo-settings-row no-border",[{"no-margin":t.setupWizardStore.searchAppearance.underConstruction},{"small-padding":t.setupWizardStore.searchAppearance.underConstruction}]])},[o("div",ue,[o("div",me,n(e.strings.isSiteUnderConstruction),1)]),r(h,{modelValue:t.setupWizardStore.searchAppearance.underConstruction,"onUpdate:modelValue":s[8]||(s[8]=i=>t.setupWizardStore.searchAppearance.underConstruction=i),name:"underConstruction",options:[{label:e.strings.underConstruction,value:!0,activeClass:"dark"},{label:e.strings.liveSite,value:!1}]},null,8,["modelValue","options"])],2),t.setupWizardStore.searchAppearance.underConstruction?m("",!0):(p(),u("div",_e,[r(z,{size:"medium",modelValue:t.setupWizardStore.searchAppearance.postTypes.postTypes.all,"onUpdate:modelValue":s[9]||(s[9]=i=>t.setupWizardStore.searchAppearance.postTypes.postTypes.all=i)},{default:d(()=>[c(n(e.strings.includeAllPostTypes),1)]),_:1},8,["modelValue"]),t.setupWizardStore.searchAppearance.postTypes.postTypes.all?m("",!0):(p(),B(b,{key:0,options:t.setupWizardStore.searchAppearance.postTypes,type:"postTypes"},null,8,["options"]))])),t.setupWizardStore.searchAppearance.underConstruction?m("",!0):(p(),u("div",ge,[r(k,{round:"",class:"no-clicks",type:"green",modelValue:!0,onClick:D(()=>{},["stop","prevent"])},{default:d(()=>[c(n(e.strings.enableSitemap),1)]),_:1},8,["onClick"])])),t.setupWizardStore.searchAppearance.underConstruction?m("",!0):(p(),u("div",he,[o("div",ve,[o("div",Se,n(e.strings.doYouHaveMultipleAuthors),1)]),r(h,{modelValue:t.setupWizardStore.searchAppearance.multipleAuthors,"onUpdate:modelValue":s[10]||(s[10]=i=>t.setupWizardStore.searchAppearance.multipleAuthors=i),name:"multipleAuthors",class:"small",options:[{label:l.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:l.$constants.GLOBAL_STRINGS.yes,value:!0}]},null,8,["modelValue","options"])])),t.setupWizardStore.searchAppearance.underConstruction?m("",!0):(p(),u("div",Ce,[o("div",ye,[o("div",Ae,n(e.strings.redirectAttachmentPages),1)]),r(h,{modelValue:t.setupWizardStore.searchAppearance.redirectAttachmentPages,"onUpdate:modelValue":s[11]||(s[11]=i=>t.setupWizardStore.searchAppearance.redirectAttachmentPages=i),name:"redirectAttachmentPages",class:"small",options:[{label:l.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:l.$constants.GLOBAL_STRINGS.yes,value:!0}]},null,8,["modelValue","options"])]))]),_:1}),r(W)]),_:1})])}const ct=M(K,[["render",be]]);export{ct as default};
