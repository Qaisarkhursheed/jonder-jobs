(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["JobseekerManagement"],{"5ec4":function(e,t,a){"use strict";a("df1c")},d08a:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"admin-jobseeker-management"},[a("PageHeader",{attrs:{title:e.$t("user")}}),a("div",{staticClass:"pt-8"},[a("JobseekerMngTable")],1)],1)},r=[],n=a("f5e3"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"jobseeker-management-table"},[a("v-data-table",{attrs:{headers:e.headers,items:e.$store.getters["admin/jobseekers"],"server-items-length":e.$store.getters["admin/jobseekersTotal"],"items-per-page":e.params.per_page,page:e.params.page,"show-select":"","single-select":!0},on:{"update:itemsPerPage":function(t){return e.$set(e.params,"per_page",t)},"update:items-per-page":[function(t){return e.$set(e.params,"per_page",t)},function(t){return e.fetchJobseekers()}],"update:page":[function(t){return e.$set(e.params,"page",t)},function(t){return e.fetchJobseekers()}],"click:row":e.openItem},scopedSlots:e._u([{key:"item.name",fn:function(t){var s=t.item;return[a("v-avatar",{staticClass:"mr-2",attrs:{color:"primary",size:"30"}},[s.profile_img?a("img",{attrs:{src:s.profile_img}}):e._e()]),e._v(" "+e._s(s.first_name)+" "+e._s(s.last_name)+" ")]}}])})],1)},o=[],c=a("4360"),p={name:"JobseekerManagementTable",data:function(){return{params:{page:1,per_page:10,user_type:"jobseeker"},headers:[{text:this.$t("name"),value:"name",width:"35%"},{text:this.$t("address"),value:"address",width:"35%"},{text:this.$t("position"),value:"current_position",width:"30%"}]}},created:function(){this.fetchJobseekers()},methods:{fetchJobseekers:function(){c["a"].dispatch("admin/fetchJobseekers",this.params)},openItem:function(e){this.$router.push({name:"AdminJobseekerManagementUser",params:{id:e.id}})}}},l=p,u=a("2877"),m=a("6544"),d=a.n(m),f=a("8212"),g=a("8fea"),b=Object(u["a"])(l,i,o,!1,null,null,null),h=b.exports;d()(b,{VAvatar:f["a"],VDataTable:g["a"]});var _={name:"AdminUsers",components:{PageHeader:n["a"],JobseekerMngTable:h}},v=_,k=Object(u["a"])(v,s,r,!1,null,null,null);t["default"]=k.exports},df1c:function(e,t,a){},f5e3:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"admin-page-header"},[a("div",{staticClass:"page-title"},[e._v(" "+e._s(e.title)+" ")])])},r=[],n={name:"PageHeader",props:{title:{type:String}}},i=n,o=(a("5ec4"),a("2877")),c=Object(o["a"])(i,s,r,!1,null,"62fbdc50",null);t["a"]=c.exports}}]);
//# sourceMappingURL=JobseekerManagement.ecb482b6.js.map