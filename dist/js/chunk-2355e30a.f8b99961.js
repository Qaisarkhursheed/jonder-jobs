(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2355e30a"],{"169a":function(t,e,a){"use strict";var s=a("5530"),i=a("2909"),n=a("ade3"),o=(a("a9e3"),a("498a"),a("caad"),a("2532"),a("7db0"),a("368e"),a("480e")),l=a("4ad4"),r=a("b848"),c=a("75eb"),u=a("e707"),d=a("e4d3"),h=a("21be"),v=a("f2e7"),m=a("a293"),f=a("58df"),p=a("d9bd"),b=a("80d2"),y=Object(f["a"])(l["a"],r["a"],c["a"],u["a"],d["a"],h["a"],v["a"]);e["a"]=y.extend({name:"v-dialog",directives:{ClickOutside:m["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(n["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(n["a"])(t,"v-dialog--active",this.isActive),Object(n["a"])(t,"v-dialog--persistent",this.persistent),Object(n["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(n["a"])(t,"v-dialog--scrollable",this.scrollable),Object(n["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(p["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):u["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.previousActiveElement=document.activeElement,t.$refs.content.focus(),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===b["y"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var a=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),s=Object(i["a"])(a).find((function(t){return!t.hasAttribute("disabled")}));s&&s.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(o["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(s["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(s["a"])(Object(s["a"])({},t.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(b["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(b["g"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"1abc":function(t,e,a){"use strict";var s=a("a797");e["a"]=s["a"]},"20c5":function(t,e,a){"use strict";a("866d")},"2bfd":function(t,e,a){},"368e":function(t,e,a){},"3c93":function(t,e,a){},"59ce":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"public-profile"},[a("v-row",{staticClass:"page-heading"},[a("v-col",{attrs:{cols:"col"}},[a("div",{staticClass:"title"},[t._v(t._s(t.$t("publicCompanyProfile")))]),a("div",{staticClass:"subtitle"},[t._v(" "+t._s(t.$t("publicProfileSub"))+" ")])]),a("v-col",{attrs:{cols:"auto"}},[a("v-btn",{attrs:{color:"primary",height:"48"},on:{click:t.viewAsTab}},[t.viewAs?[t._v(" "+t._s(t.$t("backToEdit"))+" ")]:[t._v(" "+t._s(t.$t("viewAsJobseeker"))+" ")]],2)],1)],1),a("v-row",[a("v-col",{attrs:{cols:"auto"}},[a("v-card",{staticClass:"public-profile-sidebar pa-0",attrs:{flat:""}},[a("v-tabs",{attrs:{"slider-color":"#fff",vertical:""},model:{value:t.tabs.active,callback:function(e){t.$set(t.tabs,"active",e)},expression:"tabs.active"}},t._l(t.tabs.options,(function(e){return a("v-tab",{key:e,staticClass:"pl-1 py-5",staticStyle:{height:"unset"},attrs:{disabled:t.viewAs,"slider-color":"#0253B3"}},[a("span",{staticClass:"pl-3"},[t._v(t._s(t.$t(e)))]),a("span",{staticClass:"arrow"},[t._v(">")])])})),1)],1)],1),a("v-col",{attrs:{cols:"col"}},[a("v-card",{attrs:{flat:""}},[a("v-tabs-items",{model:{value:t.tabs.active,callback:function(e){t.$set(t.tabs,"active",e)},expression:"tabs.active"}},t._l(t.tabs.options,(function(e){return a("v-tab-item",{key:e.key,attrs:{transition:!1}},[t.viewAs?[a("PublicProfileViewAs",{attrs:{user:t.user}})]:[a("keep-alive",[a(t.tabComponents[e],{tag:"component",attrs:{user:t.user},on:{update:t.handleUpdate}})],1)]],2)})),1),a("ResponseAlert",{staticClass:"mt-5 mb-0",attrs:{response:t.formResponse}})],1)],1)],1)],1)},i=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"public-profile-general"},[a("v-form",{model:{value:t.formValid,callback:function(e){t.formValid=e},expression:"formValid"}},[a("AvatarInput",{attrs:{size:"120","with-icon":"",user:t.user},model:{value:t.formData.profile_img,callback:function(e){t.$set(t.formData,"profile_img",e)},expression:"formData.profile_img"}}),a("div",{staticClass:"section mt-5"},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("companyName"))+" ")]),a("v-text-field",{attrs:{rules:[t.validations.required],outlined:"",solo:""},model:{value:t.formData.company,callback:function(e){t.$set(t.formData,"company",e)},expression:"formData.company"}})],1),a("div",{staticClass:"section"},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("aboutCompany"))+" ")]),a("v-textarea",{attrs:{rules:[t.validations.required,t.validations.max.string(250)],outlined:"",counter:"250",maxlength:"250"},model:{value:t.formData.about_company,callback:function(e){t.$set(t.formData,"about_company",e)},expression:"formData.about_company"}})],1)],1),a("div",{staticClass:"text-right"},[a("v-btn",{attrs:{color:"primary",disabled:!t.formValid,height:"55"},on:{click:t.save}},[t._v(" "+t._s(t.$t("saveChanges"))+" ")])],1)],1)},o=[],l=a("2db1"),r={components:{AvatarInput:l["a"]},props:{user:{type:Object,required:!0}},data:function(){return{formValid:!1,formData:{}}},created:function(){this.populateData()},methods:{populateData:function(){this.formData.profile_img=this.user.profile_img,this.formData.company=this.user.company,this.formData.about_company=this.user.about_company},save:function(){var t={company:this.formData.company,about_company:this.formData.about_company};this.formData.profile_img instanceof File&&(t["profile_img"]=this.formData.profile_img),this.$emit("update",t)}}},c=r,u=a("2877"),d=a("6544"),h=a.n(d),v=a("8336"),m=a("4bd4"),f=a("8654"),p=a("a844"),b=Object(u["a"])(c,n,o,!1,null,"1afc6e57",null),y=b.exports;h()(b,{VBtn:v["a"],VForm:m["a"],VTextField:f["a"],VTextarea:p["a"]});var g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"public-profile-details"},[a("v-form",{model:{value:t.formValid,callback:function(e){t.formValid=e},expression:"formValid"}},[a("div",{staticClass:"section"},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("branch"))+" ")]),a("v-autocomplete",{attrs:{attach:!0,items:t.types.JOB_BRANCHE,rules:[t.validations.required],"item-value":"id","item-text":t.$i18n.locale,"cache-items":"",outlined:"","append-icon":"mdi-chevron-down"},model:{value:t.formData.branche,callback:function(e){t.$set(t.formData,"branche",e)},expression:"formData.branche"}})],1),a("div",{staticClass:"section"},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("numberOfEmployees"))+" ")]),a("v-select",{attrs:{attach:!0,items:t.types.EMPLOYEE_NUMBER,"item-value":"id","item-text":t.$i18n.locale,rules:[t.validations.required],outlined:"","append-icon":"mdi-chevron-down"},model:{value:t.formData.company_employees,callback:function(e){t.$set(t.formData,"company_employees",e)},expression:"formData.company_employees"}})],1),a("div",{staticClass:"section"},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("foundingYear"))+" ")]),a("v-text-field",{attrs:{rules:[t.validations.required],type:"number",outlined:"",solo:""},model:{value:t.formData.establishment_date,callback:function(e){t.$set(t.formData,"establishment_date",e)},expression:"formData.establishment_date"}})],1)]),a("div",{staticClass:"text-right"},[a("v-btn",{attrs:{color:"primary",disabled:!t.formValid,height:"55"},on:{click:t.save}},[t._v(" "+t._s(t.$t("saveChanges"))+" ")])],1)],1)},_=[],C=a("5530"),w=a("797d"),x={props:{user:{type:Object,required:!0}},data:function(){return{formValid:!1,formData:{}}},computed:{types:function(){return w["a"]}},created:function(){this.populateData()},methods:{populateData:function(){this.formData.branche=parseInt(this.user.branche),this.formData.company_employees=parseInt(this.user.company_employees),this.formData.establishment_date=this.user.establishment_date},save:function(){this.$emit("update",Object(C["a"])({},this.formData))}}},I=x,$=a("c6a6"),S=a("b974"),k=Object(u["a"])(I,g,_,!1,null,"7364c4f6",null),O=k.exports;h()(k,{VAutocomplete:$["a"],VBtn:v["a"],VForm:m["a"],VSelect:S["a"],VTextField:f["a"]});var D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"public-profile-contact"},[a("v-form",{model:{value:t.formValid,callback:function(e){t.formValid=e},expression:"formValid"}},[a("div",{staticClass:"section"},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("emailAddress"))+" ")]),a("v-text-field",{attrs:{rules:[t.validations.required],type:"email",outlined:"",solo:""},model:{value:t.form.company_email,callback:function(e){t.$set(t.form,"company_email",e)},expression:"form.company_email"}})],1),a("div",{staticClass:"section"},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("phone"))+" ")]),a("v-text-field",{attrs:{rules:[t.validations.required,t.validations.phone],outlined:"",solo:""},model:{value:t.form.company_phone,callback:function(e){t.$set(t.form,"company_phone",e)},expression:"form.company_phone"}})],1),a("div",{staticClass:"section"},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("cityAndAddress"))+" ")]),a("GooglePlacesInput",{attrs:{types:["address"],rules:[t.validations.required]},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}})],1),a("div",{staticClass:"section"},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("webUrl"))+" ")]),a("v-text-field",{attrs:{outlined:"",solo:""},model:{value:t.form.web_url,callback:function(e){t.$set(t.form,"web_url",e)},expression:"form.web_url"}})],1),a("div",{staticClass:"social-links mb-3"},[t._v(" "+t._s(t.$t("socialLinks"))+" ")]),t._l(t.social,(function(e,s){return a("div",{key:s,staticClass:"section mb-4"},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(e)+" ")]),a("v-text-field",{attrs:{outlined:"","hide-details":"",solo:""},model:{value:t.form[e],callback:function(a){t.$set(t.form,e,a)},expression:"form[item]"}})],1)}))],2),a("div",{staticClass:"text-right"},[a("v-btn",{attrs:{color:"primary",height:"55",disabled:!t.formValid},on:{click:t.save}},[t._v(" "+t._s(t.$t("saveChanges"))+" ")])],1)],1)},A=[],E=a("2ef0"),V=a("a5bd"),j={components:{GooglePlacesInput:V["a"]},props:{user:{type:Object}},created:function(){this.populateData()},data:function(){return{formValid:!1,form:{company_email:"",company_phone:"+49",address:"",web_url:"",facebook:"",instagram:"",youtube:"",linkedin:"",twitter:""},social:["facebook","instagram","linkedin","youtube","twitter"]}},methods:{populateData:function(){var t=this;Object(E["forEach"])(this.form,(function(e,a){t.form[a]=t.user[a]}))},save:function(){this.$emit("update",Object(C["a"])({},this.form))}}},T=j,B=(a("6462"),Object(u["a"])(T,D,A,!1,null,"56de7e48",null)),L=B.exports;h()(B,{VBtn:v["a"],VForm:m["a"],VTextField:f["a"]});var N=a("7667"),P={components:{PublicProfileGeneral:y,PublicProfileDetails:O,PublicProfileContact:L,PublicProfileViewAs:N["a"]},data:function(){return{formResponse:{},tabs:{active:"generalInfo",options:["generalInfo","companyDetails","contact"]},tabComponents:{generalInfo:y,companyDetails:O,contact:L,viewAs:N["a"]},viewAs:!1}},computed:{user:function(){return this.$store.getters["user/user"]}},methods:{viewAsTab:function(){this.viewAs=!this.viewAs},handleUpdate:function(t){var e=this;this.$store.dispatch("user/updateCompany",t).then((function(t){e.formResponse=t.data,setTimeout((function(){e.formResponse={}}),5e3)})).catch((function(t){e.formResponse=t.data}))}}},F=P,M=(a("20c5"),a("b0af")),q=a("62ad"),z=a("0fd9"),R=a("71a3"),H=a("c671"),U=a("fe57"),K=a("aac8"),W=Object(u["a"])(F,s,i,!1,null,null,null);e["default"]=W.exports;h()(W,{VBtn:v["a"],VCard:M["a"],VCol:q["a"],VRow:z["a"],VTab:R["a"],VTabItem:H["a"],VTabs:U["a"],VTabsItems:K["a"]})},"615b":function(t,e,a){},6462:function(t,e,a){"use strict";a("66b4")},"66b4":function(t,e,a){},7667:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"public-profile-viewas"},[a("div",{staticClass:"d-flex mb-6"},[a("div",[a("v-avatar",{staticClass:"user-avatar",attrs:{color:"#f1f1f1",size:"80"}},[t.avatar?[a("img",{attrs:{src:t.avatar}})]:[a("v-icon",{staticClass:"camera-icon",attrs:{size:"60px"}},[t._v(" mdi-camera-plus-outline ")])]],2)],1),a("div",{staticClass:"pl-4 mt-3"},[a("div",{staticClass:"heading-title"},[t._v(t._s(t._f("fullname")(t.user,!0)))]),a("div",{staticClass:"heading-subtitle"},[t._v(t._s(t.user.city)+" "+t._s(t.user.address))])])]),"Employer"===t.user.role?a("div",[a("div",{staticClass:"section mb-8"},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("aboutCompany"))+" ")]),a("div",{staticClass:"section-value"},[t._v(" "+t._s(t.user.about_company)+" ")])]),a("v-row",{staticClass:"mb-8"},[a("v-col",{attrs:{cols:"col"}},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("employees"))+" ")]),a("div",{staticClass:"section-value"},[t._v(" "+t._s(t.idToString("EMPLOYEE_NUMBER",t.user.company_employees))+" ")])]),a("v-col",{attrs:{cols:"col"}},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("branch"))+" ")]),a("div",{staticClass:"section-value"},[t._v(" "+t._s(t.idToString("JOB_BRANCHE",t.user.branche))+" ")])])],1)],1):a("div",[a("div",{staticClass:"section-mb-8"},[a("v-row",{staticClass:"mb-8"},[a("v-col",{attrs:{cols:"col"}},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("aboutMe"))+" ")]),a("div",{staticClass:"section-value"},[t._v(" "+t._s(t.user.about_me)+" ")])])],1)],1),a("div",{staticClass:"section mb-8"},[a("v-row",{staticClass:"mb-8"},[a("v-col",{attrs:{cols:"col"}},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("jobseekingStatus"))+" ")]),a("div",{staticClass:"section-value"},[t._v(" "+t._s(t._f("jobSearchStatus")(t.user.job_search_status))+" ")])]),a("v-col",{attrs:{cols:"col"}},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("position"))+" ")]),a("div",{staticClass:"section-value"},[t._v(" "+t._s(t.idToString("JOB_POSITION",t.user.current_position))+" ")])])],1)],1),a("v-row",{staticClass:"mb-8"},[a("v-col",{attrs:{cols:"col"}},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("currentIndustry"))+" ")]),a("div",{staticClass:"section-value"},[t._v(" "+t._s(t.idsToArray("JOB_BRANCHE",t.user.branche).join(", "))+" ")])])],1)],1),a("div",{staticClass:"section"},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("contact"))+" ")]),a("div",{staticClass:"content pt-4"},[a("div",{staticClass:"contact-section d-flex pb-5"},[a("div",{staticClass:"icon-wrap"},[a("v-icon",{attrs:{color:"#fff"}},[t._v(" mdi-email-outline ")])],1),a("div",{staticClass:"pl-4"},[a("div",{staticClass:"label"},[t._v(t._s(t.$t("emailAddress")))]),a("div",{staticClass:"value"},[a("a",{attrs:{href:"mailto:"+t.user.company_email}},[t._v(" "+t._s(t.user.email)+" ")])])])]),a("div",{staticClass:"contact-section d-flex pb-5"},[a("div",{staticClass:"icon-wrap"},[a("v-icon",{attrs:{color:"#fff"}},[t._v(" mdi-phone-outline ")])],1),a("div",{staticClass:"pl-4"},[a("div",{staticClass:"label"},[t._v(t._s(t.$t("phoneNumber")))]),a("div",{staticClass:"value"},[a("a",{attrs:{href:"tel:"+t.user.phone}},[t._v(" "+t._s(t.user.phone)+" ")])])])]),a("div",{staticClass:"contact-section d-flex pb-5"},[a("div",{staticClass:"icon-wrap"},[a("v-icon",{attrs:{color:"#fff"}},[t._v(" mdi-map-marker-outline ")])],1),a("div",{staticClass:"pl-4"},[a("div",{staticClass:"label"},[t._v(t._s(t.$t("city"))+" and "+t._s(t.$t("address")))]),a("div",{staticClass:"value"},[a("a",{attrs:{href:t.googleMapsLink,target:"_blank"}},[t._v(" "+t._s(t.address)+" ")])])])]),t.user.web_url?a("div",{staticClass:"contact-section d-flex pb-5"},[a("div",{staticClass:"icon-wrap"},[a("v-icon",{attrs:{color:"#fff"}},[t._v(" mdi-web ")])],1),a("div",{staticClass:"pl-4"},[a("div",{staticClass:"label"},[t._v(t._s(t.$t("web")))]),a("div",{staticClass:"value"},[a("a",{attrs:{href:t.user.web_url,target:"_blank"}},[t._v(" "+t._s(t.user.web_url)+" ")])])])]):t._e()])]),"Employer"==t.user.role?a("div",{staticClass:"section mt-3"},[a("label",{staticClass:"section-label"},[t._v(" North Data ")]),a("div",{staticClass:"content pt-3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("v-dialog",{scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,i=e.attrs;return[a("v-btn",t._g(t._b({attrs:{color:"primary",height:"48",block:""}},"v-btn",i,!1),s),[t._v(" "+t._s(t.$t("northdataHistory"))+" ")])]}}],null,!1,2596405299),model:{value:t.historyGraph,callback:function(e){t.historyGraph=e},expression:"historyGraph"}},[a("v-card",[a("NorthDataWidget",{attrs:{user:t.user,layout:"history"}})],1)],1)],1),a("div",{staticClass:"col"},[a("v-dialog",{attrs:{width:"600"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,i=e.attrs;return[a("v-btn",t._g(t._b({attrs:{color:"primary",height:"48",block:""}},"v-btn",i,!1),s),[t._v(" "+t._s(t.$t("northdataBarChart"))+" ")])]}}],null,!1,377245644),model:{value:t.barChart,callback:function(e){t.barChart=e},expression:"barChart"}},[a("v-card",[a("NorthDataWidget",{attrs:{user:t.user,layout:"barChart"}})],1)],1)],1)])])]):t._e()])},i=[],n=(a("2b3d"),a("d3b7"),a("3ca3"),a("ddb0"),a("99af"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"d-flex justify-center"},[t.isLoading?a("v-progress-circular",{attrs:{indeterminate:"",size:"75",color:"primary"}}):t._e()],1),a("figure",{attrs:{id:"widget"}}),t.isError?a("div",{staticClass:"text-center text-body-1"},[t._v(" "+t._s(t.$t("noDataAvailable"))+" ")]):t._e()])}),o=[],l=(a("a9e3"),a("159b"),a("1276"),a("ac1f"),a("a15b"),{props:{layout:{type:String,required:!0},user:{type:Object,required:!0},minHeight:{type:Number,required:!1},maxHeight:{type:Number,required:!1},ratio:{type:Number,required:!1}},data:function(){return{isLoading:!0,isError:!1}},mounted:function(){var t=this;new NorthData.Widget(document.getElementById("widget"),{apiKey:"U5S4-CKK3",layout:this.layout,name:this.user.company,address:this.user.address,minHeight:this.minHeight,maxHeight:this.maxHeight,ratio:this.ratio,success:function(){t.isLoading=!1,t.$emit("success"),t.fixOverflow()},error:function(){t.isError=!0,t.isLoading=!1,t.$emit("error")}})},methods:{fixOverflow:function(){document.querySelectorAll("#widget svg").forEach((function(t){var e,a=null===(e=t.getAttribute("viewBox"))||void 0===e?void 0:e.split(" ");a&&(a[0]=-25,t.setAttribute("viewBox",a.join(" ")))}))}}}),r=l,c=a("2877"),u=a("6544"),d=a.n(u),h=a("490a"),v=Object(c["a"])(r,n,o,!1,null,null,null),m=v.exports;d()(v,{VProgressCircular:h["a"]});var f={name:"PublicProfileViewAs",components:{NorthDataWidget:m},props:{user:{type:Object}},data:function(){return{historyGraph:!1,barChart:!1}},computed:{avatar:function(){if(!this.user.profile_img)return null;try{var t=new URL(this.user.profile_img);return t}catch(a){var e=new URL("https://dev.api.jonder.devla.dev/api/v1").origin;return"".concat(e,"/storage/avatars/").concat(this.user.profile_img)}},address:function(){return this.user.city&&this.user.address?"".concat(this.user.city,", ").concat(this.user.address):this.user.city||this.user.address||""},googleMapsLink:function(){var t=encodeURIComponent(this.address);return"https://www.google.com/maps/search/".concat(t)}}},p=f,b=(a("d95c"),a("8212")),y=a("8336"),g=a("b0af"),_=a("62ad"),C=a("169a"),w=a("132d"),x=a("0fd9"),I=Object(c["a"])(p,s,i,!1,null,"a64501a6",null);e["a"]=I.exports;d()(I,{VAvatar:b["a"],VBtn:y["a"],VCard:g["a"],VCol:_["a"],VDialog:C["a"],VIcon:w["a"],VRow:x["a"]})},"866d":function(t,e,a){},a5bd:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-autocomplete",{ref:t.ref,attrs:{attach:!0,items:t.items,loading:t.loading,rules:t.rules,placeholder:t.placeholder||t.$t("choose"),"hide-details":t.hideDetails,multiple:t.multiple,"small-chips":t.multiple,"deletable-chips":t.multiple,clearable:t.clearable,"no-filter":"",outlined:"","append-icon":"mdi-chevron-down"},on:{"update:search-input":function(e){return t.fetchSuggestions(e)},change:function(e){t.$refs[t.ref].lazySearch=""}},model:{value:t.valueLocal,callback:function(e){t.valueLocal=e},expression:"valueLocal"}})},i=[],n=(a("99af"),a("d3b7"),{props:{value:{type:[Array,String]},clearable:{type:Boolean,default:!1},hideDetails:{type:[Boolean,String],default:!1},multiple:{type:Boolean,defualt:!1},placeholder:{type:String,required:!1},rules:{type:Array,required:!1},types:{type:Array,default:function(){return["(cities)"]}}},data:function(){return{valueLocal:this.value,suggestions:[],ref:"googlePlacesInput"+(new Date).getTime(),loading:!1,skipFetch:!0}},computed:{items:function(){return this.suggestions.length?this.multiple?this.suggestions.concat(this.valueLocal):this.suggestions:this.multiple?this.valueLocal?this.valueLocal:[]:this.valueLocal?[this.valueLocal]:[]}},watch:{value:function(t){this.skipFetch=!0,this.valueLocal=t},valueLocal:function(t){this.$emit("input",t)}},methods:{fetchSuggestions:function(t){var e=this;this.skipFetch?this.skipFetch=!1:(this.loading=!0,this.$store.dispatch("google/places",{input:t,types:this.types}).then((function(t){e.suggestions=t})).finally((function(){e.loading=!1})))}}}),o=n,l=a("2877"),r=a("6544"),c=a.n(r),u=a("c6a6"),d=Object(l["a"])(o,s,i,!1,null,null,null);e["a"]=d.exports;c()(d,{VAutocomplete:u["a"]})},a797:function(t,e,a){"use strict";var s=a("5530"),i=(a("a9e3"),a("3c93"),a("a9ad")),n=a("7560"),o=a("f2e7"),l=a("58df");e["a"]=Object(l["a"])(i["a"],n["a"],o["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes:function(){return Object(s["a"])({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},e)}})},b0af:function(t,e,a){"use strict";var s=a("5530"),i=(a("a9e3"),a("0481"),a("615b"),a("10d2")),n=a("297c"),o=a("1c87"),l=a("58df");e["a"]=Object(l["a"])(n["a"],o["a"],i["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({"v-card":!0},o["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},i["a"].options.computed.classes.call(this))},styles:function(){var t=Object(s["a"])({},i["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=n["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),a=e.tag,s=e.data;return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),t(a,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})},c6a6:function(t,e,a){"use strict";var s=a("5530"),i=(a("d81d"),a("4de4"),a("498a"),a("7db0"),a("caad"),a("2532"),a("2bfd"),a("b974")),n=a("8654"),o=a("d9f7"),l=a("80d2"),r=Object(s["a"])(Object(s["a"])({},i["b"]),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e["a"]=i["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,a){return a.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:i["a"].options.props.menuProps.type,default:function(){return r}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({},i["a"].options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var a=Object(l["r"])(e,t.itemText),s=null!=a?String(a):"";return t.filter(e,String(t.internalSearch),s)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=i["a"].options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),Object(s["a"])(Object(s["a"])({},r),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(e){return t.valueComparator(t.getValue(e),t.getValue(t.internalValue))}))},listData:function(){var t=i["a"].options.computed.listData.call(this);return t.props=Object(s["a"])(Object(s["a"])({},t.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var a=this;t!==e&&(this.setMenuIndex(-1),this.$nextTick((function(){a.internalSearch&&(1===t.length||a.autoSelectFirst)&&(a.$refs.menu.getTiles(),a.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===l["y"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===l["y"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==l["y"].backspace&&t!==l["y"].delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var a=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===a){var s=this.selectedItems.length,i=t!==s-1?t:t-1,n=this.selectedItems[i];n?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=i}else this.selectedIndex=a}},clearableCallback:function(){this.internalSearch=null,i["a"].options.methods.clearableCallback.call(this)},genInput:function(){var t=n["a"].options.methods.genInput.call(this);return t.data=Object(o["a"])(t.data,{attrs:{"aria-activedescendant":Object(l["p"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(l["p"])(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot:function(){var t=i["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections:function(){return this.hasSlot||this.multiple?i["a"].options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,a=e.value;e.value&&this.activateMenu(),this.internalSearch=a,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[l["y"].home,l["y"].end].includes(e)||i["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){i["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){i["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){i["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,a;if(-1!==this.selectedIndex){var s=this.selectedItems[this.selectedIndex],i=this.getText(s);null==(e=t.clipboardData)||e.setData("text/plain",i),null==(a=t.clipboardData)||a.setData("text/vnd.vuetify.autocomplete.item+plain",i),t.preventDefault()}}}})},d95c:function(t,e,a){"use strict";a("f754")},e707:function(t,e,a){"use strict";a("a9e3"),a("caad"),a("2532");var s=a("1abc"),i=a("80d2"),n=a("2b0e");e["a"]=n["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{animationFrame:0,overlay:null}},watch:{hideOverlay:function(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var t=new s["a"]({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();var e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay:function(){var t=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((function(){t.overlay&&(void 0!==t.activeZIndex?t.overlay.zIndex=String(t.activeZIndex-1):t.$el&&(t.overlay.zIndex=Object(i["u"])(t.$el)),t.overlay.value=!0)})),!0},removeOverlay:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&(Object(i["a"])(this.overlay.$el,"transitionend",(function(){t.overlay&&t.overlay.$el&&t.overlay.$el.parentNode&&!t.overlay.value&&!t.isActive&&(t.overlay.$el.parentNode.removeChild(t.overlay.$el),t.overlay.$destroy(),t.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),e&&this.showScroll()},scrollListener:function(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;var e=[i["y"].up,i["y"].pageup],a=[i["y"].down,i["y"].pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!a.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar:function(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;var e=window.getComputedStyle(t);return["auto","scroll"].includes(e.overflowY)&&t.scrollHeight>t.clientHeight},shouldScroll:function(t,e){if(t.hasAttribute("data-app"))return!1;var a=0===t.scrollTop,s=t.scrollTop+t.clientHeight===t.scrollHeight,i=e<0,n=e>0;return!(a||!i)||(!(s||!n)||!(!a&&!s)&&this.shouldScroll(t.parentNode,e))},isInside:function(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath:function(t){var e=t.path||this.composedPath(t),a=t.deltaY;if("keydown"===t.type&&e[0]===document.body){var s=this.$refs.dialog,i=window.getSelection().anchorNode;return!(s&&this.hasScrollbar(s)&&this.isInside(i,s))||!this.shouldScroll(s,a)}for(var n=0;n<e.length;n++){var o=e[n];if(o===document)return!0;if(o===document.documentElement)return!0;if(o===this.$refs.content)return!0;if(this.hasScrollbar(o))return!this.shouldScroll(o,a)}return!0},composedPath:function(t){if(t.composedPath)return t.composedPath();var e=[],a=t.target;while(a){if(e.push(a),"HTML"===a.tagName)return e.push(document),e.push(window),e;a=a.parentElement}return e},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(i["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})},f754:function(t,e,a){}}]);
//# sourceMappingURL=chunk-2355e30a.f8b99961.js.map