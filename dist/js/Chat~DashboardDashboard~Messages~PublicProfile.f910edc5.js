(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Chat~DashboardDashboard~Messages~PublicProfile"],{"315a":function(t,e,a){"use strict";a("8a94")},"3c93":function(t,e,a){},"6f96":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{display:"flex",width:"100%",height:"100%","align-items":"center","justify-content":"center"}},[a("svg",{staticStyle:{margin:"auto",background:"none",display:"block","shape-rendering":"auto"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"}},[a("g",{attrs:{transform:"rotate(0 50 50)"}},[a("rect",{attrs:{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#1976d2"}},[a("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.9166666666666666s",repeatCount:"indefinite"}})])]),a("g",{attrs:{transform:"rotate(30 50 50)"}},[a("rect",{attrs:{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#1976d2"}},[a("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.8333333333333334s",repeatCount:"indefinite"}})])]),a("g",{attrs:{transform:"rotate(60 50 50)"}},[a("rect",{attrs:{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#1976d2"}},[a("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.75s",repeatCount:"indefinite"}})])]),a("g",{attrs:{transform:"rotate(90 50 50)"}},[a("rect",{attrs:{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#1976d2"}},[a("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.6666666666666666s",repeatCount:"indefinite"}})])]),a("g",{attrs:{transform:"rotate(120 50 50)"}},[a("rect",{attrs:{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#1976d2"}},[a("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.5833333333333334s",repeatCount:"indefinite"}})])]),a("g",{attrs:{transform:"rotate(150 50 50)"}},[a("rect",{attrs:{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#1976d2"}},[a("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.5s",repeatCount:"indefinite"}})])]),a("g",{attrs:{transform:"rotate(180 50 50)"}},[a("rect",{attrs:{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#1976d2"}},[a("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.4166666666666667s",repeatCount:"indefinite"}})])]),a("g",{attrs:{transform:"rotate(210 50 50)"}},[a("rect",{attrs:{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#1976d2"}},[a("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.3333333333333333s",repeatCount:"indefinite"}})])]),a("g",{attrs:{transform:"rotate(240 50 50)"}},[a("rect",{attrs:{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#1976d2"}},[a("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.25s",repeatCount:"indefinite"}})])]),a("g",{attrs:{transform:"rotate(270 50 50)"}},[a("rect",{attrs:{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#1976d2"}},[a("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.16666666666666666s",repeatCount:"indefinite"}})])]),a("g",{attrs:{transform:"rotate(300 50 50)"}},[a("rect",{attrs:{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#1976d2"}},[a("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.08333333333333333s",repeatCount:"indefinite"}})])]),a("g",{attrs:{transform:"rotate(330 50 50)"}},[a("rect",{attrs:{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#1976d2"}},[a("animate",{attrs:{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"}})])])])])},i=[],r=a("2877"),n={},o=Object(r["a"])(n,s,i,!1,null,null,null);e["a"]=o.exports},"8a94":function(t,e,a){},a797:function(t,e,a){"use strict";var s=a("5530"),i=(a("a9e3"),a("3c93"),a("a9ad")),r=a("7560"),n=a("f2e7"),o=a("58df");e["a"]=Object(o["a"])(i["a"],r["a"],n["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes:function(){return Object(s["a"])({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},e)}})},f872:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"public-profile-viewas"},[a("div",{staticClass:"d-flex mb-6"},[a("div",[a("v-avatar",{staticClass:"user-avatar",attrs:{color:"#f1f1f1",size:"80"}},[t.avatar?[a("img",{attrs:{src:t.avatar}})]:[a("v-icon",{staticClass:"camera-icon",attrs:{size:"60px"}},[t._v(" mdi-camera-plus-outline ")])]],2)],1),a("div",{staticClass:"pl-4"},[a("div",{staticClass:"heading-title"},[t._v(t._s(t.user.company))]),a("div",{staticClass:"heading-subtitle"},[t._v(t._s(t.user.city)+" "+t._s(t.user.address))])])]),"Employer"===t.user.role?a("div",[a("div",{staticClass:"section mb-8"},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("aboutCompany"))+" ")]),a("div",{staticClass:"section-value"},[t._v(" "+t._s(t.user.about_company)+" ")])]),a("v-row",{staticClass:"mb-8"},[a("v-col",{attrs:{cols:"4"}},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("employees"))+" ")]),a("div",{staticClass:"section-value"},[t._v(" "+t._s(t.getEmployeesNumber)+" ")])]),a("v-col",{attrs:{cols:"5"}},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("branch"))+" ")]),a("div",{staticClass:"section-value"},[t._v(" "+t._s(t.getBranche)+" ")])])],1)],1):a("div",[a("div",{staticClass:"section mb-8"},[a("v-row",{staticClass:"mb-8"},[a("v-col",{attrs:{cols:"4"}},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("jobseekingStatus"))+" ")]),a("div",{staticClass:"section-value"},[t._v(" "+t._s(t.user.job_status)+" ")])]),a("v-col",{attrs:{cols:"5"}},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("position"))+" ")]),a("div",{staticClass:"section-value"},[t._v(" "+t._s(t.currentPosition)+" ")])])],1)],1),a("v-row",{staticClass:"mb-8"},[a("v-col",{attrs:{cols:"4"}},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("currentIndustry"))+" ")]),a("div",{staticClass:"section-value"},[t._v(" "+t._s(t.getBranche)+" ")])]),a("v-col",{attrs:{cols:"5"}},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("city"))+" and "+t._s(t.$t("address"))+" ")]),a("div",{staticClass:"section-value"},[t._v(" "+t._s(t.user.city)+" ")])])],1)],1),a("div",{staticClass:"section"},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("contact"))+" ")]),a("div",{staticClass:"content pt-4"},[a("div",{staticClass:"contact-section d-flex pb-5"},[a("div",{staticClass:"icon-wrap"},[a("v-icon",{attrs:{color:"#fff"}},[t._v(" mdi-email-outline ")])],1),a("div",{staticClass:"pl-4"},[a("div",{staticClass:"label"},[t._v(t._s(t.$t("emailAddress")))]),a("div",{staticClass:"value"},[a("a",{attrs:{href:"mailto:"+t.user.company_email}},[t._v(" "+t._s(t.user.email)+" ")])])])]),a("div",{staticClass:"contact-section d-flex pb-5"},[a("div",{staticClass:"icon-wrap"},[a("v-icon",{attrs:{color:"#fff"}},[t._v(" mdi-phone-outline ")])],1),a("div",{staticClass:"pl-4"},[a("div",{staticClass:"label"},[t._v(t._s(t.$t("phoneNumber")))]),a("div",{staticClass:"value"},[a("a",{attrs:{href:"tel:"+t.user.phone}},[t._v(" "+t._s(t.user.phone)+" ")])])])]),a("div",{staticClass:"contact-section d-flex pb-5"},[a("div",{staticClass:"icon-wrap"},[a("v-icon",{attrs:{color:"#fff"}},[t._v(" mdi-map-marker-outline ")])],1),a("div",{staticClass:"pl-4"},[a("div",{staticClass:"label"},[t._v(t._s(t.$t("city"))+" and "+t._s(t.$t("address")))]),a("div",{staticClass:"value"},[a("a",{attrs:{href:t.googleMapsLink,target:"_blank"}},[t._v(" "+t._s(t.address)+" ")])])])]),t.user.web_url?a("div",{staticClass:"contact-section d-flex pb-5"},[a("div",{staticClass:"icon-wrap"},[a("v-icon",{attrs:{color:"#fff"}},[t._v(" mdi-web ")])],1),a("div",{staticClass:"pl-4"},[a("div",{staticClass:"label"},[t._v(t._s(t.$t("web")))]),a("div",{staticClass:"value"},[a("a",{attrs:{href:t.user.web_url,target:"_blank"}},[t._v(" "+t._s(t.user.web_url)+" ")])])])]):t._e()])]),"Employer"==t.user.role?a("div",{staticClass:"section mt-3"},[a("label",{staticClass:"section-label"},[t._v(" North Data ")]),a("div",{staticClass:"content pt-3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("v-dialog",{scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,i=e.attrs;return[a("v-btn",t._g(t._b({attrs:{color:"primary",height:"48",block:""}},"v-btn",i,!1),s),[t._v(" "+t._s(t.$t("northdataHistory"))+" ")])]}}],null,!1,2596405299),model:{value:t.historyGraph,callback:function(e){t.historyGraph=e},expression:"historyGraph"}},[a("v-card",[a("NorthDataWidget",{attrs:{user:t.user,layout:"history"}})],1)],1)],1),a("div",{staticClass:"col"},[a("v-dialog",{attrs:{width:"600"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,i=e.attrs;return[a("v-btn",t._g(t._b({attrs:{color:"primary",height:"48",block:""}},"v-btn",i,!1),s),[t._v(" "+t._s(t.$t("northdataBarChart"))+" ")])]}}],null,!1,377245644),model:{value:t.barChart,callback:function(e){t.barChart=e},expression:"barChart"}},[a("v-card",[a("NorthDataWidget",{attrs:{user:t.user,layout:"barChart"}})],1)],1)],1)])])]):t._e()])},i=[],r=(a("2b3d"),a("d3b7"),a("3ca3"),a("ddb0"),a("99af"),a("797d")),n=a("2ef0"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.isLoading?a("spinner"):t._e(),a("figure",{attrs:{id:"widget"}}),t.isError?a("div",{staticClass:"text-center text-body-1"},[t._v(" "+t._s(t.$t("noDataAvailable"))+" ")]):t._e()],1)},l=[],c=(a("a9e3"),a("159b"),a("1276"),a("ac1f"),a("a15b"),a("6f96")),u={components:{Spinner:c["a"]},props:{layout:{type:String,required:!0},user:{type:Object,required:!0},minHeight:{type:Number,required:!1},maxHeight:{type:Number,required:!1},ratio:{type:Number,required:!1}},data:function(){return{isLoading:!0,isError:!1}},mounted:function(){var t=this;new NorthData.Widget(document.getElementById("widget"),{apiKey:"U5S4-CKK3",layout:this.layout,name:this.user.company,address:this.user.address,minHeight:this.minHeight,maxHeight:this.maxHeight,ratio:this.ratio,success:function(){t.isLoading=!1,t.$emit("success"),t.fixOverflow()},error:function(){t.isError=!0,t.isLoading=!1,t.$emit("error")}})},methods:{fixOverflow:function(){document.querySelectorAll("#widget svg").forEach((function(t){var e,a=null===(e=t.getAttribute("viewBox"))||void 0===e?void 0:e.split(" ");a&&(a[0]=-25,t.setAttribute("viewBox",a.join(" ")))}))}}},d=u,v=a("2877"),h=Object(v["a"])(d,o,l,!1,null,null,null),f=h.exports,m={name:"PublicProfileViewAs",components:{NorthDataWidget:f},props:{user:{type:Object}},data:function(){return{historyGraph:!1,barChart:!1}},computed:{avatar:function(){if(!this.user.profile_img)return null;try{var t=new URL(this.user.profile_img);return t}catch(a){var e=new URL("https://dev.api.jonder.devla.dev/api/v1").origin;return"".concat(e,"/storage/avatars/").concat(this.user.profile_img)}},address:function(){return this.user.city&&this.user.address?"".concat(this.user.city,", ").concat(this.user.address):this.user.city||this.user.address||""},googleMapsLink:function(){var t=encodeURIComponent(this.address);return"https://www.google.com/maps/search/".concat(t)},getBranche:function(){var t=this,e=Object(n["find"])(r["a"].JOB_BRANCHE,(function(e){return e.id==parseInt(t.user.branche)}));return e[this.$i18n.locale]},currentPosition:function(){var t=this,e=Object(n["find"])(r["a"].JOB_POSITION,(function(e){return e.id==parseInt(t.user.current_position)}));return e[this.$i18n.locale]},getEmployeesNumber:function(){var t=this,e=Object(n["find"])(r["a"].EMPLOYEE_NUMBER,(function(e){return e.id==parseInt(t.user.company_employees)}));return e[this.$i18n.locale]}},beforeMount:function(){console.log(this.user)}},p=m,b=(a("315a"),a("6544")),y=a.n(b),g=a("8212"),_=a("8336"),C=a("b0af"),w=a("62ad"),x=a("169a"),k=a("132d"),N=a("0fd9"),$=Object(v["a"])(p,s,i,!1,null,"74fc39dd",null);e["a"]=$.exports;y()($,{VAvatar:g["a"],VBtn:_["a"],VCard:C["a"],VCol:w["a"],VDialog:x["a"],VIcon:k["a"],VRow:N["a"]})}}]);
//# sourceMappingURL=Chat~DashboardDashboard~Messages~PublicProfile.f910edc5.js.map