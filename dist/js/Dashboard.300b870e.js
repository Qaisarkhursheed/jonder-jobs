(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Dashboard"],{"03e5":function(t,e,a){},"0960":function(t,e,a){t.exports=a.p+"img/three-dots.e245c03b.svg"},"0b53":function(t,e,a){"use strict";a("bd91")},"0b62":function(t,e,a){t.exports=a.p+"img/colView.45d10950.svg"},2119:function(t,e,a){t.exports=a.p+"img/equal-rights.60d907f3.svg"},"24c9":function(t,e,a){t.exports=a.p+"img/briefcase.68291d7d.svg"},"3a66":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var s=a("fe6c"),i=a("58df");function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(i["a"])(Object(s["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,a=e.length;t<a;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},"45c3":function(t,e,a){t.exports=a.p+"img/listView.2e6772c1.svg"},"4b50":function(t,e,a){"use strict";a("cda4")},"4bd4":function(t,e,a){"use strict";var s=a("5530"),i=(a("caad"),a("2532"),a("07ac"),a("4de4"),a("159b"),a("7db0"),a("58df")),n=a("7e2b"),o=a("3206");e["a"]=Object(i["a"])(n["a"],Object(o["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,a=function(t){return t.$watch("hasError",(function(a){e.$set(e.errorBag,t._uid,a)}),{immediate:!0})},s={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?s.shouldValidate=t.$watch("shouldValidate",(function(i){i&&(e.errorBag.hasOwnProperty(t._uid)||(s.valid=a(t)))})):s.valid=a(t),s},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var a=this.watchers.find((function(t){return t._uid===e._uid}));a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(s["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"4e08":function(t,e,a){t.exports=a.p+"img/pdf.a53cd7f6.svg"},"51fc":function(t,e,a){},"57a1":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{class:["lighten-1",{white:t.white},{default:!t.white}],attrs:{bottom:""}},[a("v-row",{attrs:{justify:"center","no-gutters":""}},t._l(t.links,(function(e,s){return a("v-btn",{key:s,staticClass:"my-2 footer-links",attrs:{color:"black",text:"",rounded:"",href:e.link}},[t._v(" "+t._s(e.name)+" ")])})),1)],1)},i=[],n={props:{white:{type:Boolean,default:!0}},data:function(){return{links:[{name:"Impressum",link:"https://jonder.jobs/impressum"},{name:"Datenschutz",link:"https://jonder.jobs/datenschutz"},{name:"AGB",link:"https://jonder.jobs/agb"}]}}},o=n,r=(a("d8b5"),a("2877")),c=a("6544"),l=a.n(c),u=a("8336"),d=a("5530"),p=(a("a9e3"),a("c7cd"),a("b5b6"),a("8dd9")),f=a("3a66"),v=a("d10f"),h=a("58df"),m=a("80d2"),g=Object(h["a"])(p["a"],Object(f["a"])("footer",["height","inset"]),v["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return Object(d["a"])(Object(d["a"])({},p["a"].options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return Object(d["a"])(Object(d["a"])({},p["a"].options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(m["g"])(t),left:Object(m["g"])(this.computedLeft),right:Object(m["g"])(this.computedRight),bottom:Object(m["g"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,e,this.$slots.default)}}),_=a("0fd9"),b=Object(r["a"])(o,s,i,!1,null,"9b6065b6",null);e["a"]=b.exports;l()(b,{VBtn:u["a"],VFooter:g,VRow:_["a"]})},"6e2f":function(t,e,a){t.exports=a.p+"img/profile-placeholder.1225968c.png"},"6f32":function(t,e,a){var s={"./briefcase.svg":"24c9","./colView.svg":"0b62","./download.svg":"f28e","./equal-rights.svg":"2119","./listView.svg":"45c3","./medal.svg":"81c3","./three-dots.svg":"0960","./top-rated.svg":"ca84d"};function i(t){var e=n(t);return a(e)}function n(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}i.keys=function(){return Object.keys(s)},i.resolve=n,t.exports=i,i.id="6f32"},7277:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("dashboard-layout",[a("router-view")],1),a("footer-legal",{attrs:{white:!1}})],1)},i=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.user?s("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[s("v-row",{staticClass:"flex-shrink-0 flex-grow-0 search-holder"},[s("v-col",{attrs:{cols:"4"}},[s("router-link",{staticClass:"logo",attrs:{to:"/dashboard"}},[s("v-img",{attrs:{src:a("cd26"),"max-width":"128px"}})],1)],1),s("v-col",{attrs:{cols:"4"}}),s("v-col",{staticClass:"text-right",attrs:{cols:"4"}},[s("div",{staticClass:"dashboard-avatar"},[s("span",{staticClass:"d-none d-md-inline"},[t._v(" "+t._s(t.$t("hello"))+", ")]),s("span",{staticClass:"name d-none d-md-inline"},[t._v(t._s(t.getUserFullName))]),s("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[s("v-avatar",t._g({attrs:{color:"primary",size:"38"}},a),[t.user.profile_img?s("v-img",{attrs:{src:t.user.profile_img}}):s("span",{staticClass:"white--text"},[t._v(" "+t._s(t.$store.getters["user/getUserInitials"])+" ")])],1)]}}],null,!1,2598091170)},[s("v-list",{staticClass:"nav"},[s("v-list-item",{on:{click:function(e){return t.$router.push({name:"Profile"})}}},[t._v(" "+t._s(t.$t("profile"))+" ")]),s("v-list-item",{on:{click:function(e){return t.$router.push({name:"Logout"})}}},[t._v(" "+t._s(t.$t("logout"))+" ")])],1)],1)],1)])],1),t.profile?s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("v-btn",{staticClass:"back-btn dark-blue",attrs:{color:"primary"},on:{click:function(e){return t.navigateTo("/dashboard")}}},[t._v(" "+t._s(t.$t("backToHome"))+" ")])],1)],1):t._e(),s("v-row",{staticClass:"full-h ma-0"},["PersonalityTestJobseeker"!==t.$route.name?s("v-col",{staticClass:"navigation col-12 col-md-4 col-xl-3"},[t.profile?s("nav",{staticClass:"dashboard-navigation pl-0 pl-md-8"},[s("div",{staticClass:"settings-nav"},[s("div",{staticClass:"settings-title"},[t._v(" "+t._s(t.$t("profileSettings"))+" ")]),s("div",{staticClass:"submenu"},[s("div",{staticClass:"nav-item",on:{click:function(e){return t.scrollToSection("personalInfo")}}},[t._v(" "+t._s(t.$t("personalInformation"))+" "),s("v-icon",[t._v(" mdi-chevron-right ")])],1),s("div",{staticClass:"nav-item",on:{click:function(e){return t.scrollToSection("roleAndBranche")}}},[t._v(" "+t._s(t.$t("positionAndIndustry"))+" "),s("v-icon",[t._v(" mdi-chevron-right ")])],1),s("div",{staticClass:"nav-item",on:{click:function(e){return t.scrollToSection("lookingFor")}}},[t._v(" "+t._s(t.$t("searchingFor"))+" "),s("v-icon",[t._v(" mdi-chevron-right ")])],1),s("div",{staticClass:"nav-item",on:{click:function(e){return t.scrollToSection("experienceAndEducation")}}},[t._v(" "+t._s(t.$t("experiences"))+" "),s("v-icon",[t._v(" mdi-chevron-right ")])],1),s("div",{staticClass:"nav-item",on:{click:function(e){return t.scrollToSection("documents")}}},[t._v(" "+t._s(t.$t("documents"))+" "),s("v-icon",[t._v(" mdi-chevron-right ")])],1),s("div",{staticClass:"nav-item",on:{click:function(e){return t.scrollToSection("invoices")}}},[t._v(" "+t._s(t.$t("billing"))+" "),s("v-icon",[t._v(" mdi-chevron-right ")])],1),s("div",{staticClass:"nav-item",on:{click:function(e){return t.scrollToSection("paymentMethod")}}},[t._v(" "+t._s(t.$t("invoicing"))+" "),s("v-icon",[t._v(" mdi-chevron-right ")])],1),s("div",{staticClass:"nav-item",on:{click:function(e){return t.scrollToSection("changePassword")}}},[t._v(" "+t._s(t.$t("changePassword"))+" "),s("v-icon",[t._v(" mdi-chevron-right ")])],1),s("div",{staticClass:"nav-item",on:{click:function(e){return t.scrollToSection("upgradeAccount")}}},[t._v(" "+t._s(t.$t("upgradeAccount"))+" "),s("v-icon",[t._v(" mdi-chevron-right ")])],1)])])]):t._e(),t.dashboard?s("div",{staticClass:"dashboard-about"},[s("v-row",{staticClass:"full-h ma-0"},[s("div",{staticClass:"top-info pb-0",staticStyle:{"border-bottom":"1px solid #E9E9E9"}},[s("div",{staticClass:"profile-image"},[t.user.profile_img?s("v-img",{staticClass:"profile-image-user",attrs:{src:t.user.profile_img}}):s("v-img",{staticClass:"profile-image-user",attrs:{src:a("6e2f")}}),t.userPlan.length?s("div",{staticClass:"profile-image-badge-icons"},t._l(t.userPlan,(function(e,i){return s("v-img",{key:i,staticClass:"profile-image-badge-icon",style:[t.userPlan.length>1?{margin:"0 -5px"}:null],attrs:{src:a("6f32")("./"+(11===e.id?"top-rated":"medal")+".svg")}})})),1):t._e()],1),s("span",{staticClass:"dash-name"},[t._v(t._s(t.getUserFullName))]),s("router-link",{staticClass:"settings-link",attrs:{to:"/dashboard/profile"}},[t._v(" "+t._s(t.$t("profileSettings"))+" ")]),t.userPlan.length?t._l(t.userPlan,(function(t,e){return s("DashboardActivePlan",{key:e,attrs:{"user-plan":t}})})):t._e()],2),t.messagesLoaded&&t.conversations.length&&!t.userPlan.length?s("UpgradeAccountBox",{staticClass:"mt-7",attrs:{small:""}}):t._e(),s("div",{staticClass:"top-info mt-7"},[s("span",{staticClass:"about-info"},[t._v(t._s(t.$t("searchStatus")))]),s("p",{staticClass:"about-text"},t._l(t.userEmploymentType,(function(e,a){return s("span",{key:a},[t._v(" "+t._s(t.$t(""+e))+" ")])})),0),s("span",{staticClass:"about-info"},[t._v("Position")]),s("p",{staticClass:"about-text"},[t._v(t._s(t.user.current_position))]),s("span",{staticClass:"about-info"},[t._v(t._s(t.$t("currentIndustry")))]),s("p",{staticClass:"about-text"},[t._v(t._s(t.getBranche))]),s("span",{staticClass:"about-info"},[t._v(t._s(t.$t("cityAndAddress"))+" ")]),s("p",{staticClass:"about-text"},[t._v(t._s(t.user.city))]),s("span",{staticClass:"about-info"},[t._v(" "+t._s(t.$t("experiences"))+" ")]),s("CardActionableList",{staticClass:"mb-5",attrs:{type:"Experience","view-only":""}}),s("span",{staticClass:"about-info"},[t._v(" "+t._s(t.$t("education"))+" ")]),s("CardActionableList",{attrs:{type:"Education","view-only":""}})],1),s("div",{staticClass:"top-info"},[s("span",{staticClass:"about-info"},[t._v(" "+t._s(t.$t("documents"))+" ")]),t.user.cv?s("div",{staticClass:"row mt-1"},[s("div",{staticClass:"col-auto"},[s("a",{attrs:{href:t.user.cv,target:"_blank"}},[s("img",{attrs:{src:a("4e08")}})])]),s("div",{staticClass:"col my-auto font-weight-bold"},[t._v(" CV ")])]):t._e(),t.user.qualifications?s("div",{staticClass:"row mt-1"},[s("div",{staticClass:"col-auto"},[s("a",{attrs:{href:""+t.user.qualifications,target:"_blank"}},[s("img",{attrs:{src:a("4e08")}})])]),s("div",{staticClass:"col my-auto font-weight-bold"},[t._v(" "+t._s(t.$t("qualifications"))+" ")])]):t._e(),t.user.resume?s("div",{staticClass:"row mt-1"},[s("div",{staticClass:"col-auto"},[s("a",{attrs:{href:t.user.resume,target:"_blank"}},[s("img",{attrs:{src:a("4e08")}})])]),s("div",{staticClass:"col my-auto font-weight-bold"},[t._v(" "+t._s(t.$t("curriculumVitae"))+" ")])]):t._e()])],1)],1):t._e()]):t._e(),s("v-col",{staticClass:"main col-12 col-md-8 col-xl-9",class:{"col-md-12 col-xl-12":"PersonalityTestJobseeker"===t.$route.name}},[s("v-container",{staticClass:"d-flex flex-column",attrs:{fluid:""}},[t._t("default")],2)],1)],1)],1):t._e()},o=[],r=a("1da1"),c=a("5530"),l=(a("96cf"),a("b0c0"),a("1276"),a("ac1f"),a("a15b"),a("498a"),a("841c"),a("2f62")),u=a("2ef0"),d=a("cc1f"),p=a("aeaf"),f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dashboard-active-plan"},[s("div",{staticClass:"image-wrapper"},[s("v-img",{staticClass:"img-icon",attrs:{src:a("6f32")("./"+(11===t.userPlan.id?"top-rated":"medal")+".svg")}})],1),s("div",{staticClass:"info-wrapper"},[11===t.userPlan.id?s("div",{staticClass:"info-title"},[t._v(t._s(t.remainingDays)+" "+t._s(t.$t("remainingDays")))]):s("div",{staticClass:"info-title"},[t._v(t._s(t.$t("success"))+"!")]),s("div",{staticClass:"info-desscription"},[t._v(" "+t._s(t.userPlan.plan_description)+" ")])])])},v=[],h={name:"DashboardActivePlan",props:{userPlan:{type:Object,required:!0}},computed:{remainingDays:function(){var t=(new Date).getTime(),e=new Date(this.userPlan.end_timestamp).getTime();return Math.floor((e-t)/864e5)}}},m=h,g=(a("4b50"),a("2877")),_=a("6544"),b=a.n(_),C=a("adda"),y=Object(g["a"])(m,f,v,!1,null,"640d5ee0",null),$=y.exports;b()(y,{VImg:C["a"]});var w={components:{DashboardActivePlan:$,CardActionableList:d["a"],UpgradeAccountBox:p["a"]},data:function(){return{searchString:null,searchLoading:!1,searchItems:[],search:null}},computed:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(l["c"])("user",["user","getUserFullName","getUserInitials","userPlan"])),Object(l["c"])("chat",["conversations","messagesLoaded"])),{},{profile:function(){return"Profile"===this.$route.name},dashboard:function(){return"/dashboard"===this.$route.path||"/dashboard/"===this.$route.path},userEmploymentType:function(){return this.user.looking_for_employment_type.split(",")},getBranche:function(){var t=this,e=Object(u["map"])(this.user.branche.split(","),(function(e){return t.$t(e)}));return e.join()}}),methods:Object(c["a"])(Object(c["a"])({},Object(l["b"])("user",["searchUsers"])),{},{handleSearch:Object(u["debounce"])(function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.searchUsers(e);case 2:this.searchItems=t.sent,this.searchLoading=!1;case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),2e3),scrollToSection:function(t){document.getElementById(t).scrollIntoView({behavior:"smooth",block:"center"})},navigateTo:function(t){this.$router.push(t)}}),watch:{search:function(t){this.searchLoading=!0,t&&t.trim().length>0&&t!==this.searchString&&this.handleSearch(t)},searchString:function(t){var e=this;t&&(this.$router.push("/dashboard/profile/view/"+t),setTimeout((function(){e.search=null,e.searchString=null})))}}},x=w,k=a("8212"),P=a("8336"),j=a("62ad"),O=a("a523"),V=a("132d"),B=a("8860"),S=a("da13"),A=a("e449"),I=a("0fd9"),U=Object(g["a"])(x,n,o,!1,null,null,null),E=U.exports;b()(U,{VAvatar:k["a"],VBtn:P["a"],VCol:j["a"],VContainer:O["a"],VIcon:V["a"],VImg:C["a"],VList:B["a"],VListItem:S["a"],VMenu:A["a"],VRow:I["a"]});var D=a("57a1"),L={name:"DashboardWrap",components:{DashboardLayout:E,FooterLegal:D["a"]}},T=L,M=Object(g["a"])(T,s,i,!1,null,null,null);e["default"]=M.exports},"77d2":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{staticClass:"dialog",attrs:{persistent:"",width:t.$store.getters.screenSize?"95%":"750px","max-width":"750px","overlay-color":"#0253B3","overlay-opacity":"0.3"},on:{"click:outside":function(e){return t.close("abort")}},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[s("v-card",{staticClass:"rounded-lg wrap upgrade-dialog modal-plan",attrs:{flat:""}},[s("div",{staticClass:"modal-title"},[t._v(" "+t._s(t.$t("choosePlan"))+" ")]),t._l(t.data,(function(e){return s("div",{key:e.id,staticClass:"options",class:{deactive:t.userPlan.length&&t.isPlanActive(e.id),active:t.form.active_plan===e.id}},["jobseeker_paln"===e.plan_type?s("v-btn",{staticClass:"upgrade-option justify-start pa-2",attrs:{color:t.form.active_plan===e.id?"primary":"","min-height":"104",height:t.$store.getters.screenSize<500?"auto":"104"},on:{click:function(a){(!t.userPlan.length||!t.isPlanActive(e.id))&&(t.form.active_plan=e.id,t.savePlanId(e.id))}}},[s("v-img",{staticClass:"upgrade-icon",attrs:{src:a("ca84d")}}),t.userPlan.length&&t.isPlanActive(e.id)?s("UserPlanDescription",{staticClass:"user-plan-desc",attrs:{plan:t.getUserPlan(e.id)[0]}}):s("div",{staticClass:"upgrade-default"},[s("span",{staticClass:"upgrade-title"},[t._v(" "+t._s(e.name)+" ")]),s("p",{staticClass:"upgrade-text"},[t._v(" "+t._s(e.plan_description)+" ")]),s("span",{staticClass:"updgrade-price"},[t._v(t._s(e.price)+"€")])])],1):t._e()],1)})),s("div",{staticClass:"buttons"},[s("v-btn",{staticClass:"mt-16 font-weight-medium upgrade-btn",staticStyle:{"margin-right":"20px"},attrs:{height:"56"},on:{click:t.close}},[t._v(" "+t._s(t.$t("cancel"))+" ")]),s("v-btn",{staticClass:"mt-16 font-weight-medium upgrade-btn dark-blue",attrs:{loading:t.isLoading,color:"primary",height:"56",width:"178"},on:{click:function(e){return t.next()}}},[t._v(" "+t._s(t.$t("confirmOption"))+" ")])],1)],2)],1)},i=[],n=a("5530"),o=a("1da1"),r=(a("d3b7"),a("96cf"),a("4360")),c=a("bf8a"),l=a("2f62"),u=a("cf81"),d={name:"UpgradePlanModal",components:{UserPlanDescription:u["a"]},props:{active:{type:Boolean,default:!1},type:{type:String,default:"ok"},edit:{type:[Object,Boolean]}},data:function(){return{data:"",isLoading:!1,planId:null,stripeId:null,form:{active_plan:""}}},created:function(){this.edit&&this.populate(),this.data=this.$store.getters["user/plans"]("jobseeker_paln")},methods:{close:function(t){this.$emit("close",t)},savePlanId:function(t){this.planId=t},processStripe:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.stripeId&&t.stripeId.length>5)){e.next=8;break}return t.isLoading=!0,e.next=4,Object(c["a"])("pk_test_51J2VxwKKMFZvcsxu4VEDQetraMaOKVF6DAjvkSgkNPHMXktPW3ibXXEgRuYBLepBo6JvF4dWxeIvspapIbgVel2R00tehUJtX8");case 4:a=e.sent,a.redirectToCheckout({sessionId:t.stripeId}),e.next=9;break;case 8:t.isLoading=!1;case 9:case"end":return e.stop()}}),e)})))()},next:function(){var t=this;this.planId&&this.planId>0?(this.isLoading=!0,this.$http.post("".concat("https://dev.api.jonder.devla.dev/api/v1","/plan"),{plan_id:this.planId,payment_method:"credit card"}).then((function(e){t.stripeId=e.data.data.id})).finally((function(){t.isLoading=!1,t.processStripe()}))):(alert("Please select the plan!"),this.isLoading=!1)},save:function(){this.edit?r["a"].dispatch("user/updateUser",{id:this.edit.id,payload:this.form}):console.log(),this.$emit("close",1)},populate:function(){this.form.active_plan=this.edit.active_plan}},computed:Object(n["a"])({},Object(l["c"])({userPlan:"user/userPlan",getUserPlan:"user/getUserPlan",isPlanActive:"user/isPlanActive"}))},p=d,f=(a("d0127"),a("2877")),v=a("6544"),h=a.n(v),m=a("8336"),g=a("b0af"),_=a("169a"),b=a("adda"),C=Object(f["a"])(p,s,i,!1,null,"c9c69b10",null);e["a"]=C.exports;h()(C,{VBtn:m["a"],VCard:g["a"],VDialog:_["a"],VImg:b["a"]})},"81c3":function(t,e,a){t.exports=a.p+"img/medal.324b801a.svg"},aeaf:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"full-w"},[t.modals.UpgradePlan.active?s("UpgradePlanModal",{attrs:{active:t.modals.UpgradePlan.active,edit:t.modals.UpgradePlan.edit},on:{close:function(e){return t.toggleModal("UpgradePlan")}}}):t._e(),s("div",{staticClass:"upgrade-box"},[s("v-img",{staticClass:"badge",attrs:{src:a("ca84d"),width:t.small?"40":null}}),s("div",{staticClass:"title-description-wrapper",class:{"d-flex":!t.small},staticStyle:{"font-size":"13px","justify-content":"space-between"}},[s("div",{staticClass:"upgrade-title"},[t._v(" "+t._s(t.$t("premiumSuggestion"))+" ")]),s("div",[t._v(" "+t._s(t.$t("beOnTheTop"))+" ")])]),s("div",{staticClass:"link-upgrade-wrapper",class:{"mt-2":t.small}},[s("CardActionableList",{attrs:{type:"UpgradePlan"},on:{edit:function(e){return t.activateEdit("UpgradePlan",e)}}}),s("span",{staticClass:"link-upgrade",staticStyle:{color:"#55F481",width:"100%",cursor:"pointer"},on:{click:function(e){return t.toggleModal("UpgradePlan")}}},[t._v(" "+t._s(t.$t("upgradeNow"))+" ")])],1)],1)],1)},i=[],n=a("77d2"),o=a("cc1f"),r={props:{small:{type:Boolean,default:!1}},methods:{toggleModal:function(t){this.modals[t].edit=!1,this.modals[t].active=!this.modals[t].active},activateEdit:function(t,e){this.toggleModal(t),this.modals[t].edit=e}},components:{UpgradePlanModal:n["a"],CardActionableList:o["a"]},mounted:function(){null==this.$store.getters["user/userPlans"]&&this.$store.dispatch("user/fetchPlans")},data:function(){return{modals:{UpgradePlan:{active:!1,edit:!1,component:n["a"]}},fileActions:{UpgradePlan:["edit","delete"]}}}},c=r,l=(a("0b53"),a("2877")),u=a("6544"),d=a.n(u),p=a("adda"),f=Object(l["a"])(c,s,i,!1,null,null,null);e["a"]=f.exports;d()(f,{VImg:p["a"]})},b5b6:function(t,e,a){},bd91:function(t,e,a){},ca84d:function(t,e,a){t.exports=a.p+"img/top-rated.55933fd5.svg"},cd26:function(t,e,a){t.exports=a.p+"img/jonder-logo.96ece7f8.svg"},cda4:function(t,e,a){},cf21:function(t,e,a){},cf81:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"plan-description",class:{"border-plan":t.borderPlan}},[a("h3",[t._v(t._s(t.plan.name))]),a("div",[t._v(" "+t._s(t.plan.price)+"€ / "+t._s(t.plan.days_valid)+" "+t._s(t.$t("daysValid"))+" ")]),a("div",[t._v(" "+t._s(t.$t("renewsOn"))+" "+t._s(t._f("moment")(t.plan.start_timestamp,"DD MMM, YYYY"))+" ")]),a("div",[t._v(" "+t._s(t.$t("validUntil"))+" "+t._s(t._f("moment")(t.plan.end_timestamp,"DD MMM, YYYY"))+" ")]),t.paymentInfo||t.paymentAction?a("div",{staticClass:"payment-info mt-6 pt-4"},[t.paymentInfo&&"CompanyPackagesPricing"!==t.$route.name?a("span",{staticClass:"carten-abenden",on:{click:function(e){return t.$router.push({name:"CompanyPackagesPricing"})}}},[t._v(" "+t._s(t.$t("changePackage"))+" ")]):t._e(),a("v-dialog",{staticClass:"payment-action",attrs:{width:"500","overlay-color":"#0253B3","overlay-opacity":"0.3"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,i=e.attrs;return[a("v-btn",t._g(t._b({directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],staticClass:"font-weight-medium main-text",attrs:{text:"",plain:"",color:"inherit"}},"v-btn",i,!1),s),[t._v(" "+t._s(t.$t("cancelSubscription"))+" ")])]}}],null,!1,1271017619),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{staticClass:"pa-7",staticStyle:{"border-radius":"16px"}},[a("h1",{staticClass:"mb-4 text-center",staticStyle:{"font-size":"28px"}},[t._v(" "+t._s(t.$t("areYouSure"))+" ")]),a("v-form",{ref:"form",attrs:{action:"#"},on:{submit:function(e){return e.preventDefault(),t.submit(e)}},model:{value:t.isValid,callback:function(e){t.isValid=e},expression:"isValid"}},[a("p",{staticClass:"text-center"},[t._v(" "+t._s(t.$t("areYouSureCancelSubscription"))+" ")]),a("ResponseAlert",{attrs:{response:t.formResponse}}),a("div",{staticClass:"text-center mt-3"},[a("v-btn",{staticClass:"font-weight-medium ",attrs:{height:"48"},on:{click:function(e){t.dialog=!1,t.$refs.form.reset()}}},[t._v(" "+t._s(t.$t("cancelOption"))+" ")]),a("v-btn",{staticClass:"ml-3 font-weight-medium ",attrs:{type:"submit",color:"primary",height:"48",disabled:!t.isValid}},[t._v(" "+t._s(t.$t("confirmOption"))+" ")])],1)],1)],1)],1)],1):t._e()])},i=[],n={name:"UserPlanDescription",props:{paymentInfo:{type:Boolean},paymentAction:{type:Boolean,default:!1},borderPlan:{type:Boolean,default:!1},plan:{type:Object,required:!0}},data:function(){return{dialog:!1,isValid:!1,formResponse:{}}},methods:{submit:function(){this.$store.dispatch("user/cancelSubscription",this.plan.id),this.dialog=!1}}},o=n,r=(a("d7ea"),a("2877")),c=a("6544"),l=a.n(c),u=a("8336"),d=a("b0af"),p=a("169a"),f=a("4bd4"),v=a("269a"),h=a.n(v),m=a("5607"),g=Object(r["a"])(o,s,i,!1,null,null,null);e["a"]=g.exports;l()(g,{VBtn:u["a"],VCard:d["a"],VDialog:p["a"],VForm:f["a"]}),h()(g,{Ripple:m["a"]})},d0127:function(t,e,a){"use strict";a("cf21")},d10f:function(t,e,a){"use strict";var s=a("2b0e");e["a"]=s["a"].extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame((function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0}))}})},d7ea:function(t,e,a){"use strict";a("03e5")},d8b5:function(t,e,a){"use strict";a("51fc")},f28e:function(t,e,a){t.exports=a.p+"img/download.58820453.svg"}}]);
//# sourceMappingURL=Dashboard.300b870e.js.map