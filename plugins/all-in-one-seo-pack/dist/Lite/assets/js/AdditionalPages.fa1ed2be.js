import{D as I,b as M,u as F,d as N}from"./links.da3be5e7.js";import{r as u,o as g,c as v,a,z as r,f as h,d as n,w as l,K as E,b as _,n as R,D as p,g as w}from"./vue.runtime.esm-bundler.c297bd08.js";import{_ as O}from"./_plugin-vue_export-helper.8a32e791.js";import{C as $,S as z}from"./index.6d5de07f.js";import{b as Y,c as B}from"./Caret.8cc4e863.js";/* empty css                                            */import{_ as W}from"./default-i18n.3881921e.js";import"./constants.44daa6bb.js";/* empty css                                              */import"./TruSeoHighlighter.271256b4.js";import{C as q}from"./Index.e21839d7.js";import{W as J}from"./WpTable.fc4a987b.js";import{D as T}from"./Date.c1eb67dc.js";import{S as H}from"./Exclamation.a9500c7c.js";import{s as C,n as j,r as V}from"./isArrayLikeObject.10b615a9.js";import{B as K}from"./DatePicker.ac3f3412.js";import{C as Q}from"./Table.a0011880.js";import{C as G}from"./Card.173e6e4f.js";import{C as X}from"./Tooltip.42b4f815.js";import"./postContent.d84eb650.js";import"./cleanForSlug.a67f7e84.js";import"./_stringToArray.a4422725.js";import"./Ellipse.404f2a7a.js";import"./toFinite.c2274946.js";/* empty css                                              */import"./isUndefined.1db526df.js";import"./_getAllKeys.4291a623.js";import"./_getTag.4ca3d6f0.js";import"./isEqual.585d298d.js";import"./_baseIsEqual.640c1807.js";import"./numbers.c7cb4085.js";import"./Slide.d2bcb99c.js";const Z=""+window.__aioseoDynamicImportPreload__("images/import-from-csv.fa7a7c61.png");const D={page:{url:null,priority:{label:"0.7",value:"0.7"},frequency:{label:W("weekly","all-in-one-seo-pack"),value:"weekly"},lastModified:I.now().toFormat("MM/dd/yyyy")}},ee={setup(){return{optionsStore:M(),rootStore:F()}},emits:["cancel","process-page-add-and-update","process-page-edit"],mixins:[T],components:{BaseDatePicker:K,CoreAlert:$,CoreModal:q,SvgCircleCheck:Y,SvgCircleClose:B,SvgCircleExclamation:H},data(){return{csvFileImage:Z,priorityOptionsValues:[],frequencyOptionsValues:[],filename:"",file:"",loading:!1,showImportModal:!1,page:C(D.page),errors:{url:{invalid:null,exists:null},upload:!1},isLoading:!1,strings:{placeholder:this.$t.sprintf(this.$t.__("Enter a page URL, e.g. %1$s",this.$td),`${this.rootStore.aioseo.urls.home}/new-page`),pageUrl:this.$t.__("Page URL",this.$td),priority:this.$t.__("Priority",this.$td),frequency:this.$t.__("Frequency",this.$td),lastModified:this.$t.__("Last Modified",this.$td),addPage:this.$t.__("Add Page",this.$td),importFromCSV:this.$t.__("Import from CSV",this.$td),saveChanges:this.$t.__("Update Page",this.$td),cancel:this.$t.__("Cancel",this.$td),importAdditionalPages:this.$t.__("Import Additional Pages",this.$td),modalDescription:this.$t.sprintf(this.$t.__("You can import additional page URL's to your sitemap using a CSV file. The following 4 columns are required: %1$sPage URL, Priority, Frequency, Date Modified.%2$s",this.$td),"<strong>","</strong>"),downloadSampleFile:this.$t.__("Download Sample CSV File",this.$td),imgAltText:this.$t.__("CSV example file",this.$td),fileUploadPlaceholder:this.$t.__("Import from CSV file...",this.$td),chooseAFile:this.$t.__("Choose a File",this.$td),import:this.$t.__("Import",this.$td),csvFileTypeRequired:this.$t.__("The file that you've currently selected is not a CSV file.",this.$td),invalidCSV:this.$t.__("Unable to read CSV file. Please check if the file is valid and try again.",this.$td),errors:{url:{invalid:this.$t.__("Please enter a valid URL.",this.$td),exists:this.$t.__("URL already exists.",this.$td)}}},sampleCSVData:`Page URL,Priority,Frequency,Date Modified\r
https://aioseo.com/pricing/,0.0,weekly,01/30/2022`}},methods:{getAssetUrl:j,updateAdditionalPages(t){this.optionsStore.options.sitemap.general.additionalPages.pages=t},addPage(){const t=this.optionsStore.options.sitemap.general.additionalPages.pages;t.unshift(JSON.stringify(this.page)),this.updateAdditionalPages(t),this.page=C(D.page),this.errors.url.invalid=null,this.$emit("process-page-add-and-update")},editPage(t,s){if(this.page[t]=s,!V(this.page.url)&&this.page.url){this.errors.url.invalid=!0;return}if(this.pageExists(this.page.url)&&!this.inTable){this.errors.url.invalid=!1,this.errors.url.exists=!0;return}this.errors.url.invalid=!1,this.errors.url.exists=!1,this.inTable&&this.$emit("process-page-edit",this.page)},updatePage(t){const s=this.optionsStore.options.sitemap.general.additionalPages.pages;s[this.getPaginatedIndex(t)]=JSON.stringify(this.page),this.updateAdditionalPages(s),this.$emit("process-page-add-and-update"),this.$emit("cancel",!0)},pageExists(t){return this.getParsedPages().some(({url:s})=>s===t)},reset(){this.errors.upload=!1,this.filename="",this.file=""},triggerFileUpload(){this.reset(),this.$refs.file.$el.querySelector("input").focus(),this.$refs.file.$el.querySelector("input").click()},async submitFile(){this.loading=!0;try{const t=await this.parseFile(),s=this.optionsStore.options.sitemap.general.additionalPages.pages;t.forEach(o=>{const m=this.prepareAdditionalPage(o);m&&s.unshift(JSON.stringify(m))}),this.updateAdditionalPages(s)}catch{this.errors.upload=this.strings.invalidCSV}this.reset(),this.page=C(D.page),this.showImportModal=!1,this.loading=!1},prepareAdditionalPage(t){const s=C(D.page);return t.forEach(o=>{try{if(V(o)&&!this.pageExists(o)){s.url=o;return}if(this.priorityOptionsValues.includes(o)){s.priority.label=s.priority.value=o;return}if(this.frequencyOptionsValues.includes(o.toLowerCase())){s.frequency.label=s.frequency.value=o.toLowerCase();return}isNaN(T.parse(o))||(s.lastModified=o)}catch{}}),s.url!==null?s:!1},parseFile(){const t=new FileReader;return t.readAsText(this.file),new Promise((s,o)=>{t.onerror=()=>{t.abort(),o(new DOMException)},t.onload=()=>{const e=t.result.split(/[\r\n]/).map(i=>i.split(","));s(e)}})},handleFileUpload(){this.file=this.$refs.file.$el.querySelector("input").files[0],this.file&&(this.filename=this.file.name,this.file.type!=="text/csv"&&(this.errors.upload=this.strings.csvFileTypeRequired))},closeImportModal(){this.reset(),this.showImportModal=!1},isDisabledDate(t){return t>I.now()}},computed:{importValidated(){return this.file.type==="text/csv"}},props:{inTable:Boolean,row:Object,index:Number,getPaginatedIndex:Function,getParsedPages:Function,rowPage:{type:Object,default(){return{}}},editedPage:{type:Object,default(){return{}}}},mounted(){this.priorityOptionsValues=this.$constants.PRIORITY_OPTIONS.map(t=>t.value),this.frequencyOptionsValues=this.$constants.FREQUENCY_OPTIONS.map(t=>t.value),this.inTable&&(this.page=this.rowPage!==this.editedPage?this.rowPage:this.editedPage)}},te={key:0,class:"page-input-header"},se={class:"page-url"},ie={class:"page-priority"},oe={class:"page-frequency"},ae={class:"page-last-modified"},re={class:"page-row"},le={class:"page-url"},ne={class:"append-icon"},de={class:"page-priority"},ue={class:"page-frequency"},ge={class:"page-last-modified"},pe={class:"page-input-footer"},ce={key:0},he={key:1},me={class:"aioseo-modal-body import-additional-pages"},_e={class:"alert"},fe=["innerHTML"],Pe=["href"],ye=["src","alt"],be={class:"file-upload"};function ve(t,s,o,m,e,i){const k=u("svg-circle-close"),S=u("svg-circle-check"),A=u("svg-circle-exclamation"),P=u("base-input"),y=u("core-alert"),b=u("base-select"),L=u("base-date-picker"),f=u("base-button"),c=u("core-modal");return g(),v("div",{class:R(["additional-pages-input",{"in-table":o.inTable}])},[o.inTable?h("",!0):(g(),v("div",te,[a("div",se,r(e.strings.pageUrl),1),a("div",ie,r(e.strings.priority),1),a("div",oe,r(e.strings.frequency),1),a("div",ae,r(e.strings.lastModified),1)])),a("div",re,[a("div",le,[n(P,{modelValue:e.page.url,onKeyup:s[0]||(s[0]=d=>i.editPage("url",d.target.value)),size:"medium",placeholder:e.strings.placeholder,class:R(this.errors.url.invalid&&"aioseo-error"||this.page.url&&this.errors.url.exists&&"aioseo-warning"||this.page.url&&"aioseo-active")},{"append-icon":l(()=>[a("div",ne,[e.isLoading?h("",!0):(g(),v(E,{key:0},[e.errors.url.invalid?(g(),_(k,{key:0})):h("",!0),!e.errors.url.invalid&&!e.errors.url.exists&&e.page.url?(g(),_(S,{key:1})):h("",!0),e.errors.url.exists&&e.page.url?(g(),_(A,{key:2})):h("",!0)],64))])]),_:1},8,["modelValue","placeholder","class"]),this.errors.url.invalid?(g(),_(y,{key:0,type:"red",size:"small"},{default:l(()=>[p(r(e.strings.errors.url.invalid),1)]),_:1})):h("",!0),this.errors.url.exists?(g(),_(y,{key:1,type:"yellow",size:"small"},{default:l(()=>[p(r(e.strings.errors.url.exists),1)]),_:1})):h("",!0)]),a("div",de,[n(b,{size:"medium",modelValue:e.page.priority,"onUpdate:modelValue":s[1]||(s[1]=d=>i.editPage("priority",d)),options:t.$constants.PRIORITY_OPTIONS},null,8,["modelValue","options"])]),a("div",ue,[n(b,{size:"medium",modelValue:e.page.frequency,"onUpdate:modelValue":s[2]||(s[2]=d=>i.editPage("frequency",d)),options:t.$constants.FREQUENCY_OPTIONS},null,8,["modelValue","options"])]),a("div",ge,[n(L,{type:"datetime",size:"large",dateFormat:"m/d/Y H:i:s",defaultValue:t.dateStringToLocalJs(e.page.lastModified),onChange:s[3]||(s[3]=d=>i.editPage("lastModified",t.dateJsToLocal(d,"MM/dd/yyyy HH:mm:ss"))),isDisabledDate:i.isDisabledDate},null,8,["defaultValue","isDisabledDate"])])]),a("div",pe,[o.inTable?(g(),v("div",ce,[n(f,{type:"blue",size:"medium",onClick:s[4]||(s[4]=d=>i.updatePage(o.index)),disabled:e.errors.url.invalid||e.errors.url.exists||!e.page.url},{default:l(()=>[p(r(e.strings.saveChanges),1)]),_:1},8,["disabled"]),n(f,{type:"gray",size:"medium",onClick:s[5]||(s[5]=d=>t.$emit("cancel",!0))},{default:l(()=>[p(r(e.strings.cancel),1)]),_:1})])):h("",!0),o.inTable?h("",!0):(g(),v("div",he,[n(f,{type:"blue",size:"small-table",onClick:i.addPage,disabled:e.errors.url.invalid||e.errors.url.exists||!e.page.url},{default:l(()=>[p(r(e.strings.addPage),1)]),_:1},8,["onClick","disabled"]),n(f,{type:"black",size:"small-table",onClick:s[6]||(s[6]=d=>e.showImportModal=!0)},{default:l(()=>[p(r(e.strings.importFromCSV),1)]),_:1})]))]),e.showImportModal?(g(),_(c,{key:1,onClose:i.closeImportModal},{headerTitle:l(()=>[p(r(e.strings.importAdditionalPages),1)]),body:l(()=>[a("div",me,[a("div",_e,[a("p",{innerHTML:e.strings.modalDescription},null,8,fe),a("a",{download:"aioseo-additional-pages-sample.csv",href:"data:text/csv;charset=utf-8,"+e.sampleCSVData},r(e.strings.downloadSampleFile),9,Pe)]),a("img",{src:i.getAssetUrl(e.csvFileImage),alt:e.strings.imgAltText},null,8,ye),e.errors.upload?(g(),_(y,{key:0,type:"red",class:"import-error"},{default:l(()=>[n(k),p(" "+r(e.errors.upload),1)]),_:1})):h("",!0),a("div",be,[n(P,{modelValue:e.filename,"onUpdate:modelValue":s[7]||(s[7]=d=>e.filename=d),size:"medium",onFocus:i.triggerFileUpload,placeholder:e.strings.fileUploadPlaceholder,class:R({"aioseo-error":e.errors.upload})},null,8,["modelValue","onFocus","placeholder","class"]),n(f,{type:"black",size:"medium",onClick:i.triggerFileUpload},{default:l(()=>[p(r(e.strings.chooseAFile),1)]),_:1},8,["onClick"])]),n(P,{type:"file",value:e.file,"onUpdate:modelValue":i.handleFileUpload,ref:"file"},null,8,["value","onUpdate:modelValue"]),n(f,{type:"blue",size:"medium",class:"import",onClick:i.submitFile,disabled:!e.file||!i.importValidated,loading:e.loading},{default:l(()=>[p(r(e.strings.import),1)]),_:1},8,["onClick","disabled","loading"])])]),_:1},8,["onClose"])):h("",!0)],2)}const ke=O(ee,[["render",ve]]);const Se={setup(){return{optionsStore:M(),rootStore:F(),settingsStore:N()}},mixins:[J],components:{AddAdditionalPage:ke,CoreWpTable:Q,CoreCard:G,CoreTooltip:X,CoreModal:q,SvgTrash:z},data(){return{tableId:"sitemap-additional-pages",changeItemsPerPageSlug:"sitemapAdditionalPages",page:{},editedPage:{},resultsPerPage:10,searchResults:null,deletingRow:!1,activeRow:-1,showDeleteModal:!1,shouldDeleteURL:null,selectedRows:null,bulkOptions:[{label:this.$t.__("Delete",this.$td),value:"delete"}],strings:{searchUrls:this.$t.__("Search URLs",this.$td),edit:this.$t.__("Edit",this.$td),delete:this.$t.__("Delete",this.$td),additionalPages:this.$t.__("Additional Pages",this.$td),additionalPagesTooltip:this.$t.__("You can use this section to add any URLs to your sitemap which aren't a part of your WordPress installation. For example, if you have a contact form that you would like to be included on your sitemap you can enter the information manually.",this.$td),areYouSureDeleteLink:this.$t.__("Are you sure you want to delete this page?",this.$td),areYouSureDeleteLinks:this.$t.__("Are you sure you want to delete these pages?",this.$td),thisWillRemoveLink:this.$t.__("This will permanently remove this page from the additional pages sitemap.",this.$td),thisWillRemoveLinks:this.$t.__("This will permanently remove the selected pages from the additional pages sitemap.",this.$td),yesDeleteLink:this.$t.__("Delete Page",this.$td),yesDeleteLinks:this.$t.__("Delete Selected Pages",this.$td),noChangedMind:this.$t.__("No, I changed my mind",this.$td)}}},computed:{currentPages(){return this.searchResults||this.getParsedPages()},rows(){const t=this.currentPages.map(o=>({url:o.url,priority:o.priority&&o.priority.label?o.priority.label:"",frequency:o.frequency&&o.frequency.label?o.frequency.label:"",lastModified:o.lastModified})),s=this.pageNumber===1?0:(this.pageNumber-1)*this.resultsPerPage;return t.slice(s,s+this.resultsPerPage)},totals(){return{page:1,pages:Math.ceil(this.currentPages.length/this.resultsPerPage),total:this.currentPages.length}},columns(){return[{slug:"url",label:this.$t.__("Page URL",this.$td)},{slug:"priority",label:this.$t.__("Priority",this.$td),width:"90px"},{slug:"frequency",label:this.$t.__("Frequency",this.$td),width:"90px"},{slug:"lastModified",label:this.$t.__("Last Modified",this.$td),width:"180px"},{slug:"page-actions",label:"",width:"40px"}]},areYouSureDeleteLink(){return Array.isArray(this.shouldDeleteURL)?this.strings.areYouSureDeleteLinks:this.strings.areYouSureDeleteLink},yesDeleteLink(){return Array.isArray(this.shouldDeleteURL)?this.strings.yesDeleteLinks:this.strings.yesDeleteLink},thisWillRemoveLink(){return Array.isArray(this.shouldDeleteURL)?this.strings.thisWillRemoveLinks:this.strings.thisWillRemoveLink}},methods:{fetchData(){return Promise.resolve()},processSearch(t){if(this.$refs.table.editRow(null),this.pageNumber=1,t===""){this.searchResults=null,this.searchTerm=null;return}t||(t=this.searchTerm),this.wpTableLoading=!0,this.searchResults=this.getParsedPages().filter(s=>s.url.includes(t)),this.searchTerm=t,this.wpTableLoading=!1},processBulkAction({action:t,selectedRows:s}){s.length&&t==="delete"&&(this.showDeleteModal=!0,this.shouldDeleteURL=s)},processPageDelete(){this.wpTableLoading=!0,Array.isArray(this.shouldDeleteURL)?this.shouldDeleteURL.forEach(t=>{this.deletePage(t)}):this.deletePage(this.shouldDeleteURL),this.showDeleteModal=!1,this.wpTableLoading=!1},deletePage(t){const s=[];this.getParsedPages().forEach(o=>{o.url!==t&&s.push(JSON.stringify(o))}),this.optionsStore.options.sitemap.general.additionalPages.pages=s,this.searchResults&&this.processSearch()},maybeProcessDelete(t){this.showDeleteModal=!0,this.shouldDeleteURL=t},processPageEdit(t){this.editedPage=t},processPageAddAndUpdate(){this.processSearch(this.searchTerm||"")},rowPage(t){return this.searchResults?this.searchResults[this.getPaginatedIndex(t)]:this.getParsedPages()[this.getPaginatedIndex(t)]},getPaginatedIndex(t){return(this.pageNumber-1)*this.resultsPerPage+t},getParsedPages(){return this.optionsStore.options.sitemap.general.additionalPages.pages.map(t=>JSON.parse(t))}}},we={class:"aioseo-additional-pages"},Ce=["onClick"],De={class:"row-actions"},Ae=["onClick"],Le=["onClick"],Ue={class:"page-actions"},Re={class:"aioseo-modal-body delete"},xe={class:"reset-description"};function Te(t,s,o,m,e,i){const k=u("base-toggle"),S=u("add-additional-page"),A=u("svg-trash"),P=u("core-tooltip"),y=u("core-wp-table"),b=u("base-button"),L=u("core-modal"),f=u("core-card");return m.optionsStore.options.sitemap.general.enable?(g(),_(f,{key:0,slug:"additionalPages",toggles:m.optionsStore.options.sitemap.general.additionalPages.enable},{header:l(()=>[n(k,{modelValue:m.optionsStore.options.sitemap.general.additionalPages.enable,"onUpdate:modelValue":s[0]||(s[0]=c=>m.optionsStore.options.sitemap.general.additionalPages.enable=c)},null,8,["modelValue"]),a("span",null,r(e.strings.additionalPages),1)]),tooltip:l(()=>[p(r(e.strings.additionalPagesTooltip),1)]),default:l(()=>[a("div",we,[n(S,{getPaginatedIndex:i.getPaginatedIndex,getParsedPages:i.getParsedPages,onProcessPageAddAndUpdate:i.processPageAddAndUpdate},null,8,["getPaginatedIndex","getParsedPages","onProcessPageAddAndUpdate"]),(g(),_(y,{ref:"table",class:"additional-pages-table",id:e.tableId,"bulk-options":e.bulkOptions,columns:i.columns,"initial-items-per-page":m.settingsStore.settings.tablePagination.sitemapAdditionalPages,"initial-page-number":t.pageNumber,key:t.wpTableKey,loading:t.wpTableLoading,rows:i.rows,"search-label":e.strings.searchUrls,"show-search":!0,totals:i.totals,"show-items-per-page":"",onPaginate:t.processPagination,onProcessBulkAction:i.processBulkAction,onProcessChangeItemsPerPage:t.processChangeItemsPerPage,onSearch:i.processSearch,onSortColumn:t.processSort},{url:l(({row:c,index:d,editRow:U})=>[a("a",{class:"post-title",href:"#",onClick:w(x=>U(d),["prevent","stop"])},r(c.url),9,Ce),a("div",De,[a("span",null,[a("a",{class:"edit",href:"#",onClick:w(x=>U(d),["prevent","stop"])},[a("span",null,r(e.strings.edit),1)],8,Ae),p(" | ")]),a("span",null,[a("a",{class:"delete",href:"#",onClick:w(x=>i.maybeProcessDelete(c.url),["prevent","stop"])},[a("span",null,r(e.strings.delete),1)],8,Le)])])]),"edit-row":l(({index:c,editRow:d})=>[n(S,{index:c,rowPage:i.rowPage(c),editedPage:e.editedPage,getPaginatedIndex:i.getPaginatedIndex,getParsedPages:i.getParsedPages,inTable:"",onCancel:U=>d(null),onProcessPageAddAndUpdate:i.processPageAddAndUpdate,onProcessPageEdit:i.processPageEdit},null,8,["index","rowPage","editedPage","getPaginatedIndex","getParsedPages","onCancel","onProcessPageAddAndUpdate","onProcessPageEdit"])]),"page-actions":l(({row:c})=>[a("div",Ue,[n(P,{type:"action"},{tooltip:l(()=>[p(r(e.strings.delete),1)]),default:l(()=>[n(A,{onClick:d=>i.maybeProcessDelete(c.url)},null,8,["onClick"])]),_:2},1024)])]),_:1},8,["id","bulk-options","columns","initial-items-per-page","initial-page-number","loading","rows","search-label","totals","onPaginate","onProcessBulkAction","onProcessChangeItemsPerPage","onSearch","onSortColumn"])),e.showDeleteModal?(g(),_(L,{key:0,"no-header":"",onClose:s[3]||(s[3]=c=>e.showDeleteModal=!1)},{body:l(()=>[a("div",Re,[a("button",{class:"close",onClick:s[1]||(s[1]=w(c=>e.showDeleteModal=!1,["stop"]))}),a("h3",null,r(i.areYouSureDeleteLink),1),a("div",xe,r(e.strings.thisWillRemoveLink),1),n(b,{type:"blue",size:"medium",onClick:i.processPageDelete,loading:e.deletingRow},{default:l(()=>[p(r(i.yesDeleteLink),1)]),_:1},8,["onClick","loading"]),n(b,{type:"gray",size:"medium",onClick:s[2]||(s[2]=c=>e.showDeleteModal=!1)},{default:l(()=>[p(r(e.strings.noChangedMind),1)]),_:1})])]),_:1})):h("",!0)])]),_:1},8,["toggles"])):h("",!0)}const gt=O(Se,[["render",Te]]);export{gt as default};
