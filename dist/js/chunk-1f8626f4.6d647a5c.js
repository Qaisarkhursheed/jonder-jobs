(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f8626f4"],{"03e5":function(t,e,a){},"269a":function(t,e){t.exports=function(t,e){var a="function"===typeof t.exports?t.exports.extendOptions:t.options;for(var n in"function"===typeof t.exports&&(a.directives=t.exports.options.directives),a.directives=a.directives||{},e)a.directives[n]=a.directives[n]||e[n]}},"331d":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"user-plan",attrs:{flat:""}},[a("h2",[t._v(t._s(t.$t("subscriptionPlan")))]),a("p",[t._v(t._s(t.$t("yourCurrentPlanDescription")))]),a("UserPlanDescription",{attrs:{plan:t.userPlan[0],"border-plan":t.borderPlan,"payment-info":t.paymentInfo,"payment-action":t.paymentAction}})],1)},i=[],s=a("5530"),r=a("2f62"),o=a("cf81"),c={name:"UserPlan",components:{UserPlanDescription:o["a"]},props:{paymentInfo:{type:Boolean},paymentAction:{type:Boolean,default:!1},borderPlan:{type:Boolean,default:!1}},computed:Object(s["a"])({},Object(r["c"])({userPlan:"user/userPlan"}))},l=c,u=a("2877"),d=a("6544"),p=a.n(d),f=a("b0af"),v=Object(u["a"])(l,n,i,!1,null,"0943013a",null);e["a"]=v.exports;p()(v,{VCard:f["a"]})},"4bd4":function(t,e,a){"use strict";var n=a("5530"),i=(a("caad"),a("2532"),a("07ac"),a("4de4"),a("159b"),a("7db0"),a("58df")),s=a("7e2b"),r=a("3206");e["a"]=Object(i["a"])(s["a"],Object(r["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,a=function(t){return t.$watch("hasError",(function(a){e.$set(e.errorBag,t._uid,a)}),{immediate:!0})},n={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(function(i){i&&(e.errorBag.hasOwnProperty(t._uid)||(n.valid=a(t)))})):n.valid=a(t),n},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var a=this.watchers.find((function(t){return t._uid===e._uid}));a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(n["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"4fb4":function(t,e,a){"use strict";a("56f2")},"56f2":function(t,e,a){},"96ab":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.$store.getters["plans/companyPlansLoading"]?a("div",{staticClass:"d-flex full-h justify-center align-center"},[a("v-progress-circular",{attrs:{indeterminate:"",size:"150",color:"primary"}})],1):a("div",{staticClass:"pb-7"},[a("div",{staticClass:"page-heading mb-6"},[a("div",{staticClass:"title"},[t._v(" "+t._s(t.$t("upradeYourCompany"))+" ")]),a("div",{staticClass:"subtitle"},[t._v(" "+t._s(t.$t("upradeYourCompanySubtitle"))+" ")])]),a("CompanyPlans",{staticClass:"mb-7"}),a("UserPlan",{attrs:{"border-plan":!0,"payment-info":!1,"payment-action":!0}})],1)},i=[],s=a("d575"),r=a("331d"),o={components:{CompanyPlans:s["a"],UserPlan:r["a"]}},c=o,l=a("2877"),u=a("6544"),d=a.n(u),p=a("490a"),f=Object(l["a"])(c,n,i,!1,null,"1b15577a",null);e["default"]=f.exports;d()(f,{VProgressCircular:p["a"]})},cf81:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"plan-description",class:{"border-plan":t.borderPlan}},[a("h3",[t._v(t._s(t.plan.name))]),a("div",[t._v(" "+t._s(t.plan.price)+"€ / "+t._s(t.plan.days_valid)+" "+t._s(t.$t("daysValid"))+" ")]),a("div",[t._v(" "+t._s(t.$t("renewsOn"))+" "+t._s(t._f("moment")(t.plan.start_timestamp,"DD MMM, YYYY"))+" ")]),a("div",[t._v(" "+t._s(t.$t("validUntil"))+" "+t._s(t._f("moment")(t.plan.end_timestamp,"DD MMM, YYYY"))+" ")]),t.paymentInfo||t.paymentAction?a("div",{staticClass:"payment-info mt-6 pt-4"},[t.paymentInfo&&"EmployerPackagesPricing"!==t.$route.name?a("span",{staticClass:"carten-abenden",on:{click:function(e){return t.$router.push({name:"EmployerPackagesPricing"})}}},[t._v(" "+t._s(t.$t("changePackage"))+" ")]):t._e(),t.plan.renewal?a("v-dialog",{staticClass:"payment-action",attrs:{width:"500","overlay-color":"#0253B3","overlay-opacity":"0.3"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-btn",t._g(t._b({directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],staticClass:"font-weight-medium main-text",attrs:{text:"",plain:"",color:"inherit"}},"v-btn",i,!1),n),[t._v(" "+t._s(t.$t("cancelSubscription"))+" ")])]}}],null,!1,1271017619),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("h1",{staticClass:"mb-4 text-center",staticStyle:{"font-size":"28px"}},[t._v(" "+t._s(t.$t("areYouSure"))+" ")]),a("v-form",{ref:"form",attrs:{action:"#"},on:{submit:function(e){return e.preventDefault(),t.submit(e)}},model:{value:t.isValid,callback:function(e){t.isValid=e},expression:"isValid"}},[a("p",{staticClass:"text-center"},[t._v(" "+t._s(t.$t("areYouSureCancelSubscription"))+" ")]),a("ResponseAlert",{attrs:{response:t.formResponse}}),a("div",{staticClass:"text-center mt-3"},[a("v-btn",{staticClass:"font-weight-medium ",attrs:{height:"48"},on:{click:function(e){t.dialog=!1,t.$refs.form.reset()}}},[t._v(" "+t._s(t.$t("cancelOption"))+" ")]),a("v-btn",{staticClass:"ml-3 font-weight-medium ",attrs:{type:"submit",color:"primary",height:"48",disabled:!t.isValid}},[t._v(" "+t._s(t.$t("confirmOption"))+" ")])],1)],1)],1)],1):t._e()],1):t._e()])},i=[],s={name:"UserPlanDescription",props:{paymentInfo:{type:Boolean},paymentAction:{type:Boolean,default:!1},borderPlan:{type:Boolean,default:!1},plan:{type:Object,required:!0}},data:function(){return{dialog:!1,isValid:!1,formResponse:{}}},methods:{submit:function(){this.$store.dispatch("user/cancelSubscription",this.plan.id),this.dialog=!1}}},r=s,o=(a("d7ea"),a("2877")),c=a("6544"),l=a.n(c),u=a("8336"),d=a("b0af"),p=a("169a"),f=a("4bd4"),v=a("269a"),m=a.n(v),h=a("5607"),_=Object(o["a"])(r,n,i,!1,null,null,null);e["a"]=_.exports;l()(_,{VBtn:u["a"],VCard:d["a"],VDialog:p["a"],VForm:f["a"]}),m()(_,{Ripple:h["a"]})},d575:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"packages"},[a("v-row",t._l(t.packages,(function(e,n){return a("v-col",{key:n,attrs:{cols:"12",md:"6",lg:"4"}},[a("CompanyPlan",{attrs:{plan:e,color:t.packagesBranding[n]}})],1)})),1)],1)},i=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"packages-plan d-flex flex-column full-h",attrs:{flat:""}},[a("div",{staticClass:"price d-flex align-end"},[a("div",[t._v(t._s(t.plan.price)+"€")]),a("div",[t._v("/"+t._s(t.$t("month")))])]),a("div",{staticClass:"type mt-3"},[a("div",{staticClass:"name",style:"color: "+t.color},[t._v(" "+t._s(t.plan.name)+" ")]),a("div",{staticClass:"description"},[t._v(" "+t._s(t.plan.plan_description)+" ")])]),a("v-divider",{staticClass:"mb-10 mt-10"}),a("div",{staticClass:"features flex-grow-1"},t._l(t.features,(function(e,n){return a("div",{key:n,staticClass:"feature pb-5"},[a("v-icon",{attrs:{size:"25",color:t.color}},[t._v(" mdi-check ")]),a("span",{staticClass:"text"},[t._v(" "+t._s(e)+" ")])],1)})),0),a("div",{staticClass:"action mt-6"},[a("v-btn",{attrs:{color:t.userPlan.length&&t.userPlan[0].id===t.plan.id?"grey lighten-3":"primary",height:"48",block:"",loading:t.isLoading},on:{click:function(e){(!t.userPlan.length||t.userPlan[0].id!==t.plan.id)&&t.getTokenId()}}},[t._v(" "+t._s(t.userPlan.length&&t.userPlan[0].id===t.plan.id?t.$t("yourCurrentPlan"):t.$t("upgrade"))+" ")])],1)],1)},r=[],o=a("5530"),c=a("1da1"),l=(a("96cf"),a("bf8a")),u=a("2f62"),d={props:{plan:{type:Object},color:{type:String}},data:function(){return{planToken:"",isLoading:!1}},methods:{processStripe:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(l["a"])("".concat("pk_test_51J2VxwKKMFZvcsxu4VEDQetraMaOKVF6DAjvkSgkNPHMXktPW3ibXXEgRuYBLepBo6JvF4dWxeIvspapIbgVel2R00tehUJtX8"));case 3:a=e.sent,a.redirectToCheckout({sessionId:t.planToken}),e.next=11;break;case 7:e.prev=7,e.t0=e["catch"](0),t.isLoading=!1,console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getTokenId:function(){var t=this;this.isLoading=!0,this.$http.post("".concat("https://dev.api.jonder.devla.dev/api/v1","/plan"),{plan_id:this.plan.id,payment_method:"credit card"}).then((function(e){t.planToken=e.data.data.id,t.processStripe()})).catch((function(e){t.isLoading=!1,alert(e)}))}},computed:Object(o["a"])(Object(o["a"])({},Object(u["c"])({userPlan:"user/userPlan"})),{},{features:function(){return JSON.parse(this.plan.benefits)}})},p=d,f=(a("4fb4"),a("2877")),v=a("6544"),m=a.n(v),h=a("8336"),_=a("b0af"),b=a("ce7e"),g=a("132d"),y=Object(f["a"])(p,s,r,!1,null,"1709e1a6",null),C=y.exports;m()(y,{VBtn:h["a"],VCard:_["a"],VDivider:b["a"],VIcon:g["a"]});var P={components:{CompanyPlan:C},data:function(){return{packagesBranding:["#F3B10E","#1DABF2","#0253B3"]}},computed:{packages:function(){return this.$store.getters["plans/companyPlans"]}},created:function(){this.$store.dispatch("plans/fetchCompanyPlans")}},$=P,k=a("62ad"),x=a("0fd9"),w=Object(f["a"])($,n,i,!1,null,null,null);e["a"]=w.exports;m()(w,{VCol:k["a"],VRow:x["a"]})},d7ea:function(t,e,a){"use strict";a("03e5")}}]);
//# sourceMappingURL=chunk-1f8626f4.6d647a5c.js.map