(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["CMS"],{"169a":function(t,e,i){"use strict";var n=i("5530"),s=i("2909"),a=i("ade3"),o=(i("a9e3"),i("498a"),i("caad"),i("2532"),i("7db0"),i("368e"),i("480e")),r=i("4ad4"),l=i("b848"),c=i("75eb"),d=i("e707"),u=i("e4d3"),h=i("21be"),v=i("f2e7"),f=i("a293"),m=i("58df"),p=i("d9bd"),b=i("80d2"),g=Object(m["a"])(r["a"],l["a"],c["a"],d["a"],u["a"],h["a"],v["a"]);e["a"]=g.extend({name:"v-dialog",directives:{ClickOutside:f["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(a["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(a["a"])(t,"v-dialog--active",this.isActive),Object(a["a"])(t,"v-dialog--persistent",this.persistent),Object(a["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(a["a"])(t,"v-dialog--scrollable",this.scrollable),Object(a["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(p["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):d["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.previousActiveElement=document.activeElement,t.$refs.content.focus(),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===b["y"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var i=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),n=Object(s["a"])(i).find((function(t){return!t.hasAttribute("disabled")}));n&&n.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(o["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(n["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(n["a"])(Object(n["a"])({},t.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(b["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(b["g"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"1abc":function(t,e,i){"use strict";var n=i("a797");e["a"]=n["a"]},"368e":function(t,e,i){},"3c93":function(t,e,i){},"5e23":function(t,e,i){},"5ec4":function(t,e,i){"use strict";i("df1c")},"615b":function(t,e,i){},"684e":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"admin-cms"},[i("PageHeader",{attrs:{title:"CMS"}}),i("div",{staticClass:"cms-wrap pt-8"},[i("div",{staticClass:"row"},t._l(t.$store.getters["admin/cmsLists"],(function(t,e){return i("v-col",{key:e,attrs:{cols:"6"}},[i("CMSTable",{attrs:{type:e,list:t||[]}})],1)})),1)])],1)},s=[],a=i("f5e3"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,"sort-by":"calories"},scopedSlots:t._u([{key:"top",fn:function(){return[i("v-toolbar",{attrs:{flat:""}},[i("v-toolbar-title",{staticStyle:{"text-transform":"capitalize"}},[t._v(" "+t._s(t.cardTitle)+" ")]),i("v-spacer"),i("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,s=e.attrs;return[i("v-btn",t._g(t._b({attrs:{color:"primary",dark:""}},"v-btn",s,!1),n),[t._v(" New Item ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"text-h5"},[t._v(t._s(t.formTitle))])]),i("v-card-text",[i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"2"}},[i("v-text-field",{attrs:{solo:"",disabled:"",label:"ID"},model:{value:t.editedItem.id,callback:function(e){t.$set(t.editedItem,"id",e)},expression:"editedItem.id"}})],1),i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{attrs:{solo:"",label:"En"},model:{value:t.editedItem.en,callback:function(e){t.$set(t.editedItem,"en",e)},expression:"editedItem.en"}})],1),i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{attrs:{solo:"",label:"De"},model:{value:t.editedItem.de,callback:function(e){t.$set(t.editedItem,"de",e)},expression:"editedItem.de"}})],1),i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{attrs:{solo:"",label:"Fr"},model:{value:t.editedItem.fr,callback:function(e){t.$set(t.editedItem,"fr",e)},expression:"editedItem.fr"}})],1)],1)],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v(" "+t._s(t.$t("cancel"))+" ")]),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v(" "+t._s(t.$t("save"))+" ")])],1)],1)],1),i("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[i("v-card",[i("v-card-title",{staticClass:"text-h5"},[t._v(t._s(t.$t("deleteThisItem")))]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDelete}},[t._v(t._s(t.$t("cancel")))]),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.deleteItemConfirm}},[t._v(t._s(t.$t("ok")))]),i("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(e){var n=e.item;return[i("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(n)}}},[t._v(" mdi-pencil ")]),i("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItem(n)}}},[t._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[i("v-btn",{attrs:{color:"primary"},on:{click:t.initialize}},[t._v(" "+t._s(t.$t("reset"))+" ")])]},proxy:!0}])})},r=[],l=i("5530"),c=(i("a15b"),i("ac1f"),i("1276"),i("4360")),d={name:"CMSTable",props:{type:{type:String,default:""},list:{type:[Array,Object]}},data:function(){return{dialog:!1,dialogDelete:!1,headers:[{text:"ID",align:"start",sortable:!1,value:"id",width:"10%"},{text:"En",value:"en"},{text:"De",value:"de"},{text:"Fr",value:"fr"},{text:"Actions",value:"actions",width:"15%",sortable:!1}],items:[],editedIndex:-1,editedItem:{id:"",en:"",de:"",fr:"",type:""},defaultItem:{id:"",en:"",de:"",fr:"",type:""}}},computed:{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"},cardTitle:function(){return this.type.split("_").join(" ")}},watch:{dialog:function(t){t||this.close()},dialogDelete:function(t){t||this.closeDelete()},list:function(t){this.items=t||[]}},created:function(){this.initialize()},methods:{initialize:function(){this.items=this.list},editItem:function(t){this.editedIndex=this.items.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){this.editedIndex=this.items.indexOf(t),this.editedItem=Object.assign({},t),this.dialogDelete=!0},deleteItemConfirm:function(){c["a"].dispatch("admin/cmsDeleteListItem",this.editedItem),this.closeDelete()},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},closeDelete:function(){var t=this;this.dialogDelete=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},save:function(){this.editedIndex>-1?c["a"].dispatch("admin/cmsUpdateListItem",this.editedItem):c["a"].dispatch("admin/cmsAddListItem",Object(l["a"])(Object(l["a"])({},this.editedItem),{},{type:this.type})),this.close()}}},u=d,h=i("2877"),v=i("6544"),f=i.n(v),m=i("8336"),p=i("b0af"),b=i("99d9"),g=i("62ad"),y=i("a523"),x=i("8fea"),O=i("169a"),w=i("132d"),C=i("0fd9"),k=(i("20f6"),i("80d2")),_=Object(k["i"])("spacer","div","v-spacer"),I=i("8654"),$=i("3835"),S=(i("a9e3"),i("0481"),i("5e23"),i("8dd9")),j=i("adda"),E=i("d9bd"),A=S["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:function(){return{isExtended:!1}},computed:{computedHeight:function(){var t=this.computedContentHeight;if(!this.isExtended)return t;var e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight:function(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes:function(){return Object(l["a"])(Object(l["a"])({},S["a"].options.computed.classes.call(this)),{},{"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent})},isCollapsed:function(){return this.collapse},isProminent:function(){return this.prominent},styles:function(){return Object(l["a"])(Object(l["a"])({},this.measurableStyles),{},{height:Object(k["g"])(this.computedHeight)})}},created:function(){var t=this,e=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];e.forEach((function(e){var i=Object($["a"])(e,2),n=i[0],s=i[1];t.$attrs.hasOwnProperty(n)&&Object(E["a"])(n,s,t)}))},methods:{genBackground:function(){var t={height:Object(k["g"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(j["a"],{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(k["g"])(this.computedContentHeight)}},Object(k["s"])(this))},genExtension:function(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(k["g"])(this.extensionHeight)}},Object(k["s"])(this,"extension"))}},render:function(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;var e=[this.genContent()],i=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,i,e)}}),T=Object(k["i"])("v-toolbar__title"),B=(Object(k["i"])("v-toolbar__items"),Object(h["a"])(u,o,r,!1,null,null,null)),D=B.exports;f()(B,{VBtn:m["a"],VCard:p["a"],VCardActions:b["a"],VCardText:b["c"],VCardTitle:b["d"],VCol:g["a"],VContainer:y["a"],VDataTable:x["a"],VDialog:O["a"],VIcon:w["a"],VRow:C["a"],VSpacer:_,VTextField:I["a"],VToolbar:A,VToolbarTitle:T});var N={name:"AdminCMS",components:{PageHeader:a["a"],CMSTable:D},created:function(){},beforeRouteEnter:function(t,e,i){c["a"].dispatch("admin/cmsFetchLists").then((function(){i()}))}},L=N,P=Object(h["a"])(L,n,s,!1,null,null,null);e["default"]=P.exports;f()(P,{VCol:g["a"]})},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return r})),i.d(e,"d",(function(){return l}));var n=i("b0af"),s=i("80d2"),a=Object(s["i"])("v-card__actions"),o=Object(s["i"])("v-card__subtitle"),r=Object(s["i"])("v-card__text"),l=Object(s["i"])("v-card__title");n["a"]},a797:function(t,e,i){"use strict";var n=i("5530"),s=(i("a9e3"),i("3c93"),i("a9ad")),a=i("7560"),o=i("f2e7"),r=i("58df");e["a"]=Object(r["a"])(s["a"],a["a"],o["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes:function(){return Object(n["a"])({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},e)}})},b0af:function(t,e,i){"use strict";var n=i("5530"),s=(i("a9e3"),i("0481"),i("615b"),i("10d2")),a=i("297c"),o=i("1c87"),r=i("58df");e["a"]=Object(r["a"])(a["a"],o["a"],s["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({"v-card":!0},o["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},s["a"].options.computed.classes.call(this))},styles:function(){var t=Object(n["a"])({},s["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=a["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),i=e.tag,n=e.data;return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),t(i,this.setBackgroundColor(this.color,n),[this.genProgress(),this.$slots.default])}})},df1c:function(t,e,i){},e707:function(t,e,i){"use strict";i("a9e3"),i("caad"),i("2532");var n=i("1abc"),s=i("80d2"),a=i("2b0e");e["a"]=a["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{animationFrame:0,overlay:null}},watch:{hideOverlay:function(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var t=new n["a"]({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();var e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay:function(){var t=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((function(){t.overlay&&(void 0!==t.activeZIndex?t.overlay.zIndex=String(t.activeZIndex-1):t.$el&&(t.overlay.zIndex=Object(s["u"])(t.$el)),t.overlay.value=!0)})),!0},removeOverlay:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&(Object(s["a"])(this.overlay.$el,"transitionend",(function(){t.overlay&&t.overlay.$el&&t.overlay.$el.parentNode&&!t.overlay.value&&!t.isActive&&(t.overlay.$el.parentNode.removeChild(t.overlay.$el),t.overlay.$destroy(),t.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),e&&this.showScroll()},scrollListener:function(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;var e=[s["y"].up,s["y"].pageup],i=[s["y"].down,s["y"].pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!i.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar:function(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;var e=window.getComputedStyle(t);return["auto","scroll"].includes(e.overflowY)&&t.scrollHeight>t.clientHeight},shouldScroll:function(t,e){if(t.hasAttribute("data-app"))return!1;var i=0===t.scrollTop,n=t.scrollTop+t.clientHeight===t.scrollHeight,s=e<0,a=e>0;return!(i||!s)||(!(n||!a)||!(!i&&!n)&&this.shouldScroll(t.parentNode,e))},isInside:function(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath:function(t){var e=t.path||this.composedPath(t),i=t.deltaY;if("keydown"===t.type&&e[0]===document.body){var n=this.$refs.dialog,s=window.getSelection().anchorNode;return!(n&&this.hasScrollbar(n)&&this.isInside(s,n))||!this.shouldScroll(n,i)}for(var a=0;a<e.length;a++){var o=e[a];if(o===document)return!0;if(o===document.documentElement)return!0;if(o===this.$refs.content)return!0;if(this.hasScrollbar(o))return!this.shouldScroll(o,i)}return!0},composedPath:function(t){if(t.composedPath)return t.composedPath();var e=[],i=t.target;while(i){if(e.push(i),"HTML"===i.tagName)return e.push(document),e.push(window),e;i=i.parentElement}return e},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(s["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})},f5e3:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"admin-page-header"},[i("div",{staticClass:"page-title"},[t._v(" "+t._s(t.title)+" ")])])},s=[],a={name:"PageHeader",props:{title:{type:String}}},o=a,r=(i("5ec4"),i("2877")),l=Object(r["a"])(o,n,s,!1,null,"62fbdc50",null);e["a"]=l.exports}}]);
//# sourceMappingURL=CMS.0b64ffdc.js.map