import{e as i}from"./links.da3be5e7.js";import{a as n}from"./addons.1640e0f5.js";import{l as u}from"./license.9b17b7f1.js";import{C as l}from"./index.6d5de07f.js";import{r as c,o as d,b as p,w as h,D as _,z as s,a as f,f as g}from"./vue.runtime.esm-bundler.c297bd08.js";import{_ as m}from"./_plugin-vue_export-helper.8a32e791.js";const q={setup(){return{licenseStore:i()}},components:{CoreAlert:l},props:{addon:String,coreFeature:{type:Array,default(){return[]}},addonFeature:{type:Array,default(){return[]}}},data(){return{strings:{thisFeatureRequires:this.$t.__("This feature requires one of the following plans:",this.$td),thisFeatureRequiresSingular:this.$t.__("This feature requires the following plan:",this.$td)}}},computed:{requiredPlansString(){return 1<this.requiredPlans.length?this.strings.thisFeatureRequires:this.strings.thisFeatureRequiresSingular},getRequiredPlans(){return this.requiredPlans.join(", ")},showAlert(){return n.requiresUpgrade(this.addon)&&this.requiredPlans.length},requiredPlans(){if(this.coreFeature.length||this.addonFeature.length){const r=this.coreFeature[0]||this.addonFeature[0],t=this.coreFeature.length?typeof this.coreFeature[1]<"u"?this.coreFeature[1]:"":typeof this.addonFeature[1]<"u"?this.addonFeature[1]:"";return u.getPlansForFeature(r,t)}return n.currentPlans(this.addon)||[]}}};function y(r,t,F,a,P,e){const o=c("core-alert");return a.licenseStore.isUnlicensed||e.showAlert?(d(),p(o,{key:0,class:"aioseo-required-plans",type:"blue"},{default:h(()=>[_(s(e.requiredPlansString)+" ",1),f("strong",null,s(e.getRequiredPlans),1)]),_:1})):g("",!0)}const $=m(q,[["render",y]]);export{$ as R};
