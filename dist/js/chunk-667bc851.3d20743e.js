(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-667bc851"],{"17b3":function(t,e,a){},"1d49":function(t,e,a){"use strict";a("d65e")},2022:function(t,e,a){"use strict";a("a2f0")},2523:function(t,e,a){},"2bfd":function(t,e,a){},"32be":function(t,e,a){},4167:function(t,e,a){},4537:function(t,e,a){t.exports=a.p+"img/searchnoresults.40050517.png"},"4fb4":function(t,e,a){"use strict";a("56f2")},"56f2":function(t,e,a){},"62cb":function(t,e,a){"use strict";a("2523")},"6a3c":function(t,e,a){"use strict";a("32be")},"76f1":function(t,e,a){"use strict";a("4167")},9027:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("SearchForm",{staticClass:"mb-10",attrs:{"selected-filter":t.selectedFilter},on:{search:t.search}}),a("SearchSavedFilters",{on:{search:t.search,"use-filter":function(e){t.selectedFilter=e}}}),a(t.searchComponents[t.searchStatus],{tag:"component",attrs:{results:t.searchResults}})],1)},i=[],n=(a("b0c0"),a("4360")),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"heading-title mb-6"},[t._v(" "+t._s(t.$t("headingTitle"))+" ")]),a("v-card",{staticClass:"search-form",attrs:{flat:""}},[a("v-row",[a("v-col",{attrs:{cols:"12",md:"7"}},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("position"))+" ")]),a("v-autocomplete",{attrs:{attach:!0,items:t.types.JOB_POSITION,"item-value":"id","item-text":t.$i18n.locale,outlined:"",clearable:"",flat:"","hide-details":!0,placeholder:t.$t("enterJobtitle"),"append-icon":"mdi-chevron-down"},model:{value:t.formFields.job_position,callback:function(e){t.$set(t.formFields,"job_position",e)},expression:"formFields.job_position"}})],1),a("v-col",{attrs:{cols:"12",md:"5"}},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("employementType"))+" ")]),a("v-select",{attrs:{attach:!0,items:t.types.EMPLOYEMENT_TYPE,"item-value":"id","item-text":t.$i18n.locale,"hide-details":"",clearable:"",placeholder:t.$t("employementType"),outlined:"","append-icon":"mdi-chevron-down"},model:{value:t.formFields.employment_type,callback:function(e){t.$set(t.formFields,"employment_type",e)},expression:"formFields.employment_type"}})],1)],1),t.advancedSearch?[a("v-row",[a("v-col",{attrs:{cols:"12",md:"4"}},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("industryOfProfession"))+" ")]),a("v-autocomplete",{attrs:{attach:!0,items:t.types.JOB_BRANCHE,"item-text":t.$i18n.locale,"item-value":"id","cache-items":"",clearable:"",outlined:"",flat:"","hide-details":!0,placeholder:t.$t("enterIndustry"),"append-icon":"mdi-chevron-down"},model:{value:t.formFields.branche,callback:function(e){t.$set(t.formFields,"branche",e)},expression:"formFields.branche"}})],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("schoolGraduation"))+" ")]),a("v-text-field",{attrs:{outlined:"","hide-details":!0,placeholder:t.$t("schoolGraduation"),flat:"",solo:""},model:{value:t.formFields.university_name,callback:function(e){t.$set(t.formFields,"university_name",e)},expression:"formFields.university_name"}})],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("educationStudy"))+" ")]),a("v-text-field",{attrs:{outlined:"","hide-details":!0,placeholder:t.$t("educationStudy"),flat:"",solo:""},model:{value:t.formFields.study,callback:function(e){t.$set(t.formFields,"study",e)},expression:"formFields.study"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",md:"4"}},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("salaryRange"))+" ")]),a("v-row",{staticClass:"no-gutters justify-space-between"},[a("v-col",{staticClass:"pr-2",attrs:{cols:"6"}},[a("v-text-field",{attrs:{placeholder:"Min",outlined:"",type:"number",min:"1000",max:"50000","hide-details":"",clearable:"",flat:"",dense:"",solo:""},model:{value:t.formFields.min_salary,callback:function(e){t.$set(t.formFields,"min_salary",t._n(e))},expression:"formFields.min_salary"}})],1),a("v-col",{staticClass:"pl-2",attrs:{cols:"6"}},[a("v-text-field",{attrs:{placeholder:"Max",outlined:"",type:"number",min:"1000",max:"50000","hide-details":"",clearable:"",flat:"",dense:"",solo:""},model:{value:t.formFields.max_salary,callback:function(e){t.$set(t.formFields,"max_salary",t._n(e))},expression:"formFields.max_salary"}})],1)],1)],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("workExperience"))+" ")]),a("v-row",{staticClass:"no-gutters justify-space-between"},[a("v-col",{staticClass:"pr-2",attrs:{cols:"6"}},[a("v-text-field",{attrs:{placeholder:"Min",outlined:"",type:"number",min:"0",max:"50","hide-details":"",clearable:"",flat:"",dense:"",solo:""},model:{value:t.formFields.working_experience_min,callback:function(e){t.$set(t.formFields,"working_experience_min",t._n(e))},expression:"formFields.working_experience_min"}})],1),a("v-col",{staticClass:"pl-2",attrs:{cols:"6"}},[a("v-text-field",{attrs:{placeholder:"Max",outlined:"",type:"number",min:"0",max:"50","hide-details":"",clearable:"",flat:"",dense:"",solo:""},model:{value:t.formFields.working_experience_max,callback:function(e){t.$set(t.formFields,"working_experience_max",t._n(e))},expression:"formFields.working_experience_max"}})],1)],1)],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("city"))+" ")]),a("GooglePlacesInput",{attrs:{types:["(cities)"],clearable:""},model:{value:t.formFields.city,callback:function(e){t.$set(t.formFields,"city",e)},expression:"formFields.city"}})],1)],1)]:t._e(),a("v-card-actions",{staticClass:"no-gutters pa-0 ma-0 mt-3"},[a("v-row",[a("v-col",{attrs:{cols:"12",md:"6",lg:"5",xl:"6"}},[a("v-row",[a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-btn",{staticClass:"full-w mt-md-5 font-weight-medium white",attrs:{color:"#fff",height:"58",elevation:"0",disabled:!t.isSaveable},on:{click:t.searchSave}},[t._v(" "+t._s(t.$t("saveSearch"))+" ")])],1)],1)],1),a("v-col",{attrs:{cols:"12",md:"6",lg:"7",xl:"6"}},[a("v-row",[a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-btn",{class:["advanced-search-btn full-w mt-md-5 white font-weight-medium",{active:t.advancedSearch}],attrs:{height:"58",elevation:"0",color:"#fff"},on:{click:function(e){t.advancedSearch=!t.advancedSearch}}},[t._v(" "+t._s(t.$t("advancedSearch"))+" ")])],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-btn",{staticClass:"full-w mt-md-5 search-btn",attrs:{loading:t.searchLoading,color:"primary",height:"58"},on:{click:t.search}},[a("v-icon",{attrs:{left:""}},[t._v(" mdi-magnify ")]),null!=t.presearchCount?[t._v(" "+t._s(t.$t("searchNJobseekers",{n:t.presearchCount}))+" ")]:[t._v(" "+t._s(t.$t("searchJobseekers"))+" ")]],2)],1)],1)],1)],1)],1),a("ResponseAlert",{staticClass:"mt-8",attrs:{response:t.formResponse}})],2)],1)},r=[],c=a("2ef0"),o=a("797d"),u=a("a5bd"),d={components:{GooglePlacesInput:u["a"]},props:{selectedFilter:{type:Object,required:null}},data:function(){return{formFields:{employment_type:"",job_position:"",working_experience_min:"",working_experience_max:"",branche:"",university_name:"",study:"",min_salary:"",max_salary:"",city:""},formResponse:{},presearchCount:null,advancedSearch:!1}},computed:{searchLoading:function(){return this.filterData(),this.$store.getters["company/searchInProgress"]},types:function(){return o["a"]},isSaveable:function(){return this.formFields.job_position&&this.formFields.employment_type}},watch:{formFields:{handler:function(){this.updatePresearchCount()},deep:!0},selectedFilter:function(t){t&&this.useFilter(t)}},created:function(){this.$store.dispatch("professions/fetch"),this.updatePresearchCount()},methods:{search:function(){this.$store.dispatch("company/searchJobseekers",this.prepareData()),this.$emit("search")},useFilter:function(t){this.formFields=t},searchSave:function(){var t=this;this.formResponse={},this.$store.dispatch("company/searchFilterSave",this.prepareData()).catch((function(e){t.formResponse=e.response.data}))},filterData:function(){var t=this.$store.getters["company/searchMeta"]?this.$store.getters["company/searchMeta"].searchInput:null;t&&(this.formFields.employment_type="employment_type"in t?t.employment_type:"",this.formFields.job_position="job_position"in t?t.job_position:"",this.formFields.working_experience_min="working_experience_min"in t?t.working_experience_min:"",this.formFields.working_experience_max="working_experience_max"in t?t.working_experience_max:"",this.formFields.branche="branche"in t?t.branche:"",this.formFields.university_name="university_name "in t?t.university_name:"",this.formFields.study="study"in t?t.study:"",this.formFields.min_salary="min_salary"in t?t.min_salary:"",this.formFields.max_salary="max_salary"in t?t.max_salary:"",this.formFields.city="city"in t?t.city:"")},prepareData:function(){var t={};return Object(c["forEach"])(this.formFields,(function(e,a){(e||0===e)&&(t[a]=e)})),t},updatePresearchCount:function(){var t=this;this.$store.dispatch("company/presearchJobseekers",this.prepareData()).then((function(e){t.presearchCount=e.data.filtered_users_count}))}}},h=d,p=(a("62cb"),a("2877")),m=a("6544"),f=a.n(m),v=a("c6a6"),g=a("8336"),_=a("b0af"),b=a("99d9"),y=a("62ad"),C=a("132d"),x=a("0fd9"),S=a("b974"),$=a("8654"),I=Object(p["a"])(h,l,r,!1,null,"20d840ef",null),k=I.exports;f()(I,{VAutocomplete:v["a"],VBtn:g["a"],VCard:_["a"],VCardActions:b["a"],VCol:y["a"],VIcon:C["a"],VRow:x["a"],VSelect:S["a"],VTextField:$["a"]});var w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search-saved-filters"},t._l(t.searchFilters,(function(e,s){return a("div",{key:s},[a("SearchSavedFilter",{staticClass:"mb-5",attrs:{filter:e},on:{"use-filter":function(e){return t.$emit("use-filter",e)},"filter-search":function(e){return t.$emit("search")}}})],1)})),0)},F=[],O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search-saved-filter",on:{click:function(e){return t.filterAction(t.actions[1])}}},[a("v-card",{staticClass:"pb-3",attrs:{flat:""}},[a("v-menu",{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,i=e.attrs;return[a("v-btn",t._g(t._b({staticStyle:{position:"absolute",top:"10px",right:"10px"},attrs:{icon:""}},"v-btn",i,!1),s),[a("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[a("v-list",t._l(t.actions,(function(e,s){return a("v-list-item",{key:s,on:{click:function(a){return t.filterAction(e)}}},[t._v(" "+t._s(e.label)+" ")])})),1)],1),a("v-row",{staticClass:"no-gutters mb-3"},[a("v-col",{attrs:{cols:"col"}},[a("div",{staticClass:"title"},[t._v(" "+t._s(t.idToString("JOB_POSITION",t.filter.job_position))+" ")]),a("div",{staticClass:"subtitle"},[t._v(" "+t._s(t._f("moment")(t.filter.created_at,"DD/MM/YYYY"))+" ")])])],1),a("v-row",{staticClass:"no-gutters"},[a("v-col",{attrs:{cols:"col"}},[a("v-row",{staticClass:"no-gutters"},[a("v-col",{staticClass:"infobar",attrs:{sm:"4",md:"3",cols:"6"}},[a("div",{staticClass:"label"},[t._v(" "+t._s(t.$t("typeOfEnployment"))+" ")]),a("div",{staticClass:"value"},[t._v(" "+t._s(t.idToString("EMPLOYEMENT_TYPE",t.filter.employment_type))+" ")])]),t.filter.branche?a("v-col",{staticClass:"infobar",attrs:{sm:"4",md:"3",cols:"6"}},[a("div",{staticClass:"label"},[t._v(" "+t._s(t.$t("branch"))+" ")]),a("div",{staticClass:"value"},[t._v(" "+t._s(t.idToString("JOB_BRANCHE",t.filter.branche))+" ")])]):t._e(),t.filter.min_salary||t.filter.max_salary?a("v-col",{staticClass:"infobar",attrs:{sm:"4",md:"3",cols:"6"}},[a("div",{staticClass:"label"},[t._v(" "+t._s(t.$t("salaryRange"))+" ")]),a("div",{staticClass:"value"},[t.filter.min_salary?[t._v(" "+t._s(t.filter.min_salary)+"€ ")]:t._e(),t.filter.max_salary?[t._v(" - "+t._s(t.filter.max_salary)+"€ ")]:t._e()],2)]):t._e(),t.filter.city?a("v-col",{staticClass:"infobar",attrs:{sm:"4",md:"3",cols:"6"}},[a("div",{staticClass:"label"},[t._v(t._s(t.$t("city")))]),a("div",{staticClass:"value"},[t._v(t._s(t.filter.city))])]):t._e(),null!=t.filter.working_experience_min||null!=t.filter.working_experience_max?a("v-col",{staticClass:"infobar",attrs:{sm:"4",md:"3",cols:"6"}},[a("div",{staticClass:"label"},[t._v(t._s(t.$t("workExperience")))]),a("div",{staticClass:"value"},[t._v(" "+t._s(t.filter.working_experience_min)+" - "+t._s(t.filter.working_experience_max)+" "+t._s(t.$t("years"))+" ")])]):t._e(),t.filter.university_name?a("v-col",{staticClass:"infobar",attrs:{sm:"4",md:"3",cols:"6"}},[a("div",{staticClass:"label"},[t._v(t._s(t.$t("schoolGraduation")))]),a("div",{staticClass:"value"},[t._v(t._s(t.filter.university_name))])]):t._e(),t.filter.study?a("v-col",{staticClass:"infobar",attrs:{sm:"4",md:"3",cols:"6"}},[a("div",{staticClass:"label"},[t._v(t._s(t.$t("educationStudy")))]),a("div",{staticClass:"value"},[t._v(t._s(t.filter.study))])]):t._e()],1)],1),a("v-col",{staticClass:"d-none result justify-items-center",attrs:{cols:"auto"}},[a("div",{staticClass:"value"},[t._v("142")]),a("div",{staticClass:"label"},[t._v("Results")])])],1)],1)],1)},j=[],V=(a("4de4"),{props:{filter:{type:Object}},data:function(){return{actions:[{type:"delete",label:"Delete"},{type:"use",label:"Use filter"}]}},methods:{filterAction:function(t){"use"===t.type&&this.$emit("use-filter",Object.assign({},this.filter)),"delete"===t.type&&this.$store.dispatch("company/searchFilterDelete",this.filter.id)},prepareData:function(){var t={};return Object(c["forEach"])(this.filter,(function(e,a){e&&(t[a]=e)})),t}}}),A=V,E=(a("e8b2"),a("8860")),L=a("da13"),D=a("e449"),M=Object(p["a"])(A,O,j,!1,null,null,null),T=M.exports;f()(M,{VBtn:g["a"],VCard:_["a"],VCol:y["a"],VIcon:C["a"],VList:E["a"],VListItem:L["a"],VMenu:D["a"],VRow:x["a"]});var P={components:{SearchSavedFilter:T},created:function(){n["a"].dispatch("company/searchFilterFetchAll")},computed:{searchFilters:function(){return n["a"].getters["company/searchFilters"]}}},R=P,B=Object(p["a"])(R,w,F,!1,null,null,null),N=B.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search-results",attrs:{id:"search-results"}},[a("v-dialog",{staticStyle:{"z-index":"2222"},attrs:{width:"100%",height:"100%","overlay-color":"#0253B3","overlay-opacity":"0.3","content-class":"elevation-0"},model:{value:t.blockModalActive,callback:function(e){t.blockModalActive=e},expression:"blockModalActive"}},[a("CompanyPlans",{staticClass:"pa-3"})],1),t.results.length?[a("div",{staticClass:"heading pb-4"},[t._v(" "+t._s(t.searchMeta.total)+" "+t._s(t.$t("searchResults"))+" ")]),a("v-row",t._l(t.results,(function(e,s){return a("v-col",{key:s,attrs:{cols:"12",md:"6",lg:"4"}},[a("SearchResultsCard",{attrs:{candidate:e},on:{block:t.toggleModal}})],1)})),1),a("v-row",[a("div",{staticClass:"search-pagination pb-6 pt-4"},[a("v-pagination",{attrs:{length:t.pagination,"total-visible":7},on:{input:t.pageChange,next:t.pageChange,previous:t.pageChange},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)])]:t.$store.getters["company/searchInProgress"]?t._e():[a("SearchNoResults")]],2)},J=[],Y=(a("d3b7"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"candidate-card full-h pa-0 d-flex flex-column",class:{highlighted:t.highlighted},attrs:{hover:!0,flat:""}},[a("div",{staticClass:"flex-grow-1 d-flex flex-column",on:{click:t.proceedClick}},[a("v-card-text",{staticClass:"d-flex align-center pa-5"},[a("v-avatar",{attrs:{color:"primary",size:"64"}},[t.candidate.profile_img?a("v-img",{attrs:{src:t.candidate.profile_img}}):a("span",{staticClass:"white--text display-1"},[t._v(" "+t._s(t._f("initials")(t.candidate))+" ")])],1),a("div",{staticClass:"pl-4 align-center"},[a("div",{staticClass:"name font-weight-bold pb-1"},[t._v(" "+t._s(t.candidate.first_name)+" "+t._s(t.candidate.last_name)+" ")]),a("div",{staticClass:"job pb-1"},[a("v-icon",{attrs:{size:"18px",color:"#0253B3"}},[t._v(" mdi-briefcase ")]),a("span",[t._v(" "+t._s(t.idToString("JOB_POSITION",t.candidate.current_position))+" ")])],1)])],1),a("v-card-text",{staticClass:"candidate-details flex-grow-1 pa-5"},[a("v-row",{staticClass:"no-gutters"},[a("v-col",{attrs:{cols:"5"}},[a("v-icon",{staticClass:"pr-1",attrs:{color:"#0253B3"}},[t._v(" mdi-hexagon-multiple-outline ")]),a("span",{staticClass:"label pr-1"},[t._v(" "+t._s(t.$t("branch"))+" ")])],1),a("v-col",{staticClass:"text-right",attrs:{cols:"col"}},[a("span",{staticClass:"value"},[t._v(" "+t._s(t.idsToArray("JOB_BRANCHE",t.candidate.branche).join(", "))+" ")])])],1),a("v-row",{staticClass:"no-gutters"},[a("v-col",{attrs:{cols:"5"}},[a("v-icon",{staticClass:"pr-1",attrs:{color:"#0253B3"}},[t._v(" mdi-domain ")]),a("span",{staticClass:"label pr-1"},[t._v(" "+t._s(t.$t("graduation"))+" ")])],1),a("v-col",{staticClass:"text-right",attrs:{cols:"col"}},[a("span",{staticClass:"value"},[t._v(" "+t._s(t.candidate.education.length?t.candidate.education[0].university_name:"-")+" ")])])],1),a("v-row",{staticClass:"no-gutters"},[a("v-col",{attrs:{cols:"5"}},[a("v-icon",{staticClass:"pr-1",attrs:{color:"#0253B3"}},[t._v(" mdi-school ")]),a("span",{staticClass:"label pr-1"},[t._v(" "+t._s(t.$t("education"))+" ")])],1),a("v-col",{staticClass:"text-right",attrs:{cols:"col"}},[a("span",{staticClass:"value"},[t._v(" "+t._s(t.candidate.education.length?t.candidate.education[0].study:"-")+" ")])])],1)],1),a("v-card-text",{staticClass:"job-info d-flex pb-0"},[a("v-col",{staticClass:"experience",attrs:{cols:"6"}},[a("div",{staticClass:"label"},[t._v(t._s(t.$t("experiences")))]),a("div",{staticClass:"value"},[t._v(" "+t._s(t.candidate.working_experience)+" "+t._s(t.$t("years"))+" ")])]),a("v-col",{staticClass:"wage",attrs:{cols:"6"}},[a("div",{staticClass:"label"},[t._v(t._s(t.$t("salaryExpectation")))]),t.candidate.monthly_salary?a("div",{staticClass:"value"},[t._v(" € "+t._s(this.candidate.monthly_salary.min+" - "+this.candidate.monthly_salary.max)+" ")]):a("div",[t._v(" "+t._s(t.$t("didntSet"))+" ")])])],1)],1),a("v-card-actions",{staticClass:"pa-5 pt-2 ma-0"},[a("v-row",[a("v-col",{attrs:{cols:"auto"}},[a("div",{staticClass:"star-btn",on:{click:t.handleStarIconClick}},[a("v-icon",{attrs:{size:"25",color:t.candidate.selection_managment?"#27AAE1":"#000"}},[t._v(" "+t._s(t.candidate.selection_managment?"mdi-star":"mdi-star-outline")+" ")])],1)]),a("v-col",{attrs:{cols:"col"}},[a("v-btn",{attrs:{color:"primary",height:"48",block:"",loading:t.startChatLoading},on:{click:function(e){return t.proceedClick("contact")}}},[t._v(" "+t._s(t.$t("toContact"))+" ")])],1)],1)],1)],1)}),H=[],U=(a("caad"),{name:"SearchResultsCard",props:{candidate:{type:Object}},data:function(){return{startChatLoading:!1,monthly_salary:{min:"",max:""}}},computed:{highlighted:function(){return!(!this.candidate.plan||!this.candidate.plan.length)&&["highlighted","search_featured"].includes(this.candidate.plan[0].plan_slug)}},methods:{startConversation:function(){var t=this;this.$store.getters["user/userPlan"].length&&(this.startChatLoading=!0,this.$store.dispatch("chat/startChat",this.candidate.id).then((function(){t.$router.push({name:"EmployerMessages",params:{company:!0}})})).finally((function(){t.startChatLoading=!1})))},handleStarIconClick:function(){var t=this;this.candidate.selection_managment?this.$store.dispatch("company/slManagementDeleteCandidate",this.candidate.id).then((function(){t.candidate.selection_managment=null})):this.$store.dispatch("company/slManagementAddCandidate",{jobseeker_id:this.candidate.id,managment_status:"Saved candidates"}).then((function(){t.candidate.selection_managment="Saved candidates"}))},proceedClick:function(t){this.$store.getters["user/userPlan"].length?"contact"==t?this.startConversation():this.$router.push({name:"EmployerUserOverview",params:{id:this.candidate.id}}):this.$emit("block",!0)}}}),G=U,K=(a("2022"),a("8212")),W=a("adda"),q=Object(p["a"])(G,Y,H,!1,null,"36c2b0ea",null),X=q.exports;f()(q,{VAvatar:K["a"],VBtn:g["a"],VCard:_["a"],VCardActions:b["a"],VCardText:b["b"],VCol:y["a"],VIcon:C["a"],VImg:W["a"],VRow:x["a"]});var Q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search-no-results d-flex align-center flex-column"},[s("img",{staticClass:"image",attrs:{src:a("4537")}}),s("div",{staticClass:"message-title pt-4"},[t._v(t._s(t.$t("thereAreNoResults")))]),s("div",{staticClass:"message-subtitle"},[t._v(t._s(t.$t("changeFiltersAndTryAgain")))])])},Z=[],tt={name:"SearchNoResults"},et=tt,at=(a("76f1"),Object(p["a"])(et,Q,Z,!1,null,"5837f8ec",null)),st=at.exports,it=a("d575"),nt={name:"SearchResults",components:{SearchResultsCard:X,SearchNoResults:st,CompanyPlans:it["a"]},props:{results:{type:Array}},data:function(){return{page:1,blockModalActive:!1}},methods:{pageChange:function(t){this.page=t,n["a"].dispatch("company/searchJobseekerPagination",t).then((function(){document.getElementById("search-results").scrollIntoView({behavior:"smooth"})}))},toggleModal:function(){this.blockModalActive=!this.blockModalActive}},computed:{searchMeta:function(){return n["a"].getters["company/searchMeta"]},pagination:function(){return Math.round(this.searchMeta.total/this.searchMeta.per_page)}},mounted:function(){this.page=this.searchMeta.current_page},created:function(){var t=this;this.$store.dispatch("company/slManagementGetAll").finally((function(){return t.isLoading=!1}))}},lt=nt,rt=(a("6a3c"),a("169a")),ct=a("2909"),ot=a("5530"),ut=(a("a9e3"),a("99af"),a("25f0"),a("d81d"),a("17b3"),a("9d26")),dt=a("dc22"),ht=a("a9ad"),pt=a("de2c"),mt=a("7560"),ft=a("58df"),vt=Object(ft["a"])(ht["a"],Object(pt["a"])({onVisible:["init"]}),mt["a"]).extend({name:"v-pagination",directives:{Resize:dt["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1===0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return Object(ot["a"])({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10);if(0===t)return[];var e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var a=e%2===0?1:0,s=Math.floor(e/2),i=this.length-s+1+a;if(this.value>s&&this.value<i){var n=1,l=this.length,r=this.value-s+2,c=this.value+s-2-a,o=r-1===n+1?2:"...",u=c+1===l-1?c+1:"...";return[1,o].concat(Object(ct["a"])(this.range(r,c)),[u,this.length])}if(this.value===s){var d=this.value+s-1-a;return[].concat(Object(ct["a"])(this.range(1,d)),["...",this.length])}if(this.value===i){var h=this.value-s+1;return[1,"..."].concat(Object(ct["a"])(this.range(h,this.length)))}return[].concat(Object(ct["a"])(this.range(1,s)),["..."],Object(ct["a"])(this.range(i,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){var a=[];t=t>0?t:1;for(var s=t;s<=e;s++)a.push(s);return a},genIcon:function(t,e,a,s,i){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":a},attrs:{disabled:a,type:"button","aria-label":i},on:a?{}:{click:s}},[t(ut["a"],[e])])])},genItem:function(t,e){var a=this,s=e===this.value&&(this.color||"primary"),i=e===this.value,n=i?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(s,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button","aria-current":i,"aria-label":this.$vuetify.lang.t(n,e)},on:{click:function(){return a.$emit("input",e)}}}),[e.toString()])},genItems:function(t){var e=this;return this.items.map((function(a,s){return t("li",{key:s},[isNaN(Number(a))?t("span",{class:"v-pagination__more"},[a.toString()]):e.genItem(t,a)])}))},genList:function(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}}),gt=Object(p["a"])(lt,z,J,!1,null,"5f6b8b7c",null),_t=gt.exports;f()(gt,{VCol:y["a"],VDialog:rt["a"],VPagination:vt,VRow:x["a"]});var bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search-results-lock"},[a("div",{staticClass:"message d-flex align-center flex-column pb-10"},[a("v-icon",{staticClass:"pb-6",attrs:{size:"45",color:"#0253B3"}},[t._v(" mdi-lock ")]),a("div",{staticClass:"title"},[t._v(" "+t._s(t.$t("limitOf3Searches"))+" ")]),a("div",{staticClass:"subtitle"},[t._v(" "+t._s(t.$t("upgradeAccSearchWithoutRestriction"))+" ")])],1),a("CompanyPlans")],1)},yt=[],Ct={components:{CompanyPlans:it["a"]}},xt=Ct,St=(a("1d49"),Object(p["a"])(xt,bt,yt,!1,null,"3b4a0066",null)),$t=St.exports;f()(St,{VIcon:C["a"]});var It={components:{SearchForm:k,SearchResults:_t,SearchSavedFilters:N,SearchResultsLock:$t},data:function(){return{selectedFilter:null,advancedSearch:!1,searchExecuted:!1,searchComponents:{results:_t,limited:$t,default:!1}}},beforeDestroy:function(){"EmployerUserOverview"!==this.$route.name&&(console.log("erase user results serach"),n["a"].commit("company/SET_SEARCH_RESULTS",[]),n["a"].commit("company/SET_SEARCH_META",{per_page:6,current_page:1,total:0}),this.searchExecuted=!1,n["a"].commit("company/SET_SEARCH_STATUS","default"))},methods:{search:function(){this.searchExecuted=!0,n["a"].commit("company/SET_SEARCH_STATUS","results")}},computed:{searchResults:function(){return n["a"].getters["company/searchResults"]},searchStatus:function(){return n["a"].getters["company/searchStatus"]}}},kt=It,wt=Object(p["a"])(kt,s,i,!1,null,null,null);e["default"]=wt.exports},"99d9":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return c}));var s=a("b0af"),i=a("80d2"),n=Object(i["i"])("v-card__actions"),l=Object(i["i"])("v-card__subtitle"),r=Object(i["i"])("v-card__text"),c=Object(i["i"])("v-card__title");s["a"]},a2f0:function(t,e,a){},a5bd:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-autocomplete",{ref:t.ref,attrs:{attach:!0,items:t.items,loading:t.loading,rules:t.rules,placeholder:t.placeholder||t.$t("choose"),"hide-details":t.hideDetails,multiple:t.multiple,"small-chips":t.multiple,"deletable-chips":t.multiple,clearable:t.clearable,"no-filter":"",outlined:"","append-icon":"mdi-chevron-down"},on:{"update:search-input":function(e){return t.fetchSuggestions(e)},change:function(e){t.$refs[t.ref].lazySearch=""}},model:{value:t.valueLocal,callback:function(e){t.valueLocal=e},expression:"valueLocal"}})},i=[],n=(a("99af"),a("d3b7"),{props:{value:{type:[Array,String]},clearable:{type:Boolean,default:!1},hideDetails:{type:[Boolean,String],default:!1},multiple:{type:Boolean,defualt:!1},placeholder:{type:String,required:!1},rules:{type:Array,required:!1},types:{type:Array,default:function(){return["(cities)"]}}},data:function(){return{valueLocal:this.value,suggestions:[],ref:"googlePlacesInput"+(new Date).getTime(),loading:!1,skipFetch:!0}},computed:{items:function(){return this.suggestions.length?this.multiple?this.suggestions.concat(this.valueLocal):this.suggestions:this.multiple?this.valueLocal?this.valueLocal:[]:this.valueLocal?[this.valueLocal]:[]}},watch:{value:function(t){this.skipFetch=!0,this.valueLocal=t},valueLocal:function(t){this.$emit("input",t)}},methods:{fetchSuggestions:function(t){var e=this;this.skipFetch?this.skipFetch=!1:(this.loading=!0,this.$store.dispatch("google/places",{input:t,types:this.types}).then((function(t){e.suggestions=t})).finally((function(){e.loading=!1})))}}}),l=n,r=a("2877"),c=a("6544"),o=a.n(c),u=a("c6a6"),d=Object(r["a"])(l,s,i,!1,null,null,null);e["a"]=d.exports;o()(d,{VAutocomplete:u["a"]})},b214:function(t,e,a){},c6a6:function(t,e,a){"use strict";var s=a("5530"),i=(a("d81d"),a("4de4"),a("498a"),a("7db0"),a("caad"),a("2532"),a("2bfd"),a("b974")),n=a("8654"),l=a("d9f7"),r=a("80d2"),c=Object(s["a"])(Object(s["a"])({},i["b"]),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e["a"]=i["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,a){return a.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:i["a"].options.props.menuProps.type,default:function(){return c}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({},i["a"].options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var a=Object(r["r"])(e,t.itemText),s=null!=a?String(a):"";return t.filter(e,String(t.internalSearch),s)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=i["a"].options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),Object(s["a"])(Object(s["a"])({},c),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(e){return t.valueComparator(t.getValue(e),t.getValue(t.internalValue))}))},listData:function(){var t=i["a"].options.computed.listData.call(this);return t.props=Object(s["a"])(Object(s["a"])({},t.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var a=this;t!==e&&(this.setMenuIndex(-1),this.$nextTick((function(){a.internalSearch&&(1===t.length||a.autoSelectFirst)&&(a.$refs.menu.getTiles(),a.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===r["y"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===r["y"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==r["y"].backspace&&t!==r["y"].delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var a=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===a){var s=this.selectedItems.length,i=t!==s-1?t:t-1,n=this.selectedItems[i];n?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=i}else this.selectedIndex=a}},clearableCallback:function(){this.internalSearch=null,i["a"].options.methods.clearableCallback.call(this)},genInput:function(){var t=n["a"].options.methods.genInput.call(this);return t.data=Object(l["a"])(t.data,{attrs:{"aria-activedescendant":Object(r["p"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(r["p"])(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot:function(){var t=i["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections:function(){return this.hasSlot||this.multiple?i["a"].options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,a=e.value;e.value&&this.activateMenu(),this.internalSearch=a,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[r["y"].home,r["y"].end].includes(e)||i["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){i["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){i["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){i["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,a;if(-1!==this.selectedIndex){var s=this.selectedItems[this.selectedIndex],i=this.getText(s);null==(e=t.clipboardData)||e.setData("text/plain",i),null==(a=t.clipboardData)||a.setData("text/vnd.vuetify.autocomplete.item+plain",i),t.preventDefault()}}}})},d575:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"packages"},[a("v-row",t._l(t.packages,(function(e,s){return a("v-col",{key:s,attrs:{cols:"12",md:"6"}},[a("CompanyPlan",{attrs:{plan:e,color:t.packagesBranding[s]}})],1)})),1)],1)},i=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"packages-plan d-flex flex-column full-h",attrs:{flat:""}},[a("div",{staticClass:"price d-flex align-end"},[a("div",[t._v(t._s(t.plan.price)+"€")]),a("div",[t._v("/"+t._s(t.$t("month")))])]),a("div",{staticClass:"type mt-3"},[a("div",{staticClass:"name",style:"color: "+t.color},[t._v(" "+t._s(t.plan.name)+" ")]),a("div",{staticClass:"description"},[t._v(" "+t._s(t.plan.plan_description)+" ")])]),a("v-divider",{staticClass:"mb-10 mt-10"}),a("div",{staticClass:"features flex-grow-1"},t._l(t.features,(function(e,s){return a("div",{key:s,staticClass:"feature pb-5"},[a("v-icon",{attrs:{size:"25",color:t.color}},[t._v(" mdi-check ")]),a("span",{staticClass:"text"},[t._v(" "+t._s(e)+" ")])],1)})),0),a("div",{staticClass:"action mt-6"},[a("v-btn",{attrs:{color:t.userPlan.length&&t.userPlan[0].id===t.plan.id?"grey lighten-3":"primary",height:"48",block:"",loading:t.isLoading},on:{click:function(e){(!t.userPlan.length||t.userPlan[0].id!==t.plan.id)&&t.getTokenId()}}},[t._v(" "+t._s(t.userPlan.length&&t.userPlan[0].id===t.plan.id?t.$t("yourCurrentPlan"):t.$t("upgrade"))+" ")])],1)],1)},l=[],r=a("5530"),c=a("1da1"),o=(a("96cf"),a("bf8a")),u=a("2f62"),d={props:{plan:{type:Object},color:{type:String}},data:function(){return{planToken:"",isLoading:!1}},methods:{processStripe:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(o["a"])("".concat("pk_test_51J2VxwKKMFZvcsxu4VEDQetraMaOKVF6DAjvkSgkNPHMXktPW3ibXXEgRuYBLepBo6JvF4dWxeIvspapIbgVel2R00tehUJtX8"));case 3:a=e.sent,a.redirectToCheckout({sessionId:t.planToken}),e.next=11;break;case 7:e.prev=7,e.t0=e["catch"](0),t.isLoading=!1,console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getTokenId:function(){var t=this;this.isLoading=!0,this.$http.post("".concat("https://dev.api.jonder.devla.dev/api/v1","/plan"),{plan_id:this.plan.id,payment_method:"credit card"}).then((function(e){t.planToken=e.data.data.id,t.processStripe()})).catch((function(e){t.isLoading=!1,alert(e)}))}},computed:Object(r["a"])(Object(r["a"])({},Object(u["c"])({userPlan:"user/userPlan"})),{},{features:function(){return JSON.parse(this.plan.benefits)}})},h=d,p=(a("4fb4"),a("2877")),m=a("6544"),f=a.n(m),v=a("8336"),g=a("b0af"),_=a("ce7e"),b=a("132d"),y=Object(p["a"])(h,n,l,!1,null,"1709e1a6",null),C=y.exports;f()(y,{VBtn:v["a"],VCard:g["a"],VDivider:_["a"],VIcon:b["a"]});var x={components:{CompanyPlan:C},data:function(){return{packagesBranding:["#F3B10E","#1DABF2","#0253B3"]}},computed:{packages:function(){return this.$store.getters["plans/companyPlans"]}},created:function(){null==this.packages&&this.$store.dispatch("plans/fetchCompanyPlans")}},S=x,$=a("62ad"),I=a("0fd9"),k=Object(p["a"])(S,s,i,!1,null,null,null);e["a"]=k.exports;f()(k,{VCol:$["a"],VRow:I["a"]})},d65e:function(t,e,a){},e8b2:function(t,e,a){"use strict";a("b214")}}]);
//# sourceMappingURL=chunk-667bc851.3d20743e.js.map