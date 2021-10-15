(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46beb41d"],{"03e5":function(t,e,a){},"169a":function(t,e,a){"use strict";var i=a("5530"),s=a("2909"),n=a("ade3"),o=(a("a9e3"),a("498a"),a("caad"),a("2532"),a("7db0"),a("368e"),a("480e")),r=a("4ad4"),l=a("b848"),c=a("75eb"),d=a("e707"),u=a("e4d3"),v=a("21be"),h=a("f2e7"),f=a("a293"),p=a("58df"),m=a("d9bd"),b=a("80d2"),g=Object(p["a"])(r["a"],l["a"],c["a"],d["a"],u["a"],v["a"],h["a"]);e["a"]=g.extend({name:"v-dialog",directives:{ClickOutside:f["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(n["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(n["a"])(t,"v-dialog--active",this.isActive),Object(n["a"])(t,"v-dialog--persistent",this.persistent),Object(n["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(n["a"])(t,"v-dialog--scrollable",this.scrollable),Object(n["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(m["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):d["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.previousActiveElement=document.activeElement,t.$refs.content.focus(),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===b["y"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var a=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),i=Object(s["a"])(a).find((function(t){return!t.hasAttribute("disabled")}));i&&i.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(o["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(i["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(i["a"])(Object(i["a"])({},t.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(b["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(b["g"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"1abc":function(t,e,a){"use strict";var i=a("a797");e["a"]=i["a"]},"269a":function(t,e){t.exports=function(t,e){var a="function"===typeof t.exports?t.exports.extendOptions:t.options;for(var i in"function"===typeof t.exports&&(a.directives=t.exports.options.directives),a.directives=a.directives||{},e)a.directives[i]=a.directives[i]||e[i]}},"2eab":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"invoice-listing",class:{"limit-height":t.invoices.length>4}},[t.invoices.length?t._e():i("div",[i("i",[t._v(t._s(t.$t("noDataAvailable")))])]),t._l(t.invoices,(function(e){return i("v-row",{key:e.id,staticClass:"invoice-row py-1"},[i("v-col",[i("div",{staticClass:"invoice-number"},[t._v(" "+t._s(t.$t("numberOfBill"))+": "+t._s(e.invoice_number)+" ")]),i("div",{staticClass:"invoice-date"},[t._v(" "+t._s(t.$t("dateOfInvoice"))+": "+t._s(t._f("moment")(e.transaction_completed_at,"DD.MM.YYYY / HH:mm"))+" ")])]),i("v-col",{attrs:{cols:"auto d-flex align-center"}},[t.downloading==e.id?i("v-progress-circular",{attrs:{indeterminate:"",size:"25",color:"primary"}}):i("v-img",{staticClass:"hover-pointer",attrs:{src:a("f28e")},on:{click:function(a){return t.downloadInvoice(e)}}})],1)],1)}))],2)},s=[],n=(a("d3b7"),{props:{invoices:{type:Array,required:!0}},data:function(){return{downloading:!1}},methods:{downloadInvoice:function(t){var e=this;this.downloading=t.id,this.$store.dispatch("invoices/downloadInvoice",{id:t.id,number:t.invoice_number}).finally((function(){return e.downloading=!1}))}}}),o=n,r=(a("eb1a"),a("2877")),l=a("6544"),c=a.n(l),d=a("62ad"),u=a("adda"),v=a("490a"),h=a("0fd9"),f=Object(r["a"])(o,i,s,!1,null,null,null);e["a"]=f.exports;c()(f,{VCol:d["a"],VImg:u["a"],VProgressCircular:v["a"],VRow:h["a"]})},"331d":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"user-plan",attrs:{flat:""}},[a("h2",[t._v(t._s(t.$t("subscriptionPlan")))]),a("p",[t._v(t._s(t.$t("yourCurrentPlanDescription")))]),t.userPlan&&t.userPlan[0]?a("UserPlanDescription",{attrs:{plan:t.userPlan[0],"border-plan":t.borderPlan,"payment-info":t.paymentInfo,"payment-action":t.paymentAction}}):[a("div",[t._v(" "+t._s(t.$t("noActivePlan"))+" ")]),"EmployerPackagesPricing"!=t.$route.name?a("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"EmployerPackagesPricing"}}},[t._v(" "+t._s(t.$t("upgradeAccount"))+" ")]):t._e()]],2)},s=[],n=a("5530"),o=a("2f62"),r=a("cf81"),l={name:"UserPlan",components:{UserPlanDescription:r["a"]},props:{paymentInfo:{type:Boolean},paymentAction:{type:Boolean,default:!1},borderPlan:{type:Boolean,default:!1}},computed:Object(n["a"])({},Object(o["c"])({userPlan:"user/userPlan"}))},c=l,d=a("2877"),u=a("6544"),v=a.n(u),h=a("b0af"),f=Object(d["a"])(c,i,s,!1,null,"d9c4ea54",null);e["a"]=f.exports;v()(f,{VCard:h["a"]})},"368e":function(t,e,a){},"3c93":function(t,e,a){},"4bd4":function(t,e,a){"use strict";var i=a("5530"),s=(a("caad"),a("2532"),a("07ac"),a("4de4"),a("159b"),a("7db0"),a("58df")),n=a("7e2b"),o=a("3206");e["a"]=Object(s["a"])(n["a"],Object(o["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,a=function(t){return t.$watch("hasError",(function(a){e.$set(e.errorBag,t._uid,a)}),{immediate:!0})},i={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",(function(s){s&&(e.errorBag.hasOwnProperty(t._uid)||(i.valid=a(t)))})):i.valid=a(t),i},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var a=this.watchers.find((function(t){return t._uid===e._uid}));a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(i["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"51a3":function(t,e,a){},"615b":function(t,e,a){},"6f0b":function(t,e,a){},"86d9":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{staticClass:"dialog",attrs:{persistent:"",width:"750px","max-width":"750px","overlay-color":"#0253B3","overlay-opacity":"0.3"},on:{"click:outside":function(e){return t.close("abort")}},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[a("v-card",{staticClass:"rounded-lg wrap upgrade-dialog",attrs:{flat:""}},[a("div",{staticClass:"modal-title"},[t._v(" Add New Card ")]),a("div",{staticClass:"card-info"},[a("v-col",{attrs:{cols:"6"}},[a("label",{staticClass:"profile-label"},[t._v(" "+t._s(t.$t("creditCardNumber"))+" ")]),a("v-text-field",{attrs:{dense:"",placeholder:"XXXX-XXXX-XXXX-XXXX",type:"text",outlined:"",solo:"",flat:"","hide-details":"","background-color":"white"}})],1),a("v-col",{attrs:{cols:"6"}},[a("label",{staticClass:"profile-label"},[t._v(" "+t._s(t.$t("cardHolder"))+" ")]),a("v-text-field",{attrs:{dense:"",placeholder:"Max Mustermann",type:"text",outlined:"",solo:"",flat:"","hide-details":"","background-color":"white"}})],1)],1),a("div",{staticClass:"card-info"},[a("v-col",{attrs:{cols:"3"}},[a("label",{staticClass:"profile-label"},[t._v(" "+t._s(t.$t("expirationDate"))+" ")]),a("v-text-field",{attrs:{dense:"",placeholder:t.$t("monthYear"),type:"text",outlined:"",solo:"",flat:"","hide-details":"","background-color":"white"}})],1),a("v-col",{attrs:{cols:"3"}},[a("label",{staticClass:"profile-label"},[t._v(" "+t._s(t.$t("cvv"))+" ")]),a("v-text-field",{attrs:{dense:"",placeholder:"***",type:"text",outlined:"",solo:"",flat:"","hide-details":"","background-color":"white"}})],1)],1),a("div",{staticClass:"buttons"},[a("v-btn",{staticClass:"mt-16 font-weight-medium upgrade-btn",staticStyle:{"margin-right":"20px"},attrs:{height:"56"},on:{click:t.close}},[t._v(" "+t._s(t.$t("cancel"))+" ")]),a("v-btn",{staticClass:"mt-16 font-weight-medium upgrade-btn",attrs:{color:"primary",height:"56",width:"178"},on:{click:t.save}},[t._v(" "+t._s(t.$t("next"))+" ")])],1)])],1)},s=[],n=a("4360"),o={name:"AddNewCard",props:{active:{type:Boolean,default:!1},type:{type:String,default:"ok"},edit:{type:[Object,Boolean]}},data:function(){return{}},created:function(){this.edit&&this.populate()},methods:{close:function(t){this.$emit("close",t)},save:function(){this.edit?n["a"].dispatch("user/updateUser",{id:this.edit.id,payload:this.form}):console.log(),this.$emit("close",1)},populate:function(){}}},r=o,l=(a("9a95"),a("2877")),c=a("6544"),d=a.n(c),u=a("8336"),v=a("b0af"),h=a("62ad"),f=a("169a"),p=a("8654"),m=Object(l["a"])(r,i,s,!1,null,"67ad74f6",null);e["a"]=m.exports;d()(m,{VBtn:u["a"],VCard:v["a"],VCol:h["a"],VDialog:f["a"],VTextField:p["a"]})},"9a95":function(t,e,a){"use strict";a("6f0b")},a797:function(t,e,a){"use strict";var i=a("5530"),s=(a("a9e3"),a("3c93"),a("a9ad")),n=a("7560"),o=a("f2e7"),r=a("58df");e["a"]=Object(r["a"])(s["a"],n["a"],o["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes:function(){return Object(i["a"])({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},e)}})},b0af:function(t,e,a){"use strict";var i=a("5530"),s=(a("a9e3"),a("0481"),a("615b"),a("10d2")),n=a("297c"),o=a("1c87"),r=a("58df");e["a"]=Object(r["a"])(n["a"],o["a"],s["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({"v-card":!0},o["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},s["a"].options.computed.classes.call(this))},styles:function(){var t=Object(i["a"])({},s["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=n["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),a=e.tag,i=e.data;return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),t(a,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}})},b4fc:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"employer-profile"},[t.modals.AddNewCard.active?a("AddNewCard",{attrs:{active:t.modals.AddNewCard.active,edit:t.modals.AddNewCard.edit},on:{close:function(e){return t.toggleModal("AddNewCard")}}}):t._e(),a("v-row",{staticClass:"main mb-3"},[a("v-col",{attrs:{cols:"12",md:"4",lg:"3"}},[a("v-card",{staticClass:"sidebar-nav",attrs:{flat:"",tag:"nav"}},[a("div",{staticClass:"settings-title"},[t._v(" "+t._s(t.$t("profileSettings"))+" ")]),a("div",{staticClass:"submenu"},[a("div",{staticClass:"nav-item",on:{click:function(e){return t.scrollToSection("personalInfo")}}},[t._v(" "+t._s(t.$t("personalInformation"))+" "),a("v-icon",[t._v(" mdi-chevron-right ")])],1),a("div",{staticClass:"nav-item",on:{click:function(e){return t.scrollToSection("invoices")}}},[t._v(" "+t._s(t.$t("billingInvoices"))+" "),a("v-icon",[t._v(" mdi-chevron-right ")])],1),a("div",{staticClass:"nav-item",on:{click:function(e){return t.scrollToSection("changePassword")}}},[t._v(" "+t._s(t.$t("changePassword"))+" "),a("v-icon",[t._v(" mdi-chevron-right ")])],1)])])],1),a("v-col",{attrs:{cols:"col"}},[a("response-alert",{attrs:{response:t.formResponse}}),a("v-card",{staticClass:"profile-section mb-10",attrs:{flat:"",id:"personalInfo"}},[a("p",{staticClass:"profile-title"},[t._v(" "+t._s(t.$t("changePersonalInfo"))+" ")]),a("p",{staticClass:"profile-subtitle"}),a("v-form",{model:{value:t.formValid,callback:function(e){t.formValid=e},expression:"formValid"}},[a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("label",{staticClass:"profile-label"},[t._v(t._s(t.$t("firstName")))]),a("v-text-field",{attrs:{dense:"",label:t.$t("firstName"),rules:[t.validations.required],type:"text",outlined:"",solo:"",flat:"","hide-details":"","background-color":"white"},model:{value:t.formData.first_name,callback:function(e){t.$set(t.formData,"first_name",e)},expression:"formData.first_name"}})],1),a("v-col",{attrs:{cols:"6"}},[a("label",{staticClass:"profile-label"},[t._v(t._s(t.$t("lastName")))]),a("v-text-field",{attrs:{dense:"",label:t.$t("lastName"),rules:[t.validations.required],type:"text",outlined:"",solo:"",flat:"","hide-details":"","background-color":"white"},model:{value:t.formData.last_name,callback:function(e){t.$set(t.formData,"last_name",e)},expression:"formData.last_name"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("label",{staticClass:"profile-label"},[t._v(t._s(t.$t("email")))]),a("v-text-field",{attrs:{dense:"",disabled:"",type:"text",outlined:"",solo:"",flat:"","hide-details":"","background-color":"white"},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}})],1),a("v-col",{attrs:{cols:"6"}},[a("label",{staticClass:"profile-label"},[t._v(t._s(t.$t("language")))]),a("LanguageDropdown")],1)],1),a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("v-btn",{staticClass:"px-8",attrs:{disabled:!t.formValid,depressed:"",large:"",color:"primary"},on:{click:t.handleUpdate}},[t._v(t._s(t.$t("save"))+" ")])],1)],1)],1)],1),a("v-card",{staticClass:"profile-section mb-10",attrs:{flat:"",id:"invoices"}},[a("p",{staticClass:"profile-title"},[t._v(" "+t._s(t.$t("billingInvoices"))+" ")]),a("InvoicesListing",{attrs:{invoices:t.invoices||[]}})],1),a("v-card",{staticClass:"profile-section mb-10",attrs:{flat:"",id:"changePassword"}},[a("p",{staticClass:"profile-title"},[t._v(" "+t._s(t.$t("changePassword"))+" ")]),a("v-form",{ref:"passwordForm",model:{value:t.passwordFormValid,callback:function(e){t.passwordFormValid=e},expression:"passwordFormValid"}},[a("label",{staticClass:"profile-label"},[t._v(t._s(t.$t("enterNewPassword")))]),a("v-text-field",{attrs:{dense:"",solo:"",type:"password",outlined:"",rules:[t.validations.required,t.validations.password],"background-color":"white"},model:{value:t.passwordFormData.new_password,callback:function(e){t.$set(t.passwordFormData,"new_password",e)},expression:"passwordFormData.new_password"}}),a("label",{staticClass:"profile-label"},[t._v(t._s(t.$t("reEnterPassword")))]),a("v-text-field",{attrs:{dense:"",solo:"",type:"password",outlined:"",rules:[t.validations.required],"background-color":"white"},model:{value:t.passwordFormData.new_confirm_password,callback:function(e){t.$set(t.passwordFormData,"new_confirm_password",e)},expression:"passwordFormData.new_confirm_password"}}),a("label",{staticClass:"profile-label"},[t._v(t._s(t.$t("enterOldPassword")))]),a("v-text-field",{attrs:{dense:"",solo:"",type:"password",outlined:"",rules:[t.validations.required],"background-color":"white"},model:{value:t.passwordFormData.current_password,callback:function(e){t.$set(t.passwordFormData,"current_password",e)},expression:"passwordFormData.current_password"}}),a("response-alert",{attrs:{response:t.passwordFormResponse}}),a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("v-btn",{staticClass:"pl-8 pr-8",attrs:{disabled:!t.passwordFormValid,depressed:"",large:"",color:"primary"},on:{click:t.handleChangePassword}},[t._v(t._s(t.$t("changePassword"))+" ")])],1)],1)],1)],1),a("response-alert",{attrs:{response:t.formResponse}}),a("div",{staticClass:"text-right mb-10"},[a("v-btn",{staticClass:"px-8",attrs:{disabled:!t.formValid,depressed:"",large:"",color:"primary"},on:{click:t.handleUpdate}},[t._v(t._s(t.$t("save"))+" ")])],1),t.$store.getters["user/userPlan"]?a("UserPlan",{attrs:{"payment-info":!0,"border-plan":!0}}):t._e()],1)],1),t._m(0)],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer text-center py-4",staticStyle:{"border-top":"1px solid #E3E3E4"}},[a("a",{attrs:{href:"#"}},[t._v("Impressum")]),a("a",{attrs:{href:"#"}},[t._v("Datenschutz")]),a("a",{attrs:{href:"#"}},[t._v("AGB")])])}],n=a("5530"),o=(a("4de4"),a("2f62")),r=a("86d9"),l=a("331d"),c=a("2185"),d=a("2eab"),u={components:{UserPlan:l["a"],AddNewCard:r["a"],LanguageDropdown:c["a"],InvoicesListing:d["a"]},data:function(){return{formData:{},formValid:!1,formResponse:{},passwordFormData:{},passwordFormValid:!1,passwordFormResponse:{},invoices:[],modals:{AddNewCard:{active:!1,edit:!1,component:r["a"]}},fileActions:{AddNewCard:["edit","delete"]}}},computed:Object(n["a"])({},Object(o["c"])("user",["user"])),created:function(){var t=this;this.fillData(),this.$store.dispatch("invoices/fetchInvoices").then((function(e){t.invoices=e.data.data,t.invoices=t.invoices.filter((function(t){return"complete"==t.status}))}))},methods:Object(n["a"])(Object(n["a"])(Object(n["a"])({},Object(o["b"])("user",["updateCompany"])),Object(o["b"])("user",["changePassword"])),{},{fillData:function(){var t=this.user;t&&(this.passwordFormData.new_confirm_password="",this.passwordFormData.new_password="",this.passwordFormData.current_password="",this.formData.first_name=t.first_name,this.formData.last_name=t.last_name,this.formData.branche=t.branche)},handleUpdate:function(){var t=this,e=Object.assign({},this.formData);this.formResponse={},this.updateCompany(e).then((function(e){t.formResponse=e.data})).catch((function(e){t.formResponse=e.data}))},handleChangePassword:function(){var t=this,e=Object.assign({},this.passwordFormData);this.passwordFormResponse={},this.changePassword(e).then((function(e){t.passwordFormResponse=e.data,t.$refs.passwordForm.reset(),t.$store.dispatch("auth/logout").then((function(){t.$router.push({name:"Login",query:{changePassword:1}})}))})).catch((function(e){t.passwordFormResponse=e.data}))},scrollToSection:function(t){document.getElementById(t).scrollIntoView({behavior:"smooth",block:"center"})},toggleModal:function(t){this.modals[t].edit=!1,this.modals[t].active=!this.modals[t].active},activateEdit:function(t,e){this.toggleModal(t),this.modals[t].edit=e}})},v=u,h=(a("fcab"),a("2877")),f=a("6544"),p=a.n(f),m=a("8336"),b=a("b0af"),g=a("62ad"),y=a("4bd4"),w=a("132d"),_=a("0fd9"),C=a("8654"),$=Object(h["a"])(v,i,s,!1,null,null,null);e["default"]=$.exports;p()($,{VBtn:m["a"],VCard:b["a"],VCol:g["a"],VForm:y["a"],VIcon:w["a"],VRow:_["a"],VTextField:C["a"]})},be98:function(t,e,a){},cf81:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"plan-description",class:{"border-plan":t.borderPlan}},[a("h3",[t._v(t._s(t.plan.name))]),a("div",[t._v(" "+t._s(t.plan.price)+"€ / "+t._s(t.plan.days_valid)+" "+t._s(t.$t("daysValid"))+" ")]),a("div",[t._v(" "+t._s(t.$t("renewsOn"))+" "+t._s(t._f("moment")(t.plan.start_timestamp,"DD MMM, YYYY"))+" ")]),a("div",[t._v(" "+t._s(t.$t("validUntil"))+" "+t._s(t._f("moment")(t.plan.end_timestamp,"DD MMM, YYYY"))+" ")]),t.paymentInfo||t.paymentAction?a("div",{staticClass:"payment-info mt-6 pt-4"},[t.paymentInfo&&"EmployerPackagesPricing"!==t.$route.name?a("span",{staticClass:"carten-abenden",on:{click:function(e){return t.$router.push({name:"EmployerPackagesPricing"})}}},[t._v(" "+t._s(t.$t("changePackage"))+" ")]):t._e(),t.plan.renewal?a("v-dialog",{staticClass:"payment-action",attrs:{width:"500","overlay-color":"#0253B3","overlay-opacity":"0.3"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,s=e.attrs;return[a("v-btn",t._g(t._b({directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],staticClass:"font-weight-medium main-text",attrs:{text:"",plain:"",color:"inherit"}},"v-btn",s,!1),i),[t._v(" "+t._s(t.$t("cancelSubscription"))+" ")])]}}],null,!1,1271017619),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("h1",{staticClass:"mb-4 text-center",staticStyle:{"font-size":"28px"}},[t._v(" "+t._s(t.$t("areYouSure"))+" ")]),a("v-form",{ref:"form",attrs:{action:"#"},on:{submit:function(e){return e.preventDefault(),t.submit(e)}},model:{value:t.isValid,callback:function(e){t.isValid=e},expression:"isValid"}},[a("p",{staticClass:"text-center"},[t._v(" "+t._s(t.$t("areYouSureCancelSubscription"))+" ")]),a("ResponseAlert",{attrs:{response:t.formResponse}}),a("div",{staticClass:"text-center mt-3"},[a("v-btn",{staticClass:"font-weight-medium ",attrs:{height:"48"},on:{click:function(e){t.dialog=!1,t.$refs.form.reset()}}},[t._v(" "+t._s(t.$t("cancelOption"))+" ")]),a("v-btn",{staticClass:"ml-3 font-weight-medium ",attrs:{type:"submit",color:"primary",height:"48",disabled:!t.isValid}},[t._v(" "+t._s(t.$t("confirmOption"))+" ")])],1)],1)],1)],1):t._e()],1):t._e()])},s=[],n={name:"UserPlanDescription",props:{paymentInfo:{type:Boolean},paymentAction:{type:Boolean,default:!1},borderPlan:{type:Boolean,default:!1},plan:{type:Object,required:!0}},data:function(){return{dialog:!1,isValid:!1,formResponse:{}}},methods:{submit:function(){this.$store.dispatch("user/cancelSubscription",this.plan.id),this.dialog=!1}}},o=n,r=(a("d7ea"),a("2877")),l=a("6544"),c=a.n(l),d=a("8336"),u=a("b0af"),v=a("169a"),h=a("4bd4"),f=a("269a"),p=a.n(f),m=a("5607"),b=Object(r["a"])(o,i,s,!1,null,null,null);e["a"]=b.exports;c()(b,{VBtn:d["a"],VCard:u["a"],VDialog:v["a"],VForm:h["a"]}),p()(b,{Ripple:m["a"]})},d7ea:function(t,e,a){"use strict";a("03e5")},e707:function(t,e,a){"use strict";a("a9e3"),a("caad"),a("2532");var i=a("1abc"),s=a("80d2"),n=a("2b0e");e["a"]=n["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{animationFrame:0,overlay:null}},watch:{hideOverlay:function(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var t=new i["a"]({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();var e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay:function(){var t=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((function(){t.overlay&&(void 0!==t.activeZIndex?t.overlay.zIndex=String(t.activeZIndex-1):t.$el&&(t.overlay.zIndex=Object(s["u"])(t.$el)),t.overlay.value=!0)})),!0},removeOverlay:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&(Object(s["a"])(this.overlay.$el,"transitionend",(function(){t.overlay&&t.overlay.$el&&t.overlay.$el.parentNode&&!t.overlay.value&&!t.isActive&&(t.overlay.$el.parentNode.removeChild(t.overlay.$el),t.overlay.$destroy(),t.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),e&&this.showScroll()},scrollListener:function(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;var e=[s["y"].up,s["y"].pageup],a=[s["y"].down,s["y"].pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!a.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar:function(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;var e=window.getComputedStyle(t);return["auto","scroll"].includes(e.overflowY)&&t.scrollHeight>t.clientHeight},shouldScroll:function(t,e){if(t.hasAttribute("data-app"))return!1;var a=0===t.scrollTop,i=t.scrollTop+t.clientHeight===t.scrollHeight,s=e<0,n=e>0;return!(a||!s)||(!(i||!n)||!(!a&&!i)&&this.shouldScroll(t.parentNode,e))},isInside:function(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath:function(t){var e=t.path||this.composedPath(t),a=t.deltaY;if("keydown"===t.type&&e[0]===document.body){var i=this.$refs.dialog,s=window.getSelection().anchorNode;return!(i&&this.hasScrollbar(i)&&this.isInside(s,i))||!this.shouldScroll(i,a)}for(var n=0;n<e.length;n++){var o=e[n];if(o===document)return!0;if(o===document.documentElement)return!0;if(o===this.$refs.content)return!0;if(this.hasScrollbar(o))return!this.shouldScroll(o,a)}return!0},composedPath:function(t){if(t.composedPath)return t.composedPath();var e=[],a=t.target;while(a){if(e.push(a),"HTML"===a.tagName)return e.push(document),e.push(window),e;a=a.parentElement}return e},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(s["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})},eb1a:function(t,e,a){"use strict";a("51a3")},f28e:function(t,e,a){t.exports=a.p+"img/download.58820453.svg"},fcab:function(t,e,a){"use strict";a("be98")}}]);
//# sourceMappingURL=chunk-46beb41d.85360724.js.map