(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ActualPosition"],{"169a":function(t,e,i){"use strict";var n=i("5530"),a=i("2909"),o=i("ade3"),s=(i("a9e3"),i("498a"),i("caad"),i("2532"),i("7db0"),i("368e"),i("480e")),r=i("4ad4"),c=i("b848"),l=i("75eb"),d=i("e707"),u=i("e4d3"),h=i("21be"),v=i("f2e7"),f=i("a293"),m=i("58df"),b=i("d9bd"),p=i("80d2"),y=Object(m["a"])(r["a"],c["a"],l["a"],d["a"],u["a"],h["a"],v["a"]);e["a"]=y.extend({name:"v-dialog",directives:{ClickOutside:f["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(o["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(o["a"])(t,"v-dialog--active",this.isActive),Object(o["a"])(t,"v-dialog--persistent",this.persistent),Object(o["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(o["a"])(t,"v-dialog--scrollable",this.scrollable),Object(o["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(b["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):d["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.previousActiveElement=document.activeElement,t.$refs.content.focus(),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===p["y"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var i=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),n=Object(a["a"])(i).find((function(t){return!t.hasAttribute("disabled")}));n&&n.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(s["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(n["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(n["a"])(Object(n["a"])({},t.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(p["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(p["g"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"1abc":function(t,e,i){"use strict";var n=i("a797");e["a"]=n["a"]},"368e":function(t,e,i){},"3c93":function(t,e,i){},"615b":function(t,e,i){},"6e7d":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pa-8"},[i("v-row",[i("v-col",{attrs:{cols:"6"}},[i("h4",[t._v(t._s(t.$t("editProfileHeading")))])])],1),i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("label",[t._v(t._s(t.$t("currentWork")))]),i("v-text-field",{attrs:{dense:"",label:t.$t("currentWork"),rules:t.rules,type:"text",outlined:"",solo:"",flat:"","hide-details":"","background-color":"white"},model:{value:t.formData.working_in,callback:function(e){t.$set(t.formData,"working_in",e)},expression:"formData.working_in"}})],1)],1),i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("label",[t._v(t._s(t.$t("currentPosition")))]),i("v-select",{attrs:{outlined:"",dense:"",label:t.$t("currentPosition"),rules:t.rules,items:t.currentPosition,"background-color":"white","append-icon":"mdi-chevron-down"},model:{value:t.formData.current_position,callback:function(e){t.$set(t.formData,"current_position",e)},expression:"formData.current_position"}})],1)],1),i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("label",[t._v(t._s(t.$t("whichBranch")))]),i("v-select",{attrs:{outlined:"",dense:"",rules:t.rules,label:t.$t("whichBranch"),items:t.branches,"append-icon":"mdi-chevron-down"},model:{value:t.formData.branche,callback:function(e){t.$set(t.formData,"branche",e)},expression:"formData.branche"}})],1)],1),i("v-row",[i("v-col",{attrs:{cols:"6"}},[i("label",[t._v(t._s(t.$t("workingEnvironment")))]),i("v-text-field",{attrs:{dense:"",label:t.$t("workingEnvironment"),type:"text",outlined:"",solo:"",flat:"","hide-details":"","background-color":"white"},model:{value:t.formData.department,callback:function(e){t.$set(t.formData,"department",e)},expression:"formData.department"}})],1),i("v-col",{attrs:{cols:"6"}},[i("label",[t._v(t._s(t.$t("whatDescribesYou")))]),i("v-row",[i("v-col",[i("div",{staticClass:"text-center"},[i("v-btn",t._b({staticClass:"stars-btn",attrs:{color:"primary"},on:{click:function(e){t.formData.describe_yourself="Beginner"}}},"v-btn",{outlined:"Beginner"!==t.formData.describe_yourself},!1),[i("v-icon",[t._v(" mdi-star ")])],1)],1),i("p",{staticClass:"text-center caption font-weight-bold mt-1"},[t._v("Beginner")])]),i("v-col",[i("div",{staticClass:"text-center"},[i("v-btn",t._b({staticClass:"stars-btn",attrs:{color:"primary"},on:{click:function(e){t.formData.describe_yourself="Junior"}}},"v-btn",{outlined:"Junior"!==t.formData.describe_yourself},!1),[i("v-icon",[t._v(" mdi-star ")]),i("v-icon",[t._v(" mdi-star ")])],1)],1),i("p",{staticClass:"text-center caption font-weight-bold mt-1"},[t._v(t._s(t.$t("junior")))])]),i("v-col",[i("div",{staticClass:"text-center"},[i("v-btn",t._b({staticClass:"stars-btn senior",attrs:{color:"primary"},on:{click:function(e){t.formData.describe_yourself="Senior"}}},"v-btn",{outlined:"Senior"!==t.formData.describe_yourself},!1),[i("v-icon",[t._v(" mdi-star ")]),i("v-icon",[t._v(" mdi-star ")]),i("v-icon",[t._v(" mdi-star ")])],1)],1),i("p",{staticClass:"text-center caption mt-1 font-weight-bold"},[t._v(t._s(t.$t("senior")))])]),i("v-col",[i("div",{staticClass:"text-center"},[i("v-btn",t._b({staticClass:"stars-btn advanced",attrs:{color:"primary"},on:{click:function(e){t.formData.describe_yourself="Advanced"}}},"v-btn",{outlined:"Advanced"!==t.formData.describe_yourself},!1),[i("v-icon",[t._v(" mdi-star ")]),i("v-icon",[t._v(" mdi-star ")]),i("v-icon",[t._v(" mdi-star ")]),i("v-icon",[t._v(" mdi-star ")])],1)],1),i("p",{staticClass:"text-center caption mt-1 font-weight-bold"},[t._v(t._s(t.$t("advanced")))])])],1)],1)],1),i("v-row",[i("v-col",{attrs:{md:"6"}},[i("v-card",[i("v-dialog",{attrs:{persistent:"","max-width":"310","overlay-color":"#0253B3","overlay-opacity":"0.3"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[i("v-btn",t._g(t._b({attrs:{color:"primary",outlined:"",block:""}},"v-btn",a,!1),n),[t._v(" "+t._s(t.$t("cancel"))+" ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",{attrs:{height:"280"}},[i("p",{staticClass:"pt-5 text-center"},[i("v-icon",{staticClass:"border-special",attrs:{color:"red",size:"100"}},[t._v("mdi-alert-outline")])],1),i("v-card-text",{staticClass:"pt-2 text-center text-subtitle-1 font-weight-bold black--text"},[t._v("Are you sure you don't want to save changes?")]),i("v-divider"),i("v-card-actions",[i("v-row",[i("v-col",{staticClass:"text-center",attrs:{md:"6"}},[i("v-btn",{attrs:{text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" "+t._s(t.$t("cancel"))+" ")])],1),i("v-col",{staticClass:"text-center",attrs:{md:"6"}},[i("v-btn",{staticClass:"font-weight-bold",attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" "+t._s(t.$t("save"))+" ")])],1)],1)],1)],1)],1)],1)],1),i("v-col",{attrs:{md:"6"}},[i("v-card",[i("v-btn",{attrs:{block:"",color:"primary"},on:{click:t.handleUpdate}},[t._v(t._s(t.$t("confirm")))])],1)],1)],1)],1)},a=[],o=i("5530"),s=i("2f62"),r={name:"Qualifications",data:function(){return{dialog:!1,formData:{working_in:"",current_position:"",branche:"",address:"",department:"",describe_yourself:""},rules:[function(t){return!!t||"Required."},function(t){return t&&t.length>=3||"Min 3 characters"}],branches:["Medizin","Automobilindustrie","Maschinenbau","Chemisch-pharmazeutische Industrie","Ernährungsindustrie","Elektrotechnikbranche"],currentPosition:["Entwickler/in","Projektmanager/in","Bauleiter/in","Praktikant/in","Auszubildende/r","Geschäftsführer/in"]}},created:function(){this.resetFormData(this.user)},computed:Object(o["a"])({},Object(s["c"])("user",["user","getUserFullName","getUserInitials"])),methods:Object(o["a"])(Object(o["a"])({},Object(s["b"])("user",["updateUser"])),{},{resetFormData:function(t){t&&(this.formData.working_in=t.working_in,this.formData.current_position=t.current_position,this.formData.branche=t.branche,this.formData.address=t.address,this.formData.department=t.department,this.formData.describe_yourself=t.describe_yourself)},handleUpdate:function(){this.updateUser(this.formData)}}),watch:{user:function(t){this.resetFormData(t)}}},c=r,l=i("2877"),d=i("6544"),u=i.n(d),h=i("8336"),v=i("b0af"),f=i("99d9"),m=i("62ad"),b=i("169a"),p=i("ce7e"),y=i("132d"),g=i("0fd9"),w=i("b974"),_=i("8654"),k=Object(l["a"])(c,n,a,!1,null,null,null);e["default"]=k.exports;u()(k,{VBtn:h["a"],VCard:v["a"],VCardActions:f["a"],VCardText:f["c"],VCol:m["a"],VDialog:b["a"],VDivider:p["a"],VIcon:y["a"],VRow:g["a"],VSelect:w["a"],VTextField:_["a"]})},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return o})),i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return r})),i.d(e,"d",(function(){return c}));var n=i("b0af"),a=i("80d2"),o=Object(a["i"])("v-card__actions"),s=Object(a["i"])("v-card__subtitle"),r=Object(a["i"])("v-card__text"),c=Object(a["i"])("v-card__title");n["a"]},a797:function(t,e,i){"use strict";var n=i("5530"),a=(i("a9e3"),i("3c93"),i("a9ad")),o=i("7560"),s=i("f2e7"),r=i("58df");e["a"]=Object(r["a"])(a["a"],o["a"],s["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes:function(){return Object(n["a"])({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},e)}})},b0af:function(t,e,i){"use strict";var n=i("5530"),a=(i("a9e3"),i("0481"),i("615b"),i("10d2")),o=i("297c"),s=i("1c87"),r=i("58df");e["a"]=Object(r["a"])(o["a"],s["a"],a["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({"v-card":!0},s["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},a["a"].options.computed.classes.call(this))},styles:function(){var t=Object(n["a"])({},a["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=o["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),i=e.tag,n=e.data;return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),t(i,this.setBackgroundColor(this.color,n),[this.genProgress(),this.$slots.default])}})},e707:function(t,e,i){"use strict";i("a9e3"),i("caad"),i("2532");var n=i("1abc"),a=i("80d2"),o=i("2b0e");e["a"]=o["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{animationFrame:0,overlay:null}},watch:{hideOverlay:function(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var t=new n["a"]({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();var e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay:function(){var t=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((function(){t.overlay&&(void 0!==t.activeZIndex?t.overlay.zIndex=String(t.activeZIndex-1):t.$el&&(t.overlay.zIndex=Object(a["u"])(t.$el)),t.overlay.value=!0)})),!0},removeOverlay:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&(Object(a["a"])(this.overlay.$el,"transitionend",(function(){t.overlay&&t.overlay.$el&&t.overlay.$el.parentNode&&!t.overlay.value&&!t.isActive&&(t.overlay.$el.parentNode.removeChild(t.overlay.$el),t.overlay.$destroy(),t.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),e&&this.showScroll()},scrollListener:function(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;var e=[a["y"].up,a["y"].pageup],i=[a["y"].down,a["y"].pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!i.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar:function(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;var e=window.getComputedStyle(t);return["auto","scroll"].includes(e.overflowY)&&t.scrollHeight>t.clientHeight},shouldScroll:function(t,e){if(t.hasAttribute("data-app"))return!1;var i=0===t.scrollTop,n=t.scrollTop+t.clientHeight===t.scrollHeight,a=e<0,o=e>0;return!(i||!a)||(!(n||!o)||!(!i&&!n)&&this.shouldScroll(t.parentNode,e))},isInside:function(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath:function(t){var e=t.path||this.composedPath(t),i=t.deltaY;if("keydown"===t.type&&e[0]===document.body){var n=this.$refs.dialog,a=window.getSelection().anchorNode;return!(n&&this.hasScrollbar(n)&&this.isInside(a,n))||!this.shouldScroll(n,i)}for(var o=0;o<e.length;o++){var s=e[o];if(s===document)return!0;if(s===document.documentElement)return!0;if(s===this.$refs.content)return!0;if(this.hasScrollbar(s))return!this.shouldScroll(s,i)}return!0},composedPath:function(t){if(t.composedPath)return t.composedPath();var e=[],i=t.target;while(i){if(e.push(i),"HTML"===i.tagName)return e.push(document),e.push(window),e;i=i.parentElement}return e},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(a["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})}}]);
//# sourceMappingURL=ActualPosition.a711f54b.js.map