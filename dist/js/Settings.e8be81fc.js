(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Settings"],{"0960":function(t,e,a){t.exports=a.p+"img/three-dots.55accfd8.svg"},"169a":function(t,e,a){"use strict";var s=a("5530"),i=a("2909"),o=a("ade3"),n=(a("a9e3"),a("498a"),a("caad"),a("2532"),a("7db0"),a("368e"),a("480e")),r=a("4ad4"),l=a("b848"),c=a("75eb"),d=a("e707"),u=a("e4d3"),v=a("21be"),h=a("f2e7"),f=a("a293"),m=a("58df"),p=a("d9bd"),b=a("80d2"),g=Object(m["a"])(r["a"],l["a"],c["a"],d["a"],u["a"],v["a"],h["a"]);e["a"]=g.extend({name:"v-dialog",directives:{ClickOutside:f["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(o["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(o["a"])(t,"v-dialog--active",this.isActive),Object(o["a"])(t,"v-dialog--persistent",this.persistent),Object(o["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(o["a"])(t,"v-dialog--scrollable",this.scrollable),Object(o["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(p["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):d["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.previousActiveElement=document.activeElement,t.$refs.content.focus(),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===b["y"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var a=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),s=Object(i["a"])(a).find((function(t){return!t.hasAttribute("disabled")}));s&&s.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(n["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(s["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(s["a"])(Object(s["a"])({},t.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(b["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(b["g"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"1abc":function(t,e,a){"use strict";var s=a("a797");e["a"]=s["a"]},"286b":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-row",{staticClass:"header justify-space-between align-center pr-4 pl-4 pr-md-8 pl-md-13"},[s("v-col",{attrs:{cols:"6",md:"3"}},[s("router-link",{staticClass:"logo",attrs:{to:""}},[s("v-img",{attrs:{src:a("89ce"),"max-width":"128px"}})],1)],1),s("v-col",{staticClass:"text-right",attrs:{cols:"6",md:"4"}},[s("div",{staticClass:"dashboard-avatar"},[s("span",{staticClass:"name"},[t._v(t._s(t.user.company))]),s("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[s("v-avatar",t._g({attrs:{color:"primary",size:"38"}},a),[t.user.profile_img?s("v-img",{attrs:{src:t.user.profile_img}}):s("span",{staticClass:"white--text"},[t._v(" "+t._s(t._f("initials")(t.$store.getters["user/user"]))+" ")])],1)]}}])},[s("v-list",{staticClass:"nav"},[s("v-list-item",{on:{click:function(e){return t.$router.push({name:"CompanySettings"})}}},[t._v(" "+t._s(t.$t("profile"))+" ")]),s("v-list-item",{on:{click:function(e){return t.$router.push({name:"Logout"})}}},[t._v(" "+t._s(t.$t("logout"))+" ")])],1)],1)],1)])],1)},i=[],o=a("1da1"),n=a("5530"),r=(a("498a"),a("ac1f"),a("841c"),a("96cf"),a("2f62")),l=a("f7fe"),c=a.n(l),d={data:function(){return{searchString:null,searchLoading:!1,searchItems:[],search:null}},computed:Object(n["a"])({},Object(r["c"])("user",["user"])),methods:Object(n["a"])(Object(n["a"])({},Object(r["b"])("user",["searchUsers"])),{},{handleSearch:c()(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.searchUsers(e);case 2:this.searchItems=t.sent,this.searchLoading=!1;case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),2e3)}),watch:{search:function(t){this.searchLoading=!0,t&&t.trim().length>0&&t!==this.searchString&&this.handleSearch(t)},searchString:function(t){var e=this;t&&(this.$router.push({name:"CompanyUserOverview",params:{id:t}}),setTimeout((function(){e.search=null,e.searchString=null})))}}},u=d,v=(a("77f4"),a("2877")),h=a("6544"),f=a.n(h),m=a("8212"),p=a("62ad"),b=a("adda"),g=a("8860"),w=a("da13"),y=a("e449"),_=a("0fd9"),C=Object(v["a"])(u,s,i,!1,null,"ed400ad4",null);e["a"]=C.exports;f()(C,{VAvatar:m["a"],VCol:p["a"],VImg:b["a"],VList:g["a"],VListItem:w["a"],VMenu:y["a"],VRow:_["a"]})},"368e":function(t,e,a){},"3c93":function(t,e,a){},"615b":function(t,e,a){},"6f0b":function(t,e,a){},"77f4":function(t,e,a){"use strict";a("89d5")},"86d9":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{staticClass:"dialog",attrs:{persistent:"",width:"750px","max-width":"750px","overlay-color":"#0253B3","overlay-opacity":"0.3"},on:{"click:outside":function(e){return t.close("abort")}},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[a("v-card",{staticClass:"rounded-lg wrap upgrade-dialog",attrs:{flat:""}},[a("div",{staticClass:"modal-title"},[t._v(" Add New Card ")]),a("div",{staticClass:"card-info"},[a("v-col",{attrs:{cols:"6"}},[a("label",{staticClass:"profile-label"},[t._v(" "+t._s(t.$t("creditCardNumber"))+" ")]),a("v-text-field",{attrs:{dense:"",placeholder:"XXXX-XXXX-XXXX-XXXX",type:"text",outlined:"",solo:"",flat:"","hide-details":"","background-color":"white"}})],1),a("v-col",{attrs:{cols:"6"}},[a("label",{staticClass:"profile-label"},[t._v(" "+t._s(t.$t("cardHolder"))+" ")]),a("v-text-field",{attrs:{dense:"",placeholder:"Max Mustermann",type:"text",outlined:"",solo:"",flat:"","hide-details":"","background-color":"white"}})],1)],1),a("div",{staticClass:"card-info"},[a("v-col",{attrs:{cols:"3"}},[a("label",{staticClass:"profile-label"},[t._v(" "+t._s(t.$t("expirationDate"))+" ")]),a("v-text-field",{attrs:{dense:"",placeholder:t.$t("monthYear"),type:"text",outlined:"",solo:"",flat:"","hide-details":"","background-color":"white"}})],1),a("v-col",{attrs:{cols:"3"}},[a("label",{staticClass:"profile-label"},[t._v(" "+t._s(t.$t("cvv"))+" ")]),a("v-text-field",{attrs:{dense:"",placeholder:"***",type:"text",outlined:"",solo:"",flat:"","hide-details":"","background-color":"white"}})],1)],1),a("div",{staticClass:"buttons"},[a("v-btn",{staticClass:"mt-16 font-weight-medium upgrade-btn",staticStyle:{"margin-right":"20px"},attrs:{height:"56"},on:{click:t.close}},[t._v(" "+t._s(t.$t("cancel"))+" ")]),a("v-btn",{staticClass:"mt-16 font-weight-medium upgrade-btn",attrs:{color:"primary",height:"56",width:"178"},on:{click:t.save}},[t._v(" "+t._s(t.$t("next"))+" ")])],1)])],1)},i=[],o=a("4360"),n={name:"AddNewCard",props:{active:{type:Boolean,default:!1},type:{type:String,default:"ok"},edit:{type:[Object,Boolean]}},data:function(){return{}},created:function(){this.edit&&this.populate()},methods:{close:function(t){this.$emit("close",t)},save:function(){this.edit?o["a"].dispatch("user/updateUser",{id:this.edit.id,payload:this.form}):console.log(),this.$emit("close",1)},populate:function(){}}},r=n,l=(a("9a95"),a("2877")),c=a("6544"),d=a.n(c),u=a("8336"),v=a("b0af"),h=a("62ad"),f=a("169a"),m=a("8654"),p=Object(l["a"])(r,s,i,!1,null,"67ad74f6",null);e["a"]=p.exports;d()(p,{VBtn:u["a"],VCard:v["a"],VCol:h["a"],VDialog:f["a"],VTextField:m["a"]})},"89d5":function(t,e,a){},"9a95":function(t,e,a){"use strict";a("6f0b")},a797:function(t,e,a){"use strict";var s=a("5530"),i=(a("a9e3"),a("3c93"),a("a9ad")),o=a("7560"),n=a("f2e7"),r=a("58df");e["a"]=Object(r["a"])(i["a"],o["a"],n["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes:function(){return Object(s["a"])({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},e)}})},b0af:function(t,e,a){"use strict";var s=a("5530"),i=(a("a9e3"),a("0481"),a("615b"),a("10d2")),o=a("297c"),n=a("1c87"),r=a("58df");e["a"]=Object(r["a"])(o["a"],n["a"],i["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({"v-card":!0},n["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},i["a"].options.computed.classes.call(this))},styles:function(){var t=Object(s["a"])({},i["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=o["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),a=e.tag,s=e.data;return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),t(a,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})},baec:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{staticClass:"company-settings pa-0",attrs:{fluid:""}},[t.modals.AddNewCard.active?s("AddNewCard",{attrs:{active:t.modals.AddNewCard.active,edit:t.modals.AddNewCard.edit},on:{close:function(e){return t.toggleModal("AddNewCard")}}}):t._e(),s("Header"),s("div",{staticClass:"text-center py-3",staticStyle:{"border-top":"1px solid #E3E3E4"}},[s("v-btn",{staticClass:"font-weight-medium main-accept-btn",attrs:{depressed:"",large:""},on:{click:function(e){return t.$router.push("/company-dashboard")}}},[t._v(" "+t._s(t.$t("backToHome"))+" ")])],1),s("v-row",{staticClass:"main ma-0"},[s("v-col",{staticClass:"col-12 col-sm-4 col-xl-3"},[s("nav",{staticClass:"dashboard-navigation"},[s("div",{staticClass:"settings-nav"},[s("div",{staticClass:"settings-title"},[t._v(" "+t._s(t.$t("profileSettings"))+" ")]),s("div",{staticClass:"submenu"},[s("div",{staticClass:"nav-item",on:{click:function(e){return t.scrollToSection("personalInfo")}}},[t._v(" "+t._s(t.$t("personalInformation"))+" ")]),s("div",{staticClass:"nav-item",on:{click:function(e){return t.scrollToSection("invoices")}}},[t._v(" "+t._s(t.$t("billingInvoices"))+" ")]),s("div",{staticClass:"nav-item",on:{click:function(e){return t.scrollToSection("payment")}}},[t._v(" "+t._s(t.$t("billing"))+" ")]),s("div",{staticClass:"nav-item",on:{click:function(e){return t.scrollToSection("changePassword")}}},[t._v(" "+t._s(t.$t("changePassword"))+" ")])])])])]),s("v-col",{staticClass:"col-12 col-sm-8 col-xl-9"},[s("v-container",{staticClass:"d-flex flex-column",attrs:{fluid:""}},[s("response-alert",{attrs:{response:t.formResponse}}),s("v-card",{staticClass:"profile-section mb-10",attrs:{flat:"",id:"personalInfo"}},[s("v-row",[s("p",{staticClass:"profile-title"},[t._v(" "+t._s(t.$t("changePersonalInfo"))+" ")]),s("p",{staticClass:"profile-subtitle"})]),s("v-form",{model:{value:t.formValid,callback:function(e){t.formValid=e},expression:"formValid"}},[s("v-row",[s("v-col",{attrs:{cols:"6"}},[s("label",{staticClass:"profile-label"},[t._v(t._s(t.$t("firstName")))]),s("v-text-field",{attrs:{dense:"",label:t.$t("firstName"),rules:[t.validations.required],type:"text",outlined:"",solo:"",flat:"","hide-details":"","background-color":"white"},model:{value:t.formData.first_name,callback:function(e){t.$set(t.formData,"first_name",e)},expression:"formData.first_name"}})],1),s("v-col",{attrs:{cols:"6"}},[s("label",{staticClass:"profile-label"},[t._v(t._s(t.$t("lastName")))]),s("v-text-field",{attrs:{dense:"",label:t.$t("lastName"),rules:[t.validations.required],type:"text",outlined:"",solo:"",flat:"","hide-details":"","background-color":"white"},model:{value:t.formData.last_name,callback:function(e){t.$set(t.formData,"last_name",e)},expression:"formData.last_name"}})],1)],1),s("v-row",[s("v-col",{attrs:{cols:"6"}},[s("label",{staticClass:"profile-label"},[t._v(t._s(t.$t("email")))]),s("v-text-field",{attrs:{dense:"",disabled:"",type:"text",outlined:"",solo:"",flat:"","hide-details":"","background-color":"white"},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}})],1),s("v-col",{attrs:{cols:"6"}},[s("label",{staticClass:"profile-label"},[t._v(t._s(t.$t("language")))]),s("LanguageDropdown")],1)],1),s("v-row",[s("v-col",{attrs:{cols:"6"}},[s("v-btn",{staticClass:"pl-8 pr-8 font-weight-medium main-accept-btn",attrs:{disabled:!t.formValid,depressed:"",large:""},on:{click:t.handleUpdate}},[t._v(t._s(t.$t("save"))+" ")])],1)],1)],1)],1),s("v-card",{staticClass:"profile-section mb-10",attrs:{flat:"",id:"invoices"}},[s("v-row",[s("p",{staticClass:"profile-title"},[t._v(" "+t._s(t.$t("billingInvoices"))+" ")])]),t._l(t.invoices,(function(e){return s("v-row",{key:e.id,staticClass:"invoice-row py-1"},[s("v-col",[s("div",{staticClass:"invoice-number"},[t._v(" "+t._s(t.$t("numberOfInvoice"))+": "+t._s(e.invoice_number)+" ")]),s("div",{staticClass:"invoice-date"},[t._v(" Date of invoice: "+t._s(t._f("moment")(e.transaction_completed_at,"DD.MM.YYYY / HH:mm"))+" ")])]),s("v-col",{attrs:{cols:"auto d-flex align-center"}},[s("v-img",{staticClass:"hover-pointer",attrs:{src:a("f28e")},on:{click:function(a){return t.$store.dispatch("invoices/downloadInvoice",{id:e.id,number:e.invoice_number})}}})],1)],1)}))],2),s("v-card",{staticClass:"profile-section mb-10",attrs:{flat:"",id:"payment"}},[s("v-row",[s("p",{staticClass:"profile-title"},[t._v(" "+t._s(t.$t("editPaymentMethod"))+" ")])]),s("v-row",{staticClass:"payment-card pa-3"},[s("v-col",[s("div",{staticClass:"card-name"},[t._v("Master card ****3660")]),s("div",{staticClass:"card-expiration"},[t._v("Expires 02/24")])]),s("v-col",{attrs:{cols:"auto"}},[s("v-img",{attrs:{src:a("0960")}})],1)],1),s("div",{staticClass:"mt-7"},[s("v-btn",{attrs:{outlined:"",rounded:"",color:"#0253B3"},on:{click:function(e){return t.toggleModal("AddNewCard")}}},[s("v-icon",{attrs:{left:""}},[t._v("mdi-plus")]),t._v(" "+t._s(t.$t("addNewCard"))+" ")],1)],1)],1),s("v-card",{staticClass:"profile-section mb-10",attrs:{flat:"",id:"changePassword"}},[s("v-row",{staticClass:"mb-0"},[s("p",{staticClass:"profile-title"},[t._v(" "+t._s(t.$t("changePassword"))+" ")])]),s("v-form",{ref:"passwordForm",model:{value:t.passwordFormValid,callback:function(e){t.passwordFormValid=e},expression:"passwordFormValid"}},[s("label",{staticClass:"profile-label"},[t._v(t._s(t.$t("enterNewPassword")))]),s("v-text-field",{attrs:{dense:"",solo:"",type:"password",outlined:"",rules:[t.validations.required,t.validations.min.string(6)],"background-color":"white"},model:{value:t.passwordFormData.new_password,callback:function(e){t.$set(t.passwordFormData,"new_password",e)},expression:"passwordFormData.new_password"}}),s("label",{staticClass:"profile-label"},[t._v(t._s(t.$t("reEnterPassword")))]),s("v-text-field",{attrs:{dense:"",solo:"",type:"password",outlined:"",rules:[t.validations.required],"background-color":"white"},model:{value:t.passwordFormData.new_confirm_password,callback:function(e){t.$set(t.passwordFormData,"new_confirm_password",e)},expression:"passwordFormData.new_confirm_password"}}),s("label",{staticClass:"profile-label"},[t._v(t._s(t.$t("enterOldPassword")))]),s("v-text-field",{attrs:{dense:"",solo:"",type:"password",outlined:"",rules:[t.validations.required],"background-color":"white"},model:{value:t.passwordFormData.current_password,callback:function(e){t.$set(t.passwordFormData,"current_password",e)},expression:"passwordFormData.current_password"}}),s("response-alert",{attrs:{response:t.passwordFormResponse}}),s("v-row",[s("v-col",{attrs:{cols:"6"}},[s("v-btn",{staticClass:"pl-8 pr-8",attrs:{disabled:!t.passwordFormValid,depressed:"",large:"",color:"primary"},on:{click:t.handleChangePassword}},[t._v(t._s(t.$t("changePassword"))+" ")])],1)],1)],1)],1)],1),t.$store.getters["user/userPlan"]?s("UserPlan",{attrs:{"payment-info":!0,"border-plan":!0}}):t._e()],1)],1),s("div",{staticClass:"footer text-center py-4",staticStyle:{"border-top":"1px solid #E3E3E4"}},[s("a",{attrs:{href:"#"}},[t._v("Impressum")]),t._v(" - "),s("a",{attrs:{href:"#"}},[t._v("Datenschutz")]),t._v(" - "),s("a",{attrs:{href:"#"}},[t._v("AGB")])])],1)},i=[],o=a("5530"),n=(a("4de4"),a("2f62")),r=a("286b"),l=a("86d9"),c=a("331d"),d=a("2185"),u={components:{UserPlan:c["a"],Header:r["a"],AddNewCard:l["a"],LanguageDropdown:d["a"]},data:function(){return{formData:{},formValid:!1,formResponse:{},passwordFormData:{},passwordFormValid:!1,passwordFormResponse:{},invoices:[],modals:{AddNewCard:{active:!1,edit:!1,component:l["a"]}},fileActions:{AddNewCard:["edit","delete"]}}},computed:Object(o["a"])({},Object(n["c"])("user",["user"])),created:function(){var t=this;this.fillData(),this.$store.dispatch("invoices/fetchInvoices").then((function(e){t.invoices=e.data.data,t.invoices=t.invoices.filter((function(t){return"complete"==t.status}))}))},methods:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(n["b"])("user",["updateCompany"])),Object(n["b"])("user",["changePassword"])),{},{fillData:function(){var t=this.user;t&&(this.passwordFormData.new_confirm_password="",this.passwordFormData.new_password="",this.passwordFormData.current_password="",this.formData.first_name=t.first_name,this.formData.last_name=t.last_name,this.formData.branche=t.branche)},handleUpdate:function(){var t=this,e=Object.assign({},this.formData);this.formResponse={},this.updateCompany(e).then((function(e){t.formResponse=e.data})).catch((function(e){t.formResponse=e.data}))},handleChangePassword:function(){var t=this,e=Object.assign({},this.passwordFormData);this.passwordFormResponse={},this.changePassword(e).then((function(e){t.passwordFormResponse=e.data,t.$refs.passwordForm.reset(),t.$store.dispatch("auth/logout").then((function(){t.$router.push({name:"Login",query:{changePassword:1}})}))})).catch((function(e){t.passwordFormResponse=e.data}))},scrollToSection:function(t){document.getElementById(t).scrollIntoView({behavior:"smooth",block:"center"})},toggleModal:function(t){this.modals[t].edit=!1,this.modals[t].active=!this.modals[t].active},activateEdit:function(t,e){this.toggleModal(t),this.modals[t].edit=e}})},v=u,h=a("2877"),f=a("6544"),m=a.n(f),p=a("8336"),b=a("b0af"),g=a("62ad"),w=a("a523"),y=a("4bd4"),_=a("132d"),C=a("adda"),x=a("0fd9"),$=a("8654"),k=Object(h["a"])(v,s,i,!1,null,null,null);e["default"]=k.exports;m()(k,{VBtn:p["a"],VCard:b["a"],VCol:g["a"],VContainer:w["a"],VForm:y["a"],VIcon:_["a"],VImg:C["a"],VRow:x["a"],VTextField:$["a"]})},e707:function(t,e,a){"use strict";a("a9e3"),a("caad"),a("2532");var s=a("1abc"),i=a("80d2"),o=a("2b0e");e["a"]=o["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{animationFrame:0,overlay:null}},watch:{hideOverlay:function(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var t=new s["a"]({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();var e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay:function(){var t=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((function(){t.overlay&&(void 0!==t.activeZIndex?t.overlay.zIndex=String(t.activeZIndex-1):t.$el&&(t.overlay.zIndex=Object(i["u"])(t.$el)),t.overlay.value=!0)})),!0},removeOverlay:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&(Object(i["a"])(this.overlay.$el,"transitionend",(function(){t.overlay&&t.overlay.$el&&t.overlay.$el.parentNode&&!t.overlay.value&&!t.isActive&&(t.overlay.$el.parentNode.removeChild(t.overlay.$el),t.overlay.$destroy(),t.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),e&&this.showScroll()},scrollListener:function(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;var e=[i["y"].up,i["y"].pageup],a=[i["y"].down,i["y"].pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!a.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar:function(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;var e=window.getComputedStyle(t);return["auto","scroll"].includes(e.overflowY)&&t.scrollHeight>t.clientHeight},shouldScroll:function(t,e){if(t.hasAttribute("data-app"))return!1;var a=0===t.scrollTop,s=t.scrollTop+t.clientHeight===t.scrollHeight,i=e<0,o=e>0;return!(a||!i)||(!(s||!o)||!(!a&&!s)&&this.shouldScroll(t.parentNode,e))},isInside:function(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath:function(t){var e=t.path||this.composedPath(t),a=t.deltaY;if("keydown"===t.type&&e[0]===document.body){var s=this.$refs.dialog,i=window.getSelection().anchorNode;return!(s&&this.hasScrollbar(s)&&this.isInside(i,s))||!this.shouldScroll(s,a)}for(var o=0;o<e.length;o++){var n=e[o];if(n===document)return!0;if(n===document.documentElement)return!0;if(n===this.$refs.content)return!0;if(this.hasScrollbar(n))return!this.shouldScroll(n,a)}return!0},composedPath:function(t){if(t.composedPath)return t.composedPath();var e=[],a=t.target;while(a){if(e.push(a),"HTML"===a.tagName)return e.push(document),e.push(window),e;a=a.parentElement}return e},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(i["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})},f28e:function(t,e,a){t.exports=a.p+"img/download.5bed3128.svg"},f7fe:function(t,e,a){(function(e){var a="Expected a function",s=NaN,i="[object Symbol]",o=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,d="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,v=d||u||Function("return this")(),h=Object.prototype,f=h.toString,m=Math.max,p=Math.min,b=function(){return v.Date.now()};function g(t,e,s){var i,o,n,r,l,c,d=0,u=!1,v=!1,h=!0;if("function"!=typeof t)throw new TypeError(a);function f(e){var a=i,s=o;return i=o=void 0,d=e,r=t.apply(s,a),r}function g(t){return d=t,l=setTimeout(x,e),u?f(t):r}function y(t){var a=t-c,s=t-d,i=e-a;return v?p(i,n-s):i}function _(t){var a=t-c,s=t-d;return void 0===c||a>=e||a<0||v&&s>=n}function x(){var t=b();if(_(t))return $(t);l=setTimeout(x,y(t))}function $(t){return l=void 0,h&&i?f(t):(i=o=void 0,r)}function k(){void 0!==l&&clearTimeout(l),d=0,i=c=o=l=void 0}function O(){return void 0===l?r:$(b())}function S(){var t=b(),a=_(t);if(i=arguments,o=this,c=t,a){if(void 0===l)return g(c);if(v)return l=setTimeout(x,e),f(c)}return void 0===l&&(l=setTimeout(x,e)),r}return e=C(e)||0,w(s)&&(u=!!s.leading,v="maxWait"in s,n=v?m(C(s.maxWait)||0,e):n,h="trailing"in s?!!s.trailing:h),S.cancel=k,S.flush=O,S}function w(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){return!!t&&"object"==typeof t}function _(t){return"symbol"==typeof t||y(t)&&f.call(t)==i}function C(t){if("number"==typeof t)return t;if(_(t))return s;if(w(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=w(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var a=r.test(t);return a||l.test(t)?c(t.slice(2),a?2:8):n.test(t)?s:+t}t.exports=g}).call(this,a("c8ba"))}}]);
//# sourceMappingURL=Settings.e8be81fc.js.map