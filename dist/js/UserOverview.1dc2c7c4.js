(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["UserOverview"],{"0bbf":function(t,e,s){"use strict";s("83cd")},"153c":function(t,e,s){},"17fb":function(t,e,s){"use strict";s("f080")},"24c9":function(t,e,s){t.exports=s.p+"img/briefcase.68291d7d.svg"},"4bb2":function(t,e,s){"use strict";s("4c50")},"4c50":function(t,e,s){},"4e08":function(t,e,s){t.exports=s.p+"img/pdf.a53cd7f6.svg"},"81b0":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.showUpgradePlans?a("CompanyPlans"):a("div",{staticClass:"user-overview"},[t.calledFromList?t._e():a("div",{staticClass:"heading d-flex mb-5",on:{click:t.back}},[a("v-icon",{attrs:{size:"25"}},[t._v(" mdi-arrow-left ")]),a("span",{staticClass:"pl-4"},[t._v(t._s(t.$t("back")))])],1),a("div",{staticClass:"card-back"}),t.profile?a("v-card",{staticClass:"profile-info pa-0",attrs:{flat:""}},[a("v-row",{staticClass:"card-header no-gutters pl-10 pr-10"},[a("v-col",{staticClass:"d-flex",attrs:{cols:"12",md:"8"}},[a("v-avatar",{staticClass:"user-avatar",attrs:{color:"primary",size:"150"}},[t.profile.profile_img?a("img",{attrs:{src:t.profile.profile_img}}):a("span",{staticClass:"white--text text-h3"},[t._v(" "+t._s(t._f("initials")(t.profile))+" ")])]),a("div",{staticClass:"user-header pl-8 pt-5"},[a("div",{staticClass:"name"},[t._v(" "+t._s(t.profile.first_name)+" "+t._s(t.profile.last_name)+" ")]),a("div",{staticClass:"position"},[a("img",{staticStyle:{"vertical-align":"-2px"},attrs:{src:s("24c9")}}),t._v(" "+t._s(t.currentPosition)+" ")])])],1),a("v-col",{staticClass:"d-flex justify-end pt-7",attrs:{cols:"12",md:"4"}},[a("div",{staticClass:"star-btn mr-3",on:{click:t.handleStarIconClick}},[a("v-icon",{attrs:{size:"25",color:t.profile.selection_managment?"#27AAE1":"#000"}},[t._v(" "+t._s(t.profile.selection_managment?"mdi-star":"mdi-star-outline")+" ")])],1),a("v-btn",{staticClass:"px-10",attrs:{color:"primary",height:"48",loading:t.startChatLoading},on:{click:t.startConversation}},[t._v(" "+t._s(t.$t("messageNow"))+" ")])],1)],1),a("v-tabs",{attrs:{"align-with-title":"","slider-color":"#0253B3"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("v-tabs-slider",{attrs:{color:"#0253B3"}}),t._l(t.items,(function(e){return a("v-tab",{key:e,staticStyle:{"font-size":"16px",color:"#000","font-weight":"400","text-transform":"capitalize"},attrs:{"slider-color":"#0253B3"}},[t._v(" "+t._s(t.$t(e))+" ")])}))],2),a("v-divider"),a("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.items,(function(e){return a("v-tab-item",{key:e},[a("v-card",{staticClass:"pa-0",attrs:{flat:""}},[a("keep-alive",[a(t.tabs[e],{tag:"component",attrs:{user:t.profile}})],1)],1)],1)})),1)],1):t._e()],1)},i=[],n=(s("a9e3"),s("99af"),s("d3b7"),s("bc3a")),o=s.n(n),c=s("2ef0"),r=s("797d"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user-overview-general"},[a("v-row",{staticClass:"no-gutters"},[a("v-col",{staticClass:"left px-10 pt-7 pb-10",attrs:{cols:"12",md:"7"}},[t.userManagementData?a("div",{staticClass:"status-of-candidate"},[a("div",{staticClass:"status-title"},[t._v(t._s(t.$t("statusOfCandidate")))]),a("div",{staticClass:"status-selection"},[a("v-select",{staticClass:"d-flex align-center",attrs:{attach:!0,items:t.getSelectionOptions,value:t.user.selection_managment,dense:"",height:40,outlined:"","append-icon":"mdi-chevron-down"},on:{change:function(e){return t.updateJobseeker(e)}},scopedSlots:t._u([{key:"selection",fn:function(e){var s=e.item;return[t._v(" "+t._s(t.$t(s)))]}},{key:"item",fn:function(e){var s=e.item;return[a("v-list-item-content",[a("v-list-item-title",[t._v(" "+t._s(t.$t(s))+" ")])],1)]}}],null,!1,3214420323)})],1)]):t._e(),a("div",{staticClass:"section experience"},[a("div",{staticClass:"title"},[t._v(t._s(t.$t("experiences")))]),a("div",{staticClass:"content"},[t.experience.length?t._e():a("i",[t._v(t._s(t.$t("noDataAvailable")))]),t._l(t.experience,(function(e){return a("div",{key:e.company,staticClass:"item pb-5 pt-5"},[a("div",{staticClass:"title"},[t._v(t._s(e.company_name))]),a("div",{staticClass:"subtitle"},[t._v(t._s(e.position))]),a("div",{staticClass:"subtitle"},[t._v(" "+t._s(t._f("moment")(e.start_time,"MMMM YYYY"))+" - "),e.end_time&&new Date(e.end_time).getTime()<=(new Date).getTime()?[t._v(" "+t._s(t._f("moment")(e.end_time,"MMMM YYYY"))+" ")]:[t._v(t._s(t.$t("present")))]],2),a("div",{staticClass:"description mt-2"},[a("ul",[a("li",[t._v(t._s(e.description))])])])])}))],2)]),a("div",{staticClass:"section experience mt-7"},[a("div",{staticClass:"title"},[t._v(t._s(t.$t("educationStudy")))]),a("div",{staticClass:"content"},[t.education.length?t._e():a("i",[t._v(t._s(t.$t("noDataAvailable")))]),t._l(t.education,(function(e){return a("div",{key:e.company,staticClass:"item pb-5 pt-5"},[a("div",{staticClass:"title"},[t._v(t._s(e.university_name))]),a("div",{staticClass:"subtitle"},[t._v(t._s(e.study))]),a("div",{staticClass:"subtitle"},[t._v(" "+t._s(t._f("moment")(e.start_time,"MMMM YYYY"))+" - "),e.end_time&&new Date(e.end_time).getTime()<=(new Date).getTime()?[t._v(" "+t._s(t._f("moment")(e.end_time,"MMMM YYYY"))+" ")]:[t._v(t._s(t.$t("present")))]],2)])}))],2)])]),a("v-col",{staticClass:"right px-10 pt-8",attrs:{cols:"12",md:"5"}},[a("div",{staticClass:"d-flex justify-space-between mb-7"},[a("div",{staticClass:"section"},[a("div",{staticClass:"title"},[t._v(" "+t._s(t.$t("searchStatus"))+" ")]),t.user.job_status?a("div",{staticClass:"content"},[t._v(" "+t._s(t.user.job_status)+" ")]):a("div",{staticClass:"content"},[t._v(" Unemployed ")])]),a("div",{staticClass:"section"},[a("div",{staticClass:"title"},[t._v(" "+t._s(t.$t("position"))+" ")]),a("div",{staticClass:"content"},[t._v(" "+t._s(t.currentPosition)+" ")])])]),a("div",{staticClass:"section mb-7 branche-section"},[a("div",{staticClass:"title"},[t._v(t._s(t.$t("currentIndustry")))]),t.user.branche?a("div",{staticClass:"content"},[t._v(" "+t._s(t.getBranche)+" ")]):t._e()]),t.user.location_show?a("div",{staticClass:"section mb-7"},[a("div",{staticClass:"title"},[t._v(t._s(t.$t("cityAndAddress")))]),a("div",{staticClass:"content"},[t._v(t._s(t.user.city)+" "+t._s(t.user.address))])]):t._e(),a("div",{staticClass:"section mb-7 documents-section"},[a("div",{staticClass:"title"},[t._v(" "+t._s(t.$t("documents").toUpperCase())+" & "+t._s(t.$t("certificates").toUpperCase())+" ")]),a("div",{staticClass:"content mt-2"},t._l(t.documents,(function(e,i){return a("v-row",{key:i,staticClass:"file"},[a("v-col",{attrs:{cols:"auto"}},[a("a",{attrs:{href:e.link,target:"_blank"}},[a("img",{attrs:{src:s("4e08")}})])]),a("v-col",{staticClass:"my-auto font-weight-bold",attrs:{cols:"col"}},[t._v(" "+t._s(t.$t(e.type))+" ")])],1)})),1)])])],1)],1)},d=[],u=(s("a15b"),s("d81d"),{props:{user:{type:Object}},data:function(){return{experience:[],education:[],userManagementData:null}},computed:{documents:function(){var t=this,e=[];return["cv","qualifications","resume"].forEach((function(s){t.user[s]&&e.push({type:s,link:t.user[s]})})),e},getSelectionOptions:function(){return r["a"].SELECTION_MANAGEMENT_STATUS},getBranche:function(){var t=this,e=Object(c["map"])(this.user.branche,(function(e){var s=Object(c["find"])(r["a"].JOB_BRANCHE,{id:parseInt(e)});return s[t.$i18n.locale]}));return e.join()},currentPosition:function(){var t=this,e=Object(c["find"])(r["a"].JOB_POSITION,(function(e){return e.id==parseInt(t.user.current_position)}));return e[this.$i18n.locale]}},created:function(){this.getExperience(),this.getEducation(),this.getManagementSelection()},methods:{getExperience:function(){var t=this;this.$http.get("".concat("https://dev.api.jonder.devla.dev/api/v1","/jobseeker-experience?per_page=9999")).then((function(e){for(var s=e.data.data.map((function(t){return t})),a=0;a<s.length;a++)e.data.data[a].user_id===t.user.id&&t.experience.push(e.data.data[a])})).catch((function(t){alert(t)}))},getEducation:function(){var t=this;this.$http.get("".concat("https://dev.api.jonder.devla.dev/api/v1","/jobseeker-education?per_page=9999")).then((function(e){for(var s=e.data.data.map((function(t){return t})),a=0;a<s.length;a++)e.data.data[a].user_id===t.user.id&&(t.education.push(e.data.data[a]),console.log(t.education))})).catch((function(t){alert(t)}))},getManagementSelection:function(){var t=this,e=this.$store.getters["company/selectionManagement"]("list");this.userManagementData=Object(c["filter"])(e,(function(e){return e.jobseeker.id===t.user.id}))[0]},updateJobseeker:function(t){this.$store.dispatch("company/slManagementMoveCandidate",{id:this.userManagementData.id,data:{managment_status:t}})}}}),v=u,p=(s("d58b"),s("2877")),f=s("6544"),m=s.n(f),_=s("62ad"),h=s("5d23"),b=s("0fd9"),C=s("b974"),g=Object(p["a"])(v,l,d,!1,null,"51a57858",null),y=g.exports;m()(g,{VCol:_["a"],VListItemContent:h["a"],VListItemTitle:h["c"],VRow:b["a"],VSelect:C["a"]});var x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user-overview-notes px-10 py-7"},[s("ModalNotesCreate",{attrs:{active:t.modalActive,note:t.selectedNote},on:{close:function(e){t.modalActive=!1},create:t.createNote,edit:t.editNote}}),s("v-row",t._l(t.notes,(function(e,a){return s("v-col",{key:a,attrs:{cols:"12",md:"6"}},[s("v-card",{staticClass:"full-h d-flex flex-column justify-space-between pa-0",staticStyle:{border:"1px solid #E9E9E9","border-radius":"10px"},attrs:{flat:""}},[s("v-card-text",{staticClass:"note"},[t._v(" "+t._s(e.content)+" ")]),s("v-card-actions",{staticClass:"pb-5 pl-4 pr-4"},[s("v-row",{staticClass:"no-gutters divider pt-4"},[s("v-col",{staticClass:"mr-2",attrs:{cols:"auto"}},[s("v-avatar",{attrs:{color:"primary",size:"40"}},[e.author.profile_img?s("img",{attrs:{src:e.author.profile_img}}):s("small",{staticClass:"white--text"},[t._v(" "+t._s(t._f("initials")(e.author))+" ")])])],1),s("v-col",{staticClass:"my-auto",attrs:{cols:"cols"}},[t._v(" "+t._s(t._f("fullname")(e.author))+" ")]),s("v-col",{staticClass:"d-flex my-auto ml-1",attrs:{cols:"auto"}},[s("div",{staticClass:"icon-action",on:{click:function(s){t.selectedNote=e,t.modalActive=!0}}},[s("v-icon",{attrs:{size:"25",color:"black"}},[t._v(" mdi-pencil ")])],1),s("div",{staticClass:"icon-action ml-2",on:{click:function(s){return t.deleteNote(e)}}},[s("v-icon",{attrs:{size:"25",color:"black"}},[t._v(" mdi-delete ")])],1)])],1)],1)],1)],1)})),1),s("div",{staticClass:"text-right"},[s("v-btn",{staticClass:"px-15 mt-5",attrs:{color:"primary",height:"48"},on:{click:function(e){t.selectedNote=null,t.modalActive=!t.modalActive}}},[t._v(" "+t._s(t.$t("newNote"))+" ")])],1)],1)},$=[],k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{staticClass:"dialog",attrs:{persistent:"",width:"750px","max-width":"750px","overlay-color":"#0253B3","overlay-opacity":"0.3"},on:{"click:outside":t.close},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[s("v-card",{staticClass:"pa-8"},[s("p",{staticClass:"text-left font-weight-bold mb-3 font-size-16 header"},[t._v(" "+t._s(t.$t("newNote"))+" ")]),s("p",{staticClass:"content-of-note"},[t._v(" "+t._s(t.$t("contentOfNote"))+" ")]),s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("v-textarea",{attrs:{placeholder:t.$t("writeContent"),outlined:""},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)],1),s("div",{staticClass:"text-right"},[s("v-btn",{attrs:{height:"58",color:"#fff",secondary:""},on:{click:t.close}},[t._v(" "+t._s(t.$t("cancel"))+" ")]),s("v-btn",{staticClass:"px-10 ml-5",attrs:{color:"primary",height:"58"},on:{click:t.save}},[t._v(" "+t._s(t.$t("save"))+" ")])],1)],1)],1)},w=[],j={props:{active:{type:Boolean},note:{type:Object,required:!1}},data:function(){return{content:""}},watch:{active:function(t){t?this.note&&(this.content=this.note.content):this.content=""}},methods:{close:function(){this.$emit("close")},save:function(){this.$emit(this.note?"edit":"create",this.content)}}},M=j,O=(s("17fb"),s("8336")),V=s("b0af"),N=s("169a"),A=s("a844"),S=Object(p["a"])(M,k,w,!1,null,"aef59f86",null),E=S.exports;m()(S,{VBtn:O["a"],VCard:V["a"],VCol:_["a"],VDialog:N["a"],VRow:b["a"],VTextarea:A["a"]});var I={components:{ModalNotesCreate:E},props:{user:{type:Object}},data:function(){return{modalActive:!1,selectedNote:null}},computed:{notes:function(){return this.$store.getters["company/jobseekerNotes"]}},created:function(){this.$store.dispatch("company/jobseekerNotesGetAll",this.user.id)},methods:{createNote:function(t){var e=this;this.$store.dispatch("company/jobseekerNotesAdd",{content:t,jobseeker_id:this.user.id,employer_id:this.$store.getters["user/user"].id}).then((function(){e.modalActive=!1}))},editNote:function(t){var e=this;this.$store.dispatch("company/jobseekerNotesEdit",{id:this.selectedNote.id,jobseeker_id:this.user.id,content:t}).then((function(){e.modalActive=!1}))},deleteNote:function(t){this.$store.dispatch("company/jobseekerNotesDelete",{id:t.id,userId:this.user.id})}}},T=I,Y=(s("4bb2"),s("8212")),B=s("99d9"),D=s("132d"),U=Object(p["a"])(T,x,$,!1,null,"320f63fc",null),L=U.exports;m()(U,{VAvatar:Y["a"],VBtn:O["a"],VCard:V["a"],VCardActions:B["a"],VCardText:B["c"],VCol:_["a"],VIcon:D["a"],VRow:b["a"]});var P=s("d575"),z={components:{UserOverviewGeneral:y,UserOverviewNotes:L,CompanyPlans:P["a"]},props:{id:{type:[String,Number]},calledFromList:{type:Boolean,default:!1}},data:function(){return{profile:null,tab:null,items:["general","notes"],tabs:{general:y,notes:L},startChatLoading:!1,showUpgradePlans:!1}},created:function(){this.getUser()},methods:{getUser:function(){var t=this,e=this.calledFromList?this.id:this.$route.params.id;o.a.get("/users/".concat(e)).then((function(e){t.profile=e.data.data})).catch((function(){t.showUpgradePlans=!0}))},populateData:function(t){this.profile.fullname.value="".concat(t.first_name," ").concat(t.last_name),this.profile.email.value=t.email,this.profile.address.value=t.address,this.profile.radius.value=t.work_radius,this.profile.profesionsim.value=t.work_experience},startConversation:function(){var t=this;this.startChatLoading=!0,this.$store.dispatch("chat/startChat",this.profile.id).then((function(){t.$router.push({name:"CompanyMessages",params:{company:!0}})})).finally((function(){t.startChatLoading=!1}))},handleStarIconClick:function(){var t=this;this.profile.selection_managment?this.$store.dispatch("company/slManagementDeleteCandidate",this.profile.id).then((function(){t.profile.selection_managment=!1})):this.$store.dispatch("company/slManagementAddCandidate",{jobseeker_id:this.profile.id,managment_status:"Saved candidates"}).then((function(){t.profile.selection_managment=!0}))},back:function(){this.$route.params.type&&"selection"===this.$route.params.type?this.$router.push({name:"CompanySelectionManagement"}):this.$router.push({name:"CompanySearch"})}},computed:{currentPosition:function(){var t=this,e=Object(c["find"])(r["a"].JOB_POSITION,(function(e){return e.id==parseInt(t.profile.current_position)}));return e[this.$i18n.locale]}},watch:{id:function(){this.calledFromList&&this.getUser()}}},J=z,R=(s("0bbf"),s("ce7e")),F=s("71a3"),G=s("c671"),q=s("fe57"),H=s("aac8"),K=s("9a96"),Q=Object(p["a"])(J,a,i,!1,null,"5c46c2ce",null);e["default"]=Q.exports;m()(Q,{VAvatar:Y["a"],VBtn:O["a"],VCard:V["a"],VCol:_["a"],VDivider:R["a"],VIcon:D["a"],VRow:b["a"],VTab:F["a"],VTabItem:G["a"],VTabs:q["a"],VTabsItems:H["a"],VTabsSlider:K["a"]})},"83cd":function(t,e,s){},"99d9":function(t,e,s){"use strict";s.d(e,"a",(function(){return n})),s.d(e,"b",(function(){return o})),s.d(e,"c",(function(){return c})),s.d(e,"d",(function(){return r}));var a=s("b0af"),i=s("80d2"),n=Object(i["i"])("v-card__actions"),o=Object(i["i"])("v-card__subtitle"),c=Object(i["i"])("v-card__text"),r=Object(i["i"])("v-card__title");a["a"]},d58b:function(t,e,s){"use strict";s("153c")},f080:function(t,e,s){}}]);
//# sourceMappingURL=UserOverview.1dc2c7c4.js.map