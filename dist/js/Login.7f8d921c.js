(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Login"],{"0c76":function(t,e,a){"use strict";a("6ada")},"0ca1":function(t,e,a){t.exports=a.p+"img/1.2fcb1a7c.png"},1105:function(t,e,a){t.exports=a.p+"img/4.f17160f2.png"},"15f8":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFqSURBVHgBnVI7TsNAEN21ozSJg5QoPymRorSp6KCDBtFBkeQCER0N5hB0wAV8ACQuABcIVSrCAUhk2S5sxR8J/3kj/nYIEiO93dl9+2ZmZ5ezd6tWq5VisXgCdwBUgMcgCBTTNBdsjYk0tFqtgSiKt3AP0zT1Oecv8I8LhcKkXC4vXdedZ4UCMnUxK7RIkmSo6/qBpmkjQRB2EOQe25eNRmM3J0R5tNnFwZFhGNMPQlXVRRiGZ3AdcHJOCIxR2pwOZklJklaYbsAPckKUs2K/GDIxiGz21qyfHAjK1KWuZsk4jjkCj+HO1wQVqDES7npdq9W2er0eIzSbTe77vozAHYiVrFB0HMculUo2DkzwJEdRFHWAPaxPwY+ABYI/1ev1mWVZX0IaPM+b4b3u4G4D+xBRp5+BK+ABuECHOZ5l+l280fr9Pmu32zKwxEc5p/Vnxk1GGSgTyqcOy5QZP2n6pzArhg0hVNh/7RVspouL3jolQAAAAABJRU5ErkJggg=="},"1bd7":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",{staticClass:"jonder-title mb-3"},[t._t("default")],2)},r=[],i=(a("64b5"),a("2877")),s={},o=Object(i["a"])(s,n,r,!1,null,"4875390c",null);e["a"]=o.exports},2175:function(t,e,a){t.exports=a.p+"img/6.0b2facc8.png"},"34bf":function(t,e,a){t.exports=a.p+"img/7.e65d634f.png"},"3c93":function(t,e,a){},4537:function(t,e,a){t.exports=a.p+"img/searchnoresults.40050517.png"},"4bd4":function(t,e,a){"use strict";var n=a("5530"),r=(a("caad"),a("2532"),a("07ac"),a("4de4"),a("159b"),a("7db0"),a("58df")),i=a("7e2b"),s=a("3206");e["a"]=Object(r["a"])(i["a"],Object(s["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,a=function(t){return t.$watch("hasError",(function(a){e.$set(e.errorBag,t._uid,a)}),{immediate:!0})},n={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(function(r){r&&(e.errorBag.hasOwnProperty(t._uid)||(n.valid=a(t)))})):n.valid=a(t),n},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var a=this.watchers.find((function(t){return t._uid===e._uid}));a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(n["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},5326:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("auth-wrap",{attrs:{img:"1"}},[a("auth-login")],1)},r=[],i=a("e21d"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"auth-login-wrap mx-auto",attrs:{fluid:"","no-gutters":""}},[a("jonder-title",[t._v(" "+t._s(t.$t("loginAccount"))+" ")]),t.$route.query.resetPassword?a("v-alert",{attrs:{text:"",type:"success"}},[t._v(" "+t._s(t.$t("alertPasswordReset"))+" ")]):t._e(),t.$route.query.setPassword?a("v-alert",{attrs:{text:"",type:"success"}},[t._v(" "+t._s(t.$t("alertPasswordSet"))+" ")]):t._e(),t.$route.query.changePassword?a("v-alert",{attrs:{text:"",type:"success"}},[t._v(" "+t._s(t.$t("alertPasswordChanged"))+" ")]):t._e(),t.$route.query.emailVerified?a("v-alert",{attrs:{text:"",type:"success"}},[t._v(" "+t._s(t.$t("alertEmailVerified"))+" ")]):t._e(),a("div",{staticClass:"mt-5"},[a("v-form",{staticClass:"auth-form",on:{submit:function(e){return e.preventDefault(),t.handleLogin.apply(null,arguments)}},model:{value:t.formValid,callback:function(e){t.formValid=e},expression:"formValid"}},[a("p",{staticClass:"login-by-email text-medium"},[t._v(" "+t._s(t.$t("loginByEmail"))+" ")]),a("label",{staticClass:"profile-label"},[t._v("E-mail")]),a("v-text-field",{attrs:{dense:"",rules:[t.validations.required,t.validations.email],type:"email",outlined:"",solo:"","background-color":"white"},model:{value:t.formData.email,callback:function(e){t.$set(t.formData,"email",e)},expression:"formData.email"}}),a("label",{staticClass:"profile-label"},[t._v("Passwort")]),a("v-text-field",{attrs:{dense:"",rules:[t.validations.required],type:"password",outlined:"",solo:"","hide-details":"auto","background-color":"white"},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}}),a("p",{staticClass:"text-caption text-left mt-2",staticStyle:{"font-size":"14px"}},[a("router-link",{staticClass:"text-color-primary-blue-dark",staticStyle:{"text-decoration":"none"},attrs:{to:"/forgot-password"}},[t._v(" "+t._s(t.$t("forgotPassowrd"))+" ")])],1),a("response-alert",{attrs:{response:t.formResponse}}),a("v-btn",{staticClass:"full-w mt-2",attrs:{link:"",href:"https://dev.api.jonder.devla.dev/api/v1/auth/google",outlined:"",color:"primary"}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-google")]),t._v(" "+t._s(t.$t("continueWithGoogle"))+" ")],1),a("v-btn",{staticClass:"full-w mt-4",attrs:{link:"",href:"https://dev.api.jonder.devla.dev/api/v1/auth/facebook",outlined:"",color:"primary"}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-facebook")]),t._v(" "+t._s(t.$t("continueWithFacebook"))+" ")],1),a("v-btn",{staticClass:"full-w mt-5 dark-blue",attrs:{type:"submit",disabled:!t.formValid,loading:t.formLoading}},[t._v(" "+t._s(t.$t("login"))+" ")])],1)],1),a("p",{staticClass:"text-center mt-2",staticStyle:{"font-size":"14px"}},[t._v(" "+t._s(t.$t("dontHaveAccount"))+" "),a("router-link",{staticClass:"text-color-primary-blue-dark",staticStyle:{"text-decoration":"none"},attrs:{to:"/register"}},[t._v(" "+t._s(t.$t("register"))+" ")])],1)],1)},o=[],l=a("1da1"),c=(a("96cf"),a("d3b7"),a("ac1f"),a("5319"),a("1bd7")),u=a("6461"),d={name:"AuthLogin",components:{JonderTitle:c["a"],ResponseAlert:u["a"]},data:function(){return{message:{show:!1,text:""},formData:{email:"",password:"",privacy:!1},formLoading:!1,formResponse:{},formValid:!1}},methods:{handleLogin:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.formLoading=!0,t.formResponse={},localStorage.setItem("user-email",t.formData.email),t.$store.dispatch("auth/login",t.formData).then((function(){localStorage.removeItem("user-email"),localStorage.removeItem("verificationTime"),t.$route.query.redirect?t.$router.replace(t.$route.query.redirect):t.$router.replace({name:"Home"}),t.$store.dispatch("user/fetchPlans")})).catch((function(e){var a;null!==(a=e.data.data)&&void 0!==a&&a.email_not_verified?t.$router.push({name:"RegisterVerifyEmail"}):t.formResponse=e.data})).finally((function(){t.formLoading=!1}));case 4:case"end":return e.stop()}}),e)})))()}}},p=d,f=(a("e845"),a("2877")),m=a("6544"),g=a.n(m),h=a("0798"),v=a("8336"),b=a("a523"),_=a("4bd4"),A=a("132d"),y=a("8654"),x=Object(f["a"])(p,s,o,!1,null,"26f98e0c",null),w=x.exports;g()(x,{VAlert:h["a"],VBtn:v["a"],VContainer:b["a"],VForm:_["a"],VIcon:A["a"],VTextField:y["a"]});var C={name:"Login",components:{AuthWrap:i["a"],AuthLogin:w}},V=C,$=Object(f["a"])(V,n,r,!1,null,null,null);e["default"]=$.exports},"64b5":function(t,e,a){"use strict";a("ee50")},"6ada":function(t,e,a){},"6e2f":function(t,e,a){t.exports=a.p+"img/profile-placeholder.1225968c.png"},"7d19":function(t,e,a){t.exports=a.p+"img/selection_management_empty.915d0172.png"},"7eb7":function(t,e,a){t.exports=a.p+"img/candidate.d1bbc769.png"},9310:function(t,e,a){t.exports=a.p+"img/5.06ae7ab3.png"},"9e01":function(t,e,a){var n={"./1.png":"0ca1","./2.png":"b9af","./3.png":"c2e4","./4.png":"1105","./5.png":"9310","./6.png":"2175","./7.png":"34bf","./8.png":"f8bf","./candidate.png":"7eb7","./company_placeholder.png":"d496","./icons/profile-placeholder.png":"6e2f","./images/messages_empty.png":"e755","./images/selection_management_empty.png":"7d19","./jonder_blue.png":"89ce","./jonder_white.png":"da8a","./landing/company.png":"59e3","./landing/employee.png":"8f49","./landing/hero.png":"d336","./landing/laptop.png":"757d","./landing/phones.png":"1b454","./logo.png":"cf05","./loop.png":"15f8","./searchnoresults.png":"4537"};function r(t){var e=i(t);return a(e)}function i(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=i,t.exports=r,r.id="9e01"},a797:function(t,e,a){"use strict";var n=a("5530"),r=(a("a9e3"),a("3c93"),a("a9ad")),i=a("7560"),s=a("f2e7"),o=a("58df");e["a"]=Object(o["a"])(r["a"],i["a"],s["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes:function(){return Object(n["a"])({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},e)}})},b880:function(t,e,a){},b9af:function(t,e,a){t.exports=a.p+"img/2.e9c401ef.png"},c2e4:function(t,e,a){t.exports=a.p+"img/3.f9b4140b.png"},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},d496:function(t,e,a){t.exports=a.p+"img/company_placeholder.7e66aff7.png"},da8a:function(t,e,a){t.exports=a.p+"img/jonder_white.c93b3106.png"},e21d:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"main-wrap fill-height pa-0",attrs:{fluid:"","no-gutters":""}},[n("v-row",{staticClass:"full-h",attrs:{"no-gutters":""}},[n("v-col",{staticClass:"full-h",staticStyle:{position:"relative"},attrs:{cols:"12",md:"6",order:"2","order-md":"1"}},[n("div",{staticClass:"hero-image d-flex justify-content-center align-center",style:{backgroundImage:"url("+a("9e01")("./"+t.img+".png")+")"}}),n("v-overlay",{attrs:{absolute:!0,value:!0}},[n("v-img",{attrs:{src:a("da8a"),"max-width":"212"}})],1)],1),n("v-col",{staticClass:"full-h",staticStyle:{position:"relative"},attrs:{cols:"12",md:"6",order:"1","order-md":"2"}},[n("div",{staticClass:"auth-wrap d-flex"},[n("div",{staticClass:"my-auto mx-auto",style:{width:t.haveWidth?t.haveWidth+"px":"auto"}},[n("v-img",{staticClass:"mx-auto",attrs:{src:a("89ce"),"max-width":"128px"}}),t._t("default")],2)])])],1)],1)},r=[],i={name:"AuthWrap",props:["img","haveWidth"]},s=i,o=(a("0c76"),a("2877")),l=a("6544"),c=a.n(l),u=a("62ad"),d=a("a523"),p=a("adda"),f=a("a797"),m=a("0fd9"),g=Object(o["a"])(s,n,r,!1,null,"36ec0c68",null);e["a"]=g.exports;c()(g,{VCol:u["a"],VContainer:d["a"],VImg:p["a"],VOverlay:f["a"],VRow:m["a"]})},e755:function(t,e,a){t.exports=a.p+"img/messages_empty.9c541638.png"},e845:function(t,e,a){"use strict";a("b880")},ee50:function(t,e,a){},f8bf:function(t,e,a){t.exports=a.p+"img/8.7ee74a02.png"}}]);
//# sourceMappingURL=Login.7f8d921c.js.map