(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5bb4bea5"],{"03e5":function(t,s,e){},"05ed":function(t,s,e){t.exports=e.p+"img/highlighted.240909b4.svg"},"0b53":function(t,s,e){"use strict";e("bd91")},"0bd6":function(t,s,e){"use strict";e("668a")},"269a":function(t,s){t.exports=function(t,s){var e="function"===typeof t.exports?t.exports.extendOptions:t.options;for(var a in"function"===typeof t.exports&&(e.directives=t.exports.options.directives),e.directives=e.directives||{},s)e.directives[a]=e.directives[a]||s[a]}},"2b49":function(t,s,e){var a={"./highlighted.svg":"05ed","./search_featured.svg":"7c98"};function i(t){var s=n(t);return e(s)}function n(t){if(!e.o(a,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=n,t.exports=i,i.id="2b49"},5027:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("v-row",{staticClass:"mt-5"},[a("v-col",{attrs:{sm:"12",md:"5",lg:"4",xl:"3",tag:"aside"}},[a("ProfileSidebar")],1),a("v-col",{directives:[{name:"show",rawName:"v-show",value:t.messagesLoaded&&t.conversations.length,expression:"messagesLoaded && conversations.length"}],attrs:{cols:"col"}},[a("Chat")],1),t.$store.getters["chat/selectedConversation"]?t._e():a("v-col",{class:{"mt-15":!t.showUpgradeBox},attrs:{cols:"col"}},[a("div",[a("div",{staticClass:"user-name"},[t._v(" "+t._s(t.$t("hello"))+", "),a("span",{staticStyle:{color:"#0253B3"}},[t._v(" "+t._s(t.user.first_name)+" "+t._s(t.user.last_name)+" ")])]),a("div",{staticClass:"no-msg"},[t._v(" "+t._s(t.conversations.length?""+t.$t("openChat"):""+t.$t("noMessages"))+" ")]),a("v-row",[t.showUpgradeBox?a("v-col",{attrs:{cols:"12",sm:t.ctaBoxesWidth}},[t.showUpgradeBox?a("UpgradeAccountBox",{staticClass:"dashboard-upgrade-account-box"}):t._e()],1):t._e(),t.user.personality_test?t._e():a("v-col",{attrs:{cols:"12",sm:t.ctaBoxesWidth}},[a("PersonalityTestCTABox",{staticClass:"dashboard-upgrade-account-box"})],1)],1),a("div",{staticClass:"mt-5"},[a("v-img",{attrs:{src:e("793f"),"max-width":"500"}})],1)],1)])],1)},i=[],n=e("5530"),r=e("2f62"),o=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"full-w full-h"},[t.modals.UpgradePlan.active?a("UpgradePlanModal",{attrs:{active:t.modals.UpgradePlan.active,edit:t.modals.UpgradePlan.edit},on:{close:function(s){return t.toggleModal("UpgradePlan")}}}):t._e(),a("div",{staticClass:"upgrade-box full-h"},[a("v-img",{staticClass:"badge",attrs:{src:e("7c98"),width:t.small?"40":null}}),a("div",{staticClass:"title-description-wrapper",class:{"d-flex":!t.small},staticStyle:{"font-size":"13px","justify-content":"space-between"}},[a("div",{staticClass:"upgrade-title"},[t._v(" "+t._s(t.$t("premiumSuggestion"))+" ")]),a("div",[t._v(" "+t._s(t.$t("beOnTheTop"))+" ")])]),a("div",{staticClass:"link-upgrade-wrapper",class:{"mt-2":t.small}},[a("CardActionableList",{attrs:{type:"UpgradePlan"},on:{edit:function(s){return t.activateEdit("UpgradePlan",s)}}}),a("span",{staticClass:"link-upgrade",staticStyle:{color:"#55F481",width:"100%",cursor:"pointer"},on:{click:function(s){return t.toggleModal("UpgradePlan")}}},[t._v(" "+t._s(t.$t("upgradeNow"))+" ")])],1)],1)],1)},l=[],c=e("77d2"),u=e("cc1f"),d={props:{small:{type:Boolean,default:!1}},methods:{toggleModal:function(t){this.modals[t].edit=!1,this.modals[t].active=!this.modals[t].active},activateEdit:function(t,s){this.toggleModal(t),this.modals[t].edit=s}},components:{UpgradePlanModal:c["a"],CardActionableList:u["a"]},mounted:function(){null==this.$store.getters["user/userPlans"]&&this.$store.dispatch("user/fetchPlans")},data:function(){return{modals:{UpgradePlan:{active:!1,edit:!1,component:c["a"]}},fileActions:{UpgradePlan:["edit","delete"]}}}},p=d,v=(e("0b53"),e("2877")),f=e("6544"),m=e.n(f),_=e("adda"),g=Object(v["a"])(p,o,l,!1,null,null,null),h=g.exports;m()(g,{VImg:_["a"]});var b=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"personality-test-cta-box full-w full-h"},[e("div",{staticClass:"upgrade-box full-h"},[e("div",{staticClass:"title-description-wrapper d-flex",staticStyle:{"font-size":"13px","justify-content":"space-between"}},[e("div",{staticClass:"upgrade-title"},[t._v(" "+t._s(t.$t("personalityTestCTATitle"))+" ")]),e("div",{staticClass:"link-upgrade-wrapper"},[e("span",{staticClass:"link-upgrade",staticStyle:{cursor:"pointer"},on:{click:function(s){return t.$router.push({name:"PersonalityTestJobseeker"})}}},[t._v(" "+t._s(t.$t("personalityTestCTASubtitle"))+" ")])])])])])},C=[],x={name:"PersonalityTestCTABox"},y=x,P=(e("fecd"),Object(v["a"])(y,b,C,!1,null,"4e9c862f",null)),k=P.exports,$=e("bcd3"),w=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("v-card",{staticClass:"profile-sidebar",attrs:{flat:""}},[a("div",{staticClass:"top-info pb-0",staticStyle:{"border-bottom":"1px solid #E9E9E9"}},[a("div",{staticClass:"profile-image"},[a("v-avatar",{attrs:{color:"primary",size:"80"}},[t.user.profile_img?a("v-img",{staticClass:"profile-image-user",attrs:{src:t.user.profile_img}}):a("span",{staticClass:"white--text text-h4"},[t._v(" "+t._s(t._f("initials")(t.user))+" ")])],1),t.userPlan.length?a("div",{staticClass:"profile-image-badge-icons"},t._l(t.userPlan,(function(s,i){return a("v-img",{key:i,staticClass:"profile-image-badge-icon",style:[t.userPlan.length>1?{margin:"0 -5px"}:null],attrs:{src:e("2b49")("./"+s.plan_slug+".svg")}})})),1):t._e()],1),a("span",{staticClass:"dash-name"},[t._v(t._s(t._f("fullname")(t.user)))]),a("router-link",{staticClass:"settings-link",attrs:{to:{name:"JobseekerProfile"}}},[t._v(" "+t._s(t.$t("profileSettings"))+" ")]),t.userPlan.length?t._l(t.userPlan,(function(t,s){return a("DashboardActivePlan",{key:s,attrs:{"user-plan":t}})})):t._e()],2),t.messagesLoaded&&t.conversations.length&&!t.userPlan.length?a("UpgradeAccountBox",{staticClass:"mt-7",attrs:{small:""}}):t._e(),a("div",{staticClass:"top-info mt-7"},[a("span",{staticClass:"about-info"},[t._v(t._s(t.$t("position")))]),a("p",{staticClass:"about-text"},[t._v(" "+t._s(t.idToString("JOB_POSITION",t.user.current_position))+" ")]),a("span",{staticClass:"about-info"},[t._v(t._s(t.$t("currentIndustry")))]),a("div",{staticClass:"about-text"},t._l(t.idsToArray("JOB_BRANCHE",t.user.branche),(function(s,e){return a("v-chip",{key:e,staticClass:"py-1 mr-1 mb-1"},[t._v(" "+t._s(s)+" ")])})),1),a("span",{staticClass:"about-info"},[t._v(t._s(t.$t("whatPosition")))]),a("div",{staticClass:"about-text"},t._l(t.idsToArray("JOB_POSITION",t.user.looking_for_position),(function(s,e){return a("v-chip",{key:e,staticClass:"py-1 mr-1 mb-1"},[t._v(" "+t._s(s)+" ")])})),1),a("span",{staticClass:"about-info"},[t._v(t._s(t.$t("searchStatus")))]),a("p",{staticClass:"about-text"},[t._v(" "+t._s(t._f("jobSearchStatus")(t.user.job_search_status))+" ")]),a("span",{staticClass:"about-info"},[t._v(t._s(t.$t("lookingForType")))]),a("div",{staticClass:"about-text"},t._l(t.idsToArray("EMPLOYEMENT_TYPE",t.user.looking_for_employment_type),(function(s,e){return a("v-chip",{key:e,staticClass:"py-1 mr-1 mb-1"},[t._v(" "+t._s(s)+" ")])})),1),a("span",{staticClass:"about-info"},[t._v(t._s(t.$t("experienceInYears")))]),a("p",{staticClass:"about-text"},[t._v(t._s(t.user.working_experience)+" "+t._s(t.$t("years")))]),a("span",{staticClass:"about-info"},[t._v(" "+t._s(t.$t("experiences"))+" ")]),a("CardActionableList",{staticClass:"mb-5",attrs:{type:"Experience","view-only":""}}),a("span",{staticClass:"about-info"},[t._v(" "+t._s(t.$t("education"))+" ")]),a("CardActionableList",{attrs:{type:"Education","view-only":""}})],1),a("div",{staticClass:"top-info"},[a("span",{staticClass:"about-info"},[t._v(" "+t._s(t.$t("documents"))+" ")]),t.documentsEmpty?a("i",[t._v(t._s(t.$t("noDataAvailable")))]):t._e(),t._l(t.documents,(function(s){return[s.link?a("div",{key:s.text,staticClass:"row mt-1"},[a("div",{staticClass:"col-auto"},[a("a",{attrs:{href:s.link,target:"_blank"}},[a("img",{staticClass:"document-icon",attrs:{src:t.getDocumentIcon(s.link)}})])]),a("div",{staticClass:"col my-auto font-weight-bold"},[t._v(" "+t._s(s.text)+" ")])]):t._e()]}))],2)],1)},O=[],A=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"dashboard-active-plan"},[a("div",{staticClass:"image-wrapper"},[a("v-img",{staticClass:"img-icon",attrs:{src:e("2b49")("./"+t.userPlan.plan_slug+".svg")}})],1),a("div",{staticClass:"info-wrapper"},[11===t.userPlan.id?a("div",{staticClass:"info-title"},[t._v(" "+t._s(t.remainingDays)+" "+t._s(t.$t("remainingDays"))+" ")]):a("div",{staticClass:"info-title"},[t._v(t._s(t.$t("success"))+"!")]),a("div",{staticClass:"info-desscription"},[t._v(" "+t._s(t.userPlan.plan_description)+" ")])])])},B=[],U={name:"DashboardActivePlan",props:{userPlan:{type:Object,required:!0}},computed:{remainingDays:function(){var t=(new Date).getTime(),s=new Date(this.userPlan.end_timestamp).getTime();return Math.floor((s-t)/864e5)}}},V=U,j=(e("a35b"),Object(v["a"])(V,A,B,!1,null,"03c6cb7a",null)),S=j.exports;m()(j,{VImg:_["a"]});var E={components:{CardActionableList:u["a"],DashboardActivePlan:S,UpgradeAccountBox:h},computed:{user:function(){return this.$store.getters["user/user"]},userPlan:function(){return this.$store.getters["user/userPlan"]},messagesLoaded:function(){return this.$store.getters["chat/messagesLoaded"]},conversations:function(){return this.$store.getters["chat/conversations"]},documents:function(){return[{text:"CV",link:this.user.cv},{text:this.$t("qualifications"),link:this.user.qualifications},{text:this.$t("curriculumVitae"),link:this.user.resume}]},documentsEmpty:function(){return!this.user.cv&&!this.user.qualifications&&!this.user.resume}}},I=E,T=(e("a9c4"),e("8212")),D=e("b0af"),L=e("cc20"),M=Object(v["a"])(I,w,O,!1,null,null,null),Y=M.exports;m()(M,{VAvatar:T["a"],VCard:D["a"],VChip:L["a"],VImg:_["a"]});var R={components:{Chat:$["a"],UpgradeAccountBox:h,ProfileSidebar:Y,PersonalityTestCTABox:k},computed:Object(n["a"])(Object(n["a"])(Object(n["a"])({},Object(r["c"])("user",["user"])),Object(r["c"])("chat",["conversations","messagesLoaded"])),{},{showUpgradeBox:function(){return!this.user.plan.length&&!(this.messagesLoaded&&this.conversations.length)},ctaBoxesWidth:function(){return this.showUpgradeBox&&!this.user.personality_test?"6":"12"}}),created:function(){this.getAllConversations({limit:2})},methods:Object(n["a"])({},Object(r["b"])("chat",["getAllConversations"]))},J=R,N=e("62ad"),F=e("0fd9"),q=Object(v["a"])(J,a,i,!1,null,null,null);s["default"]=q.exports;m()(q,{VCol:N["a"],VImg:_["a"],VRow:F["a"]})},"668a":function(t,s,e){},"77d2":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("v-dialog",{staticClass:"dialog",attrs:{persistent:"","max-width":"750px","overlay-color":"#0253B3","overlay-opacity":"0.3"},on:{"click:outside":function(s){return t.close("abort")}},model:{value:t.active,callback:function(s){t.active=s},expression:"active"}},[a("v-card",{staticClass:"wrap upgrade-dialog",attrs:{flat:""}},[a("div",{staticClass:"mb-4",staticStyle:{"font-size":"28px","font-weight":"600"}},[t._v(" "+t._s(t.$t("choosePlan"))+" ")]),t._l(t.data,(function(s){return a("div",{key:s.id,staticClass:"options mb-5",class:{deactive:t.userPlan.length&&t.isPlanActive(s.id),active:t.form.active_plan===s.id}},["jobseeker_plan"===s.plan_type?a("v-btn",{staticClass:"upgrade-option text-left pa-5",attrs:{"min-height":"104",block:""},on:{click:function(e){return t.selectPlan(s)}}},[a("v-row",[a("v-col",{attrs:{cols:"auto"}},[a("v-img",{staticClass:"upgrade-icon mr-0",attrs:{src:e("2b49")("./"+s.plan_slug+".svg")}})],1),a("v-col",{attrs:{cols:"cols"}},[t.userPlan.length&&t.isPlanActive(s.id)?a("UserPlanDescription",{staticClass:"user-plan-desc",attrs:{plan:t.getUserPlan(s.id)[0]}}):[a("span",{staticClass:"upgrade-title"},[t._v(" "+t._s(s.name)+" ")]),a("p",{staticClass:"upgrade-text mt-2 mb-0"},[t._v(" "+t._s(s.plan_description)+" ")])]],2),t.userPlan.length&&t.isPlanActive(s.id)?t._e():a("v-col",{attrs:{cols:"auto"}},[a("span",{staticClass:"upgrade-price primary--text"},[t._v(t._s(s.price)+"€")])])],1)],1):t._e()],1)})),a("div",{staticClass:"text-right"},[a("v-btn",{staticClass:"mr-4",attrs:{height:"56",text:""},on:{click:t.close}},[t._v(" "+t._s(t.$t("cancel"))+" ")]),a("v-btn",{staticClass:"px-10",attrs:{disabled:!t.planId,loading:t.isLoading,color:"primary",height:"56"},on:{click:function(s){return t.next()}}},[t._v(" "+t._s(t.$t("continue"))+" ")])],1)],2)],1)},i=[],n=e("5530"),r=e("1da1"),o=(e("96cf"),e("4360")),l=e("bf8a"),c=e("2f62"),u=e("cf81"),d={components:{UserPlanDescription:u["a"]},props:{active:{type:Boolean,default:!1},type:{type:String,default:"ok"},edit:{type:[Object,Boolean]}},data:function(){return{data:"",isLoading:!1,planId:null,stripeId:null,form:{active_plan:""}}},created:function(){this.edit&&this.populate(),this.data=this.$store.getters["user/plans"]("jobseeker_plan")},methods:{close:function(t){this.$emit("close",t)},selectPlan:function(t){this.userPlan.length&&this.isPlanActive(t.id)||(this.form.active_plan=t.id,this.planId=t.id)},processStripe:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function s(){var e;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(!(t.stripeId&&t.stripeId.length>5)){s.next=7;break}return s.next=3,Object(l["a"])("pk_test_51J2VxwKKMFZvcsxu4VEDQetraMaOKVF6DAjvkSgkNPHMXktPW3ibXXEgRuYBLepBo6JvF4dWxeIvspapIbgVel2R00tehUJtX8");case 3:e=s.sent,e.redirectToCheckout({sessionId:t.stripeId}),s.next=8;break;case 7:t.isLoading=!1;case 8:case"end":return s.stop()}}),s)})))()},next:function(){var t=this;this.isLoading=!0,this.$http.post("".concat("https://dev.api.jonder.devla.dev/api/v1","/plan"),{plan_id:this.planId,payment_method:"credit card"}).then((function(s){t.stripeId=s.data.data.id,t.processStripe()})).catch((function(s){t.isLoading=!1,console.log(s),alert("Error")}))},save:function(){this.edit?o["a"].dispatch("user/updateUser",{id:this.edit.id,payload:this.form}):console.log(),this.$emit("close",1)},populate:function(){this.form.active_plan=this.edit.active_plan,this.planId=this.edit.active_plan}},computed:Object(n["a"])({},Object(c["c"])({userPlan:"user/userPlan",getUserPlan:"user/getUserPlan",isPlanActive:"user/isPlanActive"}))},p=d,v=(e("0bd6"),e("2877")),f=e("6544"),m=e.n(f),_=e("8336"),g=e("b0af"),h=e("62ad"),b=e("169a"),C=e("adda"),x=e("0fd9"),y=Object(v["a"])(p,a,i,!1,null,"68bb844c",null);s["a"]=y.exports;m()(y,{VBtn:_["a"],VCard:g["a"],VCol:h["a"],VDialog:b["a"],VImg:C["a"],VRow:x["a"]})},"793f":function(t,s,e){t.exports=e.p+"img/rafiki.db887e80.svg"},"7c98":function(t,s,e){t.exports=e.p+"img/search_featured.69631fe4.svg"},"8ce7":function(t,s,e){},a35b:function(t,s,e){"use strict";e("b116")},a9c4:function(t,s,e){"use strict";e("cdb2")},b116:function(t,s,e){},bd91:function(t,s,e){},cdb2:function(t,s,e){},cf81:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"plan-description",class:{"border-plan":t.borderPlan}},[e("h3",[t._v(t._s(t.plan.name))]),e("div",[t._v(" "+t._s(t.plan.price)+"€ / "+t._s(t.plan.days_valid)+" "+t._s(t.$t("daysValid"))+" ")]),e("div",[t._v(" "+t._s(t.$t("renewsOn"))+" "+t._s(t._f("moment")(t.plan.start_timestamp,"DD MMM, YYYY"))+" ")]),e("div",[t._v(" "+t._s(t.$t("validUntil"))+" "+t._s(t._f("moment")(t.plan.end_timestamp,"DD MMM, YYYY"))+" ")]),t.paymentInfo||t.paymentAction?e("div",{staticClass:"payment-info mt-6 pt-4"},[t.paymentInfo&&"EmployerPackagesPricing"!==t.$route.name?e("span",{staticClass:"carten-abenden",on:{click:function(s){return t.$router.push({name:"EmployerPackagesPricing"})}}},[t._v(" "+t._s(t.$t("changePackage"))+" ")]):t._e(),t.plan.renewal?e("v-dialog",{staticClass:"payment-action",attrs:{width:"500","overlay-color":"#0253B3","overlay-opacity":"0.3"},scopedSlots:t._u([{key:"activator",fn:function(s){var a=s.on,i=s.attrs;return[e("v-btn",t._g(t._b({directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],staticClass:"font-weight-medium main-text",attrs:{text:"",plain:"",color:"inherit"}},"v-btn",i,!1),a),[t._v(" "+t._s(t.$t("cancelSubscription"))+" ")])]}}],null,!1,1271017619),model:{value:t.dialog,callback:function(s){t.dialog=s},expression:"dialog"}},[e("v-card",[e("h1",{staticClass:"mb-4 text-center",staticStyle:{"font-size":"28px"}},[t._v(" "+t._s(t.$t("areYouSure"))+" ")]),e("v-form",{ref:"form",attrs:{action:"#"},on:{submit:function(s){return s.preventDefault(),t.submit(s)}},model:{value:t.isValid,callback:function(s){t.isValid=s},expression:"isValid"}},[e("p",{staticClass:"text-center"},[t._v(" "+t._s(t.$t("areYouSureCancelSubscription"))+" ")]),e("ResponseAlert",{attrs:{response:t.formResponse}}),e("div",{staticClass:"text-center mt-3"},[e("v-btn",{staticClass:"font-weight-medium ",attrs:{height:"48"},on:{click:function(s){t.dialog=!1,t.$refs.form.reset()}}},[t._v(" "+t._s(t.$t("cancelOption"))+" ")]),e("v-btn",{staticClass:"ml-3 font-weight-medium ",attrs:{type:"submit",color:"primary",height:"48",disabled:!t.isValid}},[t._v(" "+t._s(t.$t("confirmOption"))+" ")])],1)],1)],1)],1):t._e()],1):t._e()])},i=[],n={name:"UserPlanDescription",props:{paymentInfo:{type:Boolean},paymentAction:{type:Boolean,default:!1},borderPlan:{type:Boolean,default:!1},plan:{type:Object,required:!0}},data:function(){return{dialog:!1,isValid:!1,formResponse:{}}},methods:{submit:function(){this.$store.dispatch("user/cancelSubscription",this.plan.id),this.dialog=!1}}},r=n,o=(e("d7ea"),e("2877")),l=e("6544"),c=e.n(l),u=e("8336"),d=e("b0af"),p=e("169a"),v=e("4bd4"),f=e("269a"),m=e.n(f),_=e("5607"),g=Object(o["a"])(r,a,i,!1,null,null,null);s["a"]=g.exports;c()(g,{VBtn:u["a"],VCard:d["a"],VDialog:p["a"],VForm:v["a"]}),m()(g,{Ripple:_["a"]})},d7ea:function(t,s,e){"use strict";e("03e5")},fecd:function(t,s,e){"use strict";e("8ce7")}}]);
//# sourceMappingURL=chunk-5bb4bea5.2339df4b.js.map