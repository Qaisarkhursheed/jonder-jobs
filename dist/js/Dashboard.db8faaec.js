(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Dashboard"],{"0960":function(t,e,i){t.exports=i.p+"img/three-dots.55accfd8.svg"},"0b53":function(t,e,i){"use strict";i("bd91")},"0b62":function(t,e,i){t.exports=i.p+"img/colView.8629274f.svg"},"169a":function(t,e,i){"use strict";var a=i("5530"),n=i("2909"),s=i("ade3"),o=(i("a9e3"),i("498a"),i("caad"),i("2532"),i("7db0"),i("368e"),i("480e")),r=i("4ad4"),c=i("b848"),l=i("75eb"),d=i("e707"),u=i("e4d3"),h=i("21be"),p=i("f2e7"),v=i("a293"),f=i("58df"),m=i("d9bd"),g=i("80d2"),b=Object(f["a"])(r["a"],c["a"],l["a"],d["a"],u["a"],h["a"],p["a"]);e["a"]=b.extend({name:"v-dialog",directives:{ClickOutside:v["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(s["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(s["a"])(t,"v-dialog--active",this.isActive),Object(s["a"])(t,"v-dialog--persistent",this.persistent),Object(s["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(s["a"])(t,"v-dialog--scrollable",this.scrollable),Object(s["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(m["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):d["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.previousActiveElement=document.activeElement,t.$refs.content.focus(),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===g["y"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var i=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),a=Object(n["a"])(i).find((function(t){return!t.hasAttribute("disabled")}));a&&a.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(o["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(a["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(a["a"])(Object(a["a"])({},t.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(g["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(g["g"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"1abc":function(t,e,i){"use strict";var a=i("a797");e["a"]=a["a"]},2119:function(t,e,i){t.exports=i.p+"img/equal-rights.6554eeac.svg"},"24c9":function(t,e,i){t.exports=i.p+"img/briefcase.68291d7d.svg"},3600:function(t,e,i){"use strict";i("90ac")},"368e":function(t,e,i){},"3a66":function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var a=i("fe6c"),n=i("58df");function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(n["a"])(Object(a["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},"3c93":function(t,e,i){},"45c3":function(t,e,i){t.exports=i.p+"img/listView.9de5d888.svg"},"4b50":function(t,e,i){"use strict";i("cda4")},"4e08":function(t,e,i){t.exports=i.p+"img/pdf.071213c8.svg"},"51fc":function(t,e,i){},"57a1":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-footer",{class:["lighten-1",{white:t.white},{default:!t.white}],attrs:{bottom:""}},[i("v-row",{attrs:{justify:"center","no-gutters":""}},t._l(t.links,(function(e,a){return i("v-btn",{key:a,staticClass:"my-2 footer-links",attrs:{color:"black",text:"",rounded:"",href:e.link}},[t._v(" "+t._s(e.name)+" ")])})),1)],1)},n=[],s={props:{white:{type:Boolean,default:!0}},data:function(){return{links:[{name:"Impressum",link:"https://jonder.jobs/impressum"},{name:"Datenschutz",link:"https://jonder.jobs/datenschutz"},{name:"AGB",link:"https://jonder.jobs/agb"}]}}},o=s,r=(i("d8b5"),i("2877")),c=i("6544"),l=i.n(c),d=i("8336"),u=i("5530"),h=(i("a9e3"),i("c7cd"),i("b5b6"),i("8dd9")),p=i("3a66"),v=i("d10f"),f=i("58df"),m=i("80d2"),g=Object(f["a"])(h["a"],Object(p["a"])("footer",["height","inset"]),v["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return Object(u["a"])(Object(u["a"])({},h["a"].options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return Object(u["a"])(Object(u["a"])({},h["a"].options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(m["g"])(t),left:Object(m["g"])(this.computedLeft),right:Object(m["g"])(this.computedRight),bottom:Object(m["g"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,e,this.$slots.default)}}),b=i("0fd9"),y=Object(r["a"])(o,a,n,!1,null,"9b6065b6",null);e["a"]=y.exports;l()(y,{VBtn:d["a"],VFooter:g,VRow:b["a"]})},"615b":function(t,e,i){},"6e2f":function(t,e,i){t.exports=i.p+"img/profile-placeholder.1225968c.png"},"6f32":function(t,e,i){var a={"./briefcase.svg":"24c9","./colView.svg":"0b62","./download.svg":"f28e","./equal-rights.svg":"2119","./listView.svg":"45c3","./medal.svg":"81c3","./three-dots.svg":"0960","./top-rated.svg":"ca84d"};function n(t){var e=s(t);return i(e)}function s(t){if(!i.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=s,t.exports=n,n.id="6f32"},7277:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("dashboard-layout",[i("router-view")],1),i("footer-legal",{attrs:{white:!1}})],1)},n=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.user?a("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[a("v-row",{staticClass:"flex-shrink-0 flex-grow-0 search-holder"},[a("v-col",{attrs:{cols:"4"}},[a("router-link",{staticClass:"logo",attrs:{to:"/dashboard"}},[a("v-img",{attrs:{src:i("cd260"),"max-width":"128px"}})],1)],1),a("v-col",{attrs:{cols:"4"}}),a("v-col",{staticClass:"text-right",attrs:{cols:"4"}},[a("div",{staticClass:"dashboard-avatar"},[a("span",{staticClass:"d-none d-md-inline"},[t._v(" "+t._s(t.$t("hello"))+", ")]),a("span",{staticClass:"name d-none d-md-inline"},[t._v(t._s(t.getUserFullName))]),a("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-avatar",t._g({attrs:{color:"primary",size:"38"}},i),[t.user.profile_img?a("v-img",{attrs:{src:t.user.profile_img}}):a("span",{staticClass:"white--text"},[t._v(" "+t._s(t.$store.getters["user/getUserInitials"])+" ")])],1)]}}],null,!1,2598091170)},[a("v-list",{staticClass:"nav"},[a("v-list-item",{on:{click:function(e){return t.$router.push({name:"Profile"})}}},[t._v(" "+t._s(t.$t("profile"))+" ")]),a("v-list-item",{on:{click:function(e){return t.$router.push({name:"Logout"})}}},[t._v(" "+t._s(t.$t("logout"))+" ")])],1)],1)],1)])],1),t.profile?a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-btn",{staticClass:"back-btn dark-blue",attrs:{color:"primary"},on:{click:function(e){return t.navigateTo("/dashboard")}}},[t._v(" "+t._s(t.$t("backToHome"))+" ")])],1)],1):t._e(),a("v-row",{staticClass:"full-h ma-0"},["PersonalityTestJobseeker"!==t.$route.name?a("v-col",{staticClass:"navigation col-12 col-md-4 col-xl-3"},[t.profile?a("nav",{staticClass:"dashboard-navigation pl-0 pl-md-8"},[a("div",{staticClass:"settings-nav"},[a("div",{staticClass:"settings-title"},[t._v(" "+t._s(t.$t("profileSettings"))+" ")]),a("div",{staticClass:"submenu"},[a("div",{staticClass:"nav-item",on:{click:function(e){return t.scrollToSection("personalInfo")}}},[t._v(" "+t._s(t.$t("personalInformation"))+" "),a("v-icon",[t._v(" mdi-chevron-right ")])],1),a("div",{staticClass:"nav-item",on:{click:function(e){return t.scrollToSection("roleAndBranche")}}},[t._v(" "+t._s(t.$t("positionAndIndustry"))+" "),a("v-icon",[t._v(" mdi-chevron-right ")])],1),a("div",{staticClass:"nav-item",on:{click:function(e){return t.scrollToSection("lookingFor")}}},[t._v(" "+t._s(t.$t("searchingFor"))+" "),a("v-icon",[t._v(" mdi-chevron-right ")])],1),a("div",{staticClass:"nav-item",on:{click:function(e){return t.scrollToSection("experienceAndEducation")}}},[t._v(" "+t._s(t.$t("experiences"))+" "),a("v-icon",[t._v(" mdi-chevron-right ")])],1),a("div",{staticClass:"nav-item",on:{click:function(e){return t.scrollToSection("documents")}}},[t._v(" "+t._s(t.$t("documents"))+" "),a("v-icon",[t._v(" mdi-chevron-right ")])],1),a("div",{staticClass:"nav-item",on:{click:function(e){return t.scrollToSection("invoices")}}},[t._v(" "+t._s(t.$t("billing"))+" "),a("v-icon",[t._v(" mdi-chevron-right ")])],1),a("div",{staticClass:"nav-item",on:{click:function(e){return t.scrollToSection("paymentMethod")}}},[t._v(" "+t._s(t.$t("invoicing"))+" "),a("v-icon",[t._v(" mdi-chevron-right ")])],1),a("div",{staticClass:"nav-item",on:{click:function(e){return t.scrollToSection("changePassword")}}},[t._v(" "+t._s(t.$t("changePassword"))+" "),a("v-icon",[t._v(" mdi-chevron-right ")])],1),a("div",{staticClass:"nav-item",on:{click:function(e){return t.scrollToSection("upgradeAccount")}}},[t._v(" "+t._s(t.$t("upgradeAccount"))+" "),a("v-icon",[t._v(" mdi-chevron-right ")])],1)])])]):t._e(),t.dashboard?a("div",{staticClass:"dashboard-about"},[a("v-row",{staticClass:"full-h ma-0"},[a("div",{staticClass:"top-info pb-0",staticStyle:{"border-bottom":"1px solid #E9E9E9"}},[a("div",{staticClass:"profile-image"},[t.user.profile_img?a("v-img",{staticClass:"profile-image-user",attrs:{src:t.user.profile_img}}):a("v-img",{staticClass:"profile-image-user",attrs:{src:i("6e2f")}}),t.userPlan.length?a("div",{staticClass:"profile-image-badge-icons"},t._l(t.userPlan,(function(e,n){return a("v-img",{key:n,staticClass:"profile-image-badge-icon",style:[t.userPlan.length>1?{margin:"0 -5px"}:null],attrs:{src:i("6f32")("./"+(11===e.id?"top-rated":"medal")+".svg")}})})),1):t._e()],1),a("span",{staticClass:"dash-name"},[t._v(t._s(t.getUserFullName))]),a("router-link",{staticClass:"settings-link",attrs:{to:"/dashboard/profile"}},[t._v(" "+t._s(t.$t("profileSettings"))+" ")]),t.userPlan.length?t._l(t.userPlan,(function(t,e){return a("DashboardActivePlan",{key:e,attrs:{"user-plan":t}})})):t._e()],2),t.messagesLoaded&&t.conversations.length&&!t.userPlan.length?a("UpgradeAccountBox",{staticClass:"mt-7",attrs:{small:""}}):t._e(),a("div",{staticClass:"top-info mt-7"},[a("span",{staticClass:"about-info"},[t._v(t._s(t.$t("searchStatus")))]),a("p",{staticClass:"about-text"},t._l(t.userEmploymentType,(function(e,i){return a("span",{key:i},[t._v(" "+t._s(t.$t(""+e))+" ")])})),0),a("span",{staticClass:"about-info"},[t._v("Position")]),a("p",{staticClass:"about-text"},[t._v(t._s(t.user.current_position))]),a("span",{staticClass:"about-info"},[t._v(t._s(t.$t("currentIndustry")))]),a("p",{staticClass:"about-text"},[t._v(t._s(t.getBranche))]),a("span",{staticClass:"about-info"},[t._v(t._s(t.$t("cityAndAddress"))+" ")]),a("p",{staticClass:"about-text"},[t._v(t._s(t.user.city))]),a("span",{staticClass:"about-info"},[t._v(" "+t._s(t.$t("experiences"))+" ")]),a("CardActionableList",{staticClass:"mb-5",attrs:{type:"Experience","view-only":""}}),a("span",{staticClass:"about-info"},[t._v(" "+t._s(t.$t("education"))+" ")]),a("CardActionableList",{attrs:{type:"Education","view-only":""}})],1),a("div",{staticClass:"top-info"},[a("span",{staticClass:"about-info"},[t._v(" "+t._s(t.$t("documents"))+" ")]),t.user.cv?a("div",{staticClass:"row mt-1"},[a("div",{staticClass:"col-auto"},[a("a",{attrs:{href:t.user.cv,target:"_blank"}},[a("img",{attrs:{src:i("4e08")}})])]),a("div",{staticClass:"col my-auto font-weight-bold"},[t._v(" CV ")])]):t._e(),t.user.qualifications?a("div",{staticClass:"row mt-1"},[a("div",{staticClass:"col-auto"},[a("a",{attrs:{href:""+t.user.qualifications,target:"_blank"}},[a("img",{attrs:{src:i("4e08")}})])]),a("div",{staticClass:"col my-auto font-weight-bold"},[t._v(" "+t._s(t.$t("qualifications"))+" ")])]):t._e(),t.user.resume?a("div",{staticClass:"row mt-1"},[a("div",{staticClass:"col-auto"},[a("a",{attrs:{href:t.user.resume,target:"_blank"}},[a("img",{attrs:{src:i("4e08")}})])]),a("div",{staticClass:"col my-auto font-weight-bold"},[t._v(" "+t._s(t.$t("curriculumVitae"))+" ")])]):t._e()])],1)],1):t._e()]):t._e(),a("v-col",{staticClass:"main col-12 col-md-8 col-xl-9",class:{"col-md-12 col-xl-12":"PersonalityTestJobseeker"===t.$route.name}},[a("v-container",{staticClass:"d-flex flex-column",attrs:{fluid:""}},[t._t("default")],2)],1)],1)],1):t._e()},o=[],r=i("1da1"),c=i("5530"),l=(i("96cf"),i("b0c0"),i("ac1f"),i("1276"),i("a15b"),i("498a"),i("841c"),i("2f62")),d=i("2ef0"),u=i("cc1f"),h=i("aeaf"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-active-plan"},[a("div",{staticClass:"image-wrapper"},[a("v-img",{staticClass:"img-icon",attrs:{src:i("6f32")("./"+(11===t.userPlan.id?"top-rated":"medal")+".svg")}})],1),a("div",{staticClass:"info-wrapper"},[11===t.userPlan.id?a("div",{staticClass:"info-title"},[t._v(t._s(t.remainingDays)+" "+t._s(t.$t("remainingDays")))]):a("div",{staticClass:"info-title"},[t._v(t._s(t.$t("success"))+"!")]),a("div",{staticClass:"info-desscription"},[t._v(" "+t._s(t.userPlan.plan_description)+" ")])])])},v=[],f={name:"DashboardActivePlan",props:{userPlan:{type:Object,required:!0}},computed:{remainingDays:function(){var t=(new Date).getTime(),e=new Date(this.userPlan.end_timestamp).getTime();return Math.floor((e-t)/864e5)}}},m=f,g=(i("4b50"),i("2877")),b=i("6544"),y=i.n(b),_=i("adda"),w=Object(g["a"])(m,p,v,!1,null,"640d5ee0",null),C=w.exports;y()(w,{VImg:_["a"]});var $={components:{DashboardActivePlan:C,CardActionableList:u["a"],UpgradeAccountBox:h["a"]},data:function(){return{searchString:null,searchLoading:!1,searchItems:[],search:null}},computed:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(l["c"])("user",["user","getUserFullName","getUserInitials","userPlan"])),Object(l["c"])("chat",["conversations","messagesLoaded"])),{},{profile:function(){return"Profile"===this.$route.name},dashboard:function(){return"/dashboard"===this.$route.path||"/dashboard/"===this.$route.path},userEmploymentType:function(){return this.user.looking_for_employment_type.split(",")},getBranche:function(){var t=this,e=Object(d["map"])(this.user.branche.split(","),(function(e){return t.$t(e)}));return e.join()}}),methods:Object(c["a"])(Object(c["a"])({},Object(l["b"])("user",["searchUsers"])),{},{handleSearch:Object(d["debounce"])(function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.searchUsers(e);case 2:this.searchItems=t.sent,this.searchLoading=!1;case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),2e3),scrollToSection:function(t){document.getElementById(t).scrollIntoView({behavior:"smooth",block:"center"})},navigateTo:function(t){this.$router.push(t)}}),watch:{search:function(t){this.searchLoading=!0,t&&t.trim().length>0&&t!==this.searchString&&this.handleSearch(t)},searchString:function(t){var e=this;t&&(this.$router.push("/dashboard/profile/view/"+t),setTimeout((function(){e.search=null,e.searchString=null})))}}},k=$,x=i("8212"),O=i("8336"),P=i("62ad"),S=i("a523"),j=i("132d"),A=i("8860"),E=i("da13"),I=i("e449"),B=i("0fd9"),L=Object(g["a"])(k,s,o,!1,null,null,null),T=L.exports;y()(L,{VAvatar:x["a"],VBtn:O["a"],VCol:P["a"],VContainer:S["a"],VIcon:j["a"],VImg:_["a"],VList:A["a"],VListItem:E["a"],VMenu:I["a"],VRow:B["a"]});var U=i("57a1"),D={name:"DashboardWrap",components:{DashboardLayout:T,FooterLegal:U["a"]}},N=D,V=Object(g["a"])(N,a,n,!1,null,null,null);e["default"]=V.exports},"77d2":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{staticClass:"dialog",attrs:{persistent:"",width:t.$store.getters.screenSize?"95%":"750px","max-width":"750px","overlay-color":"#0253B3","overlay-opacity":"0.3"},on:{"click:outside":function(e){return t.close("abort")}},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[a("v-card",{staticClass:"rounded-lg wrap upgrade-dialog modal-plan",attrs:{flat:""}},[a("div",{staticClass:"modal-title"},[t._v(" "+t._s(t.$t("choosePlan"))+" ")]),t._l(t.data,(function(e){return a("div",{key:e.id,staticClass:"options",class:{deactive:t.userPlan.length&&t.isPlanActive(e.id),active:t.form.active_plan===e.id}},["jobseeker_paln"===e.plan_type?a("v-btn",{staticClass:"upgrade-option justify-start pa-2",attrs:{color:t.form.active_plan===e.id?"primary":"","min-height":"104",height:t.$store.getters.screenSize<500?"auto":"104"},on:{click:function(i){(!t.userPlan.length||!t.isPlanActive(e.id))&&(t.form.active_plan=e.id,t.savePlanId(e.id))}}},[a("v-img",{staticClass:"upgrade-icon",attrs:{src:i("ca84d")}}),t.userPlan.length&&t.isPlanActive(e.id)?a("UserPlanDescription",{staticClass:"user-plan-desc",attrs:{plan:t.getUserPlan(e.id)[0]}}):a("div",{staticClass:"upgrade-default"},[a("span",{staticClass:"upgrade-title"},[t._v(" "+t._s(e.name)+" ")]),a("p",{staticClass:"upgrade-text"},[t._v(" "+t._s(e.plan_description)+" ")]),a("span",{staticClass:"updgrade-price"},[t._v(t._s(e.price)+"€")])])],1):t._e()],1)})),a("div",{staticClass:"buttons"},[a("v-btn",{staticClass:"mt-16 font-weight-medium upgrade-btn",staticStyle:{"margin-right":"20px"},attrs:{height:"56"},on:{click:t.close}},[t._v(" "+t._s(t.$t("cancel"))+" ")]),a("v-btn",{staticClass:"mt-16 font-weight-medium upgrade-btn dark-blue",attrs:{loading:t.isLoading,color:"primary",height:"56",width:"178"},on:{click:function(e){return t.next()}}},[t._v(" "+t._s(t.$t("confirmOption"))+" ")])],1)],2)],1)},n=[],s=i("5530"),o=i("1da1"),r=(i("d3b7"),i("96cf"),i("4360")),c=i("bf8a"),l=i("2f62"),d=i("cf81"),u={name:"UpgradePlanModal",components:{UserPlanDescription:d["a"]},props:{active:{type:Boolean,default:!1},type:{type:String,default:"ok"},edit:{type:[Object,Boolean]}},data:function(){return{data:"",isLoading:!1,planId:null,stripeId:null,form:{active_plan:""}}},created:function(){this.edit&&this.populate(),this.data=this.$store.getters["user/plans"]("jobseeker_paln")},methods:{close:function(t){this.$emit("close",t)},savePlanId:function(t){this.planId=t},processStripe:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.stripeId&&t.stripeId.length>5)){e.next=8;break}return t.isLoading=!0,e.next=4,Object(c["a"])("pk_test_51J2VxwKKMFZvcsxu4VEDQetraMaOKVF6DAjvkSgkNPHMXktPW3ibXXEgRuYBLepBo6JvF4dWxeIvspapIbgVel2R00tehUJtX8");case 4:i=e.sent,i.redirectToCheckout({sessionId:t.stripeId}),e.next=9;break;case 8:t.isLoading=!1;case 9:case"end":return e.stop()}}),e)})))()},next:function(){var t=this;this.planId&&this.planId>0?(this.isLoading=!0,this.$http.post("".concat("https://dev.api.jonder.devla.dev/api/v1","/plan"),{plan_id:this.planId,payment_method:"credit card"}).then((function(e){t.stripeId=e.data.data.id})).finally((function(){t.isLoading=!1,t.processStripe()}))):(alert("Please select the plan!"),this.isLoading=!1)},save:function(){this.edit?r["a"].dispatch("user/updateUser",{id:this.edit.id,payload:this.form}):console.log(),this.$emit("close",1)},populate:function(){this.form.active_plan=this.edit.active_plan}},computed:Object(s["a"])({},Object(l["c"])({userPlan:"user/userPlan",getUserPlan:"user/getUserPlan",isPlanActive:"user/isPlanActive"}))},h=u,p=(i("d0127"),i("2877")),v=i("6544"),f=i.n(v),m=i("8336"),g=i("b0af"),b=i("169a"),y=i("adda"),_=Object(p["a"])(h,a,n,!1,null,"c9c69b10",null);e["a"]=_.exports;f()(_,{VBtn:m["a"],VCard:g["a"],VDialog:b["a"],VImg:y["a"]})},"81c3":function(t,e,i){t.exports=i.p+"img/medal.240909b4.svg"},"90ac":function(t,e,i){},a797:function(t,e,i){"use strict";var a=i("5530"),n=(i("a9e3"),i("3c93"),i("a9ad")),s=i("7560"),o=i("f2e7"),r=i("58df");e["a"]=Object(r["a"])(n["a"],s["a"],o["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes:function(){return Object(a["a"])({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},e)}})},aeaf:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"full-w"},[t.modals.UpgradePlan.active?a("UpgradePlanModal",{attrs:{active:t.modals.UpgradePlan.active,edit:t.modals.UpgradePlan.edit},on:{close:function(e){return t.toggleModal("UpgradePlan")}}}):t._e(),a("div",{staticClass:"upgrade-box"},[a("v-img",{staticClass:"badge",attrs:{src:i("ca84d"),width:t.small?"40":null}}),a("div",{staticClass:"title-description-wrapper",class:{"d-flex":!t.small},staticStyle:{"font-size":"13px","justify-content":"space-between"}},[a("div",{staticClass:"upgrade-title"},[t._v(" "+t._s(t.$t("premiumSuggestion"))+" ")]),a("div",[t._v(" "+t._s(t.$t("beOnTheTop"))+" ")])]),a("div",{staticClass:"link-upgrade-wrapper",class:{"mt-2":t.small}},[a("CardActionableList",{attrs:{type:"UpgradePlan"},on:{edit:function(e){return t.activateEdit("UpgradePlan",e)}}}),a("span",{staticClass:"link-upgrade",staticStyle:{color:"#55F481",width:"100%",cursor:"pointer"},on:{click:function(e){return t.toggleModal("UpgradePlan")}}},[t._v(" "+t._s(t.$t("upgradeNow"))+" ")])],1)],1)],1)},n=[],s=i("77d2"),o=i("cc1f"),r={props:{small:{type:Boolean,default:!1}},methods:{toggleModal:function(t){this.modals[t].edit=!1,this.modals[t].active=!this.modals[t].active},activateEdit:function(t,e){this.toggleModal(t),this.modals[t].edit=e}},components:{UpgradePlanModal:s["a"],CardActionableList:o["a"]},mounted:function(){null==this.$store.getters["user/userPlans"]&&this.$store.dispatch("user/fetchPlans")},data:function(){return{modals:{UpgradePlan:{active:!1,edit:!1,component:s["a"]}},fileActions:{UpgradePlan:["edit","delete"]}}}},c=r,l=(i("0b53"),i("2877")),d=i("6544"),u=i.n(d),h=i("adda"),p=Object(l["a"])(c,a,n,!1,null,null,null);e["a"]=p.exports;u()(p,{VImg:h["a"]})},b0af:function(t,e,i){"use strict";var a=i("5530"),n=(i("a9e3"),i("0481"),i("615b"),i("10d2")),s=i("297c"),o=i("1c87"),r=i("58df");e["a"]=Object(r["a"])(s["a"],o["a"],n["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({"v-card":!0},o["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},n["a"].options.computed.classes.call(this))},styles:function(){var t=Object(a["a"])({},n["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=s["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),i=e.tag,a=e.data;return a.style=this.styles,this.isClickable&&(a.attrs=a.attrs||{},a.attrs.tabindex=0),t(i,this.setBackgroundColor(this.color,a),[this.genProgress(),this.$slots.default])}})},b5b6:function(t,e,i){},bd91:function(t,e,i){},bf8a:function(t,e,i){"use strict";i.d(e,"a",(function(){return v}));var a="https://js.stripe.com/v3",n=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,s="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",o=function(){for(var t=document.querySelectorAll('script[src^="'.concat(a,'"]')),e=0;e<t.length;e++){var i=t[e];if(n.test(i.src))return i}return null},r=function(t){var e=t&&!t.advancedFraudSignals?"?advancedFraudSignals=false":"",i=document.createElement("script");i.src="".concat(a).concat(e);var n=document.head||document.body;if(!n)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return n.appendChild(i),i},c=function(t,e){t&&t._registerWrapper&&t._registerWrapper({name:"stripe-js",version:"1.18.0",startTime:e})},l=null,d=function(t){return null!==l||(l=new Promise((function(e,i){if("undefined"!==typeof window)if(window.Stripe&&t&&console.warn(s),window.Stripe)e(window.Stripe);else try{var a=o();a&&t?console.warn(s):a||(a=r(t)),a.addEventListener("load",(function(){window.Stripe?e(window.Stripe):i(new Error("Stripe.js not available"))})),a.addEventListener("error",(function(){i(new Error("Failed to load Stripe.js"))}))}catch(n){return void i(n)}else e(null)}))),l},u=function(t,e,i){if(null===t)return null;var a=t.apply(void 0,e);return c(a,i),a},h=Promise.resolve().then((function(){return d(null)})),p=!1;h["catch"]((function(t){p||console.warn(t)}));var v=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];p=!0;var a=Date.now();return h.then((function(t){return u(t,e,a)}))}},ca84d:function(t,e,i){t.exports=i.p+"img/top-rated.69631fe4.svg"},cd260:function(t,e,i){t.exports=i.p+"img/jonder-logo.977c8c02.svg"},cda4:function(t,e,i){},cf21:function(t,e,i){},cf81:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"plan-description",class:{"border-plan":t.borderPlan}},[i("h3",[t._v(t._s(t.plan.name))]),i("div",[t._v(" "+t._s(t.plan.price)+"€ / "+t._s(t.plan.days_valid)+" "+t._s(t.$t("daysValid"))+" ")]),i("div",[t._v(" "+t._s(t.$t("renewsOn"))+" "+t._s(t._f("moment")(t.plan.start_timestamp,"DD MMM, YYYY"))+" ")]),i("div",[t._v(" "+t._s(t.$t("validUntil"))+" "+t._s(t._f("moment")(t.plan.end_timestamp,"DD MMM, YYYY"))+" ")]),t.paymentInfo||t.paymentAction?i("div",{staticClass:"payment-info mt-6 pt-4"},[t.paymentInfo&&"CompanyPackagesPricing"!==t.$route.name?i("span",{staticClass:"carten-abenden",on:{click:function(e){return t.$router.push({name:"CompanyPackagesPricing"})}}},[t._v(" "+t._s(t.$t("changePackage"))+" ")]):t._e(),i("span",{staticClass:"payment-action",on:{click:function(e){return t.$store.dispatch("user/cancelSubscription",t.plan.id)}}},[t._v(" "+t._s(t.$t("cancelSubscription"))+" ")])]):t._e()])},n=[],s={name:"UserPlanDescription",props:{paymentInfo:{type:Boolean},paymentAction:{type:Boolean,default:!1},borderPlan:{type:Boolean,default:!1},plan:{type:Object,required:!0}}},o=s,r=(i("3600"),i("2877")),c=Object(r["a"])(o,a,n,!1,null,"e6012984",null);e["a"]=c.exports},d0127:function(t,e,i){"use strict";i("cf21")},d10f:function(t,e,i){"use strict";var a=i("2b0e");e["a"]=a["a"].extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame((function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0}))}})},d8b5:function(t,e,i){"use strict";i("51fc")},e707:function(t,e,i){"use strict";i("a9e3"),i("caad"),i("2532");var a=i("1abc"),n=i("80d2"),s=i("2b0e");e["a"]=s["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{animationFrame:0,overlay:null}},watch:{hideOverlay:function(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var t=new a["a"]({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();var e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay:function(){var t=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((function(){t.overlay&&(void 0!==t.activeZIndex?t.overlay.zIndex=String(t.activeZIndex-1):t.$el&&(t.overlay.zIndex=Object(n["u"])(t.$el)),t.overlay.value=!0)})),!0},removeOverlay:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&(Object(n["a"])(this.overlay.$el,"transitionend",(function(){t.overlay&&t.overlay.$el&&t.overlay.$el.parentNode&&!t.overlay.value&&!t.isActive&&(t.overlay.$el.parentNode.removeChild(t.overlay.$el),t.overlay.$destroy(),t.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),e&&this.showScroll()},scrollListener:function(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;var e=[n["y"].up,n["y"].pageup],i=[n["y"].down,n["y"].pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!i.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar:function(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;var e=window.getComputedStyle(t);return["auto","scroll"].includes(e.overflowY)&&t.scrollHeight>t.clientHeight},shouldScroll:function(t,e){if(t.hasAttribute("data-app"))return!1;var i=0===t.scrollTop,a=t.scrollTop+t.clientHeight===t.scrollHeight,n=e<0,s=e>0;return!(i||!n)||(!(a||!s)||!(!i&&!a)&&this.shouldScroll(t.parentNode,e))},isInside:function(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath:function(t){var e=t.path||this.composedPath(t),i=t.deltaY;if("keydown"===t.type&&e[0]===document.body){var a=this.$refs.dialog,n=window.getSelection().anchorNode;return!(a&&this.hasScrollbar(a)&&this.isInside(n,a))||!this.shouldScroll(a,i)}for(var s=0;s<e.length;s++){var o=e[s];if(o===document)return!0;if(o===document.documentElement)return!0;if(o===this.$refs.content)return!0;if(this.hasScrollbar(o))return!this.shouldScroll(o,i)}return!0},composedPath:function(t){if(t.composedPath)return t.composedPath();var e=[],i=t.target;while(i){if(e.push(i),"HTML"===i.tagName)return e.push(document),e.push(window),e;i=i.parentElement}return e},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(n["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})},f28e:function(t,e,i){t.exports=i.p+"img/download.5bed3128.svg"}}]);
//# sourceMappingURL=Dashboard.db8faaec.js.map