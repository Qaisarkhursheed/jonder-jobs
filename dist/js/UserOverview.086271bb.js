(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["UserOverview"],{"019c":function(t,e,a){"use strict";a("7957")},"0da1":function(t,e,a){},"16e8":function(t,e,a){"use strict";a("0da1")},"17fb":function(t,e,a){"use strict";a("f080")},"24c9":function(t,e,a){t.exports=a.p+"img/briefcase.68291d7d.svg"},"4e08":function(t,e,a){t.exports=a.p+"img/pdf.a53cd7f6.svg"},"5de4":function(t,e,a){"use strict";a("bb3a")},7957:function(t,e,a){},"7f93":function(t,e,a){},"81b0":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.showUpgradePlans?s("CompanyPlans"):s("div",{staticClass:"user-overview"},[t.calledFromList?t._e():s("div",{staticClass:"heading d-flex mb-5",on:{click:t.back}},[s("v-icon",{attrs:{size:"25"}},[t._v(" mdi-arrow-left ")]),s("span",{staticClass:"pl-4"},[t._v(t._s(t.$t("back")))])],1),s("div",{staticClass:"card-back"}),t.profile?s("v-card",{staticClass:"profile-info",attrs:{flat:""}},[s("v-row",{staticClass:"card-header no-gutters pl-10 pr-10"},[s("v-col",{staticClass:"d-flex",attrs:{cols:"12",md:"8"}},[s("v-avatar",{staticClass:"user-avatar",attrs:{color:"primary",size:"150"}},[t.profile.profile_img?s("img",{attrs:{src:t.profile.profile_img}}):s("span",{staticClass:"white--text text-h3"},[t._v(" "+t._s(t._f("initials")(t.profile))+" ")])]),s("div",{staticClass:"user-header pl-8 pt-5"},[s("div",{staticClass:"name"},[t._v(" "+t._s(t.profile.first_name)+" "+t._s(t.profile.last_name)+" ")]),s("div",{staticClass:"position"},[s("img",{staticStyle:{"vertical-align":"-2px"},attrs:{src:a("24c9")}}),t._v(" "+t._s(t.currentPosition)+" ")])])],1),s("v-col",{staticClass:"d-flex justify-end pt-7",attrs:{cols:"12",md:"4"}},[s("div",{staticClass:"star-btn mr-3",on:{click:t.handleStarIconClick}},[s("v-icon",{attrs:{size:"25",color:t.profile.selection_managment?"#27AAE1":"#000"}},[t._v(" "+t._s(t.profile.selection_managment?"mdi-star":"mdi-star-outline")+" ")])],1),s("v-btn",{staticClass:"px-10",attrs:{color:"primary",height:"48",loading:t.startChatLoading},on:{click:t.startConversation}},[t._v(" "+t._s(t.$t("messageNow"))+" ")])],1)],1),s("v-tabs",{attrs:{"align-with-title":"","slider-color":"#0253B3"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[s("v-tabs-slider",{attrs:{color:"#0253B3"}}),t._l(t.items,(function(e){return s("v-tab",{key:e,staticStyle:{"font-size":"16px",color:"#000","font-weight":"400","text-transform":"capitalize"},attrs:{"slider-color":"#0253B3"}},[t._v(" "+t._s(t.$t(e))+" ")])}))],2),s("v-divider"),s("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.items,(function(e){return s("v-tab-item",{key:e},[s("v-card",{attrs:{flat:""}},[s("keep-alive",[s(t.tabs[e],{tag:"component",attrs:{user:t.profile}})],1)],1)],1)})),1)],1):t._e()],1)},i=[],n=(a("a9e3"),a("99af"),a("d3b7"),a("bc3a")),c=a.n(n),o=a("2ef0"),r=a("797d"),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user-overview-general"},[s("v-row",{staticClass:"no-gutters"},[s("v-col",{staticClass:"left px-10 pt-7 pb-10",attrs:{cols:"12",md:"7"}},[t.userManagementData?s("div",{staticClass:"status-of-candidate"},[s("div",{staticClass:"status-title"},[t._v(t._s(t.$t("statusOfCandidate")))]),s("div",{staticClass:"status-selection"},[s("v-select",{staticClass:"d-flex align-center",attrs:{items:t.getSelectionOptions,value:t.user.selection_managment,dense:"",height:40,outlined:"","append-icon":"mdi-chevron-down"},on:{change:function(e){return t.updateJobseeker(e)}},scopedSlots:t._u([{key:"selection",fn:function(e){var a=e.item;return[t._v(" "+t._s(t.$t(a)))]}},{key:"item",fn:function(e){var a=e.item;return[s("v-list-item-content",[s("v-list-item-title",[t._v(" "+t._s(t.$t(a))+" ")])],1)]}}],null,!1,3214420323)})],1)]):t._e(),s("div",{staticClass:"section experience"},[s("div",{staticClass:"title"},[t._v(t._s(t.$t("experiences")))]),s("div",{staticClass:"content"},t._l(t.experience,(function(e){return s("div",{key:e.company,staticClass:"item pb-5 pt-5"},[s("div",{staticClass:"title"},[t._v(t._s(e.company_name))]),s("div",{staticClass:"subtitle"},[t._v(t._s(e.position))]),s("div",{staticClass:"subtitle"},[t._v(" "+t._s(t._f("moment")(e.start_time,"MMMM YYYY"))+" - "),e.end_time&&new Date(e.end_time).getTime()<=(new Date).getTime()?[t._v(" "+t._s(t._f("moment")(e.end_time,"MMMM YYYY"))+" ")]:[t._v(t._s(t.$t("present")))]],2),s("div",{staticClass:"description mt-2"},[s("ul",[s("li",[t._v(t._s(e.description))])])])])})),0)]),s("div",{staticClass:"section experience mt-7"},[s("div",{staticClass:"title"},[t._v(t._s(t.$t("educationStudy")))]),s("div",{staticClass:"content"},t._l(t.education,(function(e){return s("div",{key:e.company,staticClass:"item pb-5 pt-5"},[s("div",{staticClass:"title"},[t._v(t._s(e.university_name))]),s("div",{staticClass:"subtitle"},[t._v(t._s(e.study))]),s("div",{staticClass:"subtitle"},[t._v(" "+t._s(t._f("moment")(e.start_time,"MMMM YYYY"))+" - "),e.end_time&&new Date(e.end_time).getTime()<=(new Date).getTime()?[t._v(" "+t._s(t._f("moment")(e.end_time,"MMMM YYYY"))+" ")]:[t._v(t._s(t.$t("present")))]],2)])})),0)])]),s("v-col",{staticClass:"right px-10 pt-8",attrs:{cols:"12",md:"5"}},[s("div",{staticClass:"d-flex justify-space-between mb-7"},[s("div",{staticClass:"section"},[s("div",{staticClass:"title"},[t._v(" "+t._s(t.$t("searchStatus"))+" ")]),t.user.job_status?s("div",{staticClass:"content"},[t._v(" "+t._s(t.user.job_status)+" ")]):s("div",{staticClass:"content"},[t._v(" Unemployed ")])]),s("div",{staticClass:"section"},[s("div",{staticClass:"title"},[t._v(" "+t._s(t.$t("position"))+" ")]),s("div",{staticClass:"content"},[t._v(" "+t._s(t.currentPosition)+" ")])])]),s("div",{staticClass:"section mb-7 branche-section"},[s("div",{staticClass:"title"},[t._v(t._s(t.$t("currentIndustry")))]),t.user.branche?s("div",{staticClass:"content"},[t._v(" "+t._s(t.getBranche)+" ")]):t._e()]),t.user.location_show?s("div",{staticClass:"section mb-7"},[s("div",{staticClass:"title"},[t._v(t._s(t.$t("cityAndAddress")))]),s("div",{staticClass:"content"},[t._v(t._s(t.user.city)+" "+t._s(t.user.address))])]):t._e(),s("div",{staticClass:"section mb-7 documents-section"},[s("div",{staticClass:"title"},[t._v(" "+t._s(t.$t("documents").toUpperCase())+" & "+t._s(t.$t("certificates").toUpperCase())+" ")]),s("div",{staticClass:"content mt-2"},t._l(t.documents,(function(e,i){return s("v-row",{key:i,staticClass:"file"},[s("v-col",{attrs:{cols:"auto"}},[s("a",{attrs:{href:e.link,target:"_blank"}},[s("img",{attrs:{src:a("4e08")}})])]),s("v-col",{staticClass:"my-auto font-weight-bold",attrs:{cols:"col"}},[t._v(" "+t._s(t.$t(e.type))+" ")])],1)})),1)])])],1)],1)},d=[],u=(a("a15b"),a("d81d"),{props:{user:{type:Object}},data:function(){return{experience:[],education:[],userManagementData:null}},computed:{documents:function(){var t=this,e=[];return["cv","qualifications","resume"].forEach((function(a){t.user[a]&&e.push({type:a,link:t.user[a]})})),e},getSelectionOptions:function(){return r["a"].SELECTION_MANAGEMENT_STATUS},getBranche:function(){var t=this,e=Object(o["map"])(this.user.branche,(function(e){var a=Object(o["find"])(r["a"].JOB_BRANCHE,{id:parseInt(e)});return a[t.$i18n.locale]}));return e.join()},currentPosition:function(){var t=this,e=Object(o["find"])(r["a"].JOB_POSITION,(function(e){return e.id==parseInt(t.user.current_position)}));return e[this.$i18n.locale]}},created:function(){this.getExperience(),this.getEducation(),this.getManagementSelection()},methods:{getExperience:function(){var t=this;this.$http.get("".concat("https://dev.api.jonder.devla.dev/api/v1","/jobseeker-experience?per_page=9999")).then((function(e){for(var a=e.data.data.map((function(t){return t})),s=0;s<a.length;s++)e.data.data[s].user_id===t.user.id&&t.experience.push(e.data.data[s])})).catch((function(t){alert(t)}))},getEducation:function(){var t=this;this.$http.get("".concat("https://dev.api.jonder.devla.dev/api/v1","/jobseeker-education?per_page=9999")).then((function(e){for(var a=e.data.data.map((function(t){return t})),s=0;s<a.length;s++)e.data.data[s].user_id===t.user.id&&(t.education.push(e.data.data[s]),console.log(t.education))})).catch((function(t){alert(t)}))},getManagementSelection:function(){var t=this,e=this.$store.getters["company/selectionManagement"]("list");this.userManagementData=Object(o["filter"])(e,(function(e){return e.jobseeker.id===t.user.id}))[0]},updateJobseeker:function(t){this.$store.dispatch("company/slManagementMoveCandidate",{id:this.userManagementData.id,data:{managment_status:t}})}}}),v=u,p=(a("019c"),a("2877")),f=a("6544"),m=a.n(f),h=a("62ad"),_=a("5d23"),C=a("0fd9"),b=a("b974"),g=Object(p["a"])(v,l,d,!1,null,"5deab650",null),y=g.exports;m()(g,{VCol:h["a"],VListItemContent:_["a"],VListItemTitle:_["c"],VRow:C["a"],VSelect:b["a"]});var k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user-overview-notes px-10 py-7"},[a("ModalNotesCreate",{attrs:{active:t.modalActive,note:t.selectedNote},on:{close:function(e){t.modalActive=!1},create:t.createNote,edit:t.editNote}}),a("v-row",t._l(t.notes,(function(e,s){return a("v-col",{key:s,attrs:{cols:"12",md:"6"}},[a("v-card",{staticClass:"full-h d-flex flex-column justify-space-between",staticStyle:{border:"1px solid #E9E9E9","border-radius":"10px"},attrs:{flat:""}},[a("v-card-text",{staticClass:"note"},[t._v(" "+t._s(e.content)+" ")]),a("v-card-actions",{staticClass:"pb-5 pl-4 pr-4"},[a("v-row",{staticClass:"no-gutters divider pt-4"},[a("v-col",{staticClass:"mr-2",attrs:{cols:"auto"}},[a("v-avatar",{attrs:{color:"primary",size:"40"}},[e.author.profile_img?a("img",{attrs:{src:e.author.profile_img}}):a("span",{staticClass:"white--text text-h6"},[t._v(" "+t._s(t._f("initials")(e.author))+" ")])])],1),a("v-col",{staticClass:"my-auto",attrs:{cols:"cols"}},[t._v(" "+t._s(t._f("fullname")(e.author))+" ")]),a("v-col",{staticClass:"d-flex my-auto ml-1",attrs:{cols:"auto"}},[a("div",{staticClass:"icon-action",on:{click:function(a){t.selectedNote=e,t.modalActive=!0}}},[a("v-icon",{attrs:{size:"25",color:"black"}},[t._v(" mdi-pencil ")])],1),a("div",{staticClass:"icon-action ml-2",on:{click:function(a){return t.deleteNote(e)}}},[a("v-icon",{attrs:{size:"25",color:"black"}},[t._v(" mdi-delete ")])],1)])],1)],1)],1)],1)})),1),a("v-row",{staticClass:"justify-end"},[a("v-col",{attrs:{cols:"4"}},[a("v-btn",{staticClass:"full-w mt-5",attrs:{color:"primary",height:"48"},on:{click:function(e){t.selectedNote=null,t.modalActive=!t.modalActive}}},[t._v(" "+t._s(t.$t("newNote"))+" ")])],1)],1)],1)},x=[],w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{staticClass:"dialog",attrs:{persistent:"",width:"750px","max-width":"750px","overlay-color":"#0253B3","overlay-opacity":"0.3"},on:{"click:outside":t.close},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[a("v-card",{staticClass:"pa-8"},[a("p",{staticClass:"text-left font-weight-bold mb-3 font-size-16 header"},[t._v(" "+t._s(t.$t("newNote"))+" ")]),a("p",{staticClass:"content-of-note"},[t._v(" "+t._s(t.$t("contentOfNote"))+" ")]),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-textarea",{attrs:{placeholder:t.$t("writeContent"),outlined:""},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)],1),a("div",{staticClass:"text-right"},[a("v-btn",{attrs:{height:"58",color:"#fff",secondary:""},on:{click:t.close}},[t._v(" "+t._s(t.$t("cancel"))+" ")]),a("v-btn",{staticClass:"px-10 ml-5",attrs:{color:"primary",height:"58"},on:{click:t.save}},[t._v(" "+t._s(t.$t("save"))+" ")])],1)],1)],1)},$=[],j={props:{active:{type:Boolean},note:{type:Object,required:!1}},data:function(){return{content:""}},watch:{active:function(t){t?this.note&&(this.content=this.note.content):this.content=""}},methods:{close:function(){this.$emit("close")},save:function(){this.$emit(this.note?"edit":"create",this.content)}}},O=j,V=(a("17fb"),a("8336")),M=a("b0af"),N=a("169a"),S=a("a844"),P=Object(p["a"])(O,w,$,!1,null,"aef59f86",null),A=P.exports;m()(P,{VBtn:V["a"],VCard:M["a"],VCol:h["a"],VDialog:N["a"],VRow:C["a"],VTextarea:S["a"]});var E={components:{ModalNotesCreate:A},props:{user:{type:Object}},data:function(){return{modalActive:!1,selectedNote:null}},computed:{notes:function(){return this.$store.getters["company/jobseekerNotes"]}},created:function(){this.$store.dispatch("company/jobseekerNotesGetAll",this.user.id)},methods:{createNote:function(t){var e=this;this.$store.dispatch("company/jobseekerNotesAdd",{content:t,jobseeker_id:this.user.id,employer_id:this.$store.getters["user/user"].id}).then((function(){e.modalActive=!1}))},editNote:function(t){var e=this;this.$store.dispatch("company/jobseekerNotesEdit",{id:this.selectedNote.id,jobseeker_id:this.user.id,content:t}).then((function(){e.modalActive=!1}))},deleteNote:function(t){this.$store.dispatch("company/jobseekerNotesDelete",{id:t.id,userId:this.user.id})}}},I=E,T=(a("16e8"),a("8212")),B=a("99d9"),D=a("132d"),Y=Object(p["a"])(I,k,x,!1,null,"1a20af83",null),U=Y.exports;m()(Y,{VAvatar:T["a"],VBtn:V["a"],VCard:M["a"],VCardActions:B["a"],VCardText:B["c"],VCol:h["a"],VIcon:D["a"],VRow:C["a"]});var L=a("d575"),J={components:{UserOverviewGeneral:y,UserOverviewNotes:U,CompanyPlans:L["a"]},props:{id:{type:[String,Number]},calledFromList:{type:Boolean,default:!1}},data:function(){return{profile:null,tab:null,items:["general","notes"],tabs:{general:y,notes:U},startChatLoading:!1,showUpgradePlans:!1}},created:function(){this.getUser()},methods:{getUser:function(){var t=this,e=this.calledFromList?this.id:this.$route.params.id;c.a.get("/users/".concat(e)).then((function(e){t.profile=e.data.data})).catch((function(){t.showUpgradePlans=!0}))},populateData:function(t){this.profile.fullname.value="".concat(t.first_name," ").concat(t.last_name),this.profile.email.value=t.email,this.profile.address.value=t.address,this.profile.radius.value=t.work_radius,this.profile.profesionsim.value=t.work_experience},startConversation:function(){var t=this;this.startChatLoading=!0,this.$store.dispatch("chat/startChat",this.profile.id).then((function(){t.$router.push({name:"CompanyMessages",params:{company:!0}})})).finally((function(){t.startChatLoading=!1}))},handleStarIconClick:function(){var t=this;this.profile.selection_managment?this.$store.dispatch("company/slManagementDeleteCandidate",this.profile.id).then((function(){t.profile.selection_managment=!1})):this.$store.dispatch("company/slManagementAddCandidate",{jobseeker_id:this.profile.id,managment_status:"Saved candidates"}).then((function(){t.profile.selection_managment=!0}))},back:function(){this.$route.params.type&&"selection"===this.$route.params.type?this.$router.push({name:"CompanySelectionManagement"}):this.$router.push({name:"CompanySearch"})}},computed:{currentPosition:function(){var t=this,e=Object(o["find"])(r["a"].JOB_POSITION,(function(e){return e.id==parseInt(t.profile.current_position)}));return e[this.$i18n.locale]}},watch:{id:function(){this.calledFromList&&this.getUser()}}},z=J,R=(a("8dd4"),a("ce7e")),F=a("71a3"),X=a("c671"),G=a("fe57"),K=a("aac8"),q=a("9a96"),H=Object(p["a"])(z,s,i,!1,null,"55b7a100",null);e["default"]=H.exports;m()(H,{VAvatar:T["a"],VBtn:V["a"],VCard:M["a"],VCol:h["a"],VDivider:R["a"],VIcon:D["a"],VRow:C["a"],VTab:F["a"],VTabItem:X["a"],VTabs:G["a"],VTabsItems:K["a"],VTabsSlider:q["a"]})},"8dd4":function(t,e,a){"use strict";a("7f93")},"99d9":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return c})),a.d(e,"c",(function(){return o})),a.d(e,"d",(function(){return r}));var s=a("b0af"),i=a("80d2"),n=Object(i["i"])("v-card__actions"),c=Object(i["i"])("v-card__subtitle"),o=Object(i["i"])("v-card__text"),r=Object(i["i"])("v-card__title");s["a"]},bb3a:function(t,e,a){},d575:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"packages"},[a("v-row",t._l(t.packages,(function(e,s){return a("v-col",{key:s,attrs:{cols:"12",md:"6",lg:"4"}},[a("CompanyPlan",{attrs:{plan:e,color:t.packagesBranding[s]}})],1)})),1)],1)},i=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"packages-plan",attrs:{flat:""}},[a("div",{staticClass:"price d-flex align-end"},[a("div",[t._v(t._s(t.plan.price)+"€")]),a("div",[t._v("/"+t._s(t.$t("month")))])]),a("div",{staticClass:"type mt-3"},[a("div",{staticClass:"name",style:"color: "+t.color},[t._v(" "+t._s(t.plan.name)+" ")]),a("div",{staticClass:"description"},[t._v(" "+t._s(t.plan.plan_description)+" ")])]),a("v-divider",{staticClass:"mb-10 mt-10"}),a("div",{staticClass:"features"},t._l(t.features,(function(e,s){return a("div",{key:s,staticClass:"feature pb-5"},[a("v-icon",{attrs:{size:"25",color:t.color}},[t._v(" mdi-check ")]),a("span",{staticClass:"text"},[t._v(" "+t._s(e)+" ")])],1)})),0),a("div",{staticClass:"action mt-6"},[a("v-btn",{staticClass:"font-weight-medium full-w",attrs:{color:t.userPlan.length&&t.userPlan[0].id===t.plan.id?"grey lighten-3":"primary",height:"48",width:"70%",elevation:"0"},on:{click:function(e){(!t.userPlan.length||t.userPlan[0].id!==t.plan.id)&&t.getTokenId()}}},[t._v(" "+t._s(t.userPlan.length&&t.userPlan[0].id===t.plan.id?t.$t("yourCurrentPlan"):t.$t("upgrade"))+" ")])],1)],1)},c=[],o=a("5530"),r=a("1da1"),l=(a("d3b7"),a("96cf"),a("bf8a")),d=a("2f62"),u={props:{plan:{type:Object},color:{type:String}},data:function(){return{planToken:""}},methods:{processStripe:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(l["a"])("".concat("pk_test_51J2VxwKKMFZvcsxu4VEDQetraMaOKVF6DAjvkSgkNPHMXktPW3ibXXEgRuYBLepBo6JvF4dWxeIvspapIbgVel2R00tehUJtX8"));case 3:a=e.sent,a.redirectToCheckout({sessionId:t.planToken}),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getTokenId:function(){var t=this;this.$http.post("".concat("https://dev.api.jonder.devla.dev/api/v1","/plan"),{plan_id:this.plan.id,payment_method:"credit card"}).then((function(e){t.planToken=e.data.data.id})).finally((function(){t.processStripe()})).catch((function(t){alert(t)}))}},computed:Object(o["a"])(Object(o["a"])({},Object(d["c"])({userPlan:"user/userPlan"})),{},{features:function(){return JSON.parse(this.plan.benefits)}})},v=u,p=(a("5de4"),a("2877")),f=a("6544"),m=a.n(f),h=a("8336"),_=a("b0af"),C=a("ce7e"),b=a("132d"),g=Object(p["a"])(v,n,c,!1,null,"44b5245e",null),y=g.exports;m()(g,{VBtn:h["a"],VCard:_["a"],VDivider:C["a"],VIcon:b["a"]});var k={components:{CompanyPlan:y},data:function(){return{packagesBranding:["#F3B10E","#1DABF2","#0253B3"]}},computed:{packages:function(){return this.$store.getters["plans/companyPlans"]}},created:function(){this.$store.dispatch("plans/fetchCompanyPlans")}},x=k,w=a("62ad"),$=a("0fd9"),j=Object(p["a"])(x,s,i,!1,null,null,null);e["a"]=j.exports;m()(j,{VCol:w["a"],VRow:$["a"]})},f080:function(t,e,a){}}]);
//# sourceMappingURL=UserOverview.086271bb.js.map