(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-99628e50"],{"169a":function(t,e,s){"use strict";var a=s("5530"),i=s("2909"),n=s("ade3"),o=(s("a9e3"),s("498a"),s("caad"),s("2532"),s("7db0"),s("368e"),s("480e")),l=s("4ad4"),r=s("b848"),c=s("75eb"),u=s("e707"),d=s("e4d3"),h=s("21be"),v=s("f2e7"),f=s("a293"),m=s("58df"),p=s("d9bd"),b=s("80d2"),y=Object(m["a"])(l["a"],r["a"],c["a"],u["a"],d["a"],h["a"],v["a"]);e["a"]=y.extend({name:"v-dialog",directives:{ClickOutside:f["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(n["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(n["a"])(t,"v-dialog--active",this.isActive),Object(n["a"])(t,"v-dialog--persistent",this.persistent),Object(n["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(n["a"])(t,"v-dialog--scrollable",this.scrollable),Object(n["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(p["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):u["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.previousActiveElement=document.activeElement,t.$refs.content.focus(),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===b["y"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var s=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),a=Object(i["a"])(s).find((function(t){return!t.hasAttribute("disabled")}));a&&a.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(o["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(a["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(a["a"])(Object(a["a"])({},t.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(b["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(b["g"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"1abc":function(t,e,s){"use strict";var a=s("a797");e["a"]=a["a"]},2851:function(t,e,s){},"29c2":function(t,e,s){"use strict";s("2851")},"2bfd":function(t,e,s){},3516:function(t,e,s){"use strict";s("fd5d")},"368e":function(t,e,s){},"3c93":function(t,e,s){},"59ce":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"public-profile"},[s("v-row",{staticClass:"page-heading"},[s("v-col",{attrs:{cols:"col"}},[s("div",{staticClass:"title"},[t._v(t._s(t.$t("publicCompanyProfile")))]),s("div",{staticClass:"subtitle"},[t._v(" "+t._s(t.$t("publicProfileSub"))+" ")])]),s("v-col",{attrs:{cols:"auto"}},[s("v-btn",{attrs:{color:"primary",height:"48"},on:{click:t.viewAsTab}},[t.viewAs?[t._v(" "+t._s(t.$t("backToEdit"))+" ")]:[t._v(" "+t._s(t.$t("viewAsJobseeker"))+" ")]],2)],1)],1),s("v-row",[s("v-col",{attrs:{cols:"auto"}},[s("v-card",{staticClass:"public-profile-sidebar pa-0",attrs:{flat:""}},[s("v-tabs",{attrs:{"slider-color":"#fff",vertical:""},model:{value:t.tabs.active,callback:function(e){t.$set(t.tabs,"active",e)},expression:"tabs.active"}},t._l(t.tabs.options,(function(e){return s("v-tab",{key:e,staticClass:"pl-1 py-5",staticStyle:{height:"unset"},attrs:{disabled:t.viewAs,"slider-color":"#0253B3"}},[s("span",{staticClass:"pl-3"},[t._v(t._s(t.$t(e)))]),s("span",{staticClass:"arrow"},[t._v(">")])])})),1)],1)],1),s("v-col",{attrs:{cols:"col"}},[s("v-card",{attrs:{flat:""}},[s("v-tabs-items",{model:{value:t.tabs.active,callback:function(e){t.$set(t.tabs,"active",e)},expression:"tabs.active"}},t._l(t.tabs.options,(function(e){return s("v-tab-item",{key:e.key,attrs:{transition:!1}},[t.viewAs?[s("PublicProfileViewAs",{attrs:{user:t.user}})]:[s("keep-alive",[s(t.tabComponents[e],{tag:"component",attrs:{user:t.user},on:{update:t.handleUpdate}})],1)]],2)})),1)],1),s("ResponseAlert",{staticClass:"mt-3",attrs:{response:t.formResponse}})],1)],1)],1)},i=[],n=(s("d3b7"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"public-profile-general"},[s("v-form",{model:{value:t.formValid,callback:function(e){t.formValid=e},expression:"formValid"}},[s("AvatarInput",{attrs:{size:"120","with-icon":"",user:t.user},model:{value:t.formData.profile_img,callback:function(e){t.$set(t.formData,"profile_img",e)},expression:"formData.profile_img"}}),s("div",{staticClass:"section mt-5"},[s("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("companyName"))+" ")]),s("v-text-field",{attrs:{rules:[t.validations.required],outlined:"",solo:""},model:{value:t.formData.company,callback:function(e){t.$set(t.formData,"company",e)},expression:"formData.company"}})],1),s("div",{staticClass:"section"},[s("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("aboutCompany"))+" ")]),s("v-textarea",{attrs:{rules:[t.validations.required,t.validations.max.string(250)],outlined:"",counter:"250",maxlength:"250"},model:{value:t.formData.about_company,callback:function(e){t.$set(t.formData,"about_company",e)},expression:"formData.about_company"}})],1)],1),s("div",{staticClass:"text-right"},[s("v-btn",{attrs:{color:"primary",disabled:!t.formValid,height:"55"},on:{click:t.save}},[t._v(" "+t._s(t.$t("saveChanges"))+" ")])],1)],1)}),o=[],l=s("2db1"),r={components:{AvatarInput:l["a"]},props:{user:{type:Object,required:!0}},data:function(){return{formValid:!1,formData:{}}},created:function(){this.populateData()},methods:{populateData:function(){this.formData.profile_img=this.user.profile_img,this.formData.company=this.user.company,this.formData.about_company=this.user.about_company},save:function(){var t={company:this.formData.company,about_company:this.formData.about_company};this.formData.profile_img instanceof File&&(t["profile_img"]=this.formData.profile_img),this.$emit("update",t)}}},c=r,u=s("2877"),d=s("6544"),h=s.n(d),v=s("8336"),f=s("4bd4"),m=s("8654"),p=s("a844"),b=Object(u["a"])(c,n,o,!1,null,"1afc6e57",null),y=b.exports;h()(b,{VBtn:v["a"],VForm:f["a"],VTextField:m["a"],VTextarea:p["a"]});var g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"public-profile-details"},[s("v-form",{model:{value:t.formValid,callback:function(e){t.formValid=e},expression:"formValid"}},[s("div",{staticClass:"section"},[s("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("branch"))+" ")]),s("v-autocomplete",{attrs:{attach:!0,items:t.types.JOB_BRANCHE,rules:[t.validations.required],"item-value":"id","item-text":t.$i18n.locale,"cache-items":"",outlined:"","append-icon":"mdi-chevron-down"},model:{value:t.formData.branche,callback:function(e){t.$set(t.formData,"branche",e)},expression:"formData.branche"}})],1),s("div",{staticClass:"section"},[s("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("numberOfEmployees"))+" ")]),s("v-select",{attrs:{attach:!0,items:t.types.EMPLOYEE_NUMBER,"item-value":"id","item-text":t.$i18n.locale,rules:[t.validations.required],outlined:"","append-icon":"mdi-chevron-down"},model:{value:t.formData.company_employees,callback:function(e){t.$set(t.formData,"company_employees",e)},expression:"formData.company_employees"}})],1),s("div",{staticClass:"section"},[s("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("foundingYear"))+" ")]),s("v-text-field",{attrs:{rules:[t.validations.required],type:"number",outlined:"",solo:""},model:{value:t.formData.establishment_date,callback:function(e){t.$set(t.formData,"establishment_date",e)},expression:"formData.establishment_date"}})],1)]),s("div",{staticClass:"text-right"},[s("v-btn",{attrs:{color:"primary",disabled:!t.formValid,height:"55"},on:{click:t.save}},[t._v(" "+t._s(t.$t("saveChanges"))+" ")])],1)],1)},_=[],C=s("5530"),w=s("797d"),x={props:{user:{type:Object,required:!0}},data:function(){return{formValid:!1,formData:{}}},computed:{types:function(){return w["a"]}},created:function(){this.populateData()},methods:{populateData:function(){this.formData.branche=parseInt(this.user.branche),this.formData.company_employees=parseInt(this.user.company_employees),this.formData.establishment_date=this.user.establishment_date},save:function(){this.$emit("update",Object(C["a"])({},this.formData))}}},$=x,I=s("c6a6"),S=s("b974"),k=Object(u["a"])($,g,_,!1,null,"7364c4f6",null),O=k.exports;h()(k,{VAutocomplete:I["a"],VBtn:v["a"],VForm:f["a"],VSelect:S["a"],VTextField:m["a"]});var D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"public-profile-contact"},[s("v-form",{model:{value:t.formValid,callback:function(e){t.formValid=e},expression:"formValid"}},[s("div",{staticClass:"section"},[s("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("emailAddress"))+" ")]),s("v-text-field",{attrs:{rules:[t.validations.required],type:"email",outlined:"",solo:""},model:{value:t.form.company_email,callback:function(e){t.$set(t.form,"company_email",e)},expression:"form.company_email"}})],1),s("div",{staticClass:"section"},[s("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("phone"))+" ")]),s("v-text-field",{attrs:{rules:[t.validations.required,t.validations.phone],outlined:"",solo:""},model:{value:t.form.company_phone,callback:function(e){t.$set(t.form,"company_phone",e)},expression:"form.company_phone"}})],1),s("div",{staticClass:"section"},[s("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("cityAndAddress"))+" ")]),s("GooglePlacesInput",{attrs:{types:["address"],rules:[t.validations.required]},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}})],1),s("div",{staticClass:"section"},[s("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("webUrl"))+" ")]),s("v-text-field",{attrs:{outlined:"",solo:""},model:{value:t.form.web_url,callback:function(e){t.$set(t.form,"web_url",e)},expression:"form.web_url"}})],1),s("div",{staticClass:"social-links mb-3"},[t._v(" "+t._s(t.$t("socialLinks"))+" ")]),t._l(t.social,(function(e,a){return s("div",{key:a,staticClass:"section mb-4"},[s("label",{staticClass:"section-label"},[t._v(" "+t._s(e)+" ")]),s("v-text-field",{attrs:{outlined:"","hide-details":"",solo:""},model:{value:t.form[e],callback:function(s){t.$set(t.form,e,s)},expression:"form[item]"}})],1)}))],2),s("div",{staticClass:"text-right"},[s("v-btn",{attrs:{color:"primary",height:"55",disabled:!t.formValid},on:{click:t.save}},[t._v(" "+t._s(t.$t("saveChanges"))+" ")])],1)],1)},A=[],E=s("2ef0"),V=s("a5bd"),j={components:{GooglePlacesInput:V["a"]},props:{user:{type:Object}},created:function(){this.populateData()},data:function(){return{formValid:!1,form:{company_email:"",company_phone:"+49",address:"",web_url:"",facebook:"",instagram:"",youtube:"",linkedin:"",twitter:""},social:["facebook","instagram","linkedin","youtube","twitter"]}},methods:{populateData:function(){var t=this;Object(E["forEach"])(this.form,(function(e,s){t.form[s]=t.user[s]}))},save:function(){this.$emit("update",Object(C["a"])({},this.form))}}},T=j,B=(s("6462"),Object(u["a"])(T,D,A,!1,null,"56de7e48",null)),L=B.exports;h()(B,{VBtn:v["a"],VForm:f["a"],VTextField:m["a"]});var N=s("7667"),P={components:{PublicProfileGeneral:y,PublicProfileDetails:O,PublicProfileContact:L,PublicProfileViewAs:N["a"]},data:function(){return{formResponse:{},tabs:{active:"generalInfo",options:["generalInfo","companyDetails","contact"]},tabComponents:{generalInfo:y,companyDetails:O,contact:L,viewAs:N["a"]},viewAs:!1}},computed:{user:function(){return this.$store.getters["user/user"]}},methods:{viewAsTab:function(){this.viewAs=!this.viewAs},handleUpdate:function(t){var e=this;this.$store.dispatch("user/updateCompany",t).then((function(){e.formResponse={success:!0,message:e.$t("success")}})).catch((function(t){e.formResponse=t.data})).finally((function(){setTimeout((function(){e.formResponse={}}),3e3)}))}}},F=P,M=(s("29c2"),s("b0af")),q=s("62ad"),z=s("0fd9"),R=s("71a3"),H=s("c671"),U=s("fe57"),K=s("aac8"),W=Object(u["a"])(F,a,i,!1,null,"d2e00220",null);e["default"]=W.exports;h()(W,{VBtn:v["a"],VCard:M["a"],VCol:q["a"],VRow:z["a"],VTab:R["a"],VTabItem:H["a"],VTabs:U["a"],VTabsItems:K["a"]})},"615b":function(t,e,s){},6462:function(t,e,s){"use strict";s("66b4")},"66b4":function(t,e,s){},7667:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"public-profile-viewas"},[s("div",{staticClass:"d-flex mb-6"},[s("div",[s("v-avatar",{staticClass:"user-avatar",attrs:{color:"#f1f1f1",size:"80"}},[t.avatar?[s("img",{attrs:{src:t.avatar}})]:[s("v-icon",{staticClass:"camera-icon",attrs:{size:"60px"}},[t._v(" mdi-camera-plus-outline ")])]],2)],1),s("div",{staticClass:"pl-4"},[s("div",{staticClass:"heading-title"},[t._v(t._s(t._f("fullname")(t.user,!0)))]),s("div",{staticClass:"heading-subtitle"},[t._v(t._s(t.user.city)+" "+t._s(t.user.address))])])]),"Employer"===t.user.role?s("div",[s("div",{staticClass:"section mb-8"},[s("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("aboutCompany"))+" ")]),s("div",{staticClass:"section-value"},[t._v(" "+t._s(t.user.about_company)+" ")])]),s("v-row",{staticClass:"mb-8"},[s("v-col",{attrs:{cols:"4"}},[s("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("employees"))+" ")]),s("div",{staticClass:"section-value"},[t._v(" "+t._s(t.idToString("EMPLOYEE_NUMBER",t.user.company_employees))+" ")])]),s("v-col",{attrs:{cols:"5"}},[s("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("branch"))+" ")]),s("div",{staticClass:"section-value"},[t._v(" "+t._s(t.idToString("JOB_BRANCHE",t.user.branche))+" ")])])],1)],1):s("div",[s("div",{staticClass:"section mb-8"},[s("v-row",{staticClass:"mb-8"},[s("v-col",{attrs:{cols:"4"}},[s("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("jobseekingStatus"))+" ")]),s("div",{staticClass:"section-value"},[t._v(" "+t._s(t._f("jobSearchStatus")(t.user.job_search_status))+" ")])]),s("v-col",{attrs:{cols:"5"}},[s("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("position"))+" ")]),s("div",{staticClass:"section-value"},[t._v(" "+t._s(t.idToString("JOB_POSITION",t.user.current_position))+" ")])])],1)],1),s("v-row",{staticClass:"mb-8"},[s("v-col",{attrs:{cols:"4"}},[s("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("currentIndustry"))+" ")]),s("div",{staticClass:"section-value"},[t._v(" "+t._s(t.idToString("JOB_BRANCHE",t.user.branche))+" ")])]),s("v-col",{attrs:{cols:"5"}},[s("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("city"))+" and "+t._s(t.$t("address"))+" ")]),s("div",{staticClass:"section-value"},[t._v(" "+t._s(t.user.city)+" ")])])],1)],1),s("div",{staticClass:"section"},[s("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("contact"))+" ")]),s("div",{staticClass:"content pt-4"},[s("div",{staticClass:"contact-section d-flex pb-5"},[s("div",{staticClass:"icon-wrap"},[s("v-icon",{attrs:{color:"#fff"}},[t._v(" mdi-email-outline ")])],1),s("div",{staticClass:"pl-4"},[s("div",{staticClass:"label"},[t._v(t._s(t.$t("emailAddress")))]),s("div",{staticClass:"value"},[s("a",{attrs:{href:"mailto:"+t.user.company_email}},[t._v(" "+t._s(t.user.email)+" ")])])])]),s("div",{staticClass:"contact-section d-flex pb-5"},[s("div",{staticClass:"icon-wrap"},[s("v-icon",{attrs:{color:"#fff"}},[t._v(" mdi-phone-outline ")])],1),s("div",{staticClass:"pl-4"},[s("div",{staticClass:"label"},[t._v(t._s(t.$t("phoneNumber")))]),s("div",{staticClass:"value"},[s("a",{attrs:{href:"tel:"+t.user.phone}},[t._v(" "+t._s(t.user.phone)+" ")])])])]),s("div",{staticClass:"contact-section d-flex pb-5"},[s("div",{staticClass:"icon-wrap"},[s("v-icon",{attrs:{color:"#fff"}},[t._v(" mdi-map-marker-outline ")])],1),s("div",{staticClass:"pl-4"},[s("div",{staticClass:"label"},[t._v(t._s(t.$t("city"))+" and "+t._s(t.$t("address")))]),s("div",{staticClass:"value"},[s("a",{attrs:{href:t.googleMapsLink,target:"_blank"}},[t._v(" "+t._s(t.address)+" ")])])])]),t.user.web_url?s("div",{staticClass:"contact-section d-flex pb-5"},[s("div",{staticClass:"icon-wrap"},[s("v-icon",{attrs:{color:"#fff"}},[t._v(" mdi-web ")])],1),s("div",{staticClass:"pl-4"},[s("div",{staticClass:"label"},[t._v(t._s(t.$t("web")))]),s("div",{staticClass:"value"},[s("a",{attrs:{href:t.user.web_url,target:"_blank"}},[t._v(" "+t._s(t.user.web_url)+" ")])])])]):t._e()])]),"Employer"==t.user.role?s("div",{staticClass:"section mt-3"},[s("label",{staticClass:"section-label"},[t._v(" North Data ")]),s("div",{staticClass:"content pt-3"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("v-dialog",{scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,i=e.attrs;return[s("v-btn",t._g(t._b({attrs:{color:"primary",height:"48",block:""}},"v-btn",i,!1),a),[t._v(" "+t._s(t.$t("northdataHistory"))+" ")])]}}],null,!1,2596405299),model:{value:t.historyGraph,callback:function(e){t.historyGraph=e},expression:"historyGraph"}},[s("v-card",[s("NorthDataWidget",{attrs:{user:t.user,layout:"history"}})],1)],1)],1),s("div",{staticClass:"col"},[s("v-dialog",{attrs:{width:"600"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,i=e.attrs;return[s("v-btn",t._g(t._b({attrs:{color:"primary",height:"48",block:""}},"v-btn",i,!1),a),[t._v(" "+t._s(t.$t("northdataBarChart"))+" ")])]}}],null,!1,377245644),model:{value:t.barChart,callback:function(e){t.barChart=e},expression:"barChart"}},[s("v-card",[s("NorthDataWidget",{attrs:{user:t.user,layout:"barChart"}})],1)],1)],1)])])]):t._e()])},i=[],n=(s("2b3d"),s("d3b7"),s("3ca3"),s("ddb0"),s("99af"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"d-flex justify-center"},[t.isLoading?s("v-progress-circular",{attrs:{indeterminate:"",size:"75",color:"primary"}}):t._e()],1),s("figure",{attrs:{id:"widget"}}),t.isError?s("div",{staticClass:"text-center text-body-1"},[t._v(" "+t._s(t.$t("noDataAvailable"))+" ")]):t._e()])}),o=[],l=(s("a9e3"),s("159b"),s("1276"),s("ac1f"),s("a15b"),{props:{layout:{type:String,required:!0},user:{type:Object,required:!0},minHeight:{type:Number,required:!1},maxHeight:{type:Number,required:!1},ratio:{type:Number,required:!1}},data:function(){return{isLoading:!0,isError:!1}},mounted:function(){var t=this;new NorthData.Widget(document.getElementById("widget"),{apiKey:"U5S4-CKK3",layout:this.layout,name:this.user.company,address:this.user.address,minHeight:this.minHeight,maxHeight:this.maxHeight,ratio:this.ratio,success:function(){t.isLoading=!1,t.$emit("success"),t.fixOverflow()},error:function(){t.isError=!0,t.isLoading=!1,t.$emit("error")}})},methods:{fixOverflow:function(){document.querySelectorAll("#widget svg").forEach((function(t){var e,s=null===(e=t.getAttribute("viewBox"))||void 0===e?void 0:e.split(" ");s&&(s[0]=-25,t.setAttribute("viewBox",s.join(" ")))}))}}}),r=l,c=s("2877"),u=s("6544"),d=s.n(u),h=s("490a"),v=Object(c["a"])(r,n,o,!1,null,null,null),f=v.exports;d()(v,{VProgressCircular:h["a"]});var m={name:"PublicProfileViewAs",components:{NorthDataWidget:f},props:{user:{type:Object}},data:function(){return{historyGraph:!1,barChart:!1}},computed:{avatar:function(){if(!this.user.profile_img)return null;try{var t=new URL(this.user.profile_img);return t}catch(s){var e=new URL("https://dev.api.jonder.devla.dev/api/v1").origin;return"".concat(e,"/storage/avatars/").concat(this.user.profile_img)}},address:function(){return this.user.city&&this.user.address?"".concat(this.user.city,", ").concat(this.user.address):this.user.city||this.user.address||""},googleMapsLink:function(){var t=encodeURIComponent(this.address);return"https://www.google.com/maps/search/".concat(t)}}},p=m,b=(s("3516"),s("8212")),y=s("8336"),g=s("b0af"),_=s("62ad"),C=s("169a"),w=s("132d"),x=s("0fd9"),$=Object(c["a"])(p,a,i,!1,null,"265b186d",null);e["a"]=$.exports;d()($,{VAvatar:b["a"],VBtn:y["a"],VCard:g["a"],VCol:_["a"],VDialog:C["a"],VIcon:w["a"],VRow:x["a"]})},a5bd:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-autocomplete",{ref:t.ref,attrs:{attach:!0,items:t.items,loading:t.loading,rules:t.rules,placeholder:t.placeholder||t.$t("choose"),"hide-details":t.hideDetails,multiple:t.multiple,"small-chips":t.multiple,"deletable-chips":t.multiple,clearable:t.clearable,"no-filter":"",outlined:"","append-icon":"mdi-chevron-down"},on:{"update:search-input":function(e){return t.fetchSuggestions(e)},change:function(e){t.$refs[t.ref].lazySearch=""}},model:{value:t.valueLocal,callback:function(e){t.valueLocal=e},expression:"valueLocal"}})},i=[],n=(s("99af"),s("d3b7"),{props:{value:{type:[Array,String]},clearable:{type:Boolean,default:!1},hideDetails:{type:[Boolean,String],default:!1},multiple:{type:Boolean,defualt:!1},placeholder:{type:String,required:!1},rules:{type:Array,required:!1},types:{type:Array,default:function(){return["(cities)"]}}},data:function(){return{valueLocal:this.value,suggestions:[],ref:"googlePlacesInput"+(new Date).getTime(),loading:!1,skipFetch:!0}},computed:{items:function(){return this.suggestions.length?this.multiple?this.suggestions.concat(this.valueLocal):this.suggestions:this.multiple?this.valueLocal?this.valueLocal:[]:this.valueLocal?[this.valueLocal]:[]}},watch:{value:function(t){this.skipFetch=!0,this.valueLocal=t},valueLocal:function(t){this.$emit("input",t)}},methods:{fetchSuggestions:function(t){var e=this;this.skipFetch?this.skipFetch=!1:(this.loading=!0,this.$store.dispatch("google/places",{input:t,types:this.types}).then((function(t){e.suggestions=t})).finally((function(){e.loading=!1})))}}}),o=n,l=s("2877"),r=s("6544"),c=s.n(r),u=s("c6a6"),d=Object(l["a"])(o,a,i,!1,null,null,null);e["a"]=d.exports;c()(d,{VAutocomplete:u["a"]})},a797:function(t,e,s){"use strict";var a=s("5530"),i=(s("a9e3"),s("3c93"),s("a9ad")),n=s("7560"),o=s("f2e7"),l=s("58df");e["a"]=Object(l["a"])(i["a"],n["a"],o["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes:function(){return Object(a["a"])({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},e)}})},b0af:function(t,e,s){"use strict";var a=s("5530"),i=(s("a9e3"),s("0481"),s("615b"),s("10d2")),n=s("297c"),o=s("1c87"),l=s("58df");e["a"]=Object(l["a"])(n["a"],o["a"],i["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({"v-card":!0},o["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},i["a"].options.computed.classes.call(this))},styles:function(){var t=Object(a["a"])({},i["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=n["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),s=e.tag,a=e.data;return a.style=this.styles,this.isClickable&&(a.attrs=a.attrs||{},a.attrs.tabindex=0),t(s,this.setBackgroundColor(this.color,a),[this.genProgress(),this.$slots.default])}})},c6a6:function(t,e,s){"use strict";var a=s("5530"),i=(s("d81d"),s("4de4"),s("498a"),s("7db0"),s("caad"),s("2532"),s("2bfd"),s("b974")),n=s("8654"),o=s("d9f7"),l=s("80d2"),r=Object(a["a"])(Object(a["a"])({},i["b"]),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e["a"]=i["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,s){return s.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:i["a"].options.props.menuProps.type,default:function(){return r}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},i["a"].options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var s=Object(l["r"])(e,t.itemText),a=null!=s?String(s):"";return t.filter(e,String(t.internalSearch),a)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=i["a"].options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),Object(a["a"])(Object(a["a"])({},r),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(e){return t.valueComparator(t.getValue(e),t.getValue(t.internalValue))}))},listData:function(){var t=i["a"].options.computed.listData.call(this);return t.props=Object(a["a"])(Object(a["a"])({},t.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var s=this;t!==e&&(this.setMenuIndex(-1),this.$nextTick((function(){s.internalSearch&&(1===t.length||s.autoSelectFirst)&&(s.$refs.menu.getTiles(),s.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===l["y"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===l["y"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==l["y"].backspace&&t!==l["y"].delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var s=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===s){var a=this.selectedItems.length,i=t!==a-1?t:t-1,n=this.selectedItems[i];n?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=i}else this.selectedIndex=s}},clearableCallback:function(){this.internalSearch=null,i["a"].options.methods.clearableCallback.call(this)},genInput:function(){var t=n["a"].options.methods.genInput.call(this);return t.data=Object(o["a"])(t.data,{attrs:{"aria-activedescendant":Object(l["p"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(l["p"])(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot:function(){var t=i["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections:function(){return this.hasSlot||this.multiple?i["a"].options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,s=e.value;e.value&&this.activateMenu(),this.internalSearch=s,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[l["y"].home,l["y"].end].includes(e)||i["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){i["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){i["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){i["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,s;if(-1!==this.selectedIndex){var a=this.selectedItems[this.selectedIndex],i=this.getText(a);null==(e=t.clipboardData)||e.setData("text/plain",i),null==(s=t.clipboardData)||s.setData("text/vnd.vuetify.autocomplete.item+plain",i),t.preventDefault()}}}})},e707:function(t,e,s){"use strict";s("a9e3"),s("caad"),s("2532");var a=s("1abc"),i=s("80d2"),n=s("2b0e");e["a"]=n["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{animationFrame:0,overlay:null}},watch:{hideOverlay:function(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var t=new a["a"]({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();var e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay:function(){var t=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((function(){t.overlay&&(void 0!==t.activeZIndex?t.overlay.zIndex=String(t.activeZIndex-1):t.$el&&(t.overlay.zIndex=Object(i["u"])(t.$el)),t.overlay.value=!0)})),!0},removeOverlay:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&(Object(i["a"])(this.overlay.$el,"transitionend",(function(){t.overlay&&t.overlay.$el&&t.overlay.$el.parentNode&&!t.overlay.value&&!t.isActive&&(t.overlay.$el.parentNode.removeChild(t.overlay.$el),t.overlay.$destroy(),t.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),e&&this.showScroll()},scrollListener:function(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;var e=[i["y"].up,i["y"].pageup],s=[i["y"].down,i["y"].pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!s.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar:function(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;var e=window.getComputedStyle(t);return["auto","scroll"].includes(e.overflowY)&&t.scrollHeight>t.clientHeight},shouldScroll:function(t,e){if(t.hasAttribute("data-app"))return!1;var s=0===t.scrollTop,a=t.scrollTop+t.clientHeight===t.scrollHeight,i=e<0,n=e>0;return!(s||!i)||(!(a||!n)||!(!s&&!a)&&this.shouldScroll(t.parentNode,e))},isInside:function(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath:function(t){var e=t.path||this.composedPath(t),s=t.deltaY;if("keydown"===t.type&&e[0]===document.body){var a=this.$refs.dialog,i=window.getSelection().anchorNode;return!(a&&this.hasScrollbar(a)&&this.isInside(i,a))||!this.shouldScroll(a,s)}for(var n=0;n<e.length;n++){var o=e[n];if(o===document)return!0;if(o===document.documentElement)return!0;if(o===this.$refs.content)return!0;if(this.hasScrollbar(o))return!this.shouldScroll(o,s)}return!0},composedPath:function(t){if(t.composedPath)return t.composedPath();var e=[],s=t.target;while(s){if(e.push(s),"HTML"===s.tagName)return e.push(document),e.push(window),e;s=s.parentElement}return e},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(i["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})},fd5d:function(t,e,s){}}]);
//# sourceMappingURL=chunk-99628e50.82207371.js.map