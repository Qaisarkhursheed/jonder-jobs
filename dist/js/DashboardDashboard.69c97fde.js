(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["DashboardDashboard"],{"03e5":function(t,e,a){},"0745":function(t,e,a){"use strict";a("b0b6")},"0960":function(t,e,a){t.exports=a.p+"img/three-dots.55accfd8.svg"},"0b53":function(t,e,a){"use strict";a("bd91")},"0b62":function(t,e,a){t.exports=a.p+"img/colView.8629274f.svg"},2119:function(t,e,a){t.exports=a.p+"img/equal-rights.6554eeac.svg"},"24c9":function(t,e,a){t.exports=a.p+"img/briefcase.68291d7d.svg"},"269a":function(t,e){t.exports=function(t,e){var a="function"===typeof t.exports?t.exports.extendOptions:t.options;for(var s in"function"===typeof t.exports&&(a.directives=t.exports.options.directives),a.directives=a.directives||{},e)a.directives[s]=a.directives[s]||e[s]}},"45c3":function(t,e,a){t.exports=a.p+"img/listView.9de5d888.svg"},"5c3a8":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.user?s("v-row",{staticClass:"layout-content mt-4 flex-shrink-1 flex-grow-1"},[t.messagesLoaded&&t.conversations.length?s("v-col",{attrs:{cols:"cols"}},[s("Chat")],1):t._e(),t.$store.getters["chat/selectedConversation"]?t._e():s("v-col",{class:{"d-flex flex-column my-auto":!t.showUpgradeBox},attrs:{cols:"cols"}},[s("div",{staticClass:"user-name"},[t._v(" "+t._s(t.$t("hello"))+", "),s("span",{staticStyle:{color:"#0253B3"}},[t._v(" "+t._s(t.user.first_name)+" "+t._s(t.user.last_name)+" ")])]),s("div",{staticClass:"no-msg"},[t._v(" "+t._s(t.conversations.length?""+t.$t("openChat"):""+t.$t("noMessages"))+" ")]),t.showUpgradeBox?s("UpgradeAccountBox",{staticClass:"dashboard-upgrade-account-box"}):t._e(),s("div",{staticClass:"mt-5"},[s("v-img",{attrs:{src:a("793f"),"max-width":"500"}})],1)],1)],1):t._e()],1)},n=[],i=a("5530"),r=a("2f62"),o=a("aeaf"),c=a("bcd3"),l={name:"Dashboard",created:function(){this.getAllConversations({limit:2})},computed:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(r["c"])("user",["user"])),Object(r["c"])("chat",["conversations","messagesLoaded"])),{},{showUpgradeBox:function(){return!(this.messagesLoaded&&this.conversations.length)}}),methods:Object(i["a"])({},Object(r["b"])("chat",["getAllConversations"])),components:{Chat:c["default"],UpgradeAccountBox:o["a"]}},d=l,p=a("2877"),u=a("6544"),v=a.n(u),f=a("62ad"),m=a("adda"),g=a("0fd9"),h=Object(p["a"])(d,s,n,!1,null,null,null);e["default"]=h.exports;v()(h,{VCol:f["a"],VImg:m["a"],VRow:g["a"]})},"6f32":function(t,e,a){var s={"./briefcase.svg":"24c9","./colView.svg":"0b62","./download.svg":"f28e","./equal-rights.svg":"2119","./listView.svg":"45c3","./medal.svg":"81c3","./three-dots.svg":"0960","./top-rated.svg":"ca84d"};function n(t){var e=i(t);return a(e)}function i(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=i,t.exports=n,n.id="6f32"},"77d2":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{staticClass:"dialog",attrs:{persistent:"","max-width":"750px","overlay-color":"#0253B3","overlay-opacity":"0.3"},on:{"click:outside":function(e){return t.close("abort")}},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[s("v-card",{staticClass:"wrap upgrade-dialog",attrs:{flat:""}},[s("div",{staticClass:"mb-4",staticStyle:{"font-size":"28px","font-weight":"600"}},[t._v(" "+t._s(t.$t("choosePlan"))+" ")]),t._l(t.data,(function(e,n){return s("div",{key:e.id,staticClass:"options mb-5",class:{deactive:t.userPlan.length&&t.isPlanActive(e.id),active:t.form.active_plan===e.id}},["jobseeker_paln"===e.plan_type?s("v-btn",{staticClass:"upgrade-option text-left pa-5",attrs:{"min-height":"104",block:""},on:{click:function(a){return t.selectPlan(e)}}},[s("v-row",[s("v-col",{attrs:{cols:"auto"}},[s("v-img",{staticClass:"upgrade-icon mr-0",attrs:{src:a("6f32")("./"+(0===n?"top-rated":"medal")+".svg")}})],1),s("v-col",{attrs:{cols:"cols"}},[t.userPlan.length&&t.isPlanActive(e.id)?s("UserPlanDescription",{staticClass:"user-plan-desc",attrs:{plan:t.getUserPlan(e.id)[0]}}):[s("span",{staticClass:"upgrade-title"},[t._v(" "+t._s(e.name)+" ")]),s("p",{staticClass:"upgrade-text mt-2 mb-0"},[t._v(" "+t._s(e.plan_description)+" ")])]],2),t.userPlan.length&&t.isPlanActive(e.id)?t._e():s("v-col",{attrs:{cols:"auto"}},[s("span",{staticClass:"upgrade-price primary--text"},[t._v(t._s(e.price)+"€")])])],1)],1):t._e()],1)})),s("div",{staticClass:"text-right"},[s("v-btn",{staticClass:"mr-4",attrs:{height:"56",text:""},on:{click:t.close}},[t._v(" "+t._s(t.$t("cancel"))+" ")]),s("v-btn",{staticClass:"px-10",attrs:{disabled:!t.planId,loading:t.isLoading,color:"primary",height:"56"},on:{click:function(e){return t.next()}}},[t._v(" "+t._s(t.$t("continue"))+" ")])],1)],2)],1)},n=[],i=a("5530"),r=a("1da1"),o=(a("d3b7"),a("96cf"),a("4360")),c=a("bf8a"),l=a("2f62"),d=a("cf81"),p={components:{UserPlanDescription:d["a"]},props:{active:{type:Boolean,default:!1},type:{type:String,default:"ok"},edit:{type:[Object,Boolean]}},data:function(){return{data:"",isLoading:!1,planId:null,stripeId:null,form:{active_plan:""}}},created:function(){this.edit&&this.populate(),this.data=this.$store.getters["user/plans"]("jobseeker_paln")},methods:{close:function(t){this.$emit("close",t)},selectPlan:function(t){this.userPlan.length&&this.isPlanActive(t.id)||(this.form.active_plan=t.id,this.planId=t.id)},processStripe:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.stripeId&&t.stripeId.length>5)){e.next=8;break}return t.isLoading=!0,e.next=4,Object(c["a"])("pk_test_51J2VxwKKMFZvcsxu4VEDQetraMaOKVF6DAjvkSgkNPHMXktPW3ibXXEgRuYBLepBo6JvF4dWxeIvspapIbgVel2R00tehUJtX8");case 4:a=e.sent,a.redirectToCheckout({sessionId:t.stripeId}),e.next=9;break;case 8:t.isLoading=!1;case 9:case"end":return e.stop()}}),e)})))()},next:function(){var t=this;this.isLoading=!0,this.$http.post("".concat("https://dev.api.jonder.devla.dev/api/v1","/plan"),{plan_id:this.planId,payment_method:"credit card"}).then((function(e){t.stripeId=e.data.data.id})).finally((function(){t.isLoading=!1,t.processStripe()}))},save:function(){this.edit?o["a"].dispatch("user/updateUser",{id:this.edit.id,payload:this.form}):console.log(),this.$emit("close",1)},populate:function(){this.form.active_plan=this.edit.active_plan}},computed:Object(i["a"])({},Object(l["c"])({userPlan:"user/userPlan",getUserPlan:"user/getUserPlan",isPlanActive:"user/isPlanActive"}))},u=p,v=(a("0745"),a("2877")),f=a("6544"),m=a.n(f),g=a("8336"),h=a("b0af"),b=a("62ad"),_=a("169a"),w=a("adda"),x=a("0fd9"),y=Object(v["a"])(u,s,n,!1,null,"43dd0240",null);e["a"]=y.exports;m()(y,{VBtn:g["a"],VCard:h["a"],VCol:b["a"],VDialog:_["a"],VImg:w["a"],VRow:x["a"]})},"793f":function(t,e,a){t.exports=a.p+"img/rafiki.db887e80.svg"},"81c3":function(t,e,a){t.exports=a.p+"img/medal.240909b4.svg"},aeaf:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"full-w"},[t.modals.UpgradePlan.active?s("UpgradePlanModal",{attrs:{active:t.modals.UpgradePlan.active,edit:t.modals.UpgradePlan.edit},on:{close:function(e){return t.toggleModal("UpgradePlan")}}}):t._e(),s("div",{staticClass:"upgrade-box"},[s("v-img",{staticClass:"badge",attrs:{src:a("ca84d"),width:t.small?"40":null}}),s("div",{staticClass:"title-description-wrapper",class:{"d-flex":!t.small},staticStyle:{"font-size":"13px","justify-content":"space-between"}},[s("div",{staticClass:"upgrade-title"},[t._v(" "+t._s(t.$t("premiumSuggestion"))+" ")]),s("div",[t._v(" "+t._s(t.$t("beOnTheTop"))+" ")])]),s("div",{staticClass:"link-upgrade-wrapper",class:{"mt-2":t.small}},[s("CardActionableList",{attrs:{type:"UpgradePlan"},on:{edit:function(e){return t.activateEdit("UpgradePlan",e)}}}),s("span",{staticClass:"link-upgrade",staticStyle:{color:"#55F481",width:"100%",cursor:"pointer"},on:{click:function(e){return t.toggleModal("UpgradePlan")}}},[t._v(" "+t._s(t.$t("upgradeNow"))+" ")])],1)],1)],1)},n=[],i=a("77d2"),r=a("cc1f"),o={props:{small:{type:Boolean,default:!1}},methods:{toggleModal:function(t){this.modals[t].edit=!1,this.modals[t].active=!this.modals[t].active},activateEdit:function(t,e){this.toggleModal(t),this.modals[t].edit=e}},components:{UpgradePlanModal:i["a"],CardActionableList:r["a"]},mounted:function(){null==this.$store.getters["user/userPlans"]&&this.$store.dispatch("user/fetchPlans")},data:function(){return{modals:{UpgradePlan:{active:!1,edit:!1,component:i["a"]}},fileActions:{UpgradePlan:["edit","delete"]}}}},c=o,l=(a("0b53"),a("2877")),d=a("6544"),p=a.n(d),u=a("adda"),v=Object(l["a"])(c,s,n,!1,null,null,null);e["a"]=v.exports;p()(v,{VImg:u["a"]})},b0b6:function(t,e,a){},bd91:function(t,e,a){},bf8a:function(t,e,a){"use strict";a.d(e,"a",(function(){return f}));var s="https://js.stripe.com/v3",n=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,i="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",r=function(){for(var t=document.querySelectorAll('script[src^="'.concat(s,'"]')),e=0;e<t.length;e++){var a=t[e];if(n.test(a.src))return a}return null},o=function(t){var e=t&&!t.advancedFraudSignals?"?advancedFraudSignals=false":"",a=document.createElement("script");a.src="".concat(s).concat(e);var n=document.head||document.body;if(!n)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return n.appendChild(a),a},c=function(t,e){t&&t._registerWrapper&&t._registerWrapper({name:"stripe-js",version:"1.16.0",startTime:e})},l=null,d=function(t){return null!==l||(l=new Promise((function(e,a){if("undefined"!==typeof window)if(window.Stripe&&t&&console.warn(i),window.Stripe)e(window.Stripe);else try{var s=r();s&&t?console.warn(i):s||(s=o(t)),s.addEventListener("load",(function(){window.Stripe?e(window.Stripe):a(new Error("Stripe.js not available"))})),s.addEventListener("error",(function(){a(new Error("Failed to load Stripe.js"))}))}catch(n){return void a(n)}else e(null)}))),l},p=function(t,e,a){if(null===t)return null;var s=t.apply(void 0,e);return c(s,a),s},u=Promise.resolve().then((function(){return d(null)})),v=!1;u["catch"]((function(t){v||console.warn(t)}));var f=function(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];v=!0;var s=Date.now();return u.then((function(t){return p(t,e,s)}))}},ca84d:function(t,e,a){t.exports=a.p+"img/top-rated.69631fe4.svg"},cf81:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"plan-description",class:{"border-plan":t.borderPlan}},[a("h3",[t._v(t._s(t.plan.name))]),a("div",[t._v(" "+t._s(t.plan.price)+"€ / "+t._s(t.plan.days_valid)+" "+t._s(t.$t("daysValid"))+" ")]),a("div",[t._v(" "+t._s(t.$t("renewsOn"))+" "+t._s(t._f("moment")(t.plan.start_timestamp,"DD MMM, YYYY"))+" ")]),a("div",[t._v(" "+t._s(t.$t("validUntil"))+" "+t._s(t._f("moment")(t.plan.end_timestamp,"DD MMM, YYYY"))+" ")]),t.paymentInfo||t.paymentAction?a("div",{staticClass:"payment-info mt-6 pt-4"},[t.paymentInfo&&"CompanyPackagesPricing"!==t.$route.name?a("span",{staticClass:"carten-abenden",on:{click:function(e){return t.$router.push({name:"CompanyPackagesPricing"})}}},[t._v(" "+t._s(t.$t("changePackage"))+" ")]):t._e(),a("v-dialog",{staticClass:"payment-action",attrs:{width:"500","overlay-color":"#0253B3","overlay-opacity":"0.3"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,n=e.attrs;return[a("v-btn",t._g(t._b({directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],staticClass:"font-weight-medium main-text",attrs:{text:"",plain:"",color:"inherit"}},"v-btn",n,!1),s),[t._v(" "+t._s(t.$t("cancelSubscription"))+" ")])]}}],null,!1,1271017619),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("h1",{staticClass:"mb-4 text-center",staticStyle:{"font-size":"28px"}},[t._v(" "+t._s(t.$t("areYouSure"))+" ")]),a("v-form",{ref:"form",attrs:{action:"#"},on:{submit:function(e){return e.preventDefault(),t.submit(e)}},model:{value:t.isValid,callback:function(e){t.isValid=e},expression:"isValid"}},[a("p",{staticClass:"text-center"},[t._v(" "+t._s(t.$t("areYouSureCancelSubscription"))+" ")]),a("ResponseAlert",{attrs:{response:t.formResponse}}),a("div",{staticClass:"text-center mt-3"},[a("v-btn",{staticClass:"font-weight-medium ",attrs:{height:"48"},on:{click:function(e){t.dialog=!1,t.$refs.form.reset()}}},[t._v(" "+t._s(t.$t("cancelOption"))+" ")]),a("v-btn",{staticClass:"ml-3 font-weight-medium ",attrs:{type:"submit",color:"primary",height:"48",disabled:!t.isValid}},[t._v(" "+t._s(t.$t("confirmOption"))+" ")])],1)],1)],1)],1)],1):t._e()])},n=[],i={name:"UserPlanDescription",props:{paymentInfo:{type:Boolean},paymentAction:{type:Boolean,default:!1},borderPlan:{type:Boolean,default:!1},plan:{type:Object,required:!0}},data:function(){return{dialog:!1,isValid:!1,formResponse:{}}},methods:{submit:function(){this.$store.dispatch("user/cancelSubscription",this.plan.id),this.dialog=!1}}},r=i,o=(a("d7ea"),a("2877")),c=a("6544"),l=a.n(c),d=a("8336"),p=a("b0af"),u=a("169a"),v=a("4bd4"),f=a("269a"),m=a.n(f),g=a("5607"),h=Object(o["a"])(r,s,n,!1,null,null,null);e["a"]=h.exports;l()(h,{VBtn:d["a"],VCard:p["a"],VDialog:u["a"],VForm:v["a"]}),m()(h,{Ripple:g["a"]})},d7ea:function(t,e,a){"use strict";a("03e5")},f28e:function(t,e,a){t.exports=a.p+"img/download.5bed3128.svg"}}]);
//# sourceMappingURL=DashboardDashboard.69c97fde.js.map