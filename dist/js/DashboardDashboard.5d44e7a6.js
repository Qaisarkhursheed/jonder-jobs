(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["DashboardDashboard"],{"0b53":function(t,e,a){"use strict";a("bd91")},3600:function(t,e,a){"use strict";a("90ac")},"5c3a8":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.user?n("v-row",{staticClass:"layout-content mt-4 flex-shrink-1 flex-grow-1"},[t.messagesLoaded&&t.conversations.length?n("v-col",{attrs:{cols:"cols"}},[n("Chat")],1):t._e(),t.$store.getters["chat/selectedConversation"]?t._e():n("v-col",{class:{"d-flex flex-column my-auto":!t.showUpgradeBox},attrs:{cols:"cols"}},[n("div",{staticClass:"user-name"},[t._v(" "+t._s(t.$t("hello"))+", "),n("span",{staticStyle:{color:"#0253B3"}},[t._v(" "+t._s(t.user.first_name)+" "+t._s(t.user.last_name)+" ")])]),n("div",{staticClass:"no-msg"},[t._v(" "+t._s(t.conversations.length?""+t.$t("openChat"):""+t.$t("noMessages"))+" ")]),t.showUpgradeBox?n("UpgradeAccountBox",{staticClass:"dashboard-upgrade-account-box"}):t._e(),n("div",{staticClass:"mt-5"},[n("v-img",{attrs:{src:a("793f"),"max-width":"500"}})],1)],1)],1):t._e()],1)},s=[],i=a("5530"),r=a("2f62"),o=a("aeaf"),c=a("bcd3"),l={name:"Dashboard",created:function(){this.getAllConversations({limit:2})},computed:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(r["c"])("user",["user"])),Object(r["c"])("chat",["conversations","messagesLoaded"])),{},{showUpgradeBox:function(){return!(this.messagesLoaded&&this.conversations.length)}}),methods:Object(i["a"])({},Object(r["b"])("chat",["getAllConversations"])),components:{Chat:c["default"],UpgradeAccountBox:o["a"]}},d=l,p=a("2877"),u=a("6544"),v=a.n(u),f=a("62ad"),m=a("adda"),g=a("0fd9"),h=Object(p["a"])(d,n,s,!1,null,null,null);e["default"]=h.exports;v()(h,{VCol:f["a"],VImg:m["a"],VRow:g["a"]})},"77d2":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{staticClass:"dialog",attrs:{persistent:"",width:t.$store.getters.screenSize?"95%":"750px","max-width":"750px","overlay-color":"#0253B3","overlay-opacity":"0.3"},on:{"click:outside":function(e){return t.close("abort")}},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("v-card",{staticClass:"rounded-lg wrap upgrade-dialog modal-plan",attrs:{flat:""}},[n("div",{staticClass:"modal-title"},[t._v(" "+t._s(t.$t("choosePlan"))+" ")]),t._l(t.data,(function(e){return n("div",{key:e.id,staticClass:"options",class:{deactive:t.userPlan.length&&t.isPlanActive(e.id),active:t.form.active_plan===e.id}},["jobseeker_paln"===e.plan_type?n("v-btn",{staticClass:"upgrade-option justify-start pa-2",attrs:{color:t.form.active_plan===e.id?"primary":"","min-height":"104",height:t.$store.getters.screenSize<500?"auto":"104"},on:{click:function(a){(!t.userPlan.length||!t.isPlanActive(e.id))&&(t.form.active_plan=e.id,t.savePlanId(e.id))}}},[n("v-img",{staticClass:"upgrade-icon",attrs:{src:a("ca84d")}}),t.userPlan.length&&t.isPlanActive(e.id)?n("UserPlanDescription",{staticClass:"user-plan-desc",attrs:{plan:t.getUserPlan(e.id)[0]}}):n("div",{staticClass:"upgrade-default"},[n("span",{staticClass:"upgrade-title"},[t._v(" "+t._s(e.name)+" ")]),n("p",{staticClass:"upgrade-text"},[t._v(" "+t._s(e.plan_description)+" ")]),n("span",{staticClass:"updgrade-price"},[t._v(t._s(e.price)+"€")])])],1):t._e()],1)})),n("div",{staticClass:"buttons"},[n("v-btn",{staticClass:"mt-16 font-weight-medium upgrade-btn",staticStyle:{"margin-right":"20px"},attrs:{height:"56"},on:{click:t.close}},[t._v(" "+t._s(t.$t("cancel"))+" ")]),n("v-btn",{staticClass:"mt-16 font-weight-medium upgrade-btn dark-blue",attrs:{loading:t.isLoading,color:"primary",height:"56",width:"178"},on:{click:function(e){return t.next()}}},[t._v(" "+t._s(t.$t("confirmOption"))+" ")])],1)],2)],1)},s=[],i=a("5530"),r=a("1da1"),o=(a("d3b7"),a("96cf"),a("4360")),c=a("bf8a"),l=a("2f62"),d=a("cf81"),p={name:"UpgradePlanModal",components:{UserPlanDescription:d["a"]},props:{active:{type:Boolean,default:!1},type:{type:String,default:"ok"},edit:{type:[Object,Boolean]}},data:function(){return{data:"",isLoading:!1,planId:null,stripeId:null,form:{active_plan:""}}},created:function(){this.edit&&this.populate(),this.data=this.$store.getters["user/plans"]("jobseeker_paln")},methods:{close:function(t){this.$emit("close",t)},savePlanId:function(t){this.planId=t},processStripe:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.stripeId&&t.stripeId.length>5)){e.next=8;break}return t.isLoading=!0,e.next=4,Object(c["a"])("pk_test_51J2VxwKKMFZvcsxu4VEDQetraMaOKVF6DAjvkSgkNPHMXktPW3ibXXEgRuYBLepBo6JvF4dWxeIvspapIbgVel2R00tehUJtX8");case 4:a=e.sent,a.redirectToCheckout({sessionId:t.stripeId}),e.next=9;break;case 8:t.isLoading=!1;case 9:case"end":return e.stop()}}),e)})))()},next:function(){var t=this;this.planId&&this.planId>0?(this.isLoading=!0,this.$http.post("".concat("https://dev.api.jonder.devla.dev/api/v1","/plan"),{plan_id:this.planId,payment_method:"credit card"}).then((function(e){t.stripeId=e.data.data.id})).finally((function(){t.isLoading=!1,t.processStripe()}))):(alert("Please select the plan!"),this.isLoading=!1)},save:function(){this.edit?o["a"].dispatch("user/updateUser",{id:this.edit.id,payload:this.form}):console.log(),this.$emit("close",1)},populate:function(){this.form.active_plan=this.edit.active_plan}},computed:Object(i["a"])({},Object(l["c"])({userPlan:"user/userPlan",getUserPlan:"user/getUserPlan",isPlanActive:"user/isPlanActive"}))},u=p,v=(a("d0127"),a("2877")),f=a("6544"),m=a.n(f),g=a("8336"),h=a("b0af"),_=a("169a"),b=a("adda"),w=Object(v["a"])(u,n,s,!1,null,"c9c69b10",null);e["a"]=w.exports;m()(w,{VBtn:g["a"],VCard:h["a"],VDialog:_["a"],VImg:b["a"]})},"793f":function(t,e,a){t.exports=a.p+"img/rafiki.c1e7b8cc.svg"},"90ac":function(t,e,a){},aeaf:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"full-w"},[t.modals.UpgradePlan.active?n("UpgradePlanModal",{attrs:{active:t.modals.UpgradePlan.active,edit:t.modals.UpgradePlan.edit},on:{close:function(e){return t.toggleModal("UpgradePlan")}}}):t._e(),n("div",{staticClass:"upgrade-box"},[n("v-img",{staticClass:"badge",attrs:{src:a("ca84d"),width:t.small?"40":null}}),n("div",{staticClass:"title-description-wrapper",class:{"d-flex":!t.small},staticStyle:{"font-size":"13px","justify-content":"space-between"}},[n("div",{staticClass:"upgrade-title"},[t._v(" "+t._s(t.$t("premiumSuggestion"))+" ")]),n("div",[t._v(" "+t._s(t.$t("beOnTheTop"))+" ")])]),n("div",{staticClass:"link-upgrade-wrapper",class:{"mt-2":t.small}},[n("CardActionableList",{attrs:{type:"UpgradePlan"},on:{edit:function(e){return t.activateEdit("UpgradePlan",e)}}}),n("span",{staticClass:"link-upgrade",staticStyle:{color:"#55F481",width:"100%",cursor:"pointer"},on:{click:function(e){return t.toggleModal("UpgradePlan")}}},[t._v(" "+t._s(t.$t("upgradeNow"))+" ")])],1)],1)],1)},s=[],i=a("77d2"),r=a("cc1f"),o={props:{small:{type:Boolean,default:!1}},methods:{toggleModal:function(t){this.modals[t].edit=!1,this.modals[t].active=!this.modals[t].active},activateEdit:function(t,e){this.toggleModal(t),this.modals[t].edit=e}},components:{UpgradePlanModal:i["a"],CardActionableList:r["a"]},mounted:function(){null==this.$store.getters["user/userPlans"]&&this.$store.dispatch("user/fetchPlans")},data:function(){return{modals:{UpgradePlan:{active:!1,edit:!1,component:i["a"]}},fileActions:{UpgradePlan:["edit","delete"]}}}},c=o,l=(a("0b53"),a("2877")),d=a("6544"),p=a.n(d),u=a("adda"),v=Object(l["a"])(c,n,s,!1,null,null,null);e["a"]=v.exports;p()(v,{VImg:u["a"]})},bd91:function(t,e,a){},bf8a:function(t,e,a){"use strict";a.d(e,"a",(function(){return f}));var n="https://js.stripe.com/v3",s=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,i="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",r=function(){for(var t=document.querySelectorAll('script[src^="'.concat(n,'"]')),e=0;e<t.length;e++){var a=t[e];if(s.test(a.src))return a}return null},o=function(t){var e=t&&!t.advancedFraudSignals?"?advancedFraudSignals=false":"",a=document.createElement("script");a.src="".concat(n).concat(e);var s=document.head||document.body;if(!s)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return s.appendChild(a),a},c=function(t,e){t&&t._registerWrapper&&t._registerWrapper({name:"stripe-js",version:"1.16.0",startTime:e})},l=null,d=function(t){return null!==l||(l=new Promise((function(e,a){if("undefined"!==typeof window)if(window.Stripe&&t&&console.warn(i),window.Stripe)e(window.Stripe);else try{var n=r();n&&t?console.warn(i):n||(n=o(t)),n.addEventListener("load",(function(){window.Stripe?e(window.Stripe):a(new Error("Stripe.js not available"))})),n.addEventListener("error",(function(){a(new Error("Failed to load Stripe.js"))}))}catch(s){return void a(s)}else e(null)}))),l},p=function(t,e,a){if(null===t)return null;var n=t.apply(void 0,e);return c(n,a),n},u=Promise.resolve().then((function(){return d(null)})),v=!1;u["catch"]((function(t){v||console.warn(t)}));var f=function(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];v=!0;var n=Date.now();return u.then((function(t){return p(t,e,n)}))}},ca84d:function(t,e,a){t.exports=a.p+"img/top-rated.55933fd5.svg"},cf21:function(t,e,a){},cf81:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"plan-description",class:{"border-plan":t.borderPlan}},[a("h3",[t._v(t._s(t.plan.name))]),a("div",[t._v(" "+t._s(t.plan.price)+"€ / "+t._s(t.plan.days_valid)+" "+t._s(t.$t("daysValid"))+" ")]),a("div",[t._v(" "+t._s(t.$t("renewsOn"))+" "+t._s(t._f("moment")(t.plan.start_timestamp,"DD MMM, YYYY"))+" ")]),a("div",[t._v(" "+t._s(t.$t("validUntil"))+" "+t._s(t._f("moment")(t.plan.end_timestamp,"DD MMM, YYYY"))+" ")]),t.paymentInfo||t.paymentAction?a("div",{staticClass:"payment-info mt-6 pt-4"},[t.paymentInfo&&"CompanyPackagesPricing"!==t.$route.name?a("span",{staticClass:"carten-abenden",on:{click:function(e){return t.$router.push({name:"CompanyPackagesPricing"})}}},[t._v(" "+t._s(t.$t("changePackage"))+" ")]):t._e(),a("span",{staticClass:"payment-action",on:{click:function(e){return t.$store.dispatch("user/cancelSubscription",t.plan.id)}}},[t._v(" "+t._s(t.$t("cancelSubscription"))+" ")])]):t._e()])},s=[],i={name:"UserPlanDescription",props:{paymentInfo:{type:Boolean},paymentAction:{type:Boolean,default:!1},borderPlan:{type:Boolean,default:!1},plan:{type:Object,required:!0}}},r=i,o=(a("3600"),a("2877")),c=Object(o["a"])(r,n,s,!1,null,"e6012984",null);e["a"]=c.exports},d0127:function(t,e,a){"use strict";a("cf21")}}]);
//# sourceMappingURL=DashboardDashboard.5d44e7a6.js.map