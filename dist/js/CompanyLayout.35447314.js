(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["CompanyLayout"],{"269a":function(t,e){t.exports=function(t,e){var n="function"===typeof t.exports?t.exports.extendOptions:t.options;for(var i in"function"===typeof t.exports&&(n.directives=t.exports.options.directives),n.directives=n.directives||{},e)n.directives[i]=n.directives[i]||e[i]}},"286b":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-row",{staticClass:"header justify-space-between align-center pr-4 pl-4 pr-md-8 pl-md-13"},[i("v-col",{attrs:{cols:"6",md:"3"}},[i("router-link",{staticClass:"logo",attrs:{to:""}},[i("v-img",{attrs:{src:n("89ce"),"max-width":"128px"}})],1)],1),i("v-col",{staticClass:"text-right",attrs:{cols:"6",md:"4"}},[i("div",{staticClass:"dashboard-avatar"},[i("span",{staticClass:"name"},[t._v(t._s(t.user.company))]),i("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("v-avatar",t._g({attrs:{color:"primary",size:"38"}},n),[t.user.profile_img?i("v-img",{attrs:{src:t.user.profile_img}}):i("span",{staticClass:"white--text"},[t._v(" "+t._s(t._f("initials")(t.$store.getters["user/user"]))+" ")])],1)]}}])},[i("v-list",{staticClass:"nav"},[i("v-list-item",{on:{click:function(e){return t.$router.push({name:"CompanySettings"})}}},[t._v(" "+t._s(t.$t("profile"))+" ")]),i("v-list-item",{on:{click:function(e){return t.$router.push({name:"Logout"})}}},[t._v(" "+t._s(t.$t("logout"))+" ")])],1)],1)],1)])],1)},a=[],o=n("1da1"),s=n("5530"),r=(n("498a"),n("ac1f"),n("841c"),n("96cf"),n("2f62")),l=n("f7fe"),c=n.n(l),u={data:function(){return{searchString:null,searchLoading:!1,searchItems:[],search:null}},computed:Object(s["a"])({},Object(r["c"])("user",["user"])),methods:Object(s["a"])(Object(s["a"])({},Object(r["b"])("user",["searchUsers"])),{},{handleSearch:c()(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.searchUsers(e);case 2:this.searchItems=t.sent,this.searchLoading=!1;case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),2e3)}),watch:{search:function(t){this.searchLoading=!0,t&&t.trim().length>0&&t!==this.searchString&&this.handleSearch(t)},searchString:function(t){var e=this;t&&(this.$router.push({name:"CompanyUserOverview",params:{id:t}}),setTimeout((function(){e.search=null,e.searchString=null})))}}},p=u,f=(n("77f4"),n("2877")),C=n("6544"),h=n.n(C),d=n("8212"),m=n("62ad"),v=n("adda"),g=n("8860"),b=n("da13"),y=n("e449"),w=n("0fd9"),x=Object(f["a"])(p,i,a,!1,null,"ed400ad4",null);e["a"]=x.exports;h()(x,{VAvatar:d["a"],VCol:m["a"],VImg:v["a"],VList:g["a"],VListItem:b["a"],VMenu:y["a"],VRow:w["a"]})},"3a66":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("fe6c"),a=n("58df");function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(a["a"])(Object(i["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,n=e.length;t<n;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},"51fc":function(t,e,n){},"57a1":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{class:["lighten-1",{white:t.white},{default:!t.white}],attrs:{bottom:""}},[n("v-row",{attrs:{justify:"center","no-gutters":""}},t._l(t.links,(function(e,i){return n("v-btn",{key:i,staticClass:"my-2 footer-links",attrs:{color:"black",text:"",rounded:"",href:e.link}},[t._v(" "+t._s(e.name)+" ")])})),1)],1)},a=[],o={props:{white:{type:Boolean,default:!0}},data:function(){return{links:[{name:"Impressum",link:"https://jonder.jobs/impressum"},{name:"Datenschutz",link:"https://jonder.jobs/datenschutz"},{name:"AGB",link:"https://jonder.jobs/agb"}]}}},s=o,r=(n("d8b5"),n("2877")),l=n("6544"),c=n.n(l),u=n("8336"),p=n("5530"),f=(n("a9e3"),n("c7cd"),n("b5b6"),n("8dd9")),C=n("3a66"),h=n("d10f"),d=n("58df"),m=n("80d2"),v=Object(d["a"])(f["a"],Object(C["a"])("footer",["height","inset"]),h["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return Object(p["a"])(Object(p["a"])({},f["a"].options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return Object(p["a"])(Object(p["a"])({},f["a"].options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(m["g"])(t),left:Object(m["g"])(this.computedLeft),right:Object(m["g"])(this.computedRight),bottom:Object(m["g"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,e,this.$slots.default)}}),g=n("0fd9"),b=Object(r["a"])(s,i,a,!1,null,"9b6065b6",null);e["a"]=b.exports;c()(b,{VBtn:u["a"],VFooter:v,VRow:g["a"]})},"77f4":function(t,e,n){"use strict";n("89d5")},"89d5":function(t,e,n){},"99ad":function(t,e,n){},b5b6:function(t,e,n){},d10f:function(t,e,n){"use strict";var i=n("2b0e");e["a"]=i["a"].extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame((function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0}))}})},d417:function(t,e,n){"use strict";n("99ad")},d8b5:function(t,e,n){"use strict";n("51fc")},e915:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"full-h pa-0",staticStyle:{overflow:"hidden"},attrs:{fluid:""}},[n("Header"),n("v-row",{directives:[{name:"resize",rawName:"v-resize",value:t.onResize,expression:"onResize"}],staticClass:"main-wrap full-h ma-0"},[n("v-col",{staticClass:"pa-0",attrs:{cols:"auto"}},[n("Sidebar",{attrs:{mobile:t.mobile}})],1),n("v-col",{staticClass:"main-panel-wrap pt-7 px-3 px-md-7 full-h bg-light-gray",class:{"mobile-layout":!t.mobile},attrs:{cols:"col"}},[n("router-view")],1)],1)],1)},a=[],o=n("286b"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-wrap d-flex",class:{mini:t.isMini}},[n("nav",{staticClass:"sidebar-navigation px-2 px-md-5",class:{mini:t.isMini}},[t.mobile?n("v-icon",{staticClass:"ml-2 mb-4 mt-1",staticStyle:{cursor:"pointer","user-select":"none"},attrs:{size:"26px"},on:{click:t.toggleSidebar}},[t._v(" mdi-menu ")]):t._e(),n("router-link",{attrs:{to:{name:"CompanySearch"}}},[n("Loop",{attrs:{color:t.getNavIconColor("CompanySearch")}}),n("span",{staticClass:"nav-title"},[t._v(t._s(t.$t("jonderSearch")))])],1),n("router-link",{attrs:{to:{name:"CompanySelectionManagement"}}},[n("SelectManagement",{attrs:{color:t.getNavIconColor("CompanySelectionManagement")}}),n("span",{staticClass:"nav-title"},[t._v(t._s(t.$t("selectionManagement")))])],1),n("router-link",{attrs:{to:{name:"CompanyMessages"}}},[n("Messages",{attrs:{color:t.getNavIconColor("CompanyMessages")}}),n("span",{staticClass:"nav-title"},[t._v(t._s(t.$t("messages")))])],1),n("router-link",{attrs:{to:{name:"CompanyMessageTemplates"}}},[n("v-icon",{attrs:{color:t.getNavIconColor("CompanyMessageTemplates")}},[t._v(" mdi-message-bulleted ")]),n("span",{staticClass:"nav-title"},[t._v(t._s(t.$t("messageTemplates")))])],1),n("router-link",{attrs:{to:{name:"CompanyTeamManagement"}}},[n("TeamManagement",{attrs:{color:t.getNavIconColor("CompanyTeamManagement")}}),n("span",{staticClass:"nav-title"},[t._v(t._s(t.$t("teamManagement")))])],1),n("router-link",{attrs:{to:{name:"CompanyPublicProfile"}}},[n("PublicCompany",{attrs:{color:t.getNavIconColor("CompanyPublicProfile")}}),n("span",{staticClass:"nav-title"},[t._v(t._s(t.$t("publicCompanyProfile")))])],1),n("router-link",{attrs:{to:{name:"CompanyPackagesPricing"}}},[n("Pricing",{attrs:{color:t.getNavIconColor("CompanyPackagesPricing")}}),n("span",{staticClass:"nav-title"},[t._v(t._s(t.$t("packagesPricing")))])],1)],1),n("footer-legal",{staticClass:"footer-impressum"})],1)},r=[],l=(n("b0c0"),n("57a1")),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M19.7266 17.293L15.832 13.3984C15.6562 13.2227 15.418 13.125 15.168 13.125H14.5312C15.6094 11.7461 16.25 10.0117 16.25 8.125C16.25 3.63672 12.6133 0 8.125 0C3.63672 0 0 3.63672 0 8.125C0 12.6133 3.63672 16.25 8.125 16.25C10.0117 16.25 11.7461 15.6094 13.125 14.5312V15.168C13.125 15.418 13.2227 15.6562 13.3984 15.832L17.293 19.7266C17.6602 20.0938 18.2539 20.0938 18.6172 19.7266L19.7227 18.6211C20.0898 18.2539 20.0898 17.6602 19.7266 17.293ZM8.125 13.125C5.36328 13.125 3.125 10.8906 3.125 8.125C3.125 5.36328 5.35938 3.125 8.125 3.125C10.8867 3.125 13.125 5.35938 13.125 8.125C13.125 10.8867 10.8906 13.125 8.125 13.125Z",fill:t.color}})])},u=[],p={props:{color:{type:String,default:"#fff"}}},f=p,C=n("2877"),h=Object(C["a"])(f,c,u,!1,null,null,null),d=h.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{width:"23",height:"20",viewBox:"0 0 23 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M3.75 5C4.24445 5 4.7278 4.85338 5.13893 4.57868C5.55005 4.30397 5.87048 3.91352 6.0597 3.45671C6.24892 2.99989 6.29843 2.49723 6.20196 2.01228C6.1055 1.52732 5.8674 1.08187 5.51777 0.732234C5.16814 0.382603 4.72268 0.144501 4.23773 0.0480379C3.75277 -0.0484251 3.25011 0.0010832 2.79329 0.190302C2.33648 0.379521 1.94603 0.699953 1.67133 1.11108C1.39662 1.5222 1.25 2.00555 1.25 2.5C1.25 3.16304 1.51339 3.79893 1.98223 4.26777C2.45107 4.73661 3.08696 5 3.75 5ZM3.75 11.8781C3.74944 11.6445 3.79639 11.4133 3.88798 11.1984C3.97958 10.9835 4.11391 10.7895 4.28281 10.6281L7.10039 7.96875C7.16484 7.9082 7.24766 7.87852 7.31953 7.8293C7.1357 7.36392 6.81626 6.96452 6.40266 6.68291C5.98906 6.4013 5.50037 6.25048 5 6.25H2.5C1.83696 6.25 1.20107 6.51339 0.732233 6.98223C0.263392 7.45108 0 8.08696 0 8.75L0 12.5C0 12.8315 0.131696 13.1495 0.366117 13.3839C0.600537 13.6183 0.918479 13.75 1.25 13.75V18.75C1.25 19.0815 1.3817 19.3995 1.61612 19.6339C1.85054 19.8683 2.16848 20 2.5 20H5C5.33152 20 5.64946 19.8683 5.88388 19.6339C6.1183 19.3995 6.25 19.0815 6.25 18.75V14.9848L4.28281 13.1281C4.11385 12.9668 3.97949 12.7728 3.88789 12.5579C3.79629 12.343 3.74937 12.1117 3.75 11.8781ZM18.75 5C19.2445 5 19.7278 4.85338 20.1389 4.57868C20.55 4.30397 20.8705 3.91352 21.0597 3.45671C21.2489 2.99989 21.2984 2.49723 21.202 2.01228C21.1055 1.52732 20.8674 1.08187 20.5178 0.732234C20.1681 0.382603 19.7227 0.144501 19.2377 0.0480379C18.7528 -0.0484251 18.2501 0.0010832 17.7933 0.190302C17.3365 0.379521 16.946 0.699953 16.6713 1.11108C16.3966 1.5222 16.25 2.00555 16.25 2.5C16.25 3.16304 16.5134 3.79893 16.9822 4.26777C17.4511 4.73661 18.087 5 18.75 5ZM20 6.25H17.5C16.9997 6.25044 16.511 6.40121 16.0974 6.68275C15.6838 6.96428 15.3644 7.3636 15.1805 7.82891C15.2523 7.87852 15.3367 7.90703 15.4 7.96914L18.2172 10.6277C18.3856 10.7895 18.5196 10.9836 18.6111 11.1984C18.7026 11.4132 18.7498 11.6443 18.7498 11.8777C18.7498 12.1112 18.7026 12.3423 18.6111 12.5571C18.5196 12.7719 18.3856 12.966 18.2172 13.1277L16.25 14.9852V18.75C16.25 19.0815 16.3817 19.3995 16.6161 19.6339C16.8505 19.8683 17.1685 20 17.5 20H20C20.3315 20 20.6495 19.8683 20.8839 19.6339C21.1183 19.3995 21.25 19.0815 21.25 18.75V13.75C21.5815 13.75 21.8995 13.6183 22.1339 13.3839C22.3683 13.1495 22.5 12.8315 22.5 12.5V8.75C22.5 8.08696 22.2366 7.45108 21.7678 6.98223C21.2989 6.51339 20.663 6.25 20 6.25ZM17.3594 11.5367L14.5422 8.87813C14.4757 8.81474 14.392 8.77228 14.3016 8.75604C14.2112 8.7398 14.118 8.75049 14.0336 8.78678C13.9492 8.82307 13.8773 8.88336 13.8269 8.96016C13.7765 9.03696 13.7497 9.12688 13.75 9.21875V10.625H8.75V9.21875C8.75034 9.12685 8.72366 9.03687 8.67327 8.96001C8.62288 8.88315 8.55101 8.8228 8.46659 8.78647C8.38218 8.75013 8.28895 8.73941 8.19849 8.75563C8.10803 8.77186 8.02433 8.81432 7.95781 8.87774L5.14062 11.5367C5.05058 11.6275 5.00004 11.7501 5.00004 11.8779C5.00004 12.0058 5.05058 12.1284 5.14062 12.2191L7.95781 14.8781C8.02436 14.9416 8.10809 14.984 8.19858 15.0002C8.28908 15.0165 8.38235 15.0057 8.46678 14.9693C8.55121 14.9329 8.62307 14.8725 8.67343 14.7956C8.72379 14.7187 8.75042 14.6287 8.75 14.5367V13.125H13.75V14.5367C13.7496 14.6287 13.7762 14.7187 13.8266 14.7956C13.8769 14.8725 13.9488 14.9329 14.0332 14.9693C14.1177 15.0057 14.2109 15.0165 14.3014 15.0002C14.3919 14.984 14.4756 14.9416 14.5422 14.8781L17.3594 12.2191C17.4494 12.1284 17.5 12.0058 17.5 11.8779C17.5 11.7501 17.4494 11.6275 17.3594 11.5367Z",fill:t.color}})])},v=[],g={props:{color:{type:String,default:"#616161"}}},b=g,y=Object(C["a"])(b,m,v,!1,null,null,null),w=y.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M17.5 0H2.5C1.12109 0 0 1.12109 0 2.5V13.75C0 15.1289 1.12109 16.25 2.5 16.25H6.25V19.5312C6.25 19.9141 6.6875 20.1367 6.99609 19.9102L11.875 16.25H17.5C18.8789 16.25 20 15.1289 20 13.75V2.5C20 1.12109 18.8789 0 17.5 0Z",fill:t.color}})])},_=[],V={props:{color:{type:String,default:"#616161"}}},j=V,M=Object(C["a"])(j,x,_,!1,null,null,null),$=M.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 20 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M3 6C4.10313 6 5 5.10313 5 4C5 2.89687 4.10313 2 3 2C1.89688 2 1 2.89687 1 4C1 5.10313 1.89688 6 3 6ZM17 6C18.1031 6 19 5.10313 19 4C19 2.89687 18.1031 2 17 2C15.8969 2 15 2.89687 15 4C15 5.10313 15.8969 6 17 6ZM18 7H16C15.45 7 14.9531 7.22188 14.5906 7.58125C15.85 8.27188 16.7437 9.51875 16.9375 11H19C19.5531 11 20 10.5531 20 10V9C20 7.89687 19.1031 7 18 7ZM10 7C11.9344 7 13.5 5.43437 13.5 3.5C13.5 1.56562 11.9344 0 10 0C8.06563 0 6.5 1.56562 6.5 3.5C6.5 5.43437 8.06563 7 10 7ZM12.4 8H12.1406C11.4906 8.3125 10.7688 8.5 10 8.5C9.23125 8.5 8.5125 8.3125 7.85938 8H7.6C5.6125 8 4 9.6125 4 11.6V12.5C4 13.3281 4.67188 14 5.5 14H14.5C15.3281 14 16 13.3281 16 12.5V11.6C16 9.6125 14.3875 8 12.4 8ZM5.40938 7.58125C5.04688 7.22188 4.55 7 4 7H2C0.896875 7 0 7.89687 0 9V10C0 10.5531 0.446875 11 1 11H3.05938C3.25625 9.51875 4.15 8.27188 5.40938 7.58125Z",fill:t.color}})])},O=[],S={props:{color:{type:String,default:"#616161"}}},k=S,L=Object(C["a"])(k,H,O,!1,null,null,null),Z=L.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{width:"18",height:"20",viewBox:"0 0 18 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M17.0312 18.75H16.25V0.9375C16.25 0.419727 15.8303 0 15.3125 0H2.1875C1.66973 0 1.25 0.419727 1.25 0.9375V18.75H0.46875C0.209883 18.75 0 18.9599 0 19.2188V20H17.5V19.2188C17.5 18.9599 17.2901 18.75 17.0312 18.75ZM5 2.96875C5 2.70988 5.20988 2.5 5.46875 2.5H7.03125C7.29012 2.5 7.5 2.70988 7.5 2.96875V4.53125C7.5 4.79012 7.29012 5 7.03125 5H5.46875C5.20988 5 5 4.79012 5 4.53125V2.96875ZM5 6.71875C5 6.45988 5.20988 6.25 5.46875 6.25H7.03125C7.29012 6.25 7.5 6.45988 7.5 6.71875V8.28125C7.5 8.54012 7.29012 8.75 7.03125 8.75H5.46875C5.20988 8.75 5 8.54012 5 8.28125V6.71875ZM7.03125 12.5H5.46875C5.20988 12.5 5 12.2901 5 12.0312V10.4688C5 10.2099 5.20988 10 5.46875 10H7.03125C7.29012 10 7.5 10.2099 7.5 10.4688V12.0312C7.5 12.2901 7.29012 12.5 7.03125 12.5ZM10 18.75H7.5V15.4688C7.5 15.2099 7.70988 15 7.96875 15H9.53125C9.79012 15 10 15.2099 10 15.4688V18.75ZM12.5 12.0312C12.5 12.2901 12.2901 12.5 12.0312 12.5H10.4688C10.2099 12.5 10 12.2901 10 12.0312V10.4688C10 10.2099 10.2099 10 10.4688 10H12.0312C12.2901 10 12.5 10.2099 12.5 10.4688V12.0312ZM12.5 8.28125C12.5 8.54012 12.2901 8.75 12.0312 8.75H10.4688C10.2099 8.75 10 8.54012 10 8.28125V6.71875C10 6.45988 10.2099 6.25 10.4688 6.25H12.0312C12.2901 6.25 12.5 6.45988 12.5 6.71875V8.28125ZM12.5 4.53125C12.5 4.79012 12.2901 5 12.0312 5H10.4688C10.2099 5 10 4.79012 10 4.53125V2.96875C10 2.70988 10.2099 2.5 10.4688 2.5H12.0312C12.2901 2.5 12.5 2.70988 12.5 2.96875V4.53125Z",fill:t.color}})])},B=[],I={props:{color:{type:String,default:"#616161"}}},N=I,T=Object(C["a"])(N,P,B,!1,null,null,null),E=T.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 20 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M19.4112 0.701875C18.1991 0.193438 16.9859 3.75862e-08 15.7734 3.75862e-08C11.9244 -0.000312462 8.07562 1.94812 4.22656 1.94812C3.26125 1.94812 2.29656 1.82563 1.33125 1.51938C1.22281 1.485 1.11406 1.46875 1.00781 1.46875C0.47 1.46875 0 1.885 0 2.46281V12.3772C0 12.7719 0.225938 13.1459 0.58875 13.2978C1.80094 13.8066 3.01406 14 4.22656 14C8.07562 14 11.9247 12.0516 15.7738 12.0516C16.7391 12.0516 17.7037 12.1741 18.6691 12.4803C18.7775 12.5147 18.8862 12.5309 18.9925 12.5309C19.5303 12.5309 20.0003 12.1147 20.0003 11.5369V1.62281C20 1.22781 19.7741 0.854063 19.4112 0.701875ZM10 10C8.61906 10 7.5 8.65656 7.5 7C7.5 5.34312 8.61938 4 10 4C11.3806 4 12.5 5.34312 12.5 7C12.5 8.65719 11.3803 10 10 10Z",fill:t.color}})])},R=[],z={props:{color:{type:String,default:"#616161"}}},U=z,F=Object(C["a"])(U,A,R,!1,null,null,null),W=F.exports,D={name:"Sidebar",components:{Pricing:W,PublicCompany:E,TeamManagement:Z,Messages:$,SelectManagement:w,Loop:d,FooterLegal:l["a"]},props:{mobile:{type:Boolean}},data:function(){return{extended:!0}},computed:{isMini:function(){return!!this.mobile&&this.extended}},mounted:function(){this.extended=!this.mobile},methods:{toggleSidebar:function(){this.extended=!this.extended},getNavIconColor:function(t){return this.$route.name===t?"#222":"#616161"}}},J=D,q=(n("d417"),n("6544")),G=n.n(q),K=n("132d"),Q=Object(C["a"])(J,s,r,!1,null,"1bb786ba",null),X=Q.exports;G()(Q,{VIcon:K["a"]});var Y={name:"CompanyLayout",components:{Header:o["a"],Sidebar:X},data:function(){return{mobile:!1}},mounted:function(){window.innerWidth<960&&(this.mobile=!0)},methods:{onResize:function(){window.innerWidth<960?this.mobile=!0:this.mobile=!1}}},tt=Y,et=n("62ad"),nt=n("a523"),it=n("0fd9"),at=n("269a"),ot=n.n(at),st=n("dc22"),rt=Object(C["a"])(tt,i,a,!1,null,null,null);e["default"]=rt.exports;G()(rt,{VCol:et["a"],VContainer:nt["a"],VRow:it["a"]}),ot()(rt,{Resize:st["a"]})},f7fe:function(t,e,n){(function(e){var n="Expected a function",i=NaN,a="[object Symbol]",o=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,p="object"==typeof self&&self&&self.Object===Object&&self,f=u||p||Function("return this")(),C=Object.prototype,h=C.toString,d=Math.max,m=Math.min,v=function(){return f.Date.now()};function g(t,e,i){var a,o,s,r,l,c,u=0,p=!1,f=!1,C=!0;if("function"!=typeof t)throw new TypeError(n);function h(e){var n=a,i=o;return a=o=void 0,u=e,r=t.apply(i,n),r}function g(t){return u=t,l=setTimeout(_,e),p?h(t):r}function y(t){var n=t-c,i=t-u,a=e-n;return f?m(a,s-i):a}function w(t){var n=t-c,i=t-u;return void 0===c||n>=e||n<0||f&&i>=s}function _(){var t=v();if(w(t))return V(t);l=setTimeout(_,y(t))}function V(t){return l=void 0,C&&a?h(t):(a=o=void 0,r)}function j(){void 0!==l&&clearTimeout(l),u=0,a=c=o=l=void 0}function M(){return void 0===l?r:V(v())}function $(){var t=v(),n=w(t);if(a=arguments,o=this,c=t,n){if(void 0===l)return g(c);if(f)return l=setTimeout(_,e),h(c)}return void 0===l&&(l=setTimeout(_,e)),r}return e=x(e)||0,b(i)&&(p=!!i.leading,f="maxWait"in i,s=f?d(x(i.maxWait)||0,e):s,C="trailing"in i?!!i.trailing:C),$.cancel=j,$.flush=M,$}function b(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){return!!t&&"object"==typeof t}function w(t){return"symbol"==typeof t||y(t)&&h.call(t)==a}function x(t){if("number"==typeof t)return t;if(w(t))return i;if(b(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=b(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=r.test(t);return n||l.test(t)?c(t.slice(2),n?2:8):s.test(t)?i:+t}t.exports=g}).call(this,n("c8ba"))}}]);
//# sourceMappingURL=CompanyLayout.35447314.js.map